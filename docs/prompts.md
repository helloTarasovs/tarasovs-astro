# Prompts for Claude Code (run one at a time, commit after each)

Start each session in the project root so CLAUDE.md is loaded. After each prompt: review the diff, `npm run build`, `node scripts/check-urls.mjs`, commit, push, look at the workers.dev URL.

---

## 1. Design system + header + footer

Read CLAUDE.md. Then:

1. Open https://tarasovs.me/ and https://tarasovs.me/services/ and study the current look: colors, fonts (read the CSS font-family in use), spacing, header, footer, light/dark toggle.
2. Create `src/styles/tokens.css` (brand colors from CLAUDE.md, light + dark via `[data-theme]` and `prefers-color-scheme`, type scale, spacing scale, radii) and `src/styles/global.css` (reset, base typography, `.container`, `.skip-link`, prose styles for post bodies that do not fight the `ta-` styles inside posts).
3. Self-host the site font(s).
4. Build `src/components/Header.astro`: logo, main nav with the same items and URLs as the live menu (Home, Case Studies, Services with its dropdown incl. Dispensary SEO children, About, Insights -> /category/insights/, Contacts -> /contact-us/), "Get Started" CTA, theme toggle, accessible mobile menu (button with aria-expanded, focus trap not required, Esc closes).
5. Build `src/components/Footer.astro` with the same content as the live footer (address, phone, email, social links, privacy/terms links, CTA).
6. Wire both into `Base.astro` (default slots) so every existing page gets them. Theme toggle must not flash: set `data-theme` in an inline script in `<head>` before CSS paints.
7. Style post, project and profile templates just enough to read well on mobile and desktop.

Do not touch post bodies. Show me the result at 390px and 1280px.

---

## 2. Contact, About, Privacy, Terms

Read CLAUDE.md. Build these pages as `.astro` files in `src/pages/` using `_wp-export/pages/*.html` for copy and `_wp-export/pages.json` for SEO fields and JSON-LD:

- `/contact-us/` - contact form (`src/components/ContactForm.astro`, Web3Forms, fields: name, email, message, honeypot; success and error states without page reload). Keep the `#CForm` anchor id because other pages link to `/contact-us/#CForm`.
- `/about/`
- `/privacy-cookie-policy-tarasovs-digital-agency/`
- `/terms-of-service-tarasovs-digital-agency/`

Run check-urls and confirm these four are OK.

---

## 3. Services hub + service pages

Read CLAUDE.md. Build `/services/` and every service page still missing in `node scripts/check-urls.mjs` under `/services/...`, plus `/google-business-profile-optimization/`, `/dutchie-menu-seo/`, `/dutchie-pro-migration-seo/`, `/dispensary-seo-nyc/`, `/dispensary-seo-new-york/`, `/local-seo-manhattan-brooklyn/`.

- One reusable layout `src/layouts/ServicePage.astro` (hero, sections, FAQ, CTA) so pages differ only in content.
- Copy, headings, FAQ from `_wp-export/pages/<slug>.html`; SEO + JSON-LD from `pages.json`. Keep FAQPage schema where it exists and make the visible FAQ match it.
- Fix heading order while you rebuild (no H4/H6 for layout).
- Do not create `/services/digital-marketing/`, `/services/content-management/`, `/services/insights-analytics/` (they are redirects).
- For `/expert-web-design-seo-services-in-staten-island/`: ask me whether to rebuild it or add a 301 to `/local-seo-manhattan-brooklyn/`.

---

## 4. Home + Case Studies

Read CLAUDE.md. Build `/` and `/case-studies/`.

- Home: same sections and copy as the live home page (hero, portfolio grid with filter by category, services, AI search section, testimonials, stats, founder block, contact form, FAQ). Portfolio cards come from the `projects` collection, not hard-coded.
- The portfolio filter must not cause layout shift: fixed card aspect ratio, explicit image sizes.
- Remove the "PageSpeed Grade: A" claim unless the new mobile PageSpeed score for `/` is actually 90+; tell me the score.
- `/case-studies/`: grid of all 11 projects, same filter.
- LCP image: preload it, `fetchpriority="high"`.

Then run PageSpeed on the workers.dev URL for `/` (mobile) and report the numbers.

---

## 5. Dispensary Visibility hub

Read CLAUDE.md. Build `/dispensary-visibility/` (the "New York Dispensary Visibility Index").

- Data: the `profiles` collection (132 entries). Rebuild the live page's sections: intro, methodology summary, searchable/filterable directory (search by name/city, filter by market type and score band, sort by score), geographic breakdown, FAQ (keep the FAQPage schema from pages.json), lead form "Get my Full Visibility Report" (Web3Forms).
- Directory: render all rows as static HTML (crawlable), filter with a small inline script. No framework.
- Add ItemList JSON-LD of the profiles (name + url).
- Add a visible "Last updated" date (max `ai_scanned_at`) and a short "How to cite this index" block.
- Link each row to its profile page; link the hub to /ny-dispensary-chatgpt-visibility-study/, /new-york-dispensary-ai-visibility-index/ and /verdi-cannabis-dutchie-pro-case-study/.
- Style the profile template (`src/pages/dispensary-visibility/[slug].astro`) to match.

---

## 6. Final checks before launch

Read CLAUDE.md. Then:

1. `npm run build && node scripts/check-images.mjs && node scripts/check-urls.mjs` must be clean. Fix what is not.
2. Add `public/robots.txt` (same rules as the live one, Sitemap: https://tarasovs.me/sitemap-index.xml), `public/llms.txt` (copy from live), `public/og-default.jpg` (1200x630), favicon set.
3. Set `POSTS_PER_PAGE` in `src/lib/site.ts` to the WordPress value (I will tell you).
4. Review the 9 posts that contain `<script>` tags: list what each script does and whether it still works without jQuery/Elementor.
5. Add GA4 (G-XXXX I will provide) and Clarity, loaded after first interaction.
6. Report anything that differs from the live site in title, meta description or canonical for the top 20 URLs in `tarasovs-url-map.csv`.
