import { PARTNER_STATUS, SITE } from './site';

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
  dateModified?: string; // ISO date, goes to the generated FAQPage schema
  partner?: boolean; // adds the Dutchie partner membership to the Organization schema
  variant?: 'center'; // centered dispensary-page look (panel hero, centered sections)
  breadcrumb: { name: string; path: string }[]; // without the page itself
  hero: { eyebrow?: string; title: string; crumb?: string; chips?: string[]; byline?: string; badge?: string; lead?: string; actions?: Action[] };
  sections: Section[];
  faq?: { eyebrow?: string; title: string; intro?: string; items: { q: string; a: string }[]; note?: string } | null;
  cta?: { eyebrow?: string; title: string; text?: string; action?: Action | null } | null;
  formSubject?: string;
}

const stripTags = (s: string) => s.replace(/<[^>]+>/g, '').replace(/\s+/g, ' ').trim();

/** Replaces {{PARTNER_STATUS}} in every string of the page data, so the status lives in one place (lib/site.ts). */
export function fillTokens<T>(value: T): T {
  if (typeof value === 'string') return value.replaceAll('{{PARTNER_STATUS}}', PARTNER_STATUS) as T;
  if (Array.isArray(value)) return value.map(fillTokens) as T;
  if (value && typeof value === 'object') return Object.fromEntries(Object.entries(value).map(([k, v]) => [k, fillTokens(v)])) as T;
  return value;
}

/** FAQPage schema built from the visible FAQ, so schema and page can never drift apart. */
export function faqSchema(data: ServicePageData) {
  const items = data.faq?.items ?? [];
  if (items.length === 0) return null;
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    ...(data.dateModified ? { dateModified: data.dateModified } : {}),
    mainEntity: items.map((i) => ({ '@type': 'Question', name: stripTags(i.q), acceptedAnswer: { '@type': 'Answer', text: i.a } })),
  };
}

/** Same @id as the site-wide Organization, so Google merges it into one entity. */
export function partnerOrganization() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': `${SITE.url}/#organization`,
    memberOf: {
      '@type': 'ProgramMembership',
      programName: PARTNER_STATUS,
      hostingOrganization: { '@type': 'Organization', name: 'Dutchie', url: 'https://dutchie.com' },
    },
  };
}

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
