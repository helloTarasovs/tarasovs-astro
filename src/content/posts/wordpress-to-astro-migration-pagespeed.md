---
title: "We Moved Our Agency Site From WordPress to Astro. Mobile PageSpeed Went From 57 to 99."
slug: "wordpress-to-astro-migration-pagespeed"
pubDate: "2026-10-01T08:00:00Z"
updatedDate: "2026-10-01T08:00:00Z"
excerpt: "Real before-and-after data from migrating tarasovs.me from WordPress and Elementor to Astro on Cloudflare: page weight down by 87–91%, mobile LCP down from 8.3–17.6 seconds to 1.4–2.0 seconds, and the SEO checks behind the cutover."
categories: ["insights"]
tags: ["astro", "wordpress", "cloudflare", "core-web-vitals", "site-migration"]
cover:
  src: "/wp-content/uploads/2026/10/wordpress-to-astro-migration.webp"
  alt: "Illustration of a WordPress site tangled in plugins and cables migrating to a clean, fast Astro site on a global edge network"
  width: 1254
  height: 1254
seo:
  title: "WordPress to Astro Migration: PageSpeed 57 to 99"
  description: "We migrated tarasovs.me from WordPress and Elementor to Astro on Cloudflare. Mobile PageSpeed rose from 57 to 99 and page weight fell about 90%."
  canonical: "/wordpress-to-astro-migration-pagespeed/"
  robots: "index, follow"
  ogImage: "/wp-content/uploads/2026/10/wordpress-to-astro-migration.webp"
