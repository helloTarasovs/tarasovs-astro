// Runs in front of the static site (wrangler.jsonc "main"), for HTML routes only (see run_worker_first).
// Visitors from the US get the pages without the EN / UA switcher in the header; everyone else gets the files
// unchanged. hreflang links in <head> and the sitemap alternates stay for all visitors and crawlers.
const HIDE_SWITCHER_IN = new Set(['US']);

export default {
  async fetch(request, env) {
    const response = await env.ASSETS.fetch(request);
    const country = request.cf?.country;
    const isHtml = (response.headers.get('content-type') ?? '').includes('text/html');
    if (!isHtml || !HIDE_SWITCHER_IN.has(country)) return response;

    const html = new HTMLRewriter()
      .on('nav.lang-switch', { element: (el) => el.remove() })
      .transform(response);
    // The body differs from the file now: drop the file's ETag so a browser never revalidates one
    // variant against the other.
    const out = new Response(html.body, html);
    out.headers.delete('etag');
    return out;
  },
};
