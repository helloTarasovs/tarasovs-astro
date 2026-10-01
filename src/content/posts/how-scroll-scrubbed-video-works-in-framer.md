---
title: "How Scroll-Scrubbed Video Works in Framer"
slug: "how-scroll-scrubbed-video-works-in-framer"
pubDate: "2026-09-05T16:26:18Z"
updatedDate: "2026-09-06T18:14:08Z"
excerpt: "Quick Answer Scroll-scrubbed video works by mapping the visitor’s scroll progress to…"
categories: ["framer","insights"]
cover:
  src: "/wp-content/uploads/2026/09/How-Scroll-Scrubbed-Video-Works-in-Framer.webp"
  width: 1254
  height: 1254
seo:
  title: "How Scroll-Scrubbed Video Works in Framer - Tarasovs Digital Agency"
  description: "Learn how scroll-scrubbed video works in Framer - from currentTime and sticky sections to encoding, mobile fallbacks, accessibility, and performance."
  canonical: "/how-scroll-scrubbed-video-works-in-framer/"
  robots: "index, follow"
  ogImage: "/wp-content/uploads/2026/09/How-Scroll-Scrubbed-Video-Works-in-Framer.webp"
jsonld:
  - {"@context":"https://schema.org","@type":"FAQPage","@id":"https://tarasovs.me/how-scroll-scrubbed-video-works-in-framer/#faq","mainEntityOfPage":{"@id":"https://tarasovs.me/how-scroll-scrubbed-video-works-in-framer/"},"mainEntity":[{"@type":"Question","name":"What is scroll-scrubbed video?","acceptedAnswer":{"@type":"Answer","text":"Scroll-scrubbed video is an interaction in which page scroll progress controls an HTML video's current time. Scrolling forward advances the clip, while scrolling backward moves it toward an earlier frame."}},{"@type":"Question","name":"How do I add a scroll-scrub video component to Framer?","acceptedAnswer":{"@type":"Answer","text":"In the Assets panel, open Code, create a code file, and paste the component source. Save the file, place ScrollScrubVideo on the canvas, then assign the clip, poster, optional mobile media, scroll distance, smoothing, focal point, and scene components in the Properties panel."}},{"@type":"Question","name":"Do I need GSAP ScrollTrigger to scrub video in Framer?","acceptedAnswer":{"@type":"Answer","text":"No. A Framer Code Component can combine native scrolling, CSS sticky positioning, requestAnimationFrame, and HTMLMediaElement.currentTime. ScrollTrigger can simplify progress and pinning, but video readiness, seeking, encoding, and mobile behavior still need separate handling."}},{"@type":"Question","name":"Why does scroll-scrubbed video stutter?","acceptedAnswer":{"@type":"Answer","text":"Common causes include long gaps between keyframes, assigning currentTime before metadata is ready, starting new seeks while the previous seek is active, repeatedly fetching the same clip, and using a file that is too large for the visitor's device or connection."}},{"@type":"Question","name":"How often should a scroll-scrub video have keyframes?","acceptedAnswer":{"@type":"Answer","text":"A practical starting point is one keyframe every 0.25–0.5 seconds. At 24 fps, a GOP value of 6 produces an interval of 0.25 seconds. The final encode should still be tested on the slowest mobile device the project supports."}},{"@type":"Question","name":"Does scroll-scrubbed video work on mobile?","acceptedAnswer":{"@type":"Answer","text":"It can, but it needs a mobile-specific encode, a poster fallback, coarse-pointer tuning, careful resize handling, and real tests in iOS Safari and Chrome Android. Desktop behavior alone is not enough evidence that the component is production-ready."}},{"@type":"Question","name":"Should a scroll-scrub video load as a Blob?","acceptedAnswer":{"@type":"Answer","text":"Blob-first loading removes network range requests during the later scrub because the whole transfer completes before the video is attached. The trade-off is that the visitor downloads the full file before the first video frame can appear, so clip length and file size must stay controlled."}},{"@type":"Question","name":"What should reduced-motion users see?","acceptedAnswer":{"@type":"Answer","text":"They should receive a coherent static version of the same story: readable text, meaningful poster frames, and captions where the visual sequence carries information. Simply stopping the video on an unexplained frame is not always sufficient."}}]}
  - {"@context":"https://schema.org","@type":"HowTo","@id":"https://tarasovs.me/how-scroll-scrubbed-video-works-in-framer/#howto","mainEntityOfPage":{"@id":"https://tarasovs.me/how-scroll-scrubbed-video-works-in-framer/"},"name":"How to add the scroll-scrub component to Framer","description":"Add a scroll-scrubbed video section to a Framer project: create a Code Component, paste the component source, place it on the page, assign the clip and poster, tune the scroll band and smoothing, and connect the scene overlays.","image":"https://tarasovs.me/wp-content/uploads/2026/09/How-Scroll-Scrubbed-Video-Works-in-Framer.webp","tool":[{"@type":"HowToTool","name":"Framer project with Code Components enabled"},{"@type":"HowToTool","name":"MP4 or WebM clip encoded with a short keyframe interval"},{"@type":"HowToTool","name":"Poster image taken from the first meaningful frame"}],"step":[{"@type":"HowToStep","position":1,"name":"Create a code file","text":"Open the Assets panel, select Code, and choose Create Code File. Name it ScrollScrubVideo.tsx.","url":"https://tarasovs.me/how-scroll-scrubbed-video-works-in-framer/#install"},{"@type":"HowToStep","position":2,"name":"Paste the component","text":"Delete the starter example, paste the current component source into ScrollScrubVideo.tsx, and save. Keep the default export and Framer imports unchanged.","url":"https://tarasovs.me/how-scroll-scrubbed-video-works-in-framer/#install"},{"@type":"HowToStep","position":3,"name":"Place it on the page","text":"Return to the canvas, find ScrollScrubVideo under Code Components, and drag one instance onto the page. Set its width to Fill.","url":"https://tarasovs.me/how-scroll-scrubbed-video-works-in-framer/#install"},{"@type":"HowToStep","position":4,"name":"Add media","text":"Select the component and upload the desktop Clip and Poster. Add a lighter Mobile clip and Mobile poster when mobile traffic matters.","url":"https://tarasovs.me/how-scroll-scrubbed-video-works-in-framer/#install"},{"@type":"HowToStep","position":5,"name":"Tune the movement","text":"Start with a 250vh Scroll band for a simple clip. For eight viewport-length text scenes, use about 900vh: one viewport stays pinned, while the remaining 800vh drives the scrub. Keep Smoothing near 0.20.","url":"https://tarasovs.me/how-scroll-scrubbed-video-works-in-framer/#install"},{"@type":"HowToStep","position":6,"name":"Connect the scenes","text":"Build every headline or CTA as a separate Framer component, remove its opaque Fill, and connect the instances to the Scenes array in display order.","url":"https://tarasovs.me/how-scroll-scrubbed-video-works-in-framer/#install"}]}
