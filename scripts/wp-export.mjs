#!/usr/bin/env node
/**
 * tarasovs.me WordPress -> Astro content export
 *
 * Run from the Astro project root:
 *   npm i -D cheerio
 *   node scripts/wp-export.mjs
 *
 * Output:
 *   src/content/posts/<slug>.md       frontmatter + cleaned HTML body
 *   src/content/projects/<slug>.md    frontmatter + cleaned HTML body
 *   src/content/profiles/<slug>.json  tdv/v1 record + SEO fields
 *   _wp-export/pages/<slug>.html      Elementor pages, reference for manual rebuild
 *   _wp-export/pages.json             SEO fields for every page
 *   _wp-export/images-referenced.txt  every /wp-content/uploads path used in content
 *   _wp-export/report.json            counts, warnings, failures
 *
 * Env:
 *   WP_BASE=https://tarasovs.me   OUT_DIR=.   CONCURRENCY=3
 */
import fs from 'node:fs/promises';
import path from 'node:path';
import * as cheerio from 'cheerio';

const BASE = (process.env.WP_BASE || 'https://tarasovs.me').replace(/\/$/, '');
const OUT = process.env.OUT_DIR || '.';
const CONCURRENCY = Number(process.env.CONCURRENCY || 3);
const UA = 'tarasovs-astro-migration/1.0';
// Published in WP but 301-redirected by the Redirection plugin: do not generate pages for these.
const SKIP_SLUGS = new Set(['framer-vs-webflow-comparing-top-website-builders-2024']);
// WP post slug -> slug the tdv plugin uses, when they differ. Fill in after checking the plugin record.
const TDV_SLUG_ALIASES = {
  // 'gotham-buds-new-york': '<tdv-slug>',
};

const report = { base: BASE, startedAt: new Date().toISOString(), counts: {}, warnings: [], failures: [] };
const images = new Set();

// ---------- HTTP ----------
async function getJSON(url, attempt = 1) {
  const res = await fetch(url, { headers: { 'User-Agent': UA, Accept: 'application/json' } });
  if ((res.status === 429 || res.status >= 500) && attempt < 4) {
    await sleep(1500 * attempt);
    return getJSON(url, attempt + 1);
  }
  if (!res.ok) throw new Error(`${res.status} ${url}`);
  return { data: await res.json(), headers: res.headers };
}

async function getAll(endpoint, params = '') {
  const items = [];
  for (let page = 1; ; page++) {
    const sep = endpoint.includes('?') ? '&' : '?';
    const { data, headers } = await getJSON(`${BASE}/wp-json/wp/v2/${endpoint}${sep}per_page=100&page=${page}${params}`);
    items.push(...data);
    const total = Number(headers.get('x-wp-totalpages') || 1);
    if (page >= total) break;
  }
  return items;
}

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

async function pool(items, fn) {
  const out = [];
  let i = 0;
  await Promise.all(
    Array.from({ length: CONCURRENCY }, async () => {
      while (i < items.length) {
        const idx = i++;
        out[idx] = await fn(items[idx], idx);
      }
    })
  );
  return out;
}

// ---------- HTML cleaning ----------
const DROP_CLASS = /^(elementor|e-con|e-flex|e-grid|e-parent|e-child|e-lazyloaded|font-claude|break-words|whitespace-|wp-image-\d+|size-|attachment-|wp-block-|has-|is-layout|aligncenter$|alignnone$)/;

function toPath(u) {
  if (!u) return u;
  return u.replace(/^https?:\/\/(www\.)?tarasovs\.me(?=\/|$)/i, '') || '/';
}

// /wp-content/uploads/2026/05/foo-1024x683.webp -> /wp-content/uploads/2026/05/foo.webp
function originalUpload(p) {
  return p.replace(/-\d+x\d+(?=\.[a-z0-9]+$)/i, '');
}

