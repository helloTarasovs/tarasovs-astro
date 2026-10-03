---
title: "Higgsfield + Claude + Framer: Adding AI Video to a Website"
slug: "higgsfield-claude-framer-ai-video"
pubDate: "2026-08-04T16:52:04Z"
updatedDate: "2026-09-06T16:28:29Z"
excerpt: "Quick Answer To add AI-generated video to a Framer site, connect Higgsfield’s…"
categories: ["framer","geo-ai-search-optimization","insights","seo"]
cover:
  src: "/wp-content/uploads/2026/08/higgsfield-kling-video-generation-result-fi.webp"
  width: 1254
  height: 1254
seo:
  title: "Higgsfield + Claude + Framer: Adding AI Video to a Website - Tarasovs Digital Agency"
  description: "We tested Higgsfield AI video with Claude and Framer, from MCP setup and generation to compression, accessibility, performance in Core Web Vitals."
  canonical: "/higgsfield-claude-framer-ai-video/"
  robots: "index, follow"
  ogImage: "/wp-content/uploads/2026/08/higgsfield-kling-video-generation-result-fi.webp"
jsonld:
  - {"@context":"https://schema.org","@type":"FAQPage","@id":"https://tarasovs.me/higgsfield-framer-ai-video/#faq","mainEntityOfPage":{"@id":"https://tarasovs.me/higgsfield-framer-ai-video/"},"mainEntity":[{"@type":"Question","name":"How do I connect Higgsfield to Claude?","acceptedAnswer":{"@type":"Answer","text":"In Claude web or desktop: Settings &rarr; Connectors &rarr; Add custom connector &rarr; paste https://mcp.higgsfield.ai/mcp &rarr; authorize in the browser. In Claude Code: run claude mcp add --transport http --scope user higgsfield https://mcp.higgsfield.ai/mcp. Both use OAuth; no API key is required, but you do need an active Higgsfield subscription."}},{"@type":"Question","name":"Which Higgsfield plan do I need for AI video?","acceptedAnswer":{"@type":"Answer","text":"Higgsfield's Starter plan ($15/mo) excludes Google's Veo 3 and Veo 3 Fast models. We used Plus ($49/mo, or $39/mo annual) to avoid that restriction entirely. Our actual generation used Kling 3.0 Turbo, which Higgsfield's pricing page lists as available on Starter too, untested by us, but plausible if you know you only need Kling-family models."}},{"@type":"Question","name":"How long does it take to generate a hero video with Higgsfield?","acceptedAnswer":{"@type":"Answer","text":"Our 6-second, 1080p clip took roughly a minute, for 12 credits. We didn't measure this precisely, so treat it as an estimate rather than a benchmark."}},{"@type":"Question","name":"Can I drag a Higgsfield video straight into Framer?","acceptedAnswer":{"@type":"Answer","text":"Yes. Framer's native Video component accepts a dragged MP4 directly onto the canvas and creates the video element automatically, with no conversion step."}},{"@type":"Question","name":"Why is my AI-generated video so large, and how do I compress it for free?","acceptedAnswer":{"@type":"Answer","text":"Our six-second 1080p export was 6.8 MB, unoptimized by default. We compressed it to 1.6 MB using VidCrush, a free browser-based tool with no signup or watermark (500 MB limit). HandBrake is the free desktop alternative if you're doing this repeatedly."}},{"@type":"Question","name":"Does Framer add captions or alt text to video automatically?","acceptedAnswer":{"@type":"Answer","text":"No. Framer's native Video component doesn't expose a captions or track field, and Lighthouse flags any video element without one, regardless of whether the video has dialogue."}},{"@type":"Question","name":"Should I add captions to a decorative background video?","acceptedAnswer":{"@type":"Answer","text":"Not if it has no dialogue or informational content. An empty caption file satisfies the automated check without fixing anything real. For genuinely decorative video, mark it aria-hidden=\"true\" so assistive technology skips it, via a custom Embed component since Framer's native Video widget doesn't expose this control. If the video communicates real information, aria-hidden is the wrong fix; use captions or a text description instead."}},{"@type":"Question","name":"Why did my hero video not show up on one phone but work fine on another?","acceptedAnswer":{"@type":"Answer","text":"The most likely explanation was a stale cache on one specific device, not a reproducible Framer or Higgsfield bug: a second phone showed the video immediately, and revisiting the first phone fresh also worked. Test on more than one device before concluding something is broken."}},{"@type":"Question","name":"Does adding a hero video hurt Core Web Vitals?","acceptedAnswer":{"@type":"Answer","text":"Yes, measurably. On our test, mobile LCP was 6.4s with the video added via Framer's native component (compressed to 1.6 MB), improving to 4.3s in our second test after switching to an Embed-based implementation and making the accessibility changes described above, still outside Google's \"good\" threshold of 2.5s. A hero video is not a free addition to mobile performance."}}]}
