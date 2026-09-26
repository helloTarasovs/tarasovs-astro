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

// Site-wide WebSite + Organization (same data as the Yoast graph on the WordPress site).
// SearchAction is left out: the static site has no ?s= search.
export function siteGraph() {
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebSite',
        '@id': `${SITE.url}/#website`,
        url: `${SITE.url}/`,
        name: SITE.name,
        alternateName: SITE.name,
        description: 'Website design, Digital marketing, Web development, Online stores',
        publisher: { '@id': `${SITE.url}/#organization` },
        inLanguage: 'en-US',
      },
      {
        '@type': 'Organization',
        '@id': `${SITE.url}/#organization`,
        name: SITE.name,
        url: `${SITE.url}/`,
        logo: {
          '@type': 'ImageObject',
          '@id': `${SITE.url}/#/schema/logo/image/`,
          url: abs('/wp-content/uploads/2024/05/cropped-logo_new5-1.png'),
          contentUrl: abs('/wp-content/uploads/2024/05/cropped-logo_new5-1.png'),
          width: 512,
          height: 512,
          caption: SITE.name,
        },
        image: { '@id': `${SITE.url}/#/schema/logo/image/` },
        sameAs: [
          'https://www.facebook.com/tarasovs.web/',
          'https://www.instagram.com/tarasovs.me/',
          'https://www.linkedin.com/company/tarasovs-digital-agency/',
        ],
        description:
          'Europe-based digital agency helping businesses in the US, UK and Europe build websites that rank on Google and get cited by AI-powered search platforms including ChatGPT, Perplexity and Google AI Overviews.',
        foundingDate: '2018',
        founder: { '@type': 'Person', name: 'Yurii Tarasov', url: abs('/about/') },
        address: {
          '@type': 'PostalAddress',
          streetAddress: 'Str. Narcisei 64',
          addressLocality: 'Giroc',
          addressRegion: 'Timis',
          postalCode: '307220',
          addressCountry: 'RO',
        },
        telephone: '+40748708694',
        email: 'hello@tarasovs.me',
        contactPoint: [
          { '@type': 'ContactPoint', contactType: 'customer service', email: 'hello@tarasovs.me', telephone: '+40748708694', availableLanguage: ['English', 'Ukrainian', 'Romanian'], areaServed: ['US', 'GB', 'EU'] },
          { '@type': 'ContactPoint', contactType: 'sales', email: 'work@tarasovs.me', availableLanguage: ['English'], areaServed: ['US', 'GB', 'EU'] },
        ],
        areaServed: [
          { '@type': 'Country', name: 'United States' },
          { '@type': 'Country', name: 'United Kingdom' },
          { '@type': 'Place', name: 'European Union' },
        ],
        knowsAbout: ['Search Engine Optimization', 'Generative Engine Optimization', 'AI Search Optimization', 'Web Design', 'Web Development', 'Framer Development', 'Webflow Development', 'WordPress Development', 'Technical SEO', 'Local SEO'],
      },
    ],
  };
}
