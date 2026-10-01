// Data model for hand-built service pages (src/content/services/*.json), rendered by layouts/ServicePage.astro.
// Copy comes from the WordPress export; SEO + JSON-LD come from _wp-export/pages.json via wpPage().

export interface Action {
  label: string;
  href: string;
}

export interface Img {
  src: string;
  alt: string;
  width?: number;
  height?: number;
}

export interface Card {
  num?: string; // "01", "Step 1"
  meta?: string; // small label: "Week 1–2", case tag
  title: string; // inline HTML
  html?: string; // block HTML
  tags?: string[];
  link?: Action;
  img?: Img;
}

export type Block =
  | { type: 'prose'; html: string }
  | { type: 'cards'; items: Card[]; columns?: 2 | 3 | 4 }
  | { type: 'steps'; items: Card[] }
  | { type: 'stats'; items: { value: string; label: string }[] }
  | { type: 'pricing'; plans: Plan[] }
  | { type: 'table'; caption?: string; head: string[]; rows: string[][]; highlight?: number }
  | { type: 'checklist'; items: string[] }
  | { type: 'projects'; items: string[] } // /project/<slug>/ URLs
  | { type: 'actions'; items: Action[] }
  | { type: 'tags'; items: string[] }
  | { type: 'image'; src: string; alt: string; width?: number; height?: number }
  | { type: 'callout'; eyebrow?: string; title: string; text?: string; action?: Action }
  | { type: 'form'; title?: string };

export interface Plan {
  name: string;
  period?: string;
  price: string;
  tag?: string;
  details?: string;
  features: string[];
  action?: Action | null;
}

export interface Section {
  id?: string;
  eyebrow?: string;
  title?: string; // inline HTML, rendered as <h2>
  titleHidden?: boolean; // keep the <h2> for the outline but hide it visually
  intro?: string; // block HTML under the title
  blocks: Block[];
  tone?: 'surface' | 'dark';
}

export interface ServicePageData {
  url: string;
  variant?: 'center'; // centered dispensary-page look (panel hero, centered sections)
  breadcrumb: { name: string; path: string }[]; // without the page itself
  hero: { eyebrow?: string; title: string; crumb?: string; chips?: string[]; byline?: string; lead?: string; actions?: Action[] };
  sections: Section[];
  faq?: { eyebrow?: string; title: string; intro?: string; items: { q: string; a: string }[]; note?: string } | null;
  cta?: { eyebrow?: string; title: string; text?: string; action?: Action | null } | null;
  formSubject?: string;
}

const norm = (s: string) => s.toLowerCase().replace(/&[a-z#0-9]+;/g, ' ').replace(/[^a-z0-9]+/g, ' ').trim();

/** Visible FAQ must match the FAQPage schema question for question (Google requires it). */
export function assertFaqMatchesSchema(data: ServicePageData, jsonld: any[]) {
  const schemaQs = jsonld
    .flatMap((b) => (b?.['@graph'] ?? [b]))
    .filter((b) => b?.['@type'] === 'FAQPage')
    .flatMap((b) => b.mainEntity.map((e: any) => norm(e.name)));
  const visible = (data.faq?.items ?? []).map((i) => norm(i.q));
  const missing = [...new Set(schemaQs)].filter((q) => !visible.includes(q));
  const extra = visible.filter((q) => !schemaQs.includes(q));
  if (missing.length || extra.length) {
    throw new Error(`${data.url}: FAQ does not match FAQPage schema. Missing: ${missing.join(' | ')} Extra: ${extra.join(' | ')}`);
  }
}

/** Drop repeated JSON-LD blocks (ui-ux-design had its FAQPage and Service twice) and keep one FAQPage. */
export function dedupeJsonld(jsonld: any[]) {
  const seen = new Set<string>();
  let seenFaq = false;
  return jsonld.filter((b) => {
    const key = JSON.stringify(b);
    if (seen.has(key)) return false;
    seen.add(key);
    if (b?.['@type'] !== 'FAQPage') return true;
    if (seenFaq) return false;
    seenFaq = true;
    return true;
  });
}
