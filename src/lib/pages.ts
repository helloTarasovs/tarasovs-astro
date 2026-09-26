// SEO fields + JSON-LD of the old WordPress pages, for pages rebuilt by hand in src/pages/.
import pages from '../../_wp-export/pages.json';

interface WpPage {
  url: string;
  title: string;
  updatedDate?: string;
  seo?: { title?: string; description?: string; canonical?: string; robots?: string; ogImage?: string };
  jsonld?: unknown[];
}

// Yoast stored some fields HTML-escaped ("Privacy &amp; Cookie"); Astro escapes again on output.
const decode = (s?: string) =>
  s
    ?.replace(/&#(\d+);/g, (_, n) => String.fromCharCode(Number(n)))
    .replace(/&quot;/g, '"')
    .replace(/&#039;|&apos;/g, "'")
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&amp;/g, '&');

export function wpPage(url: string) {
  const page = (pages as WpPage[]).find((p) => p.url === url);
  if (!page) throw new Error(`No entry for ${url} in _wp-export/pages.json`);
  const jsonld = (page.jsonld ?? []).map((b) => (typeof b === 'string' ? JSON.parse(b) : b));
  return {
    title: decode(page.title)!,
    updatedDate: page.updatedDate ? new Date(page.updatedDate) : undefined,
    seo: {
      title: decode(page.seo?.title) ?? decode(page.title)!,
      description: decode(page.seo?.description),
      canonical: page.seo?.canonical ?? url,
      robots: page.seo?.robots,
      ogImage: page.seo?.ogImage,
    },
    jsonld,
  };
}