function cleanHTML(raw, ctx) {
  const $ = cheerio.load(raw || '', null, false);
  const jsonld = [];

  // 1. Unwrap Elementor: keep the content of top-level widgets only
  if ($('[data-elementor-type]').length) {
    const parts = [];
    $('.elementor-widget')
      .filter((_, el) => $(el).parents('.elementor-widget').length === 0)
      .each((_, el) => {
        const c = $(el).children('.elementor-widget-container');
        parts.push((c.length ? c : $(el)).html() || '');
      });
    if (!parts.length) ctx.warn('elementor markup but no widgets found');
    return cleanHTML(parts.join('\n'), ctx); // second pass on unwrapped HTML
  }

  // 2. JSON-LD out of the body, into frontmatter
  $('script[type="application/ld+json"]').each((_, el) => {
    const txt = $(el).html().trim();
    try { jsonld.push(JSON.parse(txt)); } catch { ctx.warn('invalid JSON-LD block kept as string'); jsonld.push(txt); }
    $(el).remove();
  });
  const otherScripts = $('script').length;
  if (otherScripts) ctx.warn(`${otherScripts} <script> tag(s) left in body`);
  const styles = $('style').length;
  if (styles) ctx.warn(`${styles} <style> block(s) in body`);

  // 3. Attributes
  $('*').each((_, el) => {
    for (const name of Object.keys(el.attribs || {})) {
      if (name.startsWith('data-') && name !== 'data-src') $(el).removeAttr(name);
    }
    const cls = $(el).attr('class');
    if (cls !== undefined) {
      const kept = cls.split(/\s+/).filter((c) => c && !DROP_CLASS.test(c));
      kept.length ? $(el).attr('class', kept.join(' ')) : $(el).removeAttr('class');
    }
  });

  // 4. Images: original file, local path, no WP srcset
  $('img').each((_, el) => {
    const $el = $(el);
    let src = $el.attr('data-src') || $el.attr('src');
    $el.removeAttr('data-src').removeAttr('srcset').removeAttr('sizes').removeAttr('decoding');
    if (!src) return;
    src = toPath(src);
    if (src.startsWith('/wp-content/uploads/')) {
      src = originalUpload(src);
      images.add(src);
    } else if (/^https?:/.test(src)) {
      ctx.warn(`external image: ${src}`);
    }
    $el.attr('src', src);
    if (!$el.attr('alt')) ctx.warn(`img without alt: ${src}`);
  });

  // 5. Internal links -> relative
  $('a[href]').each((_, el) => {
    const href = $(el).attr('href');
    const rel = toPath(href);
    if (rel !== href) $(el).attr('href', rel);
    if (/\/wp-content\/uploads\//.test(rel)) images.add(originalUpload(rel));
  });

  // 6. Empty wrappers left by Elementor
  $('div, span').each((_, el) => {
    const $el = $(el);
    if (!Object.keys(el.attribs || {}).length && !$el.children().length && !$el.text().trim()) $el.remove();
  });

  return { html: $.html().trim(), jsonld };
}

// Markdown files treat a blank line as the end of a raw-HTML block.
// Strip indentation and blank lines outside <pre>; inside <pre> encode blank lines as &#10;.
function mdSafe(html) {
  return html
    .split(/(<pre[\s\S]*?<\/pre>)/i)
    .map((chunk, i) =>
      i % 2
        ? chunk.replace(/\n[ \t]*\n/g, '\n&#10;')
        : chunk.split('\n').map((l) => l.trim()).filter(Boolean).join('\n')
    )
    .join('');
}

// ---------- YAML frontmatter (JSON scalars are valid YAML) ----------
function yaml(obj, indent = '') {
  let out = '';
  for (const [k, v] of Object.entries(obj)) {
    if (v === undefined || v === null || v === '') continue;
    if (Array.isArray(v)) {
      if (!v.length) continue;
      if (v.every((x) => typeof x !== 'object')) out += `${indent}${k}: ${JSON.stringify(v)}\n`;
      else out += `${indent}${k}:\n` + v.map((x) => `${indent}  - ${JSON.stringify(x)}\n`).join('');
    } else if (typeof v === 'object') {
      const inner = yaml(v, indent + '  ');
      if (inner) out += `${indent}${k}:\n${inner}`;
    } else {
      out += `${indent}${k}: ${JSON.stringify(v)}\n`;
    }
  }
  return out;
}

const decode = (s) => cheerio.load(`<i>${s || ''}</i>`, null, false)('i').text().trim();

function seo(item) {
  const y = item.yoast_head_json || {};
  const og = y.og_image?.[0]?.url && toPath(y.og_image[0].url);
  if (og?.startsWith('/wp-content/uploads/')) images.add(originalUpload(og));
  return {
    title: y.title,
    description: y.description,
    canonical: toPath(y.canonical),
    robots: y.robots ? [y.robots.index, y.robots.follow].filter(Boolean).join(', ') : undefined,
    ogImage: y.og_image?.[0]?.url ? originalUpload(toPath(y.og_image[0].url)) : undefined,
  };
}

function featured(item) {
  const m = item._embedded?.['wp:featuredmedia']?.[0];
  if (!m?.source_url) return undefined;
  const src = originalUpload(toPath(m.source_url));
  images.add(src);
  return { src, alt: m.alt_text || '', width: m.media_details?.width, height: m.media_details?.height };
}

function terms(item, taxonomy) {
  return (item._embedded?.['wp:term'] || []).flat().filter((t) => t.taxonomy === taxonomy).map((t) => t.slug);
}

async function write(file, content) {
  await fs.mkdir(path.dirname(file), { recursive: true });
  await fs.writeFile(file, content);
}

function ctxFor(type, slug) {
  return { warn: (msg) => report.warnings.push({ type, slug, msg }) };
}

// ---------- Exporters ----------
async function exportPosts() {
  const posts = await getAll('posts', '&_embed=wp:featuredmedia,wp:term');
  for (const p of posts) {
    if (SKIP_SLUGS.has(p.slug)) { report.warnings.push({ type: 'post', slug: p.slug, msg: 'skipped: redirected' }); continue; }
    const ctx = ctxFor('post', p.slug);
    const { html, jsonld } = cleanHTML(p.content?.rendered, ctx);
    const fm = {
      title: decode(p.title?.rendered),
      slug: p.slug,
      pubDate: p.date_gmt + 'Z',
      updatedDate: p.modified_gmt + 'Z',
      excerpt: decode(p.excerpt?.rendered),
      categories: terms(p, 'category'),
      tags: terms(p, 'post_tag'),
      cover: featured(p),
      seo: seo(p),
      jsonld,
      wpId: p.id,
      legacyUrl: toPath(p.link),
    };
    await write(path.join(OUT, 'src/content/posts', `${p.slug}.md`), `---\n${yaml(fm)}---\n${mdSafe(html)}\n`);
  }
  report.counts.posts = posts.length;
}

async function exportProjects() {
  const items = await getAll('ohio_portfolio', '&_embed=wp:featuredmedia,wp:term');
  for (const p of items) {
    const ctx = ctxFor('project', p.slug);
    const { html, jsonld } = cleanHTML(p.content?.rendered, ctx);
    const fm = {
      title: decode(p.title?.rendered),
      slug: p.slug,
      pubDate: p.date_gmt + 'Z',
      updatedDate: p.modified_gmt + 'Z',
      categories: terms(p, 'ohio_portfolio_category'),
      tags: terms(p, 'ohio_portfolio_tags'),
      cover: featured(p),
      seo: seo(p),
      jsonld,
      wpId: p.id,
      legacyUrl: toPath(p.link),
    };
    await write(path.join(OUT, 'src/content/projects', `${p.slug}.md`), `---\n${yaml(fm)}---\n${mdSafe(html)}\n`);
  }
  report.counts.projects = items.length;
}

async function exportProfiles() {
  const list = await getAll('tdv_profile', '&_fields=id,slug,link,date_gmt,modified_gmt,title,yoast_head_json');
  let ok = 0;
  await pool(list, async (p) => {
    const stub = {
      name: decode(p.title?.rendered),
      slug: p.slug,
      needsData: true,
      wpId: p.id,
      title: decode(p.title?.rendered),
      pubDate: p.date_gmt + 'Z',
      updatedDate: p.modified_gmt + 'Z',
      seo: seo(p),
      legacyUrl: toPath(p.link),
    };
    try {
      const tdvSlug = TDV_SLUG_ALIASES[p.slug] || p.slug;
      const { data } = await getJSON(`${BASE}/wp-json/tdv/v1/dispensaries/${tdvSlug}`);
      const rec = {
        ...data,
        public_profile_url: toPath(data.public_profile_url),
        wpId: p.id,
        title: decode(p.title?.rendered),
        pubDate: p.date_gmt + 'Z',
        updatedDate: p.modified_gmt + 'Z',
        seo: seo(p),
        legacyUrl: toPath(p.link),
      };
      await write(path.join(OUT, 'src/content/profiles', `${p.slug}.json`), JSON.stringify(rec, null, 2) + '\n');
      ok++;
    } catch (e) {
      // Keep the URL alive: write a stub with SEO fields, flagged for manual data entry.
      await write(path.join(OUT, 'src/content/profiles', `${p.slug}.json`), JSON.stringify(stub, null, 2) + '\n');
      report.failures.push({ type: 'profile', slug: p.slug, error: String(e.message || e), wroteStub: true });
    }
  });
  report.counts.profilesListed = list.length;
  report.counts.profilesExported = ok;
}

async function exportPages() {
  const pages = await getAll('pages');
  const meta = [];
  for (const p of pages) {
    const ctx = ctxFor('page', p.slug);
    const { html, jsonld } = cleanHTML(p.content?.rendered, ctx);
    const url = toPath(p.link);
    const file = (url === '/' ? 'home' : url.replace(/^\/|\/$/g, '').replace(/\//g, '__')) + '.html';
    await write(path.join(OUT, '_wp-export/pages', file), html + '\n');
    meta.push({ url, file, title: decode(p.title?.rendered), parent: p.parent || undefined, template: p.template || undefined, updatedDate: p.modified_gmt + 'Z', seo: seo(p), jsonld });
  }
  await write(path.join(OUT, '_wp-export/pages.json'), JSON.stringify(meta, null, 2) + '\n');
  report.counts.pages = pages.length;
}

// ---------- Run ----------
const steps = { posts: exportPosts, projects: exportProjects, profiles: exportProfiles, pages: exportPages };
for (const [name, fn] of Object.entries(steps)) {
  process.stdout.write(`${name}... `);
  try {
    await fn();
    console.log('ok');
  } catch (e) {
    console.log('FAILED');
    report.failures.push({ type: name, error: String(e.message || e) });
  }
}

await write(path.join(OUT, '_wp-export/images-referenced.txt'), [...images].sort().join('\n') + '\n');
report.counts.imagesReferenced = images.size;
report.finishedAt = new Date().toISOString();
await write(path.join(OUT, '_wp-export/report.json'), JSON.stringify(report, null, 2) + '\n');

console.log('\n' + JSON.stringify(report.counts, null, 2));
console.log(`warnings: ${report.warnings.length}, failures: ${report.failures.length} (see _wp-export/report.json)`);