wpId: 230473
legacyUrl: "/how-scroll-scrubbed-video-works-in-framer/"
---
<style>
/* Tarasovs blog post: Scroll-Scrubbed Video in Framer
Suggested post title: How Scroll-Scrubbed Video Works: A Real-World Framer Implementation Guide
Published slug: /how-scroll-scrubbed-video-works-in-framer/
Suggested meta description: Learn how scroll-scrubbed video works in Framer, including scene overlays, safe loading, mobile fallbacks, keyframe encoding, and a live demo.
Elementor-ready: no html/head/body wrapper and no post header.
*/
.ta-post {
--surface: #f8f7ff;
--elevated: #f0eef9;
--hover: #ede9fe;
--text: #0f0a1e;
--text-2: #4b4466;
--text-3: #756f8d;
--border: #e4e0f0;
--border-a: #7c3aed;
--accent: #7c3aed;
--accent-2: #a855f7;
--accent-soft: #6d28d9;
--qa-bg: #faf9ff;
--qa-border: #e4e0f0;
--code-bg: #110d1e;
--code-text: #eee9ff;
--shadow: 0 4px 24px rgba(15, 10, 30, 0.07);
--glow: 0 0 40px rgba(124, 58, 237, 0.1);
color: var(--text);
font-family: Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
line-height: 1.75;
-webkit-font-smoothing: antialiased;
}
body.dark-scheme .ta-post {
--surface: #130f24;
--elevated: #1c1535;
--hover: #231a42;
--text: #f8f7ff;
--text-2: #b8b0d4;
--text-3: #938bab;
--border: #2d2250;
--border-a: #5b21b6;
--accent: #a855f7;
--accent-2: #c084fc;
--accent-soft: #8b5cf6;
--qa-bg: #130f24;
--qa-border: #2d2250;
--code-bg: #0b0814;
--code-text: #f4f0ff;
--shadow: 0 4px 24px rgba(0, 0, 0, 0.4);
--glow: 0 0 60px rgba(168, 85, 247, 0.25);
}
.ta-post,
.ta-post * {
box-sizing: border-box;
}
.ta-post p {
color: var(--text-2);
margin: 0 0 17px;
}
.ta-post p:last-child {
margin-bottom: 0;
}
.ta-media {
margin: 28px 0 36px;
}
.ta-media--square {
margin-left: auto;
margin-right: auto;
max-width: 760px;
}
.ta-media img {
border: 1px solid var(--border);
border-radius: 14px;
box-shadow: var(--shadow);
display: block;
height: auto;
width: 100%;
}
.ta-media figcaption {
color: var(--text-3);
font-size: 0.82rem;
line-height: 1.55;
margin-top: 10px;
text-align: center;
}
.ta-post strong {
color: var(--text);
font-weight: 700;
}
.ta-post a {
color: var(--accent);
text-decoration: underline;
text-decoration-color: var(--border-a);
text-underline-offset: 3px;
}
.ta-post a:hover {
color: var(--accent-2);
}
.ta-post code {
background: var(--elevated);
border: 1px solid var(--border);
border-radius: 5px;
color: var(--text);
font-family: ui-monospace, "SFMono-Regular", Consolas, monospace;
font-size: 0.9em;
padding: 1px 6px;
}
.ta-post pre {
background: var(--code-bg);
border: 1px solid var(--border-a);
border-radius: 14px;
box-shadow: var(--shadow);
color: var(--code-text);
margin: 0 0 24px;
overflow-x: auto;
padding: 20px 22px;
}
.ta-post pre code {
background: none;
border: 0;
color: inherit;
display: block;
font-size: 0.84rem;
line-height: 1.7;
min-width: max-content;
padding: 0;
}
.ta-post h2 {
color: var(--text);
font-size: clamp(1.55rem, 3vw, 2rem);
font-weight: 800;
letter-spacing: -0.02em;
line-height: 1.25;
margin: 48px 0 17px;
scroll-margin-top: 90px;
}
.ta-post h3 {
color: var(--text);
font-size: 1.2rem;
font-weight: 700;
line-height: 1.4;
margin: 30px 0 12px;
padding-left: 16px;
position: relative;
}
.ta-post h3::before {
background: linear-gradient(180deg, var(--accent), var(--accent-2));
border-radius: 2px;
content: "";
height: 1.05em;
left: 0;
position: absolute;
top: 0.2em;
width: 4px;
}
.ta-post ul,
.ta-post ol {
display: flex;
flex-direction: column;
gap: 7px;
margin: 0 0 18px;
padding-left: 1.45rem;
}
.ta-post li {
color: var(--text-2);
line-height: 1.68;
}
.ta-post ul li::marker {
color: var(--accent);
}
.ta-qa {
background: var(--qa-bg);
border: 1px solid var(--qa-border);
border-left: 4px solid var(--accent);
border-radius: 14px;
margin: 0 0 34px;
padding: 25px 28px;
}
.ta-qa__label {
color: var(--accent);
font-size: 0.75rem;
font-weight: 700;
letter-spacing: 0.1em;
margin-bottom: 10px;
text-transform: uppercase;
}
.ta-qa p {
color: var(--text);
}
.ta-toc {
background: var(--surface);
border: 1px solid var(--border);
border-radius: 14px;
margin: 0 0 42px;
padding: 23px 27px;
}
.ta-toc__label {
color: var(--text-3);
font-size: 0.8rem;
font-weight: 700;
letter-spacing: 0.09em;
margin-bottom: 11px;
text-transform: uppercase;
}
.ta-toc ol {
gap: 6px;
margin: 0;
padding-left: 1.3rem;
}
.ta-toc a {
font-size: 0.94rem;
text-decoration: none;
}
.ta-toc a:hover {
text-decoration: underline;
}
.ta-evidence {
display: grid;
gap: 12px;
grid-template-columns: repeat(3, 1fr);
margin: 24px 0 34px;
}
.ta-evidence__item,
.ta-step,
.ta-install__item,
.ta-risk {
background: var(--surface);
border: 1px solid var(--border);
border-radius: 14px;
padding: 20px;
}
.ta-evidence__label,
.ta-step__number,
.ta-install__number,
.ta-risk__number {
color: var(--accent);
font-size: 0.73rem;
font-weight: 800;
letter-spacing: 0.09em;
margin-bottom: 7px;
text-transform: uppercase;
}
.ta-evidence__title,
.ta-step__title,
.ta-install__title,
.ta-risk__title {
color: var(--text);
font-size: 1.03rem;
font-weight: 750;
line-height: 1.35;
margin-bottom: 7px;
}
.ta-evidence__item p,
.ta-step p,
.ta-install__item p,
.ta-risk p {
font-size: 0.88rem;
line-height: 1.6;
}
.ta-steps {
display: grid;
gap: 12px;
grid-template-columns: repeat(5, 1fr);
margin: 24px 0 34px;
}
.ta-step {
overflow: hidden;
position: relative;
}
.ta-step::before {
background: linear-gradient(90deg, var(--accent), var(--accent-2));
content: "";
height: 2px;
left: 0;
position: absolute;
right: 0;
top: 0;
}
.ta-install {
display: grid;
gap: 12px;
grid-template-columns: repeat(3, 1fr);
margin: 24px 0 34px;
}
.ta-install__item {
overflow: hidden;
position: relative;
}
.ta-install__item::before {
background: linear-gradient(90deg, var(--accent), var(--accent-2));
content: "";
height: 2px;
left: 0;
position: absolute;
right: 0;
top: 0;
}
.ta-risks {
display: grid;
gap: 12px;
grid-template-columns: repeat(2, 1fr);
margin: 24px 0 34px;
}
.ta-risk:hover,
.ta-evidence__item:hover,
.ta-install__item:hover,
.ta-step:hover {
border-color: var(--border-a);
box-shadow: var(--glow);
}
.ta-table-wrap {
border: 1px solid var(--border);
border-radius: 14px;
margin: 24px 0 34px;
overflow-x: auto;
}
.ta-post .ta-table,
.ta-post table.ta-table {
border-collapse: collapse;
font-size: 0.92rem;
width: 100%;
}
.ta-post .ta-table caption {
clip: rect(0 0 0 0);
height: 1px;
overflow: hidden;
position: absolute;
width: 1px;
}
.ta-post .ta-table thead tr {
background: var(--elevated);
}
.ta-post .ta-table th,
.ta-post table.ta-table th {
border: 0 !important;
border-bottom: 1px solid var(--border-a) !important;
color: var(--accent) !important;
font-size: 0.75rem !important;
font-weight: 750 !important;
letter-spacing: 0.06em;
padding: 15px 20px !important;
text-align: left !important;
text-transform: uppercase;
vertical-align: middle !important;
}
.ta-post .ta-table td,
.ta-post table.ta-table td {
border: 0 !important;
border-bottom: 1px solid var(--border) !important;
color: var(--text-2) !important;
line-height: 1.6 !important;
padding: 15px 20px !important;
text-align: left !important;
vertical-align: top !important;
}
.ta-post .ta-table tr:last-child td {
border-bottom: 0 !important;
}
.ta-post .ta-table tbody tr:hover td {
background: var(--hover);
}
.ta-post .ta-table .ta-table__label {
color: var(--text) !important;
font-weight: 700;
white-space: nowrap;
}
.ta-callout {
background: var(--elevated);
border-left: 3px solid var(--accent-soft);
border-radius: 0 12px 12px 0;
color: var(--text-2);
font-size: 0.93rem;
margin: 23px 0;
padding: 17px 20px;
}
.ta-callout strong {
display: block;
margin-bottom: 5px;
}
.ta-demo {
background: linear-gradient(135deg, var(--surface), var(--elevated));
border: 1px solid var(--border-a);
border-radius: 16px;
box-shadow: var(--glow);
margin: 28px 0 36px;
overflow: hidden;
padding: 28px 30px;
position: relative;
}
.ta-demo::after {
background: radial-gradient(circle, rgba(168, 85, 247, 0.18), transparent 70%);
content: "";
height: 220px;
pointer-events: none;
position: absolute;
right: -70px;
top: -100px;
width: 220px;
}
.ta-demo__label {
color: var(--accent);
font-size: 0.74rem;
font-weight: 800;
letter-spacing: 0.1em;
margin-bottom: 8px;
text-transform: uppercase;
}
.ta-post .ta-demo h3 {
margin: 0 0 10px;
}
.ta-demo p {
max-width: 760px;
}
.ta-demo__btn,
.ta-post a.ta-demo__btn {
background: var(--accent) !important;
background-image: none !important;
border: 0 !important;
border-radius: 10px;
color: #fff !important;
display: inline-block;
font-weight: 700;
margin-top: 4px;
padding: 12px 22px;
position: relative;
text-decoration: none !important;
transition: background 0.2s, box-shadow 0.2s, transform 0.15s;
z-index: 1;
}
.ta-demo__btn:hover,
.ta-demo__btn:focus,
.ta-post a.ta-demo__btn:hover,
.ta-post a.ta-demo__btn:focus {
background: var(--accent-2) !important;
background-image: none !important;
border-color: transparent !important;
box-shadow: 0 0 28px rgba(168, 85, 247, 0.32);
color: #fff !important;
-webkit-text-fill-color: #fff !important;
transform: translateY(-1px);
}
.ta-post a.ta-demo__btn::before,
.ta-post a.ta-demo__btn::after {
display: none !important;
}
.ta-post a.ta-demo__btn:focus-visible {
outline: 3px solid var(--text);
outline-offset: 3px;
}
.ta-checklist {
background: var(--surface);
border: 1px solid var(--border);
border-radius: 14px;
margin: 23px 0 34px;
padding: 22px 24px;
}
.ta-checklist ul {
list-style: none;
margin: 0;
padding: 0;
}
.ta-checklist li {
padding-left: 24px;
position: relative;
}
.ta-checklist li::before {
color: var(--accent);
content: "✓";
font-weight: 800;
left: 0;
position: absolute;
}
.ta-faq {
border-top: 1px solid var(--border);
margin-top: 48px;
padding-top: 4px;
}
.ta-faq__list {
display: flex;
flex-direction: column;
gap: 12px;
}
.ta-faq__item {
background: var(--surface);
border: 1px solid var(--border);
border-radius: 14px;
padding: 20px 24px;
}
.ta-faq__item:hover {
border-color: var(--border-a);
}
.ta-faq .ta-faq__q {
font-size: 1.05rem;
margin: 0 0 8px;
}
.ta-faq__a {
font-size: 0.93rem;
padding-left: 16px;
}
.ta-cta {
background: var(--surface);
border: 1px solid var(--border-a);
border-radius: 18px;
box-shadow: var(--glow);
margin-top: 48px;
overflow: hidden;
padding: 38px 40px;
position: relative;
text-align: center;
}
.ta-cta::before {
background: radial-gradient(circle, rgba(168, 85, 247, 0.16), transparent 70%);
content: "";
height: 280px;
pointer-events: none;
position: absolute;
right: -100px;
top: -120px;
width: 280px;
}
.ta-cta__label {
color: var(--accent);
font-size: 0.75rem;
font-weight: 750;
letter-spacing: 0.1em;
margin-bottom: 10px;
text-transform: uppercase;
}
.ta-post .ta-cta h3 {
font-size: 1.42rem;
margin: 0 0 10px;
padding: 0;
}
.ta-post .ta-cta h3::before {
display: none;
}
.ta-cta p {
margin: 0 auto 23px;
max-width: 590px;
}
.ta-cta__btn,
.ta-post a.ohio-widget.button.ta-cta__btn {
background: var(--accent) !important;
border: 0 !important;
border-radius: 10px;
color: #fff !important;
display: inline-block;
font-size: 1rem;
font-weight: 700;
padding: 14px 30px;
text-decoration: none !important;
transition: background 0.2s, box-shadow 0.2s, transform 0.15s;
}
.ta-cta__btn:hover,
.ta-post a.ohio-widget.button.ta-cta__btn:hover {
background: var(--accent-2) !important;
box-shadow: 0 0 30px rgba(168, 85, 247, 0.4);
color: #fff !important;
transform: translateY(-1px);
}
.ta-note {
color: var(--text-3) !important;
font-size: 0.81rem;
font-style: italic;
margin-top: 34px !important;
}
@media (max-width: 980px) {
.ta-install,
.ta-steps {
grid-template-columns: repeat(2, 1fr);
}
}
@media (max-width: 720px) {
.ta-evidence,
.ta-install,
.ta-risks,
.ta-steps {
grid-template-columns: 1fr;
}
.ta-qa,
.ta-toc,
.ta-faq__item,
.ta-demo {
padding: 20px;
}
.ta-cta {
padding: 30px 22px;
}
.ta-post .ta-table th,
.ta-post table.ta-table th,
.ta-post .ta-table td,
.ta-post table.ta-table td {
min-width: 150px;
padding: 13px 15px !important;
}
}
</style>
<div class="ta-post">
<div class="ta-qa">
<div class="ta-qa__label">Quick Answer</div>
<p><strong>Scroll-scrubbed video works by mapping the visitor's scroll progress to an HTML video's <code>currentTime</code>.</strong> Instead of playing from beginning to end on its own, the video moves forward or backward as the page moves. The real implementation challenge is not the mapping formula. It is making frame seeking responsive, loading the media without duplicate requests, handling iOS, and providing an accessible static experience when motion is reduced. The video must also be encoded for random seeking, with keyframes approximately every 0.25–0.5 seconds.</p>
<p>We took apart a live scroll-driven product page, traced the relevant production module, and then built an original <a href="/services/framer-development/">Framer Code Component</a> around the same general browser primitives: native scrolling, a sticky viewport, <code>requestAnimationFrame</code>, guarded seeking, and a poster-first fallback. You can also <a href="https://scrollscrubvideo.framer.website/" target="_blank" rel="noopener noreferrer">try the finished Framer demo</a>.</p>
</div>
<nav class="ta-toc" aria-label="Article contents">
<div class="ta-toc__label">In this guide</div>
<ol>
<li><a href="#example">The real site we examined</a></li>
<li><a href="#mechanics">How scroll-scrubbed video actually works</a></li>
<li><a href="#breaks">Six things that commonly break it</a></li>
<li><a href="#framer">Building the media layer in Framer</a></li>
<li><a href="#install">How to add the component to Framer</a></li>
<li><a href="#loading-race">Two loading races the implementation exposed</a></li>
<li><a href="#encoding">Preparing the video: keyframes and GOP size</a></li>
<li><a href="#accessibility">Accessibility beyond reduced motion</a></li>
<li><a href="#right-tool">When scroll-scrub is the right tool</a></li>
<li><a href="#faq">Frequently asked questions</a></li>
</ol>
</nav>
<figure class="ta-media ta-media--square">
<img src="/wp-content/uploads/2026/09/scroll-progress-video1.webp" alt="Scroll-scrubbed video in Framer with a glowing glass motion sculpture" loading="lazy">
</figure>
<h2 id="example">The real site we examined</h2>
<p>The reference was <a href="https://stacked-burger.higgsfield.app/" target="_blank" rel="noopener">STACKED</a>, a product story that unfolds through five scroll-driven visual scenes. From the outside it looks like the kind of experience that might use Canvas, an image sequence, GSAP ScrollTrigger, or a smooth-scroll library.</p>
<p>The production code showed a simpler core: native page scrolling and standard HTML <code>&lt;video&gt;</code> elements whose time is updated from the scroll position. We found no Canvas renderer, GSAP, ScrollTrigger, Lenis, WebCodecs, or sprite sequence in the relevant module.</p>
<h3>What we know, what we observed, and what we did not test</h3>
<p>Reverse-engineering claims become unreliable when confirmed code, browser observation, and inference are mixed together. We separated them before drawing conclusions.</p>
<div class="ta-evidence">
<div class="ta-evidence__item">
<div class="ta-evidence__label">Confirmed in code</div>
<div class="ta-evidence__title">The implementation details</div>
<p>Video is fetched as a Blob, attached through an object URL, and controlled through <code>currentTime</code>. The module waits for metadata, skips overlapping seeks, supports separate mobile media, and responds to reduced-motion preferences.</p>
</div>
<div class="ta-evidence__item">
<div class="ta-evidence__label">Observed in browser</div>
<div class="ta-evidence__title">The page structure</div>
<p>Five scenes use tall scroll bands with sticky inner content. The page keeps native scrolling rather than replacing it with a custom scroll engine.</p>
</div>
<div class="ta-evidence__item">
<div class="ta-evidence__label">Not verified</div>
<div class="ta-evidence__title">Performance on real devices</div>
<p>We did not claim the site's file sizes, Core Web Vitals, or real iOS and Android behavior because those measurements were not available from the code review alone.</p>
</div>
</div>
<div class="ta-callout"><strong>Ethical boundary</strong>We analyzed behavior and browser-level techniques, but did not copy or republish the site's minified implementation. The Framer component discussed below was written independently from first principles.</div>
<h2 id="mechanics">How scroll-scrubbed video actually works</h2>
<p>The effect is easier to reason about as a five-stage pipeline. Each stage solves a different problem; skipping one is why many prototypes feel smooth on a developer's laptop but fail on mobile.</p>
<div class="ta-steps">
<div class="ta-step">
<div class="ta-step__number">Step 1</div>
<div class="ta-step__title">Create a scroll band</div>
<p>A section taller than the viewport creates the physical distance over which the clip will be scrubbed.</p>
</div>
<div class="ta-step">
<div class="ta-step__number">Step 2</div>
<div class="ta-step__title">Pin the viewport</div>
<p>A sticky inner layer keeps the media visible while the outer band moves through the document.</p>
</div>
<div class="ta-step">
<div class="ta-step__number">Step 3</div>
<div class="ta-step__title">Normalize progress</div>
<p>The section's scroll position becomes a value from 0 to 1: beginning, middle, and end.</p>
</div>
<div class="ta-step">
<div class="ta-step__number">Step 4</div>
<div class="ta-step__title">Map progress to time</div>
<p>Normalized progress is multiplied by the video's duration and assigned to <code>currentTime</code>.</p>
</div>
<div class="ta-step">
<div class="ta-step__number">Step 5</div>
<div class="ta-step__title">Control seeking</div>
<p>Readiness checks, smoothing, and a threshold prevent the decoder from being flooded with work.</p>
</div>
</div>
<figure class="ta-media">
<img src="/wp-content/uploads/2026/09/scroll-progress-video-time-diagram.webp" alt="Diagram showing how 50 percent page scroll becomes 0.50 progress, five seconds of video time and the displayed frame at 00:05" loading="lazy">
<figcaption>Page scroll is normalized to a value from 0 to 1, mapped to the clip duration, and used to display the corresponding video frame.</figcaption>
</figure>
<p>At its simplest, the relationship looks like this:</p><pre><code>progress = clamp(scrollThroughSection, 0, 1)
targetTime = progress * video.duration
&#10;if (videoIsReady &amp;&amp; !video.seeking) {
    video.currentTime = targetTime
}</code></pre><p>That example explains the idea, but it is not production-ready. A polished implementation also needs to guard media readiness, avoid duplicate loading work, preserve the poster until the browser paints video data, and stop the frame loop when the section is far away.</p>
<h3>Why the reference loads the entire clip first</h3>
<p>The examined implementation uses <code>fetch()</code>, converts the response to a Blob, and then creates a local object URL for the video. This means the transfer completes before the clip is attached to the media element. Once available, seeking no longer depends on new network range requests.</p>
<p>That removes one source of stutter, but it does <strong>not</strong> guarantee an instant frame. The browser still has to decode from a nearby keyframe, and slower devices still have less decoding capacity. It also creates a clear cost: a visitor who reaches the loading threshold downloads the whole clip, not just the first few seconds.</p>
<h2 id="breaks">Six things that commonly break scroll-scrubbed video</h2>
<div class="ta-risks">
<div class="ta-risk">
<div class="ta-risk__number">01 - Encoding</div>
<div class="ta-risk__title">The GOP is too long</div>
<p>Seeking normally begins from a preceding keyframe. If keyframes are far apart, the browser may need to decode many intermediate frames before it can display the requested moment.</p>
</div>
<div class="ta-risk">
<div class="ta-risk__number">02 - Readiness</div>
<div class="ta-risk__title">Time is assigned too early</div>
<p>Before <code>loadedmetadata</code>, duration may not be usable. A component should not calculate or assign a target time until the media is ready.</p>
</div>
<div class="ta-risk">
<div class="ta-risk__number">03 - Seeking</div>
<div class="ta-risk__title">A new seek interrupts the last one</div>
<p>Rapidly assigning a new time while <code>video.seeking</code> is true can make the visual response inconsistent and keep the decoder permanently behind the scroll.</p>
</div>
<div class="ta-risk">
<div class="ta-risk__number">04 - iOS</div>
<div class="ta-risk__title">The media element never unlocks</div>
<p>Mobile Safari can require a user gesture before a video reliably decodes and paints frames. A muted inline element and a tested gesture-based fallback are still necessary.</p>
</div>
<div class="ta-risk">
<div class="ta-risk__number">05 - Viewport</div>
<div class="ta-risk__title">The mobile URL bar creates resize noise</div>
<p>On touch devices the browser chrome can change viewport height during scroll. Treating every height-only change as a full layout resize can introduce visible jitter.</p>
</div>
<div class="ta-risk">
<div class="ta-risk__number">06 - Delivery</div>
<div class="ta-risk__title">The full file is too heavy</div>
<p>Blob-first delivery trades streaming flexibility for predictable local seeking. If the encode is large, the visitor pays the entire bandwidth and memory cost before the first video frame appears.</p>
</div>
</div>
<p>There is a seventh implementation-specific failure worth separating from those browser issues: an asynchronous loading race. We found it while reviewing our own first Framer draft.</p>
<h2 id="framer">Building the media layer in Framer</h2>
<p>Framer Code Components are React components rendered on the canvas, in Preview, and on a published site. That makes them a practical home for the media layer because the implementation can expose the clip, mobile clip, poster, scroll distance, smoothing, and focal point as Property Controls.</p>
<p>Our component uses no GSAP dependency. ScrollTrigger can make progress calculation and pinning more convenient, but it does not solve video readiness, encoding, iOS behavior, or seek pressure. For a single scroll-scrub section, native sticky positioning plus a small React component gives us enough control without adding another animation runtime.</p>
<p>For a broader example of how responsive layouts and polished interaction fit into a complete client build, see our <a href="/project/qollective/">Qollective Framer case study</a>.</p>
<div class="ta-table-wrap">
<table class="ta-table">
<caption>Responsibilities inside the Framer scroll-scrub component</caption>
<thead>
<tr><th scope="col">Layer</th><th scope="col">Responsibility</th><th scope="col">Fallback</th></tr>
</thead>
<tbody>
<tr><td class="ta-table__label">Scroll band</td><td>Creates scrub distance and normalized progress</td><td>Native document flow remains available</td></tr>
<tr><td class="ta-table__label">Sticky layer</td><td>Keeps the media fixed during the active range</td><td>Standard CSS, no scroll hijacking</td></tr>
<tr><td class="ta-table__label">Poster</td><td>Provides the first meaningful visual immediately</td><td>Remains visible on failure or reduced motion</td></tr>
<tr><td class="ta-table__label">Video</td><td>Displays the frame mapped to scroll progress</td><td>Hidden until loaded data or a seeked frame has painted</td></tr>
<tr><td class="ta-table__label">Frame loop</td><td>Eases toward the target and limits seek assignments</td><td>Parks when the section is far away</td></tr>
</tbody>
</table>
</div>
<div class="ta-demo">
<div class="ta-demo__label">Live Framer demo</div>
<h3>See the implementation in action</h3>
<p>This example was built in Framer with the original React Code Component described in this guide. One continuous video is scrubbed across the complete scroll band, while separate Framer scene components supply the eight text overlays. Keeping one clip avoids eight separate media requests and visible jumps between files.</p>
<a class="ta-demo__btn" href="https://scrollscrubvideo.framer.website/" target="_blank" rel="noopener noreferrer">View the live Framer scroll-scrub demo →</a>
</div>
<h2 id="install">How to add the scroll-scrub component to Framer</h2>
<p>Framer Code Components are created and edited inside the project itself. The official workflow starts in <strong>Assets → Code → Create Code File</strong>; once the file exports a valid React component, Framer makes it available in the project. The controls defined in the source then appear in the Properties panel when the component is selected. You can compare the steps below with Framer's official guides to <a href="https://www.framer.com/developers/components-introduction" target="_blank" rel="noopener">Code Components</a> and <a href="https://www.framer.com/developers/property-controls" target="_blank" rel="noopener">Property Controls</a>.</p>
<div class="ta-install">
<div class="ta-install__item">
<div class="ta-install__number">Step 1</div>
<div class="ta-install__title">Create a code file</div>
<p>Open the Assets panel, select <strong>Code</strong>, and choose <strong>Create Code File</strong>. Name it <code>ScrollScrubVideo.tsx</code>.</p>
</div>
<div class="ta-install__item">
<div class="ta-install__number">Step 2</div>
<div class="ta-install__title">Paste the component</div>
<p>Delete the starter example, paste the current component source into <code>ScrollScrubVideo.tsx</code>, and save. Keep the default export and Framer imports unchanged.</p>
</div>
<div class="ta-install__item">
<div class="ta-install__number">Step 3</div>
<div class="ta-install__title">Place it on the page</div>
<p>Return to the canvas, find <strong>ScrollScrubVideo</strong> under Code Components, and drag one instance onto the page. Set its width to Fill.</p>
</div>
<div class="ta-install__item">
<div class="ta-install__number">Step 4</div>
<div class="ta-install__title">Add media</div>
<p>Select the component and upload the desktop <strong>Clip</strong> and <strong>Poster</strong>. Use an optimized clip with keyframes every 0.25–0.5 seconds rather than uploading the raw AI or editing export. Add a lighter Mobile clip and Mobile poster when mobile traffic matters.</p>
</div>
<div class="ta-install__item">
<div class="ta-install__number">Step 5</div>
<div class="ta-install__title">Tune the movement</div>
<p>Start with a 250vh Scroll band for a simple clip. For eight viewport-length text scenes, use about 900vh: one viewport stays pinned, while the remaining 800vh drives the scrub. Keep Smoothing near 0.20.</p>
</div>
<div class="ta-install__item">
<div class="ta-install__number">Step 6</div>
<div class="ta-install__title">Connect the scenes</div>
<p>Build every headline or CTA as a separate Framer component, remove its opaque Fill, and connect the instances to the <strong>Scenes</strong> array in display order.</p>
</div>
</div>
<div class="ta-callout"><strong>Eight scenes across a 10-second clip</strong>The component divides normalized scroll progress equally between connected scenes. With eight items, each scene owns 12.5% of the scroll range - roughly 1.25 seconds of a 10-second clip. This remains consistent across a mouse, trackpad, and touch screen because it does not depend on the number of wheel gestures.</div>
<h3>Recommended starting settings</h3>
<div class="ta-table-wrap">
<table class="ta-table">
<caption>Recommended initial settings for the Framer scroll-scrub component</caption>
<thead>
<tr><th scope="col">Property</th><th scope="col">Starting value</th><th scope="col">What it controls</th></tr>
</thead>
<tbody>
<tr><td class="ta-table__label">Scenes</td><td>1–12 component instances</td><td>Displays Framer-designed overlays in order and gives every item an equal part of the scroll range.</td></tr>
<tr><td class="ta-table__label">Clip</td><td>Optimized H.264 MP4</td><td>Provides the main video whose current time follows scroll progress. Encode keyframes approximately every 0.25–0.5 seconds.</td></tr>
<tr><td class="ta-table__label">Poster</td><td>First meaningful frame</td><td>Appears on the canvas, during loading, on failure, and for reduced-motion visitors.</td></tr>
<tr><td class="ta-table__label">Mobile clip</td><td>Smaller optional encode</td><td>Replaces the desktop clip below 860px or on coarse-pointer devices.</td></tr>
<tr><td class="ta-table__label">Mobile poster</td><td>Mobile crop</td><td>Preserves the subject and composition on narrow screens.</td></tr>
<tr><td class="ta-table__label">Scroll band</td><td>250vh; about 900vh for 8 full-screen scenes</td><td>Sets the total section height. The active sticky scrub distance is the band height minus one viewport.</td></tr>
<tr><td class="ta-table__label">Smoothing</td><td>0.20</td><td>Lower values feel heavier; higher values follow the scroll more tightly.</td></tr>
<tr><td class="ta-table__label">Focal point</td><td><code>50% 50%</code></td><td>Controls the media crop in the same way as CSS <code>object-position</code>.</td></tr>
<tr><td class="ta-table__label">Scene fade</td><td>0.22</td><td>Uses the final 22% of each scene interval for the outgoing/incoming crossfade.</td></tr>
<tr><td class="ta-table__label">Scene rise</td><td>36px</td><td>Moves the incoming scene upward while it fades into view.</td></tr>
</tbody>
</table>
</div>
<figure class="ta-media">
<img src="/wp-content/uploads/2026/09/How-to-add-the-scroll-scrub-component-to-Framer.webp" alt="Framer ScrollScrubVideo component settings showing eight connected scenes, video clip, poster, 900vh scroll band and smoothing controls" loading="lazy">
<figcaption>ScrollScrubVideo configured in Framer with eight connected scenes, one continuous clip, a poster fallback and a 900vh scroll band.</figcaption>
</figure>
<div class="ta-callout"><strong>The canvas is supposed to show a static state</strong>The component shows the poster and first connected scene on the Framer canvas, but skips video loading and scroll-linked transitions there. Open Preview or the published page to test the complete sequence.</div>
<h3>Layout and publishing checks</h3>
<div class="ta-checklist">
<ul>
<li><strong>Keep the component in normal page flow.</strong> Do not place it inside a short fixed-height parent or a parent with Clip Content enabled; either can prevent the sticky section from behaving correctly.</li>
<li><strong>Use Fill width.</strong> The component creates its own vertical scroll band, so do not force the instance back to a one-viewport height.</li>
<li><strong>Set the separate Scene instances to Position: Absolute.</strong> They are connected as overlay sources and should not add their own 800px blocks to the page stack. Keep <strong>ScrollScrubVideo</strong> itself in normal flow.</li>
<li><strong>Remove the Scene frame background Fill.</strong> A transparent overlay lets the poster and video remain visible underneath the text.</li>
<li><strong>Preview from a fresh load.</strong> Test the beginning, middle, and end of the scrub instead of entering the page only at the top.</li>
<li><strong>Test a narrow breakpoint.</strong> Confirm that the mobile clip and poster switch correctly around 860px and that the focal point still protects the subject.</li>
<li><strong>Check real mobile browsers.</strong> Test at least iOS Safari and Chrome Android, including the first touch interaction.</li>
<li><strong>Enable reduced motion at OS level.</strong> The result should stay readable and intentional when only the poster and surrounding content remain.</li>
</ul>
</div>
<h2 id="loading-race">Two loading races the implementation exposed</h2>
<p>Our first component checked whether a video element existed before calling an asynchronous Blob loader. The problem was timing: the element was only created after <code>fetch()</code> and <code>response.blob()</code> completed.</p><pre><code>// Unsafe: this can run on every animation frame
if (near &amp;&amp; !video) load()</code></pre><p>While the first request was still pending, <code>video</code> remained null. At 60 frames per second, the component could begin many downloads of the same clip, append duplicate media elements, and leak object URLs.</p>
<p>The corrected component claims the load synchronously, before the first <code>await</code>:</p><pre><code>let loadState: "idle" | "loading" | "loaded" | "failed" = "idle"
&#10;async function load() {
    if (loadState !== "idle") return
    loadState = "loading"
