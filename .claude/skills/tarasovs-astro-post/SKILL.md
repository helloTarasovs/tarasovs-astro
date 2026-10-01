---
name: tarasovs-astro-post
description: >
  Create or restyle blog posts for the Astro rebuild of tarasovs.me in the Tarasovs `ta-` visual style.
  Use for "оформи пост", "convert md to Tarasovs style", "додай пост", "create blog post HTML",
  or when the user supplies a .md article for src/content/posts/. Output is a Markdown file with
  frontmatter + an HTML body (`<style>` + `<div class="ta-post">`), not an Elementor snippet.
  Adapted from the WordPress/Elementor skill `tarasovs-html-design`; use this one for the Astro repo.
---

# Tarasovs post style (Astro)

## Where posts live
`src/content/posts/<slug>.md`. Schema in `src/content.config.ts`: `title, slug, pubDate, updatedDate, excerpt, categories, tags, cover{src,alt,width,height}, seo{title,description,canonical,robots,ogImage}, jsonld[]`.
Rendered by `src/pages/[slug].astro` inside `.post-body.prose.container-prose`. Posts that contain `.ta-post` get a 960px column (`:has(.ta-post)`).

## Differences from the old Elementor skill
- Output is `.md`: frontmatter, then body. No Elementor HTML widget, no `/mnt/user-data/outputs`.
- The template renders the `<h1>`, "Insights" eyebrow, dates. Do NOT put an h1/title/author/date/breadcrumb in the body. If the body has its own `<h1>` the template drops its own, so avoid that.
- Dark mode: keep `body.dark-scheme .ta-post { ... }`. Base.astro and Header.astro set `body.dark-scheme` from `data-theme`, so the old selector works and stays consistent with the 32 existing posts. No JS in posts.
- No Ohio: do not use `ohio-widget button`. CTA button is `<a class="ta-cta-btn">`. No need for `!important` fights with theme tables/buttons beyond what `references/post-styles.css` already has.
- Internal links are relative (`/contact-us/`, `/services/geo-ai-search-optimization/`). Absolute URLs only for external sites and in canonical/OG/JSON-LD.
- Global `.prose` rules are in `@layer prose` with zero specificity and exclude `.ta-post`, so post styles always win. Everything inside `.ta-post` is styled by the post itself.
- Images: files under `public/wp-content/uploads/YYYY/MM/` (or the path the user gives); always `width` + `height`, `loading="lazy"`, `decoding="async"`, descriptive `alt`. Run `node scripts/check-images.mjs` (0 missing).

## Rules
- All classes prefixed `ta-`. No `max-width`/`padding` on `.ta-post` itself.
- Start the body with the `.ta-qa` Quick Answer block (unless the user says otherwise).
- Headings in order: h2 > h3, never skip, stats/numbers are not headings. Real h2/h3 for sections; FAQ questions are `<p class="ta-faq-question">` or h3 consistently with the visible-FAQ/JSON-LD match.
- FAQ: if frontmatter `jsonld` has FAQPage, the visible questions must match its `name` strings exactly (`assertFaqMatchesSchema`).
- Link text must describe the target (no bare "Read more"). Touch targets ≥ 24px (prefer 44).
- Do not rewrite the user's copy; fix obvious typos only. Never change benchmark numbers.
- No new client JS; no icon fonts (inline SVG only). Avoid gradients except where `post-styles.css` already uses them.
- Contrast: `--text-3` (#9490a8) fails AA on light surfaces. Use it only for decoration, never for readable text; use `--text-2` for secondary text.
- Word count: verify with `wc -w`, don't estimate.

## Tokens
Light (default) and dark (`body.dark-scheme`) variables, spacing and radii are defined at the top of `references/post-styles.css`. Brand accent `#7C3AED`, bright `#A855F7`, soft `#6D28D9`. Reuse them; don't introduce new colors.

## Components
Full CSS is `references/post-styles.css` (copied from the live post `llms-txt-guide`; keep it in sync if that post's styles change). Paste it inside one `<style>` at the top of the post body, then use the markup from `src/content/posts/llms-txt-guide.md` as the canonical example:
`.ta-qa` (+`-label`), `.ta-stats`/`.ta-stat`, `.ta-toc`, `.ta-body`, `.ta-stages`/`.ta-stage`, `.ta-table-wrap`/`.ta-table`, `.ta-actions`/`.ta-action`, `.ta-note`, `.ta-code`, `.ta-sources`, `.ta-faq`, `.ta-cta` (+`-btn`).
Only include the CSS rules for components the post uses if the post is short; otherwise paste all.

## Converting an .md article
1. Frontmatter: keep given title/slug/dates/excerpt/seo/jsonld; `canonical: "/<slug>/"`, `robots: "index, follow"`; add `cover` only if an image exists.
2. Quick Answer / first summary → `.ta-qa`. Stats pattern → `.ta-stats`. Stage 1/2/3 → `.ta-stages`. Tables → `.ta-table-wrap > table.ta-table`. FAQ → `.ta-faq`. Closing contact paragraph → `.ta-cta`.
3. Plain Markdown posts (no `ta-` styling) are also valid: they render via the default prose styles. Only add `ta-` components when the user asks for the styled layout.
4. Verify: `npm run build`, `node scripts/check-urls.mjs` (new post appears as extra, fine), `node scripts/check-images.mjs`, look at the page at 390 and 1440px in light and dark.
