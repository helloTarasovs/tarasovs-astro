// Which /ua/ pages exist in src/pages/ua/. hreflang and the switcher only point at pages that are built,
// so an EN page never links to a UA page that is not there yet.
const files = Object.keys(import.meta.glob('/src/pages/ua/**/*.astro'));

// Translated posts: src/content/ua-posts/<slug>.md is served at /ua/blog/<slug>/ (the blog index exists once there is one).
const postFiles = Object.keys(import.meta.glob('/src/content/ua-posts/*.md'));

const UA_PATHS = new Set([
  ...(postFiles.length ? ['/ua/blog/'] : []),
  ...postFiles.map((f) => `/ua/blog/${f.split('/').pop()!.replace(/\.md$/, '')}/`),
  ...files.map((f) => f.replace('/src/pages', '').replace(/(\/index)?\.astro$/, '/').replace(/\/+$/, '/')),
]);

// EN pages always exist; UA pages only if their file does.
export const pageExists = (path: string) => !path.startsWith('/ua/') || UA_PATHS.has(path);

export const hasUaSite = UA_PATHS.has('/ua/');
