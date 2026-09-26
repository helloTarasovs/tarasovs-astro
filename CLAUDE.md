# tarasovs-astro

Static rebuild of tarasovs.me (was WordPress + Elementor, Ohio theme). Goal: same URLs, same SEO, much faster pages.

## Stack
- Astro 7, static output, no adapter. Node 22+.
- Hosting: Cloudflare Workers static assets. Worker `tarasovs-astro`. Every push to `main` builds and deploys.
- Test URL: https://tarasovs-astro.webtarasoff.workers.dev (noindex via `public/_headers`).
- Live WordPress site https://tarasovs.me stays up until launch. Use it as the visual and content reference.

## Commands
- `npm run dev` / `npm run build`
- `node scripts/check-images.mjs` - every referenced upload exists in public/. Must print `0 missing`.
- `node scripts/check-urls.mjs` - compares dist/ with `tarasovs-url-map.csv`. Run after every build.
- Do NOT re-run `scripts/wp-export.mjs`. Content in `src/content/` has manual fixes; git is the source of truth now.

## URLs (hard rules)
- `trailingSlash: 'always'`, `build.format: 'directory'`. Every URL ends with `/`.
- Never rename or drop a URL listed as KEEP in `tarasovs-url-map.csv`.
- Redirects live in `public/_redirects`. Never create a page at a redirect source path (the page would shadow the redirect).
- Blog index is `/category/insights/` (+ `/category/insights/page/N/`). `/insights/` redirects there.
- Internal links are relative (`/services/seo-services/`). Absolute URLs only in canonical, OG and JSON-LD.

## Content
- `src/content/posts/*.md`, `projects/*.md`: frontmatter + HTML body from WordPress. Bodies use `ta-` classes and their own `<style>` blocks. Do not rewrite post bodies.
- `src/content/profiles/*.json`: dispensary data from the tdv plugin (scores, markets, prompts).
- `_wp-export/pages/*.html` + `_wp-export/pages.json`: old WordPress pages (Elementor stripped). Source of copy, headings, FAQ, and SEO fields for pages rebuilt by hand. `pages.json` has `url`, `title`, `seo.title`, `seo.description`, `jsonld` per page.
- Images: `public/wp-content/uploads/...`, keep the same paths. If an image you need is missing, copy it back from `../tarasovs-uploads-archive/wp-content/uploads/...`, then run check-images.

## SEO (every page)
- Use `src/layouts/Base.astro`. Pass `title` and `description` exactly as in `pages.json` `seo.title` / `seo.description` (or the entry's `seo` frontmatter).
- One `<h1>` per page. Headings in order (h1 > h2 > h3), never pick a level for its size. Stats/numbers are not headings.
- Keep existing JSON-LD from `pages.json` (FAQPage, Service, Organization etc.). Add BreadcrumbList via `src/lib/schema.ts`.
- Keep the copy. Fix obvious typos only. Do not rewrite marketing text unless asked.

## Design
- Brand tokens: navy `#130F24`, violet `#7C3AED`, purple `#A855F7`, yellow `#ECC700`. Define all colors, spacing and type in `src/styles/tokens.css` as CSS custom properties. Light and dark theme (the live site has a toggle).
- Check every text/background pair for WCAG AA (4.5:1 body, 3:1 large text) when you define tokens.
- Plain CSS: Astro scoped `<style>` + `src/styles/global.css`. No CSS framework, no jQuery, no icon fonts (inline SVG only).
- Fonts: self-host (use @fontsource or woff2 in public/fonts), `font-display: swap`, preload only the one or two files used above the fold.
- Images: always `width` + `height`, `loading="lazy"` except the LCP image (`fetchpriority="high"`).
- Touch targets at least 24x24 px (prefer 44). No `tabindex` above 0. Link text must describe the target (no bare "Read more").
- JavaScript only where needed (menu toggle, theme toggle, filters on /dispensary-visibility/). Use small inline `<script>` in the component, no frameworks.

## Performance budget (mobile)
- Home under 500 KB total transfer, no render-blocking third-party CSS/JS.
- Third-party scripts (GA4, Clarity) load after interaction or via `requestIdleCallback`.

## Forms
- Static site: forms post to Web3Forms (`https://api.web3forms.com/submit`) with the access key in `PUBLIC_WEB3FORMS_KEY`. Honeypot field on. No hCaptcha.

## Done means
`npm run build` passes, `check-images` = 0 missing, `check-urls` shows the pages you worked on as OK, and you looked at the page at mobile (390px) and desktop widths.
