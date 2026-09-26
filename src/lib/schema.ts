// Fallback JSON-LD when an entry has none of its own.
import { SITE, abs } from './site';

export const organizationRef = { '@type': 'Organization', '@id': `${SITE.url}/#organization`, name: SITE.name, url: SITE.url };

export function articleSchema(opts: {
  path: string;
  title: string;
  description?: string;
  image?: string;
  published: Date;
  modified?: Date;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    '@id': `${abs(opts.path)}#article`,
    headline: opts.title,
    description: opts.description,
    url: abs(opts.path),
    image: opts.image ? abs(opts.image) : undefined,
    datePublished: opts.published.toISOString(),
    dateModified: (opts.modified ?? opts.published).toISOString(),
    author: { '@type': 'Person', name: 'Yurii Tarasov', url: abs('/about/') },
    publisher: organizationRef,
    mainEntityOfPage: abs(opts.path),
  };
}

export function breadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((it, i) => ({ '@type': 'ListItem', position: i + 1, name: it.name, item: abs(it.path) })),
  };
}

// Keep entry JSON-LD; add Article only if the entry has no Article/BlogPosting of its own.
export function withFallbackArticle(jsonld: any[], fallback: object) {
  const hasArticle = jsonld.some((b) => {
    const t = typeof b === 'object' && b ? b['@type'] : '';
    return t === 'Article' || t === 'BlogPosting' || (Array.isArray(t) && t.includes('Article'));
  });
  return hasArticle ? jsonld : [fallback, ...jsonld];
}
