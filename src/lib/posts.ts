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