&#10;    try {
        const response = await fetch(source)
        const blob = await response.blob()
        // Create and attach one video element.
        loadState = "loaded"
    } catch {
        loadState = "failed"
    }
}</code></pre><p>This is a small change with a large effect: every animation frame sees <code>loading</code> immediately, so only one request can exist. A failed request also stays failed instead of restarting continuously on every frame.</p>
<h3>A second race: cached media can beat React events</h3>
<p>The later Framer version removes the custom Blob loader entirely. React renders one declarative <code>&lt;video&gt;</code> element with the active desktop or mobile URL as its <code>src</code>, so the browser owns the normal media request and range behavior. Changing the active source resets the readiness state instead of appending another element.</p><pre><code>&lt;video
  key={activeSource}
  src={activeSource}
  poster={activePoster}
  preload="auto"
  muted
  playsInline
  onLoadedMetadata={() =&gt; setReadySource(activeSource)}
  onLoadedData={() =&gt; setPaintedSource(activeSource)}
  onSeeked={() =&gt; setPaintedSource(activeSource)}
/&gt;</code></pre><p>That declarative structure prevents duplicate elements, but React media callbacks can still lose a race against the browser cache. A cached Framer asset may already have metadata or frame data before hydration attaches the callback. In that case, <code>mediaPainted</code> can remain false and the ready video stays at <code>opacity: 0</code>.</p>
<h3>How version 6 closes the cache race</h3>
<p>The current component supplements the JSX callbacks with native media listeners and immediately inspects <code>readyState</code>. The immediate check is essential: it handles the case where the relevant events have already fired.</p><pre><code>useEffect(() =&gt; {
  const video = videoRef.current
  if (!video || !activeSource) return
&#10;  const syncReadiness = () =&gt; {
    if (video.readyState &gt;= HTMLMediaElement.HAVE_METADATA) {
      setReadySource(activeSource)
    }
&#10;    if (video.readyState &gt;= HTMLMediaElement.HAVE_CURRENT_DATA) {
      setPaintedSource(activeSource)
    }
  }
