// Runs in front of the static site (wrangler.jsonc "main"), for HTML routes only (see run_worker_first).
// 1. Marks every page with the consent model for the visitor's country: <html data-consent="optin"> where analytics
//    needs prior consent (EEA, UK, Switzerland, Ukraine, unknown countries), data-consent="optout" elsewhere.
//    components/Analytics.astro reads it; a page without the attribute (local dev, cached copy) is treated as opt-in.
// 2. Visitors from the US get the pages without the EN / UA switcher in the header.
// hreflang links in <head> and the sitemap alternates stay for all visitors and crawlers.
const HIDE_SWITCHER_IN = new Set(['US']);

// Prior consent required: EU member states, the rest of the EEA (IS, LI, NO), the UK, Switzerland and Ukraine.
const OPT_IN = new Set([
  'AT', 'BE', 'BG', 'HR', 'CY', 'CZ', 'DK', 'EE', 'FI', 'FR', 'DE', 'GR', 'HU', 'IE', 'IT', 'LV', 'LT', 'LU', 'MT',
  'NL', 'PL', 'PT', 'RO', 'SK', 'SI', 'ES', 'SE',
  'IS', 'LI', 'NO',
  'GB', 'CH', 'UA',
]);

export default {
  async fetch(request, env) {
    const response = await env.ASSETS.fetch(request);
    const isHtml = (response.headers.get('content-type') ?? '').includes('text/html');
    if (!isHtml) return response;

    const country = request.cf?.country;
    // Unknown, Tor (T1) and unrecognised (XX) countries get the strict model.
    const consent = country && country !== 'T1' && country !== 'XX' && !OPT_IN.has(country) ? 'optout' : 'optin';

    let rewriter = new HTMLRewriter().on('html', { element: (el) => el.setAttribute('data-consent', consent) });
    if (HIDE_SWITCHER_IN.has(country)) rewriter = rewriter.on('nav.lang-switch', { element: (el) => el.remove() });

    const html = rewriter.transform(response);
    // The body differs from the file now: drop the file's ETag so a browser never revalidates one
    // variant against another, and keep shared caches from serving one country's variant to another.
    const out = new Response(html.body, html);
    out.headers.delete('etag');
    out.headers.set('cache-control', 'private, no-cache');
    return out;
  },
};
