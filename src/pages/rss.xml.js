// /rss.xml (the old /feed/ URLs 301 here via public/_redirects)
import rss from '@astrojs/rss';
import { sortedPosts } from '../lib/posts';
import { SITE } from '../lib/site';

export async function GET(context) {
  const posts = await sortedPosts();
  return rss({
    title: SITE.name,
    description: 'Insights on GEO, AI search visibility, SEO, Framer and web design.',
    site: context.site,
    items: posts.map((p) => ({
      title: p.data.title,
      description: p.data.seo?.description ?? p.data.excerpt,
      pubDate: p.data.pubDate,
      link: `/${p.data.slug}/`,
    })),
  });
}
