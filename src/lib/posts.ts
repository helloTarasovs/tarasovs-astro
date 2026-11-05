import { getCollection } from 'astro:content';
import { POSTS_PER_PAGE } from './site';

export async function sortedPosts() {
  const posts = await getCollection('posts');
  return posts.sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf());
}

export function pageSlice<T>(all: T[], page: number) {
  const lastPage = Math.max(1, Math.ceil(all.length / POSTS_PER_PAGE));
  return { items: all.slice((page - 1) * POSTS_PER_PAGE, page * POSTS_PER_PAGE), lastPage };
}

// Card tags: the post's WordPress tags, else its categories (without the generic "insights").
const WORDS: Record<string, string> = {
  geo: 'GEO', seo: 'SEO', aeo: 'AEO', ai: 'AI', ui: 'UI', ux: 'UX', chatgpt: 'ChatGPT', wordpress: 'WordPress',
  webflow: 'Webflow', ga4: 'GA4', llms: 'llms.txt', ecommerce: 'E-commerce', framer: 'Framer', wix: 'Wix', claude: 'Claude', google: 'Google', perplexity: 'Perplexity', ny: 'NY',
};
// Long WordPress category slugs folded into short labels (several slugs can share one label).
const ALIAS: Record<string, string> = {
  'geo-ai-search-optimization': 'GEO',
  'ai-search-optimization': 'GEO',
  'generative-engine-optimization': 'GEO',
  'chatgpt-seo': 'ChatGPT',
  'web-designer': 'Web Design',
  'web-design': 'Web Design',
  'ui-ux-design': 'UI/UX',
};
export const tagLabel = (slug: string) =>
  ALIAS[slug.toLowerCase()] ??
  slug
    .split('-')
    .map((w) => WORDS[w] ?? (/^\d/.test(w) ? w : w.charAt(0).toUpperCase() + w.slice(1)))
    .join(' ')
    .replace('UI UX', 'UI/UX');

// Topic tag that has no WordPress category: posts whose slug is about dispensaries or cannabis.
const DISPENSARY_SLUG = /dispensar|cannabis/;

export function postTags(data: { tags?: string[]; categories?: string[]; slug?: string }, max = 3) {
  const list = data.tags?.length ? data.tags : (data.categories ?? []).filter((c) => c !== 'insights');
  const labels = list.map(tagLabel);
  if (data.slug && DISPENSARY_SLUG.test(data.slug)) {
    // 'Dispensary Marketing' would repeat the new tag, so it is folded into it
    return [...new Set(['Dispensary', ...labels.filter((l) => l !== 'Dispensary Marketing')])].slice(0, max);
  }
  return [...new Set(labels)].slice(0, max);
}