wpId: 229773
legacyUrl: "/higgsfield-claude-framer-ai-video/"
---
<style>
/* ── Tarasovs blog post: Higgsfield + Claude + Framer ─────────────────
Формат тексту як у "Connect Claude to Framer": чесний репортаж
про реальний тест, не інструкція. FAQ навмисно h3+p (не p.faq-question
зі стандартного компонента skill), стаття сама про семантику,
було б дивно лишити її ж FAQ несемантичним.
─────────────────────────────────────────────────────────────────── */
.ta-post {
--surface: #f8f7ff; --elevated: #f0eef9; --hover: #ede9fe;
--text: #0f0a1e; --text-2: #4b4466; --text-3: #9490a8;
--border: #e4e0f0; --border-a: #7C3AED; --stat-clr: #7C3AED;
--shadow: 0 4px 24px rgba(0,0,0,0.07); --glow: 0 0 40px rgba(124,58,237,0.10);
--qa-bg: #faf9ff; --qa-border: #e4e0f0;
--accent: #7C3AED; --accent-2: #A855F7;
color: var(--text);
font-family: inherit;
line-height: 1.7;
}
body.dark-scheme .ta-post {
--surface: #130F24; --elevated: #1C1535; --hover: #231A42;
--text: #F8F7FF; --text-2: #B8B0D4; --text-3: #7B7399;
--border: #2D2250; --border-a: #5B21B6; --stat-clr: #A855F7;
--shadow: 0 4px 24px rgba(0,0,0,0.40); --glow: 0 0 60px rgba(168,85,247,0.25);
--qa-bg: #130F24; --qa-border: #2D2250;
--accent: #A855F7; --accent-2: #C084FC;
}
.ta-post * { box-sizing: border-box; }
.ta-post p { color: var(--text-2); margin: 0 0 16px; }
.ta-post p:last-child { margin-bottom: 0; }
.ta-post strong { color: var(--text); font-weight: 700; }
.ta-post a { color: var(--accent); text-decoration: underline; text-underline-offset: 2px; }
.ta-post code {
font-family: ui-monospace, "SF Mono", Consolas, monospace;
font-size: 0.9em;
background: var(--elevated);
border: 1px solid var(--border);
border-radius: 5px;
padding: 1px 6px;
color: var(--text);
}
.ta-post pre {
background: var(--elevated);
border: 1px solid var(--border);
border-radius: 12px;
padding: 18px 20px;
overflow-x: auto;
margin: 0 0 20px;
}
.ta-post pre code { background: none; border: none; padding: 0; font-size: 0.875rem; line-height: 1.6; }
/* ── Quick Answer ── */
.ta-qa {
background: var(--qa-bg);
border: 1px solid var(--qa-border);
border-left: 4px solid var(--accent);
border-radius: 14px;
padding: 24px 28px;
margin: 0 0 32px;
}
.ta-qa__label {
font-size: 0.75rem; font-weight: 700; text-transform: uppercase;
letter-spacing: 0.1em; color: var(--accent); margin-bottom: 10px;
}
.ta-qa p { color: var(--text); }
/* ── Stats ── */
.ta-stats {
display: grid; grid-template-columns: repeat(4, 1fr); gap: 12px;
margin: 0 0 36px;
}
@media (max-width: 720px) { .ta-stats { grid-template-columns: repeat(2, 1fr); } }
.ta-stats__item {
background: var(--surface); border: 1px solid var(--border);
border-radius: 14px; padding: 20px; text-align: center;
}
.ta-stats__num {
font-size: 1.85rem; font-weight: 800; color: var(--stat-clr);
line-height: 1; margin-bottom: 6px; letter-spacing: -0.02em;
}
.ta-stats__label { font-size: 0.8125rem; color: var(--text-3); line-height: 1.4; }
/* ── TOC ── */
.ta-toc {
background: var(--surface); border: 1px solid var(--border);
border-radius: 14px; padding: 22px 26px; margin: 0 0 40px;
}
.ta-toc__label {
font-size: 0.8125rem; font-weight: 700; text-transform: uppercase;
letter-spacing: 0.08em; color: var(--text-3); margin-bottom: 10px;
}
.ta-toc ol { margin: 0; padding-left: 1.3rem; display: flex; flex-direction: column; gap: 6px; }
.ta-toc a { color: var(--accent); text-decoration: none; font-size: 0.9375rem; }
.ta-toc a:hover { text-decoration: underline; }
/* ── Body prose ── */
.ta-post h2 {
font-size: clamp(1.5rem, 3vw, 1.9375rem); font-weight: 800; line-height: 1.25;
letter-spacing: -0.01em; margin: 44px 0 16px; color: var(--text);
scroll-margin-top: 80px;
}
.ta-post h2:first-of-type { margin-top: 0; }
.ta-post h3 {
position: relative; font-size: 1.1875rem; font-weight: 700; line-height: 1.4;
margin: 28px 0 12px; padding-left: 16px; color: var(--text);
}
.ta-post h3::before {
content: ""; position: absolute; left: 0; top: 0.2em;
width: 4px; height: 1.05em; border-radius: 2px;
background: linear-gradient(180deg, var(--accent), var(--accent-2));
}
.ta-post ul, .ta-post ol { padding-left: 1.4rem; margin: 0 0 16px; display: flex; flex-direction: column; gap: 6px; }
.ta-post li { color: var(--text-2); line-height: 1.65; }
.ta-post ul li::marker { color: var(--accent); }
/* ── Screenshot ── */
.ta-shot {
border: 1px solid var(--border); border-radius: 12px;
overflow: hidden; margin: 0 0 24px; background: var(--elevated);
}
.ta-shot img { display: block; width: 100%; height: auto; }
/* ── Table ── */
.ta-table-wrap {
position: relative; z-index: 1; isolation: isolate;
border: 1px solid var(--border); border-radius: 14px; overflow: hidden;
margin: 0 0 28px !important; overflow-x: auto;
clear: both;
}
.ta-table { width: 100%; border-collapse: collapse; font-size: 0.9375rem; table-layout: auto; }
.ta-table caption { position: absolute; width: 1px; height: 1px; overflow: hidden; clip: rect(0 0 0 0); }
.ta-table th {
box-sizing: border-box; text-align: left !important; padding: 14px 20px !important;
background: var(--elevated);
border-bottom: 1px solid var(--border); font-weight: 700; color: var(--text);
font-size: 0.8125rem; text-transform: uppercase; letter-spacing: 0.04em;
}
.ta-table td {
box-sizing: border-box; padding: 14px 20px !important; border-bottom: 1px solid var(--border);
color: var(--text-2); vertical-align: top;
}
.ta-table tr:last-child td { border-bottom: none; }
.ta-table td.is-bad { color: #c0392b; }
body.dark-scheme .ta-table td.is-bad { color: #ff8a80; }
.ta-table td.is-good { color: #1a7a3c; }
body.dark-scheme .ta-table td.is-good { color: #6bd18a; }
/* ── Callout ── */
.ta-callout {
background: var(--elevated); border-left: 3px solid var(--accent);
border-radius: 0 12px 12px 0; padding: 16px 20px; margin: 0 0 24px;
font-size: 0.9375rem; color: var(--text-2);
}
/* FAQ (h3/p, deliberately semantic) */
.ta-faq { margin-top: 40px; }
.ta-faq__list { display: flex; flex-direction: column; gap: 12px; }
.ta-faq__item {
background: var(--surface); border: 1px solid var(--border);
border-radius: 14px; padding: 20px 24px;
}
.ta-faq__q {
position: relative; font-size: 1.0625rem; font-weight: 700; line-height: 1.4;
margin: 0 0 8px; padding-left: 16px; color: var(--text);
}
.ta-faq__q::before {
content: ""; position: absolute; left: 0; top: 0.22em;
width: 4px; height: 1.05em; border-radius: 2px;
background: linear-gradient(180deg, var(--accent), var(--accent-2));
}
.ta-faq__a { font-size: 0.9375rem; margin: 0; padding-left: 16px; color: var(--text-2); }
/* ── CTA ── */
.ta-cta {
background: var(--surface); border: 1px solid var(--border-a);
border-radius: 18px; padding: 36px 40px; text-align: center;
margin-top: 44px; box-shadow: var(--glow); position: relative; overflow: hidden;
}
.ta-cta__label {
font-size: 0.75rem; font-weight: 700; text-transform: uppercase;
letter-spacing: 0.1em; color: var(--accent); margin-bottom: 10px;
}
.ta-cta h3 { padding-left: 0; margin: 0 0 10px; font-size: 1.375rem; }
.ta-cta h3::before { display: none; }
.ta-cta p { max-width: 560px; margin: 0 auto 22px; }
.ta-cta__btn {
display: inline-block;
background-color: var(--accent) !important;
color: #fff !important;
font-weight: 700; padding: 13px 30px; border-radius: 10px;
text-decoration: none !important;
border: none !important;
outline: none !important;
box-shadow: none !important;
}
.ta-cta__btn:hover, .ta-cta__btn:focus, .ta-cta__btn:active, .ta-cta__btn:visited {
background-color: var(--accent-2) !important;
color: #fff !important;
border: none !important;
outline: none !important;
}
.ta-note { font-size: 0.8125rem; color: var(--text-3); font-style: italic; margin-top: 36px; }
/* ── Pipeline ── */
.ta-pipeline {
display: flex; flex-wrap: wrap; align-items: center; gap: 8px;
background: var(--surface); border: 1px solid var(--border);
border-radius: 14px; padding: 20px 24px; margin: 0 0 36px;
}
.ta-pipeline__step {
background: var(--elevated); border: 1px solid var(--border);
border-radius: 10px; padding: 8px 14px; font-size: 0.875rem;
font-weight: 600; color: var(--text); white-space: nowrap;
}
.ta-pipeline__arrow { color: var(--accent); font-weight: 700; font-size: 0.9375rem; }
</style>
<div class="ta-post">
<div class="ta-qa">
<div class="ta-qa__label">Quick Answer</div>
<p><strong>To add AI-generated video to a Framer site, connect Higgsfield's MCP server to Claude, generate the clip, then drop the file onto the Framer canvas as a native Video component or a custom Embed.</strong> The generation and the drag-and-drop both take minutes. The part that takes real work is what comes after: the raw export was 6.8 MB for six seconds, Framer doesn't add captions or accessible markup to video on its own, and our first mobile test looked like a broken hero section before it turned out to be a stale cache on one phone.</p>
<p>We ran this end to end on the same test site as our <a href="/connect-claude-to-framer/">Connect Claude to Framer</a> piece, a flower shop called Bloom &amp; Twine, and fixed what broke along the way. You can see the <a href="https://shining-reservation-169556.framer.app/" target="_blank" rel="nofollow noopener">live test build here</a> (a free Framer subdomain, may change or come down over time).</p>
</div>
<div class="ta-stats">
<div class="ta-stats__item"><div class="ta-stats__num">~1 min</div><div class="ta-stats__label">to generate a 6-second hero clip, an approximate figure we didn't time precisely</div></div>
<div class="ta-stats__item"><div class="ta-stats__num">12</div><div class="ta-stats__label">credits spent on one 1080p generation, Higgsfield Plus plan</div></div>
<div class="ta-stats__item"><div class="ta-stats__num">6.8 → 1.6 MB</div><div class="ta-stats__label">file size before and after free compression</div></div>
<div class="ta-stats__item"><div class="ta-stats__num">47 → 63</div><div class="ta-stats__label">mobile PageSpeed Performance score, before and after the implementation changes</div></div>
</div>
<div class="ta-toc">
<div class="ta-toc__label">In this guide</div>
<ol>
<li><a href="#setup">Connecting Higgsfield to Claude</a></li>
<li><a href="#which-plan">Which Higgsfield plan you actually need</a></li>
<li><a href="#generation">Generating the clip</a></li>
<li><a href="#framer">Getting it into Framer</a></li>
<li><a href="#expected-vs-real">What we expected vs. what happened</a></li>
<li><a href="#weight">The weight problem, and what wasn't the video's fault</a></li>
<li><a href="#accessibility">The accessibility gap, and the fix we didn't fake</a></li>
<li><a href="#phantom-bug">The mobile bug that wasn't a bug</a></li>
<li><a href="#verification">Before and after, verified</a></li>
<li><a href="#when-to-use">When this is worth doing</a></li>
<li><a href="#faq">Frequently asked questions</a></li>
</ol>
</div>
<div class="ta-pipeline" aria-label="Workflow: Claude to Higgsfield MCP to Kling 3.0 Turbo to MP4 to compression to Framer to PageSpeed">
<span class="ta-pipeline__step">Claude</span>
<span class="ta-pipeline__arrow">→</span>
<span class="ta-pipeline__step">Higgsfield MCP</span>
<span class="ta-pipeline__arrow">→</span>
<span class="ta-pipeline__step">Kling 3.0 Turbo</span>
<span class="ta-pipeline__arrow">→</span>
<span class="ta-pipeline__step">MP4 export</span>
<span class="ta-pipeline__arrow">→</span>
<span class="ta-pipeline__step">Compression</span>
<span class="ta-pipeline__arrow">→</span>
<span class="ta-pipeline__step">Framer</span>
<span class="ta-pipeline__arrow">→</span>
<span class="ta-pipeline__step">PageSpeed check</span>
</div>
<h2 id="setup">Connecting Higgsfield to Claude</h2>
<p><a href="https://higgsfield.ai/mcp" target="_blank" rel="noopener">Higgsfield AI MCP</a> links Claude directly to Higgsfield's video and image models over the Model Context Protocol. No separate server to run, no API key to manage. There are two setup paths depending on which Claude interface you use.</p>
<h3>Claude web or desktop</h3>
<p>Settings → Connectors → Add custom connector → paste <code>https://mcp.higgsfield.ai/mcp</code> → authorize in the browser that opens. You need an active Higgsfield subscription and a Claude account; authorization is OAuth, not an API key.</p>
<h3>Claude Code</h3>
<p>Run this in a terminal:</p><pre><code>claude mcp add --transport http --scope user higgsfield https://mcp.higgsfield.ai/mcp</code></pre><p>Claude Code handles authorization via a browser window the same way. Either path exposes the same tools: generating images and video, training a reusable character (Higgsfield calls this Soul ID), and browsing your generation history, all from inside a Claude conversation, without opening the Higgsfield dashboard.</p>
<div class="ta-shot"><img loading="lazy" src="/wp-content/uploads/2026/08/higgsfield-claude-custom-connector.webp" alt="Connecting Higgsfield MCP server to Claude via custom connector settings" width="1200" height="675"></div>
<h2 id="which-plan">Which Higgsfield plan you actually need</h2>
<p>We generated on the <strong>Plus plan</strong> ($49/mo, or $39/mo billed annually) rather than the cheaper Starter tier ($15/mo), and that was a deliberate hedge, not a requirement we confirmed in advance. <a href="https://higgsfield.ai/pricing" target="_blank" rel="noopener">Higgsfield's own pricing page</a> lists Starter as "selected models only" and explicitly excludes Google's Veo 3 and Veo 3 Fast. We didn't know ahead of time which model the MCP connector would reach for by default, so we picked the plan that unlocks everything to avoid losing time to a blocked model mid-test.</p>
<p>As it turned out, we ended up specifying <strong>Kling 3.0 Turbo</strong> directly, a model that Higgsfield's own plan comparison shows as available on Starter too (roughly 23 five-second Kling clips out of Starter's 200 monthly credits). If you know in advance you only need Kling-family models for something like a hero background clip, Starter may be enough. We didn't test that path ourselves, so treat it as a plausible reading of Higgsfield's pricing page rather than something we verified.</p>
<p>One more thing worth checking before you rely on this for client work: <strong>we did not independently verify Higgsfield's commercial usage terms</strong> for AI-generated video on the Plus plan. Confirm licensing on your own account before you publish generated video on a paying client's site.</p>
<p>Pricing above reflects what was available to us in August 2026. Higgsfield's rates can vary by region and billing cycle, so confirm current pricing on your own account before you commit to a plan.</p>
<h2 id="generation">Generating the clip</h2>
<p>We asked for a short, atmospheric loop for a florist's hero section, the kind of thing that's genuinely hard to shoot and license affordably as stock footage, and a reasonable real-world use case for this workflow. The prompt:</p>
<div class="ta-callout">"A close-up cinematic shot of pink and white peony flowers slowly blooming in soft natural light, gentle camera drift, seamless loop, soft bokeh background, warm color grading, elegant and calm mood for a florist website hero banner"</div>
<p>Model: Kling 3.0 Turbo, described by Higgsfield as fast text-to-video with single start-frame animation. Settings: 6 seconds, 16:9, 1080p. Cost: <strong>12 credits</strong>. Dropping to 720p brings that down to 9 credits, if file weight matters more than resolution for your use case (it usually should; see below).</p>
<p>Generation took roughly a minute. We didn't stopwatch it the way we clocked the 18-minute Framer agent build in our <a href="/connect-claude-to-framer/">previous piece</a>, so call this an estimate, not a measured figure. The result showed up under Higgsfield's Cinema Studio → My Generations, not under Marketing Studio, because we called the model directly rather than going through a Marketing Studio workflow.</p>
<div class="ta-shot"><img loading="lazy" src="/wp-content/uploads/2026/08/higgsfield-kling-video-generation-result.webp" alt="AI-generated hero video result in Higgsfield Cinema Studio using Kling 3.0 Turbo" width="1200" height="675"></div>
<h2 id="framer">Getting it into Framer</h2>
<p>This part had zero friction. Downloaded the clip, dragged it straight onto the Framer canvas in place of the existing hero photo, and Framer created a video element on the spot, no import dialog, no format conversion step. Matching the border radius to the rest of the design took one more click in the Style panel.</p>
<p>The raw file was <strong>6.8 MB for six seconds of video.</strong> That's the number that matters more than anything about the generation step itself.</p>
<p>If you want the video to respond to page scroll instead of playing as a conventional loop, see <a href="/how-scroll-scrubbed-video-works-in-framer/">how scroll-scrubbed video works in Framer</a>. The guide covers scroll-to-video-time mapping, sticky layout, scene overlays, loading behavior, mobile fallbacks and a live Framer demo.</p>
<h2 id="expected-vs-real">What we expected vs. what happened</h2>
<div class="ta-table-wrap">
<table class="ta-table">
<caption>What we expected from AI video in Framer versus what actually happened during testing</caption>
<thead><tr><th scope="col">What you'd expect</th><th scope="col">What actually happened</th></tr></thead>
<tbody>
<tr><td>A usable hero clip takes real production time</td><td class="is-good">One prompt, about a minute, no reshoots</td></tr>
<tr><td>Getting it onto the site is the hard part</td><td class="is-good">Drag-and-drop, seconds, no conversion needed</td></tr>
<tr><td>The exported file is web-ready by default</td><td class="is-bad">6.8 MB for 6 seconds, needed manual compression</td></tr>
<tr><td>Framer handles video accessibility automatically</td><td class="is-bad">No captions/track added; Lighthouse flags any &lt;video&gt; without one, dialogue or not</td></tr>
<tr><td>Compressing the file solves the performance problem</td><td>Helped, but mobile LCP was still 6.4s after compression alone. A faster result followed switching implementations, though several changes landed together, so we can't isolate which one mattered most</td></tr>
<tr><td>A bug that shows up on one phone is a real bug</td><td class="is-bad">Our "blank hero on mobile" finding was most likely a stale cache on one specific device, not a reproducible bug. A second phone worked immediately</td></tr>
</tbody>
</table>
</div>
<h2 id="weight">The weight problem, and what wasn't the video's fault</h2>
<p>We compressed the 6.8 MB export down to <strong>1.6 MB using VidCrush</strong>: free, browser-based, no signup, no watermark, well within its 500 MB limit for a file this small. That's a real, honest 76% reduction, and it's the number we'd point anyone to if this is the only step they take.</p>
<p>What we didn't expect: even with the video at 1.6 MB, PageSpeed Insights still reported the <strong>total page payload at 6.35 MB on desktop and 6.76 MB on mobile</strong>, nearly the weight of the original, uncompressed video file, and the video wasn't the reason. The single largest recoverable chunk PageSpeed flagged was <strong>2.4 MB of unused JavaScript</strong> loaded by the page, unrelated to the Higgsfield video itself and most likely runtime and component overhead from the Framer template rather than anything we added. If you're chasing page weight after adding AI video, check total payload before you assume the video is the culprit. On this test site, it wasn't the biggest one.</p>
<h2 id="accessibility">The accessibility gap, and the fix we didn't fake</h2>
<p>PageSpeed's accessibility audit came back at <strong>82/100</strong> with two flags directly relevant here: the page's <code>&lt;html&gt;</code> element had no <code>lang</code> attribute, and the new <code>&lt;video&gt;</code> element had no <code>&lt;track&gt;</code> for captions.</p>
<p>The <code>lang</code> attribute was unrelated to the video, a baseline gap in the test site's settings, fixed in Framer's Site Settings in under a minute.</p>
<p>The missing captions flag is more interesting, because the obvious fix is the wrong one. Our clip has no dialogue and no on-screen text. It's ambient motion, nothing a caption track could meaningfully transcribe. Adding an empty <code>.vtt</code> file just to make the automated check pass would satisfy Lighthouse without fixing anything real: a screen reader user would still land on a video element with no useful information, now dressed up as if it had one.</p>
<p>The more honest fix is to tell assistive technology to skip it, because it's decorative. We replaced Framer's <a href="https://www.framer.com/help/articles/how-to-add-video/" target="_blank" rel="noopener">native Video component</a> with an <strong>Embed component</strong> carrying hand-written markup:</p><pre><code>&lt;video autoplay muted loop playsinline aria-hidden="true"
       style="width:100%;height:100%;object-fit:cover;border-radius:16px;"&gt;
  &lt;source src="YOUR_VIDEO_URL" type="video/mp4"&gt;
&lt;/video&gt;</code></pre><p><code>aria-hidden="true"</code> is the point: it removes the element from the accessibility tree entirely, which is appropriate for video that carries no information a non-visual user needs. It's not a universal fix. If the visuals in a clip communicate something real, a product demo, an instructional shot, anything beyond mood and motion, hiding it is the wrong move; you'd want an equivalent text description or real captions instead. <a href="https://developer.chrome.com/docs/lighthouse/accessibility/scoring" target="_blank" rel="noopener">Lighthouse's captions rule</a> is a blanket check; it can't tell a decorative loop from an interview. Knowing the difference is the part a tool can't do for you.</p>
<div class="ta-shot"><img loading="lazy" src="/wp-content/uploads/2026/08/framer-embed-aria-hidden-video-code.webp" alt="Framer Embed component HTML code with aria-hidden attribute for decorative video" width="1200" height="675"></div>
<h2 id="phantom-bug">The mobile bug that wasn't a bug</h2>
<p>Before we got to any of the fixes above, we opened the published page on a real iPhone and found the hero section empty: no video, no fallback image, just blank space where it should have been. It reproduced in both Safari and Chrome on that device, which briefly looked like a real platform limitation rather than a browser quirk.</p>
<p>Navigating to another page and back made the video appear. A second, different iPhone showed the video immediately on first load, no issue. Going back to the first phone with a fresh open, it worked too.</p>
<p>The most likely explanation was a stale cache on that one device, not a reproducible rendering bug in Framer or a compatibility problem with the Higgsfield export. We can't prove the cache theory the way you'd prove a code fix, but the problem didn't reproduce once we tested a second device and reopened the first one fresh. It looked exactly like a bug worth writing up until the mundane explanation held up better than the dramatic one, which is the actual lesson: one phone is not a test suite, and "it's broken on my device" is a hypothesis, not a finding, until you've checked a second device and a hard refresh.</p>
<h2 id="verification">Before and after, verified</h2>
<p>Both PageSpeed runs below used the same 1.6 MB compressed video. The only change between them was replacing the native Video component with the Embed + <code>aria-hidden</code> version above, plus adding the missing <code>lang</code> attribute. We re-ran the test with a cache-busting query string to rule out Cloudflare-style edge caching skewing the numbers.</p>
<div class="ta-table-wrap">
<table class="ta-table">
<caption>Mobile PageSpeed results before and after the accessibility fix</caption>
<thead><tr><th scope="col">Metric (mobile)</th><th scope="col">Before</th><th scope="col">After</th></tr></thead>
<tbody>
<tr><td>Performance</td><td class="is-bad">47</td><td class="is-good">63</td></tr>
<tr><td>Accessibility</td><td class="is-bad">82</td><td class="is-good">88</td></tr>
<tr><td>Largest Contentful Paint</td><td class="is-bad">6.4 s</td><td>4.3 s</td></tr>
<tr><td>Total Blocking Time</td><td class="is-bad">1,390 ms</td><td>630 ms</td></tr>
<tr><td>"Video missing captions" flag</td><td class="is-bad">Present</td><td class="is-good">Gone</td></tr>
</tbody>
</table>
</div>
<p>We didn't isolate every variable: the <code>lang</code> fix, the component swap, and the <code>aria-hidden</code> attribute all landed in the same pass, so we can't cleanly credit one change for the full gain. What we can say is that the combined fix moved a real number, not just a cosmetic score: LCP dropped by more than two seconds and Total Blocking Time more than halved.</p>
<p>4.3 seconds of LCP is still outside Google's "good" threshold (under 2.5s). A hero video, even compressed and correctly marked up, is not a free addition to mobile performance. It costs something, and the honest number after our fix is still "needs improvement," not "good."</p>
<p>Two other flags stayed exactly where they were, and neither is about the video: insufficient color contrast somewhere on the page, and links without a distinguishable purpose. Both are pre-existing issues on the test site, worth fixing separately, unrelated to anything in this workflow.</p>
<h2 id="when-to-use">When this is worth doing</h2>
<p><strong>Worth it for:</strong> a hero section that needs motion and doesn't have stock footage that fits, background loops with no dialogue or informational content, quick concept previews before commissioning real video.</p>
<p><strong>Do the extra work for:</strong> anything client-facing. Compress before you publish, mark decorative video as decorative rather than faking captions, and check mobile on more than one device before you call it done.</p>
<p><strong>Skip it for:</strong> any video that needs to convey actual information, product demonstrations, testimonials, anything with speech, where a caption track is a real requirement, not one to bypass with <code>aria-hidden</code>.</p>
<p>The generation and the drag-and-drop are the fast part, and neither one is where the risk lives. The risk is in publishing a 6.8 MB file nobody compressed, or a decorative video that either fakes captions or skips the accessibility question entirely. That's still work a person has to do.</p>
<div class="ta-note">Tested August 2026 against Higgsfield's Plus plan, Kling 3.0 Turbo, and Framer's current Video/Embed components. Both platforms move quickly. Verify against current behavior before you rely on this for client work.</div>
<div class="ta-faq" id="faq">
<h2>Frequently asked questions</h2>
<div class="ta-faq__list">
<div class="ta-faq__item">
<h3 class="ta-faq__q">How do I connect Higgsfield to Claude?</h3>
<p class="ta-faq__a">In Claude web or desktop: Settings → Connectors → Add custom connector → paste <code>https://mcp.higgsfield.ai/mcp</code> → authorize in the browser. In Claude Code: run <code>claude mcp add --transport http --scope user higgsfield https://mcp.higgsfield.ai/mcp</code>. Both use OAuth; no API key is required, but you do need an active Higgsfield subscription.</p>
</div>
<div class="ta-faq__item">
<h3 class="ta-faq__q">Which Higgsfield plan do I need for AI video?</h3>
<p class="ta-faq__a">Higgsfield's Starter plan ($15/mo) excludes Google's Veo 3 and Veo 3 Fast models. We used Plus ($49/mo, or $39/mo annual) to avoid that restriction entirely. Our actual generation used Kling 3.0 Turbo, which Higgsfield's pricing page lists as available on Starter too, untested by us, but plausible if you know you only need Kling-family models.</p>
</div>
<div class="ta-faq__item">
<h3 class="ta-faq__q">How long does it take to generate a hero video with Higgsfield?</h3>
<p class="ta-faq__a">Our 6-second, 1080p clip took roughly a minute, for 12 credits. We didn't measure this precisely, so treat it as an estimate rather than a benchmark.</p>
</div>
<div class="ta-faq__item">
<h3 class="ta-faq__q">Can I drag a Higgsfield video straight into Framer?</h3>
<p class="ta-faq__a">Yes. Framer's native Video component accepts a dragged MP4 directly onto the canvas and creates the video element automatically, with no conversion step.</p>
</div>
<div class="ta-faq__item">
<h3 class="ta-faq__q">Why is my AI-generated video so large, and how do I compress it for free?</h3>
<p class="ta-faq__a">Our six-second 1080p export was 6.8 MB, unoptimized by default. We compressed it to 1.6 MB using VidCrush, a free browser-based tool with no signup or watermark (500 MB limit). HandBrake is the free desktop alternative if you're doing this repeatedly.</p>
</div>
<div class="ta-faq__item">
<h3 class="ta-faq__q">Does Framer add captions or alt text to video automatically?</h3>
<p class="ta-faq__a">No. Framer's native Video component doesn't expose a captions or track field, and Lighthouse flags any video element without one, regardless of whether the video has dialogue.</p>
</div>
<div class="ta-faq__item">
<h3 class="ta-faq__q">Should I add captions to a decorative background video?</h3>
<p class="ta-faq__a">Not if it has no dialogue or informational content. An empty caption file satisfies the automated check without fixing anything real. For genuinely decorative video, mark it <code>aria-hidden="true"</code> so assistive technology skips it, via a custom Embed component since Framer's native Video widget doesn't expose this control. If the video communicates real information, aria-hidden is the wrong fix; use captions or a text description instead.</p>
</div>
<div class="ta-faq__item">
<h3 class="ta-faq__q">Why did my hero video not show up on one phone but work fine on another?</h3>
<p class="ta-faq__a">The most likely explanation was a stale cache on one specific device, not a reproducible Framer or Higgsfield bug: a second phone showed the video immediately, and revisiting the first phone fresh also worked. Test on more than one device before concluding something is broken.</p>
</div>
<div class="ta-faq__item">
<h3 class="ta-faq__q">Does adding a hero video hurt Core Web Vitals?</h3>
<p class="ta-faq__a">Yes, measurably. On our test, mobile LCP was 6.4s with the video added via Framer's native component (compressed to 1.6 MB), improving to 4.3s in our second test after switching to an Embed-based implementation and making the accessibility changes described above, still outside Google's "good" threshold of 2.5s. A hero video is not a free addition to mobile performance.</p>
</div>
</div>
</div>
<div class="ta-cta">
<h2 id="related-reading">Related reading</h2>
<ul>
<li><a href="/framer-chatgpt-codex-workflow/">Building a Framer Website with ChatGPT + Codex: My Real 2026 Workflow</a></li>
</ul>
<div class="ta-cta__label">Tarasovs Digital Agency</div>
<h3>Adding AI video to your site? We'll check what it actually costs you.</h3>
<p>Generation and drag-and-drop are the easy part. We audit Framer and WordPress builds for the part that isn't: file weight, accessibility, Core Web Vitals, and whether what shipped matches what the tool claimed.</p>
<a href="/contact-us/" class="ta-cta__btn">Get a Framer performance audit →</a>
</div>
</div>
