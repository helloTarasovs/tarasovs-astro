// Which /ua/ pages exist in src/pages/ua/. hreflang and the switcher only point at pages that are built,
// so an EN page never links to a UA page that is not there yet.
const files = Object.keys(import.meta.glob('/src/pages/ua/**/*.astro'));

const UA_PATHS = new Set(
  files.map((f) => f.replace('/src/pages', '').replace(/(\/index)?\.astro$/, '/').replace(/\/+$/, '/')),
);

// EN pages always exist; UA pages only if their file does.
export const pageExists = (path: string) => !path.startsWith('/ua/') || UA_PATHS.has(path);

export const hasUaSite = UA_PATHS.has('/ua/');
