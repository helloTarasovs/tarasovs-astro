import { PARTNER_STATUS, SITE, UA_CTA_URL, abs } from './site';

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
  tagsLabel?: string; // small label above the tags ("Services")
  icon?: string; // inline SVG (decorative), shown above the title
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
  lang?: 'uk'; // /ua/ pages: SEO comes from `seo` below, not from _wp-export/pages.json
  seo?: { title: string; description: string };
  service?: { name: string }; // adds a Service node (used by /ua/ pages; EN pages carry theirs in pages.json)
  dateModified?: string; // ISO date, goes to the generated FAQPage schema
  partner?: boolean; // adds the Dutchie partner membership to the Organization schema
  variant?: 'center'; // centered dispensary-page look (panel hero, centered sections)
  breadcrumb: { name: string; path: string }[]; // without the page itself; empty = no breadcrumb (home pages)
  hero: {
    eyebrow?: string; title: string; crumb?: string; chips?: string[]; byline?: string; badge?: string; lead?: string; actions?: Action[];
    // Compact social-proof row under the hero buttons: small thumbnail + name + label + result, linking to the live site
    proof?: { label: string; items: { name: string; label: string; highlight: string; href: string; img: Img }[] };
    leadAfterProof?: string; // block HTML shown right under the proof row (before the buttons)
  };
  sections: Section[];
  faq?: { eyebrow?: string; title: string; intro?: string; items: { q: string; a: string }[]; note?: string } | null;
  cta?: { eyebrow?: string; title: string; text?: string; action?: Action | null } | null;
  formSubject?: string;
}

const stripTags = (s: string) => s.replace(/<[^>]+>/g, '').replace(/\s+/g, ' ').trim();

/** Replaces {{PARTNER_STATUS}} and {{UA_CTA_URL}} in every string of the page data, so they live in one place (lib/site.ts). */
export function fillTokens<T>(value: T): T {
  if (typeof value === 'string') return value.replaceAll('{{PARTNER_STATUS}}', PARTNER_STATUS).replaceAll('{{UA_CTA_URL}}', UA_CTA_URL) as T;
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

// Draft placeholders from the UA texts ([ВСТАВИТИ: ...], [ПЕРЕВІРИТИ: ...]) are marked in the JSON as
// <mark data-todo>...</mark> (inline) or <p data-todo>...</p> (whole paragraph). `astro dev` shows them;
// `astro build` removes them and logs a warning per page, so they never reach production unnoticed.
const TODO_RE = /\s*<(p|mark) data-todo>[\s\S]*?<\/\1>/g;

export const countTodos = (data: unknown) => (JSON.stringify(data).match(/<(?:p|mark) data-todo>/g) ?? []).length;

export function stripTodos<T>(value: T): T {
  if (typeof value === 'string') return value.replace(TODO_RE, '') as T;
  if (Array.isArray(value)) {
    // drop prose blocks that held nothing but a placeholder
    return value.map(stripTodos).filter((v: any) => !(v?.type === 'prose' && !v.html.trim())) as T;
  }
  if (value && typeof value === 'object') return Object.fromEntries(Object.entries(value).map(([k, v]) => [k, stripTodos(v)])) as T;
  return value;
}

/** Service node for /ua/ service pages; provider is the site-wide Organization. */
export function serviceSchema(data: ServicePageData) {
  if (!data.service) return null;
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': `${abs(data.url)}#service`,
    name: data.service.name,
    description: data.seo?.description,
    url: abs(data.url),
    inLanguage: data.lang ?? 'en',
    provider: { '@id': `${SITE.url}/#organization` },
    areaServed: { '@type': 'Country', name: 'Україна' },
  };
}