jsonld:
  - {"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"How much faster did the site get after moving from WordPress to Astro?","acceptedAnswer":{"@type":"Answer","text":"Across four mobile tests, Lighthouse performance moved from 57–66 on WordPress to 99–100 on Astro. Mobile LCP dropped from 8.3–17.6 seconds to 1.4–2.0 seconds, and page weight fell by 87–91%."}},{"@type":"Question","name":"Did the migration change any URLs?","acceptedAnswer":{"@type":"Answer","text":"Every URL was accounted for. The production sitemap had 211 URLs and the Astro sitemap had 212. Of those, 206 matched exactly; five legacy addresses received intentional 301 redirects, and six new archive or project URLs were added."}},{"@type":"Question","name":"Will the faster Lighthouse scores improve Google rankings?","acceptedAnswer":{"@type":"Answer","text":"The Lighthouse results are lab data and do not prove a ranking change. Google reports Core Web Vitals from real-user field data, and tarasovs.me does not currently have enough CrUX data to measure that impact. The immediate gains are speed, reliability and a better visitor experience."}},{"@type":"Question","name":"Why was the WordPress site slow if Cloudflare already cached it?","acceptedAnswer":{"@type":"Answer","text":"Cached HTML was delivered quickly, but the browser still waited on render-blocking theme CSS, jQuery, Elementor scripts and icon fonts. Requests that missed the cache reached a strained origin server: real-user TTFB at the 75th percentile was 754 ms and 8.5% of responses over 30 days were 5xx errors."}}]}
---
<style>
.ta-post {
--surface: #f8f7ff;
--elevated: #f0eef9;
--hover: #ede9fe;
--text: #0f0a1e;
--text-2: #4b4466;
--text-3: #9490a8;
--border: #e4e0f0;
--border-a: #7C3AED;
--stat-clr: #7C3AED;
--shadow: 0 4px 24px rgba(0,0,0,0.07);
--glow: 0 0 40px rgba(124,58,237,0.10);
--qa-bg: #faf9ff;
--qa-border: #e4e0f0;
--accent: #7C3AED;
--accent-bright: #A855F7;
--accent-soft: #6D28D9;
--radius-sm: 10px;
--radius-md: 16px;
--radius-lg: 24px;
--space-xs: 8px;
--space-sm: 16px;
--space-md: 24px;
--space-lg: 36px;
--space-xl: 56px;
color: var(--text);
font-family: inherit;
font-size: 16px;
line-height: 1.75;
}
body.dark-scheme .ta-post {
--surface: #130F24;
--elevated: #1C1535;
--hover: #231A42;
--text: #F8F7FF;
--text-2: #B8B0D4;
--text-3: #7B7399;
--border: #2D2250;
--border-a: #5B21B6;
--stat-clr: #A855F7;
--shadow: 0 4px 24px rgba(0,0,0,0.40);
--glow: 0 0 60px rgba(168,85,247,0.25);
--qa-bg: #130F24;
--qa-border: #2D2250;
}
.ta-post *,
.ta-post *::before,
.ta-post *::after { box-sizing: border-box; }
.ta-qa {
background: var(--qa-bg);
border: 1px solid var(--qa-border);
border-left: 4px solid var(--accent);
border-radius: var(--radius-md);
padding: var(--space-lg);
margin: 0 0 var(--space-xl);
box-shadow: var(--shadow);
}
.ta-qa-label,
.ta-toc-label,
.ta-cta-label {
font-size: 12px;
font-weight: 700;
text-transform: uppercase;
letter-spacing: .12em;
color: var(--accent);
margin-bottom: 12px;
}
.ta-qa p {
color: var(--text);
line-height: 1.75;
margin: 0 0 12px;
}
.ta-qa p:last-child { margin-bottom: 0; }
.ta-qa strong { color: var(--text); font-weight: 750; }
.ta-stats {
display: grid;
grid-template-columns: repeat(4, minmax(0, 1fr));
gap: 12px;
margin: 0 0 var(--space-xl);
}
.ta-stat {
min-height: 148px;
display: flex;
flex-direction: column;
justify-content: center;
text-align: center;
background: var(--surface);
border: 1px solid var(--border);
border-radius: var(--radius-md);
padding: 20px 16px;
transition: border-color .2s, box-shadow .2s, transform .2s;
}
.ta-stat:hover {
border-color: var(--border-a);
box-shadow: var(--glow);
transform: translateY(-2px);
}
.ta-stat-number {
color: var(--stat-clr);
font-size: clamp(30px, 4vw, 46px);
font-weight: 800;
letter-spacing: -.04em;
line-height: 1;
margin-bottom: 10px;
}
.ta-stat-label {
color: var(--text-2);
font-size: 12px;
line-height: 1.45;
}
.ta-toc {
background: var(--surface);
border: 1px solid var(--border);
border-radius: var(--radius-md);
padding: var(--space-lg);
margin: 0 0 var(--space-xl);
}
.ta-toc-label { color: var(--text-3); }
.ta-toc-list {
margin: 0;
padding-left: 22px;
columns: 2;
column-gap: 48px;
}
.ta-toc-list li {
color: var(--accent);
padding: 3px 0;
break-inside: avoid;
}
.ta-toc-list a {
color: var(--accent);
font-size: 14px;
text-decoration: none;
}
.ta-toc-list a:hover { color: var(--accent-bright); }
.ta-body h2,
.ta-faq > h2 {
color: var(--text);
font-size: clamp(30px, 4vw, 42px);
font-weight: 800;
letter-spacing: -.035em;
line-height: 1.18;
margin: var(--space-xl) 0 var(--space-md);
scroll-margin-top: 90px;
}
.ta-body h3 {
color: var(--text);
font-size: clamp(21px, 2.5vw, 28px);
font-weight: 750;
line-height: 1.3;
margin: var(--space-lg) 0 var(--space-sm);
}
.ta-body h3::before {
content: '';
display: inline-block;
width: 4px;
height: .95em;
margin-right: 12px;
vertical-align: -.02em;
border-radius: 2px;
background: var(--accent);
}
.ta-body p {
color: var(--text);
line-height: 1.82;
margin: 0 0 var(--space-md);
}
.ta-body strong { color: var(--text); font-weight: 750; }
.ta-body a,
.ta-faq a {
color: var(--accent);
text-decoration: underline;
text-decoration-color: var(--border-a);
text-underline-offset: 3px;
}
.ta-body a:hover,
.ta-faq a:hover { color: var(--accent-bright); }
.ta-body ul,
.ta-body ol {
display: flex;
flex-direction: column;
gap: 8px;
color: var(--text);
margin: 0 0 var(--space-md);
padding-left: 24px;
}
.ta-body li { color: var(--text); line-height: 1.72; }
.ta-body li::marker { color: var(--accent); font-weight: 700; }
.ta-note {
background: var(--elevated);
border-left: 3px solid var(--accent-soft);
border-radius: 0 var(--radius-sm) var(--radius-sm) 0;
color: var(--text-2);
font-size: 14px;
line-height: 1.7;
padding: 18px 22px;
margin: var(--space-lg) 0;
}
.ta-table-wrap {
overflow-x: auto;
margin: var(--space-lg) 0 var(--space-xl);
border: 1px solid var(--border);
border-radius: var(--radius-md);
box-shadow: var(--shadow);
}
.ta-post .ta-table {
width: 100%;
min-width: 680px;
border-collapse: collapse;
font-size: 14px;
}
.ta-post .ta-table thead tr { background: var(--elevated); }
.ta-post .ta-table th,
.ta-post table.ta-table th {
padding: 16px 22px !important;
text-align: left !important;
font-weight: 700 !important;
font-size: 12px !important;
text-transform: uppercase;
letter-spacing: .08em;
color: var(--accent) !important;
border: 0 !important;
border-bottom: 1px solid var(--border-a) !important;
vertical-align: middle !important;
}
.ta-post .ta-table td,
.ta-post table.ta-table td {
padding: 16px 22px !important;
color: var(--text) !important;
background: var(--surface);
border: 0 !important;
border-bottom: 1px solid var(--border) !important;
line-height: 1.58 !important;
text-align: left !important;
vertical-align: top !important;
}
.ta-post .ta-table tr:last-child td { border-bottom: 0 !important; }
.ta-post .ta-table tbody tr:hover td { background: var(--hover); }
.ta-post .ta-table .ta-row-label { color: var(--text-2) !important; font-weight: 700; }
.ta-stages {
display: grid;
grid-template-columns: repeat(3, minmax(0, 1fr));
gap: 12px;
margin: var(--space-lg) 0 var(--space-xl);
}
.ta-stage {
position: relative;
overflow: hidden;
background: var(--surface);
border: 1px solid var(--border);
border-radius: var(--radius-md);
padding: var(--space-md);
}
.ta-stage::before {
content: '';
position: absolute;
top: 0;
left: 0;
right: 0;
height: 3px;
background: linear-gradient(90deg, var(--accent), var(--accent-bright));
}
.ta-stage-number {
color: var(--accent);
font-size: 11px;
font-weight: 700;
letter-spacing: .1em;
text-transform: uppercase;
margin-bottom: 6px;
}
.ta-stage-title {
color: var(--text);
font-size: 20px;
font-weight: 750;
line-height: 1.25;
margin-bottom: 10px;
}
.ta-stage p {
color: var(--text-2);
font-size: 14px;
line-height: 1.62;
margin: 0;
}
.ta-code {
position: relative;
overflow-x: auto;
background: #0D0A18;
border: 1px solid #2D2250;
border-radius: var(--radius-md);
color: #EDE9FE;
font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
font-size: 13px;
line-height: 1.65;
margin: var(--space-md) 0 var(--space-lg);
padding: 22px;
white-space: pre;
}
.ta-actions {
display: grid;
grid-template-columns: repeat(4, minmax(0, 1fr));
gap: 12px;
margin: var(--space-lg) 0 var(--space-xl);
}
.ta-action {
background: var(--surface);
border: 1px solid var(--border);
border-radius: var(--radius-md);
padding: 22px;
}
.ta-action-title {
color: var(--accent);
font-size: 15px;
font-weight: 750;
padding-bottom: 10px;
margin-bottom: 12px;
border-bottom: 1px solid var(--border);
}
.ta-action ul {
list-style: none;
padding: 0;
margin: 0;
gap: 8px;
}
.ta-action li {
color: var(--text-2);
font-size: 13px;
line-height: 1.55;
padding-left: 14px;
position: relative;
}
.ta-action li::before {
content: ' - ';
position: absolute;
left: 0;
color: var(--accent-soft);
}
.ta-faq {
margin-top: var(--space-xl);
padding-top: var(--space-lg);
border-top: 1px solid var(--border);
}
.ta-faq > h2 { margin-top: 0; }
.ta-faq-list {
display: flex;
flex-direction: column;
gap: 8px;
}
.ta-faq-item {
background: var(--surface);
border: 1px solid var(--border);
border-radius: var(--radius-md);
padding: 22px 26px;
transition: border-color .2s, background .2s;
}
.ta-faq-item:hover { border-color: var(--border-a); background: var(--hover); }
.ta-faq-question {
color: var(--text);
font-weight: 750;
line-height: 1.45;
margin: 0 0 8px;
}
.ta-faq-answer {
color: var(--text-2);
font-size: 14px;
line-height: 1.7;
margin: 0;
}
.ta-sources {
background: var(--elevated);
border-radius: var(--radius-md);
padding: var(--space-md);
margin-top: var(--space-xl);
}
.ta-sources h2 {
font-size: 22px;
margin: 0 0 14px;
}
.ta-sources ul { margin-bottom: 0; }
.ta-sources li { font-size: 14px; color: var(--text-2); }
.ta-cta {
position: relative;
overflow: hidden;
text-align: center;
background: var(--surface);
border: 1px solid var(--border-a);
border-radius: var(--radius-lg);
padding: var(--space-xl) var(--space-lg);
margin-top: var(--space-xl);
box-shadow: var(--glow);
}
.ta-cta::before {
content: '';
position: absolute;
top: -100px;
right: -100px;
width: 340px;
height: 340px;
background: radial-gradient(circle, rgba(168,85,247,.16), transparent 70%);
pointer-events: none;
}
.ta-cta-title {
position: relative;
color: var(--text);
font-size: clamp(26px, 4vw, 38px);
font-weight: 800;
letter-spacing: -.03em;
line-height: 1.2;
margin: 0 0 14px;
}
.ta-cta-text {
position: relative;
max-width: 620px;
color: var(--text-2);
line-height: 1.7;
margin: 0 auto 24px;
}
.ta-cta-btn,
a.ta-cta-btn {
position: relative;
display: inline-block;
background: var(--accent) !important;
color: #fff !important;
font-size: 15px;
font-weight: 750;
line-height: 1;
padding: 16px 30px;
border: 0 !important;
border-radius: 14px;
text-decoration: none !important;
box-shadow: none;
transition: background .2s, box-shadow .2s, transform .15s;
}
.ta-cta-btn:hover,
a.ta-cta-btn:hover {
background: var(--accent-bright) !important;
color: #fff !important;
box-shadow: 0 0 30px rgba(168,85,247,.4);
transform: translateY(-1px);
}
@media (max-width: 900px) {
.ta-stats,
.ta-actions { grid-template-columns: repeat(2, minmax(0, 1fr)); }
}
@media (max-width: 768px) {
.ta-toc-list { columns: 1; }
.ta-stages { grid-template-columns: 1fr; }
.ta-qa,
.ta-toc { padding: 24px; }
.ta-cta { padding: 40px 24px; }
}
@media (max-width: 520px) {
.ta-stats,
.ta-actions { grid-template-columns: 1fr; }
.ta-stat { min-height: 126px; }
.ta-faq-item { padding: 20px; }
.ta-code { font-size: 12px; padding: 18px; }
}
.ta-post pre.ta-code {
background: #0d0a18 !important;
color: #f5f3ff !important;
}
.ta-post pre.ta-code > code {
display: block;
padding: 0 !important;
border: 0 !important;
border-radius: 0 !important;
background: transparent !important;
color: #f5f3ff !important;
-webkit-text-fill-color: #f5f3ff !important;
font: inherit !important;
line-height: inherit !important;
white-space: inherit !important;
opacity: 1 !important;
text-shadow: none !important;
}
.ta-body > p:last-child { margin-top: var(--space-md); }
</style>
<div class="ta-post">
<div class="ta-qa">
<div class="ta-qa-label">Quick Answer</div>
<p>We rebuilt tarasovs.me on Astro and moved it from WordPress hosting to Cloudflare Workers. On the same four pages, measured the same morning, mobile Lighthouse performance rose from <strong>57 to 99</strong> on the home page and to <strong>100</strong> on the other three. Mobile LCP dropped from <strong>8.3–17.6 seconds</strong> to <strong>1.4–2.0 seconds</strong>, and page weight fell by <strong>87–91%</strong>. Every existing URL was either preserved exactly or assigned an intentional 301 redirect.</p>
<p>This post shows the raw numbers, what caused the old site to be slow, how we kept SEO intact, and what the lab tests cannot tell you yet.</p>
</div>

<section class="psi-compare" aria-labelledby="psi-title">
<div class="psi-head">
<p class="psi-eyebrow">WORDPRESS → ASTRO</p>
<h2 class="psi-title" id="psi-title">Mobile PageSpeed: 57 → 99</h2>
<p class="psi-lead">The same homepage, tested on mobile before and after the migration.</p>
</div>
<div class="psi-grid">
<div class="psi-card psi-card--before">
<div class="psi-card-top">
<div><p class="psi-label">BEFORE</p><p class="psi-platform">WordPress + Elementor</p></div>
<p class="psi-score"><span class="psi-score-num">57</span><span class="psi-score-name">Performance</span></p>
</div>
<figure class="psi-shot">
<a href="/images/blog/wordpress-to-astro/wordpress-pagespeed-mobile-57.webp"><img src="/images/blog/wordpress-to-astro/wordpress-pagespeed-mobile-57.webp" width="1708" height="1346" alt="Google PageSpeed Insights mobile result showing a performance score of 57 for the WordPress and Elementor homepage" loading="lazy" decoding="async"></a>
<figcaption>Mobile performance before migration</figcaption>
</figure>
<ul class="psi-chips" aria-label="Key metrics"><li>LCP <b>17.6 s</b></li><li>Page weight <b>3,130 KB</b></li></ul>
</div>
<div class="psi-arrow" aria-hidden="true"><svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false"><path d="M5 12h14M13 6l6 6-6 6"/></svg></div>
<div class="psi-card psi-card--after">
<div class="psi-card-top">
<div><p class="psi-label">AFTER</p><p class="psi-platform">Astro + Cloudflare</p></div>
<p class="psi-score"><span class="psi-score-num">99</span><span class="psi-score-name">Performance</span></p>
</div>
<figure class="psi-shot">
<a href="/images/blog/wordpress-to-astro/astro-pagespeed-mobile-99.webp"><img src="/images/blog/wordpress-to-astro/astro-pagespeed-mobile-99.webp" width="1664" height="1346" alt="Google PageSpeed Insights mobile result showing a performance score of 99 for the Astro and Cloudflare homepage" loading="lazy" decoding="async"></a>
<figcaption>Mobile performance after migration</figcaption>
</figure>
<ul class="psi-chips" aria-label="Key metrics"><li>LCP <b>2.0 s</b></li><li>Page weight <b>350 KB</b></li></ul>
</div>
</div>
</section>

<div class="ta-stats">
<div class="ta-stat">
<div class="ta-stat-number">99–100</div>
<div class="ta-stat-label">mobile Lighthouse performance across four pages, up from 57–66</div>
</div>
<div class="ta-stat">
<div class="ta-stat-number">87–91%</div>
<div class="ta-stat-label">lower page weight on mobile</div>
</div>
<div class="ta-stat">
<div class="ta-stat-number">1.4–2.0 s</div>
<div class="ta-stat-label">mobile LCP, down from 8.3–17.6 s</div>
</div>
<div class="ta-stat">
<div class="ta-stat-number">0 ms</div>
<div class="ta-stat-label">mobile Total Blocking Time, down from 50–170 ms</div>
</div>
</div>
<nav class="ta-toc" aria-label="Table of contents">
<div class="ta-toc-label">In this article</div>
<ol class="ta-toc-list">
<li><a href="#ta-the-before-and-after-numbers">The before and after numbers</a></li>
<li><a href="#ta-why-the-wordpress-site-was-slow">Why the WordPress site was slow</a></li>
<li><a href="#ta-the-part-the-lab-tests-do-not-show">The part the lab tests do not show</a></li>
<li><a href="#ta-how-we-kept-seo-intact">How we kept SEO intact</a></li>
<li><a href="#ta-the-cutover-checks-that-prevented-an-seo">The cutover checks that prevented an SEO mistake</a></li>
<li><a href="#ta-what-we-moved-and-what-we-left-behind">What we moved and what we left behind</a></li>
<li><a href="#ta-what-became-simpler-and-what-did-not">What became simpler - and what did not</a></li>
<li><a href="#ta-what-we-are-monitoring-after-launch">What we are monitoring after launch</a></li>
<li><a href="#ta-limits-of-these-numbers">Limits of these numbers</a></li>
<li><a href="#ta-should-you-do-the-same">Should you do the same?</a></li>
<li><a href="#ta-faq">WordPress to Astro migration FAQ</a></li>
</ol>
</nav>
<div class="ta-body">

<h2 id="ta-the-before-and-after-numbers">The before and after numbers</h2>


Both sets of tests ran on October 1, 2026 in PageSpeed Insights (Lighthouse, mobile emulates a mid-range phone on slow 4G). The WordPress run was between 07:51 and 08:15. The Astro run was between 10:43 and 10:49, after the DNS switch.

### Mobile

<div class="ta-table-wrap">
<table class="ta-table">
<thead>
<tr><th>Page</th><th>Performance</th><th>LCP</th><th>First Contentful Paint</th><th>Page weight</th></tr>
</thead>
<tbody>
<tr><td>Home</td><td>57 → 99</td><td>17.6 s → 2.0 s</td><td>7.1 s → 1.0 s</td><td>3,130 KB → 350 KB</td></tr>
<tr><td>GEO service page</td><td>60 → 100</td><td>9.0 s → 1.4 s</td><td>4.4 s → 1.0 s</td><td>1,122 KB → 111 KB</td></tr>
<tr><td>Blog post</td><td>66 → 100</td><td>8.3 s → 1.4 s</td><td>3.8 s → 1.0 s</td><td>1,192 KB → 110 KB</td></tr>
<tr><td>Framer service page</td><td>65 → 100</td><td>9.2 s → 1.4 s</td><td>3.6 s → 1.0 s</td><td>1,325 KB → 169 KB</td></tr>
</tbody>
</table>
</div>

### Desktop

<div class="ta-table-wrap">
<table class="ta-table">
<thead>
<tr><th>Page</th><th>Performance</th><th>LCP</th></tr>
</thead>
<tbody>
<tr><td>Home</td><td>82 → 100</td><td>2.0 s → 0.4 s</td></tr>
<tr><td>GEO service page</td><td>94 → 100</td><td>1.0 s → 0.4 s</td></tr>
<tr><td>Blog post</td><td>94 → 100</td><td>1.2 s → 0.4 s</td></tr>
<tr><td>Framer service page</td><td>97 → 100</td><td>1.2 s → 0.4 s</td></tr>
</tbody>
</table>
</div>

Other scores moved too. Best Practices went from 81 to 100 on every page. Total Blocking Time went from between 50 and 170 ms to 0 ms on mobile. Layout shift on the desktop home page went from 0.155 to 0.001. The blog post's SEO score went from 92 to 100 after we fixed six links with vague anchor text.

The desktop numbers show why this problem is easy to miss. The old site looked fine on a laptop. Mobile visitors on a normal connection waited 8 to 17 seconds for the main content.


<h2 id="ta-why-the-wordpress-site-was-slow">Why the WordPress site was slow</h2>


The server was not the problem in these tests. Cloudflare served cached HTML in 10 to 20 ms on both versions. The delay happened after the HTML arrived.

On mobile, the largest element waited 1.4 to 2.8 seconds just to render. Lighthouse estimated up to 4.5 seconds of savings from render-blocking files alone. The browser had to download and parse all of this before it could draw the page:

- The theme stylesheet (93 KB) plus Bootstrap and Elementor CSS
- jQuery and jQuery Migrate
- Three icon fonts totaling about 390 KB, used for a handful of icons
- Google Fonts loaded from a third-party domain
- A captcha script on every page, not just pages with forms

The home page also shipped portfolio images at 1920 px wide into small grid cards, which added 680 to 795 KB that nobody could see.

None of this was unusual. It is a normal WordPress site built with a commercial theme and a page builder. That is the point: the default setup carries weight you pay for on every page view.


<h2 id="ta-the-part-the-lab-tests-do-not-show">The part the lab tests do not show</h2>


PageSpeed tests a cached copy. Real visitors did not always get one. Cloudflare's real-user data for the week before the migration showed a different picture:

- **Time to First Byte** at the 75th percentile was **754 ms**, and 64% of measurements were rated Poor.
- Only **18% of requests** were served from Cloudflare's cache. The rest went to the origin server.
- Over 30 days, **8.5% of all responses were 5xx errors**, almost 23,000 of them "503 Service Unavailable".

Automated traffic was a major contributor. In the same 30 days, `/wp-cron.php` received 19,500 requests and `/wp-login.php` received 16,300. The home page received 11,900. Requests to the WordPress runtime repeatedly triggered PHP processing on the origin, leaving fewer resources for real visitors.

A static site removes that whole layer. There is no PHP and no login page to attack. Requests for `/wp-login.php` now get a 404 from Cloudflare's edge without touching any server. We will publish the real-user numbers after two to four weeks of data. We expect the server side to be the bigger story.


<h2 id="ta-how-we-kept-seo-intact">How we kept SEO intact</h2>


Speed means little if the migration loses rankings. We treated URLs as the main constraint.

1. **We built a URL map before writing any code.** We exported 204 URLs with performance data from Google Search Console, compared them with the 211 URLs in the production XML sitemap, and marked each address as keep, redirect or remove. Three search-active articles were missing from the sitemap, and the portfolio sitemap returned a 404. We only found that because we compared the two sources.
2. **We compared both sitemaps, not just their totals.** The WordPress sitemap had 211 URLs and the final Astro sitemap had 212. Of those, 206 matched exactly. Five legacy addresses received intentional redirects, while six new archive or project URLs were added.
3. **We preserved paths and trailing slashes** for the pages that stayed. We also kept the blog index at `/category/insights/` because that is where WordPress already pointed.
4. **We carried over 13 redirects**, including 10 existing rules from the WordPress Redirection plugin. One of them handled 345 visits to an old article. Missing it would have broken a page with real traffic.
5. **We kept titles, meta descriptions, canonicals and structured data** by exporting them from Yoast through the WordPress REST API, not by retyping them.
6. **We ran a script after every build** that compares the built site against the URL map and flags any missing page or broken redirect.


<h2 id="ta-the-cutover-checks-that-prevented-an-seo">The cutover checks that prevented an SEO mistake</h2>


The most dangerous migration problems were not visible in Lighthouse. They were small routing and indexing details that could have affected the whole site.

### Keep staging out of Google without blocking production

The staging site needed a site-wide `noindex`, but the same build would later run on the production domain. A generic header rule could have carried `X-Robots-Tag: noindex` onto `tarasovs.me` during the domain switch.

We limited the rule to the temporary hostname:

<pre class="ta-code"><code>https://:project.:subdomain.workers.dev/*
  X-Robots-Tag: noindex</code></pre>

After launch, we checked the home page, a dispensary profile and the highest-impression pages with `curl -I`. The `workers.dev` version still returned `noindex`; the production domain did not.

### Crawl the production output, not only the home page

Before the DNS switch, every one of the 212 sitemap URLs returned `200`. We also found zero canonical mismatches. The same checks covered titles, H1s, meta robots directives and the `ProfilePage` structured data used by all 132 dispensary profiles.

### Preserve old sitemap entry points

WordPress and SEO plugins expose several common sitemap addresses. The new canonical sitemap is `/sitemap-index.xml`, but both `/sitemap.xml` and `/sitemap_index.xml` now redirect to it with a `301`. `robots.txt` points directly to the canonical version.

### Consolidate both hostnames at Cloudflare's edge

`www.tarasovs.me` redirects to `https://tarasovs.me` with a permanent `301`, while preserving the path and query string. We verified that the response no longer included WordPress's `X-Redirect-By` header. That matters because the redirect no longer depends on the old origin staying online.

These checks are now part of the deployment checklist, not one-time launch tasks.


<h2 id="ta-what-we-moved-and-what-we-left-behind">What we moved and what we left behind</h2>


- 41 blog posts, 13 case studies and 132 dispensary profiles from our NY Dispensary Visibility Index were exported through the WordPress REST API into content files.
- Of 4,419 files in the WordPress uploads folder, the site actually referenced 167 (23 MB). The other 4,252 files (694 MB) were resized copies and unused uploads. We archived them instead of deploying them.
- Content is now edited as Markdown files in a Git repository. Every push builds and deploys the site automatically.

We used Claude Code for most of the build and wrote the export and check scripts with it. We planned the migration for two days. It took five, mostly because the service pages and the dispensary directory needed to be rebuilt by hand.


<h2 id="ta-what-became-simpler-and-what-did-not">What became simpler - and what did not</h2>


The new site has no PHP runtime, database, plugin dashboard or public login endpoint. Content changes are versioned in Git, a failed build does not replace the live site, and a previous deployment can be restored without recovering a database backup.

That does not make Astro maintenance-free. Dependencies still need updates, builds still need testing, and dynamic features need a deliberate replacement. Forms, comments, on-site search, customer accounts and ecommerce do not appear automatically because the pages are static.

For this site, that trade-off works because a small technical team manages the content. A marketing team that publishes daily and depends on visual editing would need a headless CMS or should stay on WordPress. The migration decision should be based on the editing workflow, not on a Lighthouse score alone.


<h2 id="ta-what-we-are-monitoring-after-launch">What we are monitoring after launch</h2>


The lab comparison is complete; the migration result is not. We saved a pre-launch baseline and will compare the following over the next 30 days:

- Google Search Console clicks, impressions, average position and indexed-page count, with the main comparison made at page level rather than from site-wide totals alone
- 404 requests and redirect hits, especially legacy URLs that previously received organic visits
- Cloudflare 5xx rate, cache behavior and real-user TTFB
- GA4 organic landing sessions, engagement and conversions
- CrUX Core Web Vitals if the site reaches the reporting threshold

We will update this post with the field results. Until then, the numbers above prove a large lab-performance and reliability improvement, not an organic ranking increase.


<h2 id="ta-limits-of-these-numbers">Limits of these numbers</h2>


We want the data to be useful, so here is what it does not prove.

- **One test run per page.** Lighthouse scores vary by a few points between runs. The size of the change is far larger than that variation, but individual numbers are not exact.
- **No ranking claim.** Lighthouse is lab data, while [Google's Core Web Vitals report](https://support.google.com/webmasters/answer/9205520) uses real-user field data. Our site does not currently have enough CrUX data to measure that effect. Faster pages improve the visitor experience, but this test does not prove a ranking change.
- **Analytics scripts load after interaction.** The lab test does not trigger them, so a real visitor downloads slightly more than the weights above.
- **The home page is at 99, not 100.** Its hero image still takes about 1.3 seconds to render on mobile. That is the next fix.


<h2 id="ta-should-you-do-the-same">Should you do the same?</h2>


Moving off WordPress makes sense when the site is mostly content that changes through a small team, when page builders and plugins are the source of the weight, and when bots keep the origin server busy. It makes less sense when non-technical editors depend on the WordPress admin every day, or when the site relies on plugins with no static equivalent, such as WooCommerce.

If you are not sure which group you are in, start with the measurements. Run PageSpeed on mobile for your top pages, open Cloudflare's or your host's error and cache statistics, and export your indexed URLs from Search Console. Those three data points will tell you whether a rebuild pays off before you write any code.

<section class="ta-faq" id="ta-faq">
<h2>WordPress to Astro migration FAQ</h2>
<div class="ta-faq-list">
<div class="ta-faq-item">
<p class="ta-faq-question">How much faster did the site get after moving from WordPress to Astro?</p>
<p class="ta-faq-answer">Across four mobile tests, Lighthouse performance moved from 57–66 on WordPress to 99–100 on Astro. Mobile LCP dropped from 8.3–17.6 seconds to 1.4–2.0 seconds, and page weight fell by 87–91%.</p>
</div>
<div class="ta-faq-item">
<p class="ta-faq-question">Did the migration change any URLs?</p>
<p class="ta-faq-answer">Every URL was accounted for. The production sitemap had 211 URLs and the Astro sitemap had 212. Of those, 206 matched exactly; five legacy addresses received intentional 301 redirects, and six new archive or project URLs were added.</p>
</div>
<div class="ta-faq-item">
<p class="ta-faq-question">Will the faster Lighthouse scores improve Google rankings?</p>
<p class="ta-faq-answer">The Lighthouse results are lab data and do not prove a ranking change. Google reports Core Web Vitals from real-user field data, and tarasovs.me does not currently have enough CrUX data to measure that impact. The immediate gains are speed, reliability and a better visitor experience.</p>
</div>
<div class="ta-faq-item">
<p class="ta-faq-question">Why was the WordPress site slow if Cloudflare already cached it?</p>
<p class="ta-faq-answer">Cached HTML was delivered quickly, but the browser still waited on render-blocking theme CSS, jQuery, Elementor scripts and icon fonts. Requests that missed the cache reached a strained origin server: real-user TTFB at the 75th percentile was 754 ms and 8.5% of responses over 30 days were 5xx errors.</p>
</div>
</div>
</section>

*Yurii Tarasov, Founder & SEO/GEO Strategist, Tarasovs Digital Agency*

</div>
<div class="ta-cta">
<div class="ta-cta-label">Tarasovs Digital Agency</div>
<div class="ta-cta-title">Planning a WordPress migration?</div>
<p class="ta-cta-text">We can audit the performance, URL inventory, redirect requirements and editing workflow before recommending a rebuild. The goal is to find out whether a migration will pay off before any development starts.</p>
<a href="/contact-us/" class="ta-cta-btn">Contact us about a migration audit →</a>
</div>
</div>
