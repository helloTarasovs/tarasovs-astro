# tarasovs.me: WordPress to Astro migration

Static rebuild of [tarasovs.me](https://tarasovs.me), the website of Tarasovs Digital Agency. The old site ran on WordPress, Elementor and the Ohio theme. The goal was to keep every URL, every piece of content and all SEO signals, and make the pages much faster.

## Results

Measured with Google PageSpeed Insights (mobile) before and after the switch:

| Metric | WordPress + Elementor | Astro on Cloudflare |
| :-- | :-- | :-- |
| Performance score | 57 | 99 |
| Largest Contentful Paint | 8.3 to 17.6 s | 1.4 to 2.0 s |
| Page weight | baseline | 87 to 91% lighter |

Full write-up with screenshots: [WordPress to Astro Migration: PageSpeed 57 to 99](https://tarasovs.me/wordpress-to-astro-migration-pagespeed/).

## Stack

- **Astro 7**, fully static output, TypeScript
- **Plain CSS** with design tokens as custom properties, light and dark theme, no CSS framework
- **Cloudflare Workers** static assets, every push to `main` builds and deploys
- **Web3Forms** for contact and lead forms (works without JavaScript)
- **GA4 in Consent Mode** and Microsoft Clarity, loaded only after consent
- Self-hosted variable fonts (Inter, DM Sans), RSS feed, XML sitemap, `llms.txt`

## What the migration covered

**All 220 indexed URLs accounted for.** Every URL from Google Search Console and the old sitemap is listed in `tarasovs-url-map.csv` with an action (keep 1:1 or redirect). `scripts/check-urls.mjs` compares each build against that map, and 38 redirects live in `public/_redirects`.

**Content exported, not retyped.** `scripts/wp-export.mjs` pulled posts, case studies and dispensary profiles out of WordPress with Cheerio, stripped the Elementor markup and wrote clean Markdown and JSON into Astro content collections. Git is now the source of truth.

**What is on the site:**

- 42 blog posts and 14 case studies (content collections)
- 16 service pages built from one reusable `ServicePage` layout and a set of content blocks (FAQ, pricing, steps, stats, tables)
- A directory of 130+ NYC dispensary AI-visibility profiles with client-side search, filters and sorting
- Structured data on every page (Organization, Service, FAQPage, BreadcrumbList)

**Accessibility and performance rules applied across the site:**

- Every text and background pair checked against WCAG AA in both themes
- One `h1` per page, ordered headings, descriptive link text, touch targets of 24 px or more
- Explicit image sizes, lazy loading except the LCP image, CSS inlined per page
- JavaScript only where needed (menu, theme toggle, filters), as small inline scripts
- Mobile budget for the home page: under 500 KB total transfer

## Project structure

```text
src/
  components/      Header, Footer, ContactForm, PostList, PortfolioGrid
    blocks/        reusable page sections: Faq, Pricing, Steps, Stats, Table...
  content/         posts, projects, services, profiles (content collections)
  layouts/         Base, ServicePage, LegalPage
  lib/             schema.ts (JSON-LD), posts, projects, navigation helpers
  pages/           routes, including dispensary-visibility/[slug].astro
  styles/          tokens.css, global.css, motion.css
scripts/           URL check, image check, WordPress export
public/            static assets, _redirects, _headers
```

## Running locally

Requires Node 22.12 or newer.

```sh
npm install
npm run dev        # local dev server at localhost:4321
npm run build      # production build into dist/
```

Quality checks after each build:

```sh
node scripts/check-images.mjs   # every referenced image exists, must print "0 missing"
node scripts/check-urls.mjs     # built pages match the URL map
```

## Workflow

Built with an AI-assisted workflow in Claude Code. Project rules for URLs, SEO, design tokens, accessibility and the performance budget are written down in `CLAUDE.md`, and every change is reviewed, built and checked against the URL map before it ships.

## Credits

Frontend development by [Vira Tarasova](https://www.linkedin.com/in/vira-tarasova-71860410a/).

Code is shared for portfolio purposes. Design, copy and images © Tarasovs Digital Agency. All rights reserved.
