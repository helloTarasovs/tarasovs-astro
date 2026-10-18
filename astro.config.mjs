import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import { existsSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { SITE } from './src/lib/site.ts';
import { alternatesFor } from './src/lib/i18n.ts';

// A page is built if dist/<path>index.html exists (sitemap runs after the build).
const built = (path) => existsSync(fileURLToPath(new URL(`./dist${path}index.html`, import.meta.url)));

export default defineConfig({
  site: 'https://tarasovs.me',
  trailingSlash: 'always',
  // Inline the (small) per-page CSS: no render-blocking stylesheet request.
  build: { format: 'directory', inlineStylesheets: 'always' },
  // English stays unprefixed; Ukrainian lives in /ua/ with language code uk.
  i18n: {
    defaultLocale: 'en',
    locales: ['en', { path: 'ua', codes: ['uk'] }],
    routing: { prefixDefaultLocale: false },
  },
  integrations: [
    sitemap({
      filter: (page) => !page.includes('/404'),
      // Keys are URL path segments, values are language codes.
      i18n: { defaultLocale: 'en', locales: { en: 'en', ua: 'uk' } },
      // The plugin pairs only identical paths (/x/ <-> /ua/x/). Our UA slugs differ, so alternates come
      // from the PAIRS table in src/lib/i18n.ts, the same one that drives hreflang in <head>.
      serialize: (item) => {
        const path = new URL(item.url).pathname;
        const alts = alternatesFor(path, built);
        item.links = alts.length ? alts.map((a) => ({ lang: a.hreflang, url: new URL(a.path, SITE.url).href })) : undefined;
        return item;
      },
    }),
  ],
});
