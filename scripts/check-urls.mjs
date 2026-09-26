// Compares the built site (dist/) with the URL map exported from GSC + sitemap.
// Run after `npm run build`:  node scripts/check-urls.mjs
// Expects tarasovs-url-map.csv and public/_redirects in the project root / public.
import fs from 'node:fs';
import path from 'node:path';

const MAP = 'tarasovs-url-map.csv';
const DIST = 'dist';

function parseCSV(text) {
  const rows = [];
  let row = [], cell = '', q = false;
  for (let i = 0; i < text.length; i++) {
    const c = text[i];
    if (q) {
      if (c === '"' && text[i + 1] === '"') { cell += '"'; i++; }
      else if (c === '"') q = false;
      else cell += c;
    } else if (c === '"') q = true;
    else if (c === ',') { row.push(cell); cell = ''; }
    else if (c === '\n') { row.push(cell); rows.push(row); row = []; cell = ''; }
    else if (c !== '\r') cell += c;
  }
  if (cell || row.length) { row.push(cell); rows.push(row); }
  const [head, ...body] = rows;
  return body.filter((r) => r.length > 1).map((r) => Object.fromEntries(head.map((h, i) => [h, r[i] ?? ''])));
}

const toPath = (u) => u.replace(/^https?:\/\/[^/]+/, '') || '/';
const built = (p) => {
  const clean = p.split('?')[0];
  const file = clean.endsWith('/') ? path.join(DIST, clean, 'index.html') : path.join(DIST, clean);
  return fs.existsSync(file);
};

// redirect sources from public/_redirects
const redirects = new Map();
if (fs.existsSync('public/_redirects')) {
  for (const line of fs.readFileSync('public/_redirects', 'utf8').split('\n')) {
    const t = line.trim();
    if (t === '' || t.startsWith('#')) continue;
    const [from, to, code] = t.split(/\s+/);
    redirects.set(from, { to, code });
  }
}
const redirectFor = (p) => {
  if (redirects.has(p)) return redirects.get(p);
  for (const [from, r] of redirects) {
    if (from.includes(':') || from.includes('*')) {
      const re = new RegExp('^' + from.replace(/[.+?^${}()|[\]\\]/g, '\\$&').replace(/:\w+/g, '[^/]+').replace(/\*/g, '.*') + '$');
      if (re.test(p)) return r;
    }
  }
  return null;
};

const rows = parseCSV(fs.readFileSync(MAP, 'utf8'));
const problems = { missingPage: [], redirectMissing: [], redirectTargetMissing: [], redirectShadowed: [] };
let ok = 0;

for (const r of rows) {
  const p = toPath(r.old_url);
  const action = r.action.trim();
  if (action.startsWith('KEEP')) {
    const target = r.new_path || p;
    if (built(target)) ok++;
    else problems.missingPage.push(`${p}  [${r.type}]${r.indexed_gsc === 'yes' ? '  INDEXED' : ''}`);
  } else if (action === '301') {
    const rd = redirectFor(p) || redirectFor(p.replace(/\/$/, ''));
    if (!rd) problems.redirectMissing.push(`${p} -> ${r.new_path}`);
    else if (!built(rd.to.replace(/:\w+/g, '2'))) problems.redirectTargetMissing.push(`${p} -> ${rd.to}`);
    else ok++;
    if (built(p)) problems.redirectShadowed.push(`${p} (a page exists here, so the redirect will never fire)`);
  } else if (action === 'DECIDE') {
    const done = built(p) || redirectFor(p) || redirectFor(p.replace(/\/$/, ''));
    if (done) ok++;
    else problems.missingPage.push(`${p}  [DECIDE: build the page or add a 301 to ${r.new_path}]`);
  } else if (action === '410') {
    if (built(p)) problems.redirectShadowed.push(`${p} should be gone but a page was built`);
    else ok++;
  }
}

// built pages that are not in the map (new or unexpected)
const mapPaths = new Set(rows.map((r) => toPath(r.old_url)));
const extra = [];
(function walk(dir) {
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, e.name);
    if (e.isDirectory()) walk(p);
    else if (e.name === 'index.html') {
      const url = '/' + path.relative(DIST, path.dirname(p)).split(path.sep).join('/') + '/';
      const u = url.replace('//', '/');
      if (!mapPaths.has(u)) extra.push(u);
    }
  }
})(DIST);

const section = (title, list) => list.length && console.log(`\n${title} (${list.length})\n  ` + list.sort().join('\n  '));
section('MISSING PAGES (in map as KEEP, not built)', problems.missingPage);
section('REDIRECT NOT IN public/_redirects', problems.redirectMissing);
section('REDIRECT TARGET NOT BUILT', problems.redirectTargetMissing);
section('REDIRECT SHADOWED BY A PAGE', problems.redirectShadowed);
section('BUILT BUT NOT IN MAP (new pages, fine if intended)', extra);

const bad = problems.missingPage.length + problems.redirectMissing.length + problems.redirectTargetMissing.length + problems.redirectShadowed.length;
console.log(`\n${rows.length} URLs in map: ${ok} OK, ${bad} problems`);
process.exit(bad ? 1 : 0);
