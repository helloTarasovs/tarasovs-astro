// Site-wide constants. Edit here, not in templates.
export const SITE = {
  name: 'Tarasovs Digital Agency',
  url: 'https://tarasovs.me',
  defaultOgImage: '/og-default.jpg', // add a 1200x630 image to public/
  locale: 'en_US',
  twitterCard: 'summary_large_image',
};

// Must match WordPress Settings > Reading so /category/insights/page/N/ keeps the same posts.
export const POSTS_PER_PAGE = 20;

export const abs = (path: string) => new URL(path, SITE.url).href;