&#10;  video.addEventListener("loadedmetadata", syncReadiness)
  video.addEventListener("loadeddata", syncReadiness)
  video.addEventListener("canplay", syncReadiness)
  video.addEventListener("seeked", syncReadiness)
&#10;  syncReadiness() // Events may already have fired.
&#10;  return () =&gt; {
    video.removeEventListener("loadedmetadata", syncReadiness)
    video.removeEventListener("loadeddata", syncReadiness)
    video.removeEventListener("canplay", syncReadiness)
    video.removeEventListener("seeked", syncReadiness)
  }
}, [activeSource])</code></pre><p>The poster remains visible until the active source has current frame data. Metadata readiness and painted readiness stay separate, while a restored page is synchronized to its real scroll position instead of briefly starting from frame zero.</p>
<div class="ta-callout"><strong>Why this belongs in the article</strong>It demonstrates the difference between understanding the visual technique and shipping a safe implementation. The scroll-to-time formula is the easy part; asynchronous lifecycle details are where production bugs appear.</div>
<h2 id="encoding">Preparing the video: use a short keyframe interval</h2>
<p>A conventional web video can prioritize forward playback and compression. A scroll-scrubbed video repeatedly seeks to arbitrary moments. The browser normally starts decoding from the nearest preceding keyframe, so a file with one keyframe at the beginning may need to decode almost the entire clip to display a later moment.</p>
<div class="ta-callout"><strong>Recommended starting point</strong>Encode a keyframe approximately every 0.25–0.5 seconds. For a 24 fps clip, a six-frame GOP creates one every 0.25 seconds. Do not make every frame a keyframe by default: that can increase the file substantially without producing a meaningful improvement.</div>
<h3>FFmpeg command for a 24 fps scroll-scrub clip</h3><pre><code>ffmpeg -i "input.mp4" \
-an \
-c:v libx264 \
-profile:v high \
-level:v 4.1 \
-pix_fmt yuv420p \
-preset slow \
-crf 22 \
-r 24 \
-g 6 \
-keyint_min 6 \
-sc_threshold 0 \
-bf 0 \
-movflags +faststart \
"scroll-scrub-video.mp4"</code></pre><p><code>-g 6</code> limits the GOP to six frames, <code>-sc_threshold 0</code> prevents automatic scene-change keyframes from changing the pattern, and <code>-bf 0</code> removes B-frames to simplify random access. <code>+faststart</code> moves the MP4 metadata to the beginning of the file so the browser can initialize it sooner. Audio is removed because a scroll-controlled background should not unexpectedly play sound.</p>
<div class="ta-table-wrap">
<table class="ta-table">
<caption>Starting GOP values for scroll-scrub video</caption>
<thead>
<tr><th scope="col">Frame rate</th><th scope="col">GOP value</th><th scope="col">Approximate interval</th><th scope="col">Starting use</th></tr>
</thead>
<tbody>
<tr><td class="ta-table__label">24 fps</td><td><code>-g 6</code></td><td>0.25 seconds</td><td>Recommended for the Framer component in this guide</td></tr>
<tr><td class="ta-table__label">30 fps</td><td><code>-g 8</code></td><td>0.27 seconds</td><td>Good starting point for 30 fps exports</td></tr>
<tr><td class="ta-table__label">60 fps</td><td><code>-g 15</code></td><td>0.25 seconds</td><td>Use only when the extra frame rate is justified</td></tr>
</tbody>
</table>
</div>
<h3>Check that the keyframes were actually created</h3><pre><code>ffprobe -v error \
-select_streams v:0 \
-skip_frame nokey \
-show_entries frame=best_effort_timestamp_time \
-of csv=p=0 \
"scroll-scrub-video.mp4"</code></pre><p>A correctly prepared 24 fps file should report times close to <code>0.00</code>, <code>0.25</code>, <code>0.50</code>, <code>0.75</code>, and so on. If the command returns only <code>0.00</code>, the file still has only its initial keyframe and should be re-encoded before it is uploaded to Framer.</p>
<div class="ta-callout"><strong>Result from our Kling test clip</strong>The original 10.08-second, 1916 × 1080 export was 14.66 MB and contained one keyframe. Our desktop scroll-scrub encode was 6.53 MB and contained 41 keyframes - one approximately every 0.25 seconds. File size will vary by source, but the keyframe count is easy to verify instead of assuming the export is suitable.</div>
<p>Use the optimized desktop file for <strong>Clip</strong> and a lighter 720p encode for <strong>Mobile clip</strong>. Keep one continuous video for the complete sequence; splitting eight scenes into eight files adds requests and creates more opportunities for visible transitions. You can see the optimized media running in the <a href="https://scrollscrubvideo.framer.website/" target="_blank" rel="noopener noreferrer">live Framer scroll-scrub demo</a>.</p>
<h3>What to measure besides file size</h3>
<p>Subjective smoothness matters, but it should not be the only result. For each encode, record:</p>
<ul>
<li>time from entering the preload range to the first successful seek;</li>
<li>whether fast direction changes produce visible jumps;</li>
<li>whether the poster flashes or disappears too early;</li>
<li>memory behavior after entering and leaving the section;</li>
<li>Lighthouse performance before and after adding the component;</li>
<li>behavior after a fresh load, a reload, and a restored scroll position.</li>
</ul>
<h2 id="accessibility">Accessibility beyond <code>prefers-reduced-motion</code></h2>
<p>Disabling animation for a reduced-motion preference is a good start, but it is not a complete accessibility strategy. The story must still make sense without the moving frames.</p>
<div class="ta-checklist">
<ul>
<li><strong>Keep the narrative text in the DOM.</strong> Do not make essential copy exist only inside the video or appear only at one scroll coordinate.</li>
<li><strong>Provide a meaningful static state.</strong> For multiple chapters, use posters and captions that preserve the sequence instead of freezing a single unexplained frame.</li>
<li><strong>Keep native scrolling.</strong> Page Down, keyboard navigation, trackpads, and assistive input should continue to reach the content below the section.</li>
<li><strong>Hide decorative video from assistive technology.</strong> Use <code>aria-hidden="true"</code> when the video carries no unique information.</li>
<li><strong>Do not hide essential information in motion.</strong> If a visual step matters, repeat its meaning in text.</li>
</ul>
</div>
<p>The media component can handle the poster and decorative video layer, but it cannot automatically make an entire story accessible. The surrounding Framer layout still needs real headings, readable copy, sensible focus order, and a static alternative for each meaningful chapter.</p>
<h2 id="right-tool">When scroll-scrub is the right tool</h2>
<p>Scroll-scrubbed video works best when the exact relationship between page position and visual state helps explain something: assembling a product, revealing layers, showing transformation, or guiding a visitor through a sequence that would be harder to understand as an autoplay loop.</p>
<p>It is usually the wrong choice when the motion is only decorative, when the same message can be communicated with a lighter CSS transition, or when several large clips would compete for bandwidth on one page.</p>
<div class="ta-table-wrap">
<table class="ta-table">
<caption>Situations where scroll-scrubbed video is or is not appropriate</caption>
<thead>
<tr><th scope="col">Good fit</th><th scope="col">Poor fit</th></tr>
</thead>
<tbody>
<tr><td>Frame-specific product explanation</td><td>Ambient motion with no narrative role</td></tr>
<tr><td>A short transformation or assembly sequence</td><td>Long-form video with speech or sound</td></tr>
<tr><td>One focused hero experience</td><td>Many heavy clips on the same page</td></tr>
<tr><td>A project with time for device testing</td><td>A fast launch with no mobile QA budget</td></tr>
</tbody>
</table>
</div>
<p>Video is only one way to build scroll-driven motion. Lottie, Rive, Canvas image sequences, and CSS each solve different problems; that comparison deserves its own guide rather than being compressed into this implementation walkthrough. Our <a href="/case-studies/">website case studies</a> show how these interaction choices sit inside complete project systems rather than isolated demos.</p>
<section class="ta-faq" id="faq">
<h2>Frequently asked questions</h2>
<div class="ta-faq__list">
<div class="ta-faq__item">
<h3 class="ta-faq__q">What is scroll-scrubbed video?</h3>
<p class="ta-faq__a">Scroll-scrubbed video is an interaction in which page scroll progress controls an HTML video's current time. Scrolling forward advances the clip, while scrolling backward moves it toward an earlier frame.</p>
</div>
<div class="ta-faq__item">
<h3 class="ta-faq__q">How do I add a scroll-scrub video component to Framer?</h3>
<p class="ta-faq__a">In the Assets panel, open Code, create a code file, and paste the component source. Save the file, place ScrollScrubVideo on the canvas, then assign the clip, poster, optional mobile media, scroll distance, smoothing, focal point, and scene components in the Properties panel.</p>
</div>
<div class="ta-faq__item">
<h3 class="ta-faq__q">Do I need GSAP ScrollTrigger to scrub video in Framer?</h3>
<p class="ta-faq__a">No. A Framer Code Component can combine native scrolling, CSS sticky positioning, requestAnimationFrame, and HTMLMediaElement.currentTime. ScrollTrigger can simplify progress and pinning, but video readiness, seeking, encoding, and mobile behavior still need separate handling.</p>
</div>
<div class="ta-faq__item">
<h3 class="ta-faq__q">Why does scroll-scrubbed video stutter?</h3>
<p class="ta-faq__a">Common causes include long gaps between keyframes, assigning currentTime before metadata is ready, starting new seeks while the previous seek is active, repeatedly fetching the same clip, and using a file that is too large for the visitor's device or connection.</p>
</div>
<div class="ta-faq__item">
<h3 class="ta-faq__q">How often should a scroll-scrub video have keyframes?</h3>
<p class="ta-faq__a">A practical starting point is one keyframe every 0.25–0.5 seconds. At 24 fps, a GOP value of 6 produces an interval of 0.25 seconds. The final encode should still be tested on the slowest mobile device the project supports.</p>
</div>
<div class="ta-faq__item">
<h3 class="ta-faq__q">Does scroll-scrubbed video work on mobile?</h3>
<p class="ta-faq__a">It can, but it needs a mobile-specific encode, a poster fallback, coarse-pointer tuning, careful resize handling, and real tests in iOS Safari and Chrome Android. Desktop behavior alone is not enough evidence that the component is production-ready.</p>
</div>
<div class="ta-faq__item">
<h3 class="ta-faq__q">Should a scroll-scrub video load as a Blob?</h3>
<p class="ta-faq__a">Blob-first loading removes network range requests during the later scrub because the whole transfer completes before the video is attached. The trade-off is that the visitor downloads the full file before the first video frame can appear, so clip length and file size must stay controlled.</p>
</div>
<div class="ta-faq__item">
<h3 class="ta-faq__q">What should reduced-motion users see?</h3>
<p class="ta-faq__a">They should receive a coherent static version of the same story: readable text, meaningful poster frames, and captions where the visual sequence carries information. Simply stopping the video on an unexplained frame is not always sufficient.</p>
</div>
</div>
</section>
<div class="ta-cta">
<div class="ta-cta__label">Tarasovs Digital Agency</div>
<h3>Need advanced motion in Framer without sacrificing the build?</h3>
<p>We design and develop custom Framer experiences with production-ready interactions, responsive behavior, accessible fallbacks, and performance testing built into the implementation.</p>
<a href="/contact-us/" class="ohio-widget button ta-cta__btn">Discuss your Framer project →</a>
</div>
</div>
