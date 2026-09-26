// Case studies: newest first (same order as the WordPress portfolio), category labels for the filter.
import { getCollection } from 'astro:content';

export const CATEGORY_LABELS: Record<string, string> = {
  cannabis: 'Cannabis',
  framer: 'Framer',
  'seo-and-ai-visibility': 'SEO and AI Visibility',
  wordpress: 'WordPress',
};

export const categoryLabel = (slug: string) => CATEGORY_LABELS[slug] ?? slug.replace(/-/g, ' ');

export async function sortedProjects() {
  const all = await getCollection('projects');
  return all.sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf());
}

/** Card image variants: 480w/800w WebP next to the original (JPG/PNG up to 800px also get a same-size WebP) (made with cwebp). The original itself
 *  is left out of the card srcset — 800px is plenty for a card, even on a 3x phone. */
const THUMB_WIDTHS = [480, 800];
export function coverSrcset(src: string, width?: number) {
  if (!width) return undefined;
  const webp = (w: number) => src.replace(/\.(webp|jpe?g|png)$/i, `-${w}w.webp`);
  const variants = THUMB_WIDTHS.filter((w) => width > w).map((w) => `${webp(w)} ${w}w`);
  // Small originals: the original if it is already WebP, else a same-size WebP copy (-<width>w.webp)
  if (width <= 800) variants.push(`${/\.webp$/i.test(src) ? src : webp(width)} ${width}w`);
  return { src: variants[variants.length - 1].split(' ')[0], srcset: variants.join(', ') };
}

export const CARD_SIZES = '(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw';

/** <link rel="preload"> attributes that match the card's <img srcset> exactly (no double download). */
export function coverPreload(cover?: { src: string; width?: number }) {
  if (!cover) return undefined;
  const v = coverSrcset(cover.src, cover.width);
  return v ? { href: v.src, imagesrcset: v.srcset, imagesizes: CARD_SIZES } : { href: cover.src };
}
