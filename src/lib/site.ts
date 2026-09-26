// Site-wide constants. Edit here, not in templates.
export const SITE = {
  name: 'Tarasovs Digital Agency',
  url: 'https://tarasovs.me',
  defaultOgImage: '/og-default.jpg', // add a 1200x630 image to public/
  locale: 'en_US',
  twitterCard: 'summary_large_image',
};

// Must match WordPress Settings > Reading so /category/insights/page/N/ keeps the same posts.
export const POSTS_PER_PAGE = 12; // WordPress Settings > Reading (verified on the live archive: 12 per page)

export const abs = (path: string) => new URL(path, SITE.url).href;

// Analytics (loaded after the first user interaction, production host only).
// GA: the live WordPress site loads Google tag GT-TWDLC4K (via Site Kit); swap in the G- measurement ID if preferred.
export const ANALYTICS = {
  googleTagId: 'GT-TWDLC4K',
  clarityId: 'y24o0f1krl',
  hosts: ['tarasovs.me', 'www.tarasovs.me'],
};
