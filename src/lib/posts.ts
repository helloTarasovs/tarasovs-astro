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
  webflow: 'Webflow', framer: 'Framer', wix: 'Wix', claude: 'Claude', google: 'Google', perplexity: 'Perplexity', ny: 'NY',
};
export const tagLabel = (slug: string) =>
  slug
    .split('-')
    .map((w) => WORDS[w] ?? (/^\d/.test(w) ? w : w.charAt(0).toUpperCase() + w.slice(1)))
    .join(' ')
    .replace('UI UX', 'UI/UX');

export function postTags(data: { tags?: string[]; categories?: string[] }, max = 3) {
  const list = data.tags?.length ? data.tags : (data.categories ?? []).filter((c) => c !== 'insights');
  return [...new Set(list)].slice(0, max).map(tagLabel);
}
