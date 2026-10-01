---
title: "Building a Framer Website with ChatGPT + Codex: My Real 2026 Workflow"
slug: "framer-chatgpt-codex-workflow"
pubDate: "2026-08-19T21:40:11Z"
updatedDate: "2026-09-06T16:33:14Z"
excerpt: "I’m building my new Framer portfolio with a workflow that combines ChatGPT for art direction and prototyping, Codex for project-aware implementation, Framer as the production system, and manual QA for the final design decisions."
categories: ["framer","geo-ai-search-optimization","insights"]
cover:
  src: "/wp-content/uploads/2026/08/framer-chatgpt-codex-workflow-future-image.webp"
  width: 1254
  height: 1254
seo:
  title: "Building a Framer Website with ChatGPT + Codex: My Real 2026 Workflow"
  description: "A real 2026 workflow for designing and building a premium Framer website with ChatGPT, Codex and Framer Agent - including prototypes, native Framer, React, QA and what actually worked."
  canonical: "/framer-chatgpt-codex-workflow/"
  robots: "index, follow"
  ogImage: "/wp-content/uploads/2026/08/framer-chatgpt-codex-workflow-future-image.webp"
wpId: 230196
legacyUrl: "/framer-chatgpt-codex-workflow/"
---
<style>
.ta-post {
--accent: #7C3AED;
--accent-bright: #A855F7;
--accent-soft: #6D28D9;
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
--radius-sm: 8px;
--radius-md: 14px;
--radius-lg: 18px;
--radius-xl: 24px;
--space-xs: 8px;
--space-sm: 14px;
--space-md: 22px;
--space-lg: 32px;
--space-xl: 48px;
--space-2xl: 72px;
--text-xs: 12px;
--text-sm: 14px;
--text-base: 17px;
--text-lg: 20px;
--text-xl: 24px;
--text-2xl: 30px;
--text-3xl: 38px;
color: var(--text);
font-size: var(--text-base);
line-height: 1.75;
-webkit-font-smoothing: antialiased;
text-rendering: optimizeLegibility;
}
.ta-post .ta-figure {
margin: var(--space-lg) 0 var(--space-xl);
}
.ta-post .ta-figure img {
display: block;
width: 100%;
height: auto;
border-radius: var(--radius-md);
border: 1px solid var(--border);
background: #080a0d;
box-shadow: var(--shadow);
}
.ta-post .ta-figure figcaption {
margin-top: 10px;
color: var(--text-3);
font-size: var(--text-sm);
line-height: 1.55;
}
.ta-post .ta-figure.ta-figure-featured {
margin-top: 0;
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
.ta-post .ta-qa {
background: var(--qa-bg);
border: 1px solid var(--qa-border);
border-left: 4px solid var(--accent);
border-radius: var(--radius-md);
padding: 28px 30px;
margin: 0 0 var(--space-xl);
box-shadow: var(--shadow);
}
.ta-post .ta-qa-label,
.ta-post .ta-kicker {
font-size: var(--text-xs);
font-weight: 700;
text-transform: uppercase;
letter-spacing: .12em;
color: var(--accent);
}
body.dark-scheme .ta-post .ta-qa-label,
body.dark-scheme .ta-post .ta-kicker { color: var(--accent-bright); }
.ta-post .ta-qa-label { margin-bottom: 10px; }
.ta-post .ta-qa p { margin: 0 0 12px; color: var(--text); line-height: 1.72; }
.ta-post .ta-qa p:last-child { margin-bottom: 0; }
.ta-post strong { color: var(--text); font-weight: 700; }
.ta-post .ta-lede {
font-size: clamp(19px, 2vw, 23px);
line-height: 1.65;
color: var(--text-2);
margin: 0 0 30px;
}
.ta-post .ta-flow {
display: grid;
grid-template-columns: repeat(11, auto);
align-items: center;
gap: 9px;
overflow-x: auto;
padding: 18px 0 8px;
margin: 0 0 var(--space-xl);
scrollbar-width: thin;
}
.ta-post .ta-flow-step {
white-space: nowrap;
border: 1px solid var(--border);
background: var(--surface);
border-radius: 999px;
padding: 9px 14px;
font-size: 12px;
font-weight: 700;
letter-spacing: .04em;
color: var(--text);
}
.ta-post .ta-flow-step.ta-flow-step-accent {
border-color: var(--border-a);
color: var(--accent);
box-shadow: var(--glow);
}
body.dark-scheme .ta-post .ta-flow-step.ta-flow-step-accent { color: var(--accent-bright); }
.ta-post .ta-flow-arrow { color: var(--text-3); font-size: 16px; }
.ta-post .ta-toc {
background: var(--surface);
border: 1px solid var(--border);
border-radius: var(--radius-md);
padding: 28px 30px;
margin-bottom: var(--space-xl);
}
.ta-post .ta-toc-label {
font-size: var(--text-sm);
font-weight: 700;
text-transform: uppercase;
letter-spacing: .1em;
color: var(--text-3);
margin-bottom: 12px;
}
.ta-post .ta-toc-list {
margin: 0;
padding-left: 1.35rem;
display: grid;
grid-template-columns: repeat(2, minmax(0,1fr));
gap: 8px 32px;
}
.ta-post .ta-toc-list li { color: var(--text-3); }
.ta-post .ta-toc-list a { color: var(--accent); text-decoration: none; font-size: var(--text-sm); }
.ta-post .ta-toc-list a:hover { color: var(--accent-bright); }
.ta-post .ta-body h2,
.ta-post .ta-faq > h2 {
font-size: clamp(30px, 4vw, 40px);
font-weight: 800;
color: var(--text);
margin: var(--space-2xl) 0 var(--space-md);
letter-spacing: -.025em;
line-height: 1.2;
scroll-margin-top: 90px;
}
.ta-post .ta-body h3 {
font-size: clamp(22px, 3vw, 28px);
font-weight: 750;
color: var(--text);
margin: var(--space-xl) 0 var(--space-sm);
line-height: 1.3;
}
.ta-post .ta-body h3::before {
content: '';
display: inline-block;
width: 4px;
height: 1em;
background: var(--accent);
margin-right: 12px;
vertical-align: -.08em;
border-radius: 2px;
}
.ta-post .ta-body p { margin: 0 0 var(--space-md); color: var(--text); line-height: 1.82; }
.ta-post .ta-body a { color: var(--accent); text-decoration: underline; text-decoration-color: var(--border-a); text-underline-offset: 3px; }
.ta-post .ta-body a:hover { color: var(--accent-bright); }
.ta-post .ta-body ul,
.ta-post .ta-body ol { padding-left: 1.45rem; margin: 0 0 var(--space-md); }
.ta-post .ta-body li { margin: 0 0 8px; color: var(--text); line-height: 1.72; }
.ta-post .ta-body ul li::marker,
.ta-post .ta-body ol li::marker { color: var(--accent); font-weight: 700; }
.ta-post .ta-body blockquote {
margin: var(--space-lg) 0;
padding: 6px 0 6px 22px;
border-left: 3px solid var(--accent);
color: var(--text);
font-size: clamp(20px, 2.8vw, 27px);
line-height: 1.5;
font-weight: 650;
}
.ta-post .ta-note {
background: var(--elevated);
border-left: 3px solid var(--accent-soft);
border-radius: 0 var(--radius-sm) var(--radius-sm) 0;
padding: 20px 22px;
margin: var(--space-lg) 0;
font-size: var(--text-sm);
color: var(--text-2);
line-height: 1.7;
}
.ta-post .ta-stages {
display: grid;
grid-template-columns: repeat(3, minmax(0,1fr));
gap: 14px;
margin: var(--space-lg) 0 var(--space-xl);
}
.ta-post .ta-stage {
background: var(--surface);
border: 1px solid var(--border);
border-radius: var(--radius-md);
padding: 24px;
position: relative;
overflow: hidden;
}
.ta-post .ta-stage::before {
content: '';
position: absolute;
inset: 0 0 auto 0;
height: 2px;
background: linear-gradient(90deg,var(--accent),var(--accent-bright));
}
.ta-post .ta-stage-number {
font-size: var(--text-xs);
font-weight: 700;
text-transform: uppercase;
letter-spacing: .1em;
color: var(--accent);
margin-bottom: 8px;
}
.ta-post .ta-stage-title { font-size: 20px; font-weight: 750; color: var(--text); margin-bottom: 9px; line-height: 1.25; }
.ta-post .ta-stage p { margin: 0; font-size: var(--text-sm); color: var(--text-2); line-height: 1.6; }
.ta-post .ta-stats {
display: grid;
grid-template-columns: repeat(4,minmax(0,1fr));
gap: 12px;
margin: var(--space-lg) 0 var(--space-xl);
}
.ta-post .ta-stat {
background: var(--surface);
border: 1px solid var(--border);
border-radius: var(--radius-md);
padding: 22px;
min-height: 130px;
transition: border-color .2s ease, box-shadow .2s ease, transform .2s ease;
}
.ta-post .ta-stat:hover { border-color: var(--border-a); box-shadow: var(--glow); transform: translateY(-2px); }
.ta-post .ta-stat-number { font-size: clamp(29px,4vw,42px); font-weight: 800; line-height: 1; letter-spacing: -.035em; color: var(--stat-clr); margin-bottom: 10px; }
.ta-post .ta-stat-label { font-size: 13px; color: var(--text-2); line-height: 1.45; }
.ta-post .ta-table-wrap {
overflow-x: auto;
margin: var(--space-lg) 0 var(--space-xl);
border-radius: var(--radius-md);
border: 1px solid var(--border);
}
.ta-post .ta-table { width: 100%; border-collapse: collapse; font-size: var(--text-sm); min-width: 720px; }
.ta-post .ta-table thead tr { background: var(--elevated); }
.ta-post .ta-table th,
.ta-post table.ta-table th {
padding: 16px 20px !important;
text-align: left !important;
font-weight: 700 !important;
font-size: var(--text-xs) !important;
text-transform: uppercase;
letter-spacing: .08em;
color: var(--accent) !important;
border: none !important;
border-bottom: 1px solid var(--border-a) !important;
vertical-align: middle !important;
}
.ta-post .ta-table td,
.ta-post table.ta-table td {
padding: 16px 20px !important;
color: var(--text) !important;
border: none !important;
border-bottom: 1px solid var(--border) !important;
line-height: 1.6 !important;
vertical-align: top !important;
text-align: left !important;
}
.ta-post .ta-table tr:last-child td { border-bottom: none !important; }
.ta-post .ta-table tbody tr:hover td { background: var(--hover); }
.ta-post .ta-table .ta-row-label { font-weight: 700; color: var(--text-2) !important; white-space: nowrap; }
.ta-post .ta-check { color: var(--accent); font-weight: 800; }
.ta-post .ta-dash { color: var(--text-3); }
.ta-post .ta-actions {
display: grid;
grid-template-columns: repeat(4,minmax(0,1fr));
gap: 12px;
margin: var(--space-lg) 0 var(--space-xl);
}
.ta-post .ta-action {
background: var(--surface);
border: 1px solid var(--border);
border-radius: var(--radius-md);
padding: 22px;
}
.ta-post .ta-action-title { font-size: var(--text-sm); font-weight: 750; color: var(--accent); margin-bottom: 12px; padding-bottom: 10px; border-bottom: 1px solid var(--border); }
.ta-post .ta-action ul { list-style: none; padding: 0; margin: 0; }
.ta-post .ta-action li { position: relative; padding-left: 0; margin: 0 0 8px; font-size: var(--text-sm); color: var(--text-2); line-height: 1.5; }
.ta-post .ta-action li::before { content: none; }
.ta-post .ta-code {
background: var(--elevated);
border: 1px solid var(--border);
border-radius: var(--radius-md);
padding: 20px 22px;
overflow-x: auto;
margin: var(--space-md) 0 var(--space-lg);
color: var(--text);
font: 500 13px/1.7 ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", monospace;
white-space: pre;
}
.ta-post .ta-related {
margin-top: var(--space-2xl);
padding-top: var(--space-xl);
border-top: 1px solid var(--border);
}
.ta-post .ta-related h2 {
font-size: clamp(30px, 4vw, 40px);
font-weight: 800;
color: var(--text);
margin: 0 0 var(--space-md);
letter-spacing: -.025em;
line-height: 1.2;
}
.ta-post .ta-related-intro {
margin: 0 0 var(--space-lg);
color: var(--text-2);
}
.ta-post .ta-related-grid {
display: grid;
grid-template-columns: repeat(2, minmax(0,1fr));
gap: 12px;
}
.ta-post .ta-related-link {
display: block;
background: var(--surface);
border: 1px solid var(--border);
border-radius: var(--radius-md);
padding: 22px;
text-decoration: none !important;
transition: border-color .2s ease, transform .2s ease, box-shadow .2s ease;
}
.ta-post .ta-related-link:hover {
border-color: var(--border-a);
transform: translateY(-2px);
box-shadow: var(--glow);
}
.ta-post .ta-related-kicker {
display: block;
font-size: var(--text-xs);
font-weight: 700;
text-transform: uppercase;
letter-spacing: .1em;
color: var(--accent);
margin-bottom: 8px;
}
.ta-post .ta-related-title {
display: block;
color: var(--text);
font-size: 18px;
font-weight: 750;
line-height: 1.4;
}
.ta-post .ta-related-link:hover .ta-related-title { color: var(--accent-bright); }
@media (max-width: 767px) {
.ta-post .ta-related-grid { grid-template-columns: 1fr; }
}
.ta-post .ta-faq {
margin-top: var(--space-2xl);
padding-top: var(--space-xl);
border-top: 1px solid var(--border);
}
.ta-post .ta-faq > h2 { margin-top: 0; }
.ta-post .ta-faq-list { display: flex; flex-direction: column; gap: 8px; }
.ta-post .ta-faq-item {
background: var(--surface);
border: 1px solid var(--border);
border-radius: var(--radius-md);
padding: 22px 26px;
transition: border-color .2s ease;
}
.ta-post .ta-faq-item:hover { border-color: var(--border-a); }
.ta-post .ta-faq-q { margin: 0 0 8px; font-weight: 750; font-size: var(--text-base); color: var(--text); }
.ta-post .ta-faq-a { margin: 0; font-size: var(--text-sm); color: var(--text-2); line-height: 1.72; }
.ta-post .ta-cta {
background: var(--surface);
border: 1px solid var(--border-a);
border-radius: var(--radius-xl);
padding: clamp(30px,5vw,48px);
margin-top: var(--space-2xl);
text-align: center;
box-shadow: var(--glow);
position: relative;
overflow: hidden;
}
.ta-post .ta-cta::before {
content: '';
position: absolute;
width: 320px;
height: 320px;
top: -170px;
right: -120px;
border-radius: 50%;
background: radial-gradient(circle,rgba(168,85,247,.14),transparent 70%);
pointer-events: none;
}
.ta-post .ta-cta-label { font-size: var(--text-xs); font-weight: 700; text-transform: uppercase; letter-spacing: .12em; color: var(--accent); margin-bottom: 10px; }
.ta-post .ta-cta-title { font-size: clamp(26px,4vw,34px); font-weight: 800; color: var(--text); line-height: 1.28; margin: 0 0 12px; }
.ta-post .ta-cta-text { max-width: 650px; margin: 0 auto 22px; color: var(--text-2); line-height: 1.7; }
.ta-post .ta-cta-btn,
.ta-post a.ohio-widget.button.ta-cta-btn {
display: inline-block;
background: var(--accent) !important;
color: #fff !important;
font-weight: 700;
font-size: var(--text-base);
padding: 14px 28px;
border-radius: var(--radius-lg);
text-decoration: none !important;
border: none !important;
box-shadow: none;
transition: background .2s ease, box-shadow .2s ease, transform .15s ease;
}
.ta-post .ta-cta-btn:hover,
.ta-post a.ohio-widget.button.ta-cta-btn:hover {
background: var(--accent-bright) !important;
color: #fff !important;
box-shadow: 0 0 30px rgba(168,85,247,.35);
transform: translateY(-1px);
}
@media (max-width: 900px) {
.ta-post .ta-toc-list { grid-template-columns: 1fr; }
.ta-post .ta-stats { grid-template-columns: repeat(2,minmax(0,1fr)); }
.ta-post .ta-actions { grid-template-columns: repeat(2,minmax(0,1fr)); }
}
@media (max-width: 768px) {
.ta-post { --text-base: 16px; --space-xl: 40px; --space-2xl: 58px; }
.ta-post .ta-qa,
.ta-post .ta-toc { padding: 22px; }
.ta-post .ta-stages { grid-template-columns: 1fr; }
.ta-post .ta-flow { grid-template-columns: repeat(11, max-content); }
}
@media (max-width: 520px) {
.ta-post .ta-stats,
.ta-post .ta-actions { grid-template-columns: 1fr; }
.ta-post .ta-faq-item { padding: 20px; }
.ta-post .ta-qa { padding: 21px 20px; }
}
@media (prefers-reduced-motion: reduce) {
.ta-post *, .ta-post *::before, .ta-post *::after {
scroll-behavior: auto !important;
transition-duration: .01ms !important;
animation-duration: .01ms !important;
}
}
</style>
<div class="ta-post">
<div class="ta-qa">
<div class="ta-qa-label">Quick Answer</div>
<p><strong>I’m building my new Framer portfolio with a workflow that combines ChatGPT for art direction and prototyping, Codex for project-aware implementation, Framer as the production system, and manual QA for the final design decisions.</strong></p>
<p>The useful part is not “AI made my website.” It is the handoff between tools: concept → browser prototype → project audit → scoped implementation → native Framer or React depending on the interaction → human review.</p>
</div>
<p class="ta-lede">AI can generate a website in seconds. That was not what I wanted. For my new portfolio, the website itself has to demonstrate the quality of the work: typography, motion, responsive systems, custom interaction, CMS structure and technical depth.</p>
<figure class="ta-figure ta-figure-featured">
<img src="/wp-content/uploads/2026/08/framer-chatgpt-codex-workflow.webp" alt="Building a Framer website with ChatGPT and Codex workflow" loading="eager" fetchpriority="high">
<figcaption>My current AI-assisted Framer workflow: ChatGPT for direction, Codex for implementation, Framer for production, and human QA before anything ships.</figcaption>
</figure>
<div class="ta-flow" aria-label="Framer AI production workflow">
<span class="ta-flow-step ta-flow-step-accent">ChatGPT</span><span class="ta-flow-arrow">→</span>
<span class="ta-flow-step">Visual direction</span><span class="ta-flow-arrow">→</span>
<span class="ta-flow-step">HTML prototype</span><span class="ta-flow-arrow">→</span>
<span class="ta-flow-step ta-flow-step-accent">Codex</span><span class="ta-flow-arrow">→</span>
<span class="ta-flow-step">Framer</span><span class="ta-flow-arrow">→</span>
<span class="ta-flow-step ta-flow-step-accent">Human QA</span>
</div>
<nav class="ta-toc" aria-label="Table of contents">
<div class="ta-toc-label">In this article</div>
<ol class="ta-toc-list">
<li><a href="#ta-project">The project</a></li>
<li><a href="#ta-chatgpt">ChatGPT as an art-direction tool</a></li>
<li><a href="#ta-prototypes">Why I prototype outside Framer</a></li>
<li><a href="#ta-audit">Codex project audit</a></li>
<li><a href="#ta-brief">The implementation brief</a></li>
<li><a href="#ta-example">A real Section 03 example</a></li>
<li><a href="#ta-failures">What went wrong</a></li>
<li><a href="#ta-native-react">Native Framer vs React</a></li>
<li><a href="#ta-taste">Where AI still fails</a></li>
<li><a href="#ta-motion">Motion without overdesign</a></li>
<li><a href="#ta-roles">ChatGPT vs Codex vs Framer</a></li>
<li><a href="#ta-recommend">The workflow I recommend</a></li>
</ol>
</nav>
<div class="ta-body">
<h2 id="ta-project">The project: “Framer, pushed further.”</h2>
<p>The new portfolio is built around one positioning idea: <strong>Framer, pushed further.</strong></p>
<p>I do not want to present Framer as simply a visual no-code tool. My Framer work often extends into custom React and TypeScript, CMS architecture, motion, APIs, localization, responsive systems and technical search performance. The portfolio therefore needs to communicate both the visual quality of the work and what is happening behind the canvas.</p>
<p><a href="https://yuriitarasov.framer.website/" target="_blank" rel="noopener">View the live Framer portfolio →</a></p>
<figure class="ta-figure">
<img loading="lazy" src="/wp-content/uploads/2026/08/2-hero.webp" alt="Framer pushed further portfolio Hero with interactive exploded system" width="1600" height="792">
<figcaption>The current Hero: “Framer, pushed further.” paired with an interactive exploded system that exposes the layers behind the build.</figcaption>
</figure>
<div class="ta-stats" aria-label="Portfolio structure">
<div class="ta-stat"><div class="ta-stat-number">01</div><div class="ta-stat-label">Hero - interactive system showing the layers behind a Framer build.</div></div>
<div class="ta-stat"><div class="ta-stat-number">02</div><div class="ta-stat-label">Selected Work - cinematic project presentation rather than a conventional card grid.</div></div>
<div class="ta-stat"><div class="ta-stat-number">03</div><div class="ta-stat-label">Beyond the Canvas - Framer extending into React, APIs, CMS, Motion and Search.</div></div>
<div class="ta-stat"><div class="ta-stat-number">04</div><div class="ta-stat-label">Framer in Practice - experience and credibility without another generic agency section.</div></div>
</div>
<p>The structure has changed several times while I have been designing it. That is important. This has never been a <strong>prompt → website → publish</strong> process.</p>
<blockquote>Generate → compare → reject → refine → prototype → implement → inspect again.</blockquote>
<h2 id="ta-chatgpt">1. I use ChatGPT for art direction, not just generation</h2>
<p>The first stage happens before I let an implementation agent touch Framer. I use ChatGPT to explore page architecture, section concepts, positioning, copy hierarchy, interaction models, scroll choreography, responsive behavior and possible implementation paths.</p>
<p>The Hero eventually became “Framer, pushed further.” with an interactive exploded system showing layers such as Layout, CMS, React, Motion and Search. But the first concept was not automatically accepted just because it looked polished.</p>
<p>The same thing happened with Selected Work. The original version used a large project image on the left and four selectable projects on the right. It worked. It was clean. It was also noticeably weaker than the Hero.</p>
<figure class="ta-figure">
<img loading="lazy" src="/wp-content/uploads/2026/08/1-selected-work.webp" alt="Original Selected Work section in Yurii Tarasov Framer portfolio" width="1600" height="946">
<figcaption>The earlier Selected Work direction: functional and clean, but visually weaker than the Hero - which is why I went back to the section concept instead of just polishing it.</figcaption>
</figure>
<p>Instead of polishing a weak concept indefinitely, I went back to the section architecture and started exploring fullscreen, scroll-driven project presentations where the work itself dominates the viewport.</p>
<blockquote>AI makes producing alternatives cheap. Choosing the right alternative still requires taste.</blockquote>
<h2 id="ta-prototypes">2. Important sections become browser prototypes before Framer sections</h2>
<p>For interaction-heavy sections I often build a disposable HTML/CSS/JavaScript prototype before touching the production project.</p><pre class="ta-code">section-name/
├── index.html
├── styles.css
└── script.js</pre><p>This lets me evaluate typography, spacing, hover states, scroll timing, responsive behavior and animation sequencing in a controlled environment. I can throw the prototype away if the concept is weak without leaving a trail of experimental layers inside Framer.</p>
<h3>What changed during the Beyond the Canvas prototype</h3>
<p>For the technical “Beyond the Canvas” section, browser QA exposed details that were easy to miss in a static composition:</p>
<ul>
<li>inactive timeline nodes needed to be hollow rather than filled;</li>
<li>the active node needed a restrained lime fill and glow;</li>
<li>connecting lines had to stop at the edge of each circle instead of passing through them;</li>
<li>the lime line crossing “a limitation.” needed shorter, tapered ends;</li>
<li>descriptions needed stable space so interaction did not cause layout jumps;</li>
<li>tablet and phone needed a vertical trajectory rather than a compressed desktop timeline.</li>
</ul>
<p>These details are small individually. Together they determine whether an interaction feels designed or merely generated.</p>
<figure class="ta-figure">
<img loading="lazy" src="/wp-content/uploads/2026/08/3-beyond-canvas.webp" alt="Beyond the Canvas Framer section with interactive capability timeline" width="1600" height="910">
<figcaption>The Beyond the Canvas section after refinement: large editorial typography, a restrained lime signal system, and an interactive capability trajectory from Framer to custom React, APIs, CMS, Motion, Localization and Search.</figcaption>
</figure>
<h2 id="ta-audit">3. Codex audits the real Framer project before changing it</h2>
<p>The next stage is where the workflow becomes more useful than screenshot-to-code generation. I connected Codex to the real Framer project and asked it to perform a read-only inspection before implementing a section.</p>
<p>The audit identified the actual production structure: Home, the design-system page, breakpoints, shared navigation, Selected Work, labels, buttons, CMS collections and the custom Hero code component.</p>
<div class="ta-actions" aria-label="What the Framer project audit covered">
<div class="ta-action"><div class="ta-action-title">Pages</div><ul><li>Home</li><li>00 - Design System</li></ul></div>
<div class="ta-action"><div class="ta-action-title">Breakpoints</div><ul><li>Desktop</li><li>Laptop</li><li>Tablet</li><li>Phone</li></ul></div>
<div class="ta-action"><div class="ta-action-title">CMS</div><ul><li>Projects</li><li>Services</li><li>Featured / order fields</li><li>Project detail content</li></ul></div>
<div class="ta-action"><div class="ta-action-title">Code &amp; components</div><ul><li>ExplodedSystem.tsx</li><li>Selected Work</li><li>Header / navigation</li><li>Buttons and labels</li></ul></div>
</div>
<p>This matters because the agent is no longer being asked to build an isolated mockup from zero. It understands the system it is entering and can be told what must remain untouched.</p>
<h2 id="ta-brief">4. The agent gets a technical brief, not “make this look like the screenshot”</h2>
<p>Once the design direction is approved, the implementation brief becomes deliberately constrained. It describes where the section belongs, which files are the source of truth, exact breakpoint behavior, layout, interactions, motion, accessibility, reduced-motion behavior and which existing components or CMS structures must be preserved.</p>
<p>A typical constraint block looks like this:</p><pre class="ta-code">Do not modify Header.
Do not modify Hero.
Do not modify existing CMS structures unless requested.
Reuse existing design-system variables where possible.
Preserve responsive behavior across all four breakpoints.
Do not publish.</pre><p>The tighter the project context becomes, the more important these boundaries are. A capable agent can change a lot. That is exactly why the brief needs to define what it is allowed to change.</p>
<h2 id="ta-example">5. A real example: building “Beyond the Canvas”</h2>
<p>Section 03 became a useful test of the entire workflow. The approved statement was:</p>
<blockquote>Framer isn’t a limitation. It’s the starting point.</blockquote>
<p>Below it, the interface shows a capability trajectory:</p>
<p><strong>FRAMER → CUSTOM REACT → APIs → CMS SYSTEMS → MOTION → LOCALIZATION → SEARCH</strong></p>
<div class="ta-stages">
<div class="ta-stage">
<div class="ta-stage-number">Stage 1</div>
<div class="ta-stage-title">Design &amp; prototype</div>
<p>ChatGPT helps explore the concept, then the approved interaction is reproduced as an editable HTML/CSS/JS browser prototype.</p>
</div>
<div class="ta-stage">
<div class="ta-stage-number">Stage 2</div>
<div class="ta-stage-title">Audit &amp; implementation</div>
<p>Codex inspects the existing project, reads the prototype and works within a narrow implementation brief rather than inventing a new design system.</p>
</div>
<div class="ta-stage">
<div class="ta-stage-number">Stage 3</div>
<div class="ta-stage-title">Framer QA</div>
<p>I inspect the canvas structure, responsive behavior, motion, editability and visual result, then refine the section manually where necessary.</p>
</div>
</div>
<p>This resembles a conventional professional production workflow much more than one-click AI site generation. The difference is that several mechanical steps between an idea and an inspectable implementation happen much faster.</p>
<h2 id="ta-failures">6. What went wrong</h2>
<p>The failures have been more useful than the demos where everything appears to work on the first attempt.</p>
<h3>Branching was unavailable</h3>
<p>The intended workflow was agent branch → review → corrections → merge. In the actual project, Branching was unavailable in the current setup. The agent stopped instead of silently making broad changes directly to the main project.</p>
<div class="ta-note"><strong>Lesson:</strong> an AI workflow still depends on the real production environment. A prompt cannot create a platform capability that is unavailable on the current project or plan.</div>
<h3>Some source files were missing</h3>
<p>At another point, the implementation package did not contain every reference the brief expected. Rather than treating an absent reference as permission to improvise, the safer behavior was to stop and identify what was missing.</p><pre class="ta-code">section-03-beyond-canvas/
├── index.html
├── styles.css
├── script.js
├── reference.png
└── SECTION-03-FRAMER-BRIEF.md</pre><h3>The layout relied too heavily on absolute positioning</h3>
<p>One implementation looked close to the prototype but used too much absolute positioning in the primary layout. That made later edits more fragile, reduced the benefit of content-driven sizing and complicated responsive behavior. At one point, an edited component instance even collapsed to a height of zero.</p>
<p>The screenshot had looked correct. The structure was not production-ready.</p>
<blockquote>A screenshot match is not the same as a good Framer build.</blockquote>
<p>For primary layout I now strongly prefer native Stack, Grid, relative positioning, content-driven sizing and the existing breakpoint system. Absolute positioning is reserved for decorative overlays and intentional overlap.</p>
<h2 id="ta-native-react">7. Native Framer vs React: where I draw the line</h2>
<p>Another important lesson was realizing that sophisticated-looking motion does not automatically justify custom code. Framer already provides strong native tools for layout, variants, CMS and scroll-driven transforms.</p>
<p>A scroll-scrubbed video is a good example of when custom React is justified: the video time must remain synchronized with continuous scroll progress while separate Framer scene components appear at defined stages. See the complete guide to <a href="/how-scroll-scrubbed-video-works-in-framer/">building a scroll-scrubbed video component in Framer</a>, including setup, performance trade-offs, mobile behavior and a live implementation.</p>
<div class="ta-table-wrap">
<table class="ta-table">
<thead>
<tr><th>Task</th><th>ChatGPT</th><th>Codex</th><th>Native Framer</th><th>React / TS</th></tr>
</thead>
<tbody>
<tr><td class="ta-row-label">Art direction</td><td><span class="ta-check">✓</span></td><td><span class="ta-dash"> - </span></td><td><span class="ta-dash"> - </span></td><td><span class="ta-dash"> - </span></td></tr>
<tr><td class="ta-row-label">UX / hierarchy</td><td><span class="ta-check">✓</span></td><td><span class="ta-dash"> - </span></td><td><span class="ta-dash"> - </span></td><td><span class="ta-dash"> - </span></td></tr>
<tr><td class="ta-row-label">Browser prototype</td><td><span class="ta-check">✓</span></td><td><span class="ta-dash"> - </span></td><td><span class="ta-dash"> - </span></td><td><span class="ta-dash"> - </span></td></tr>
<tr><td class="ta-row-label">Project audit</td><td><span class="ta-dash"> - </span></td><td><span class="ta-check">✓</span></td><td><span class="ta-dash"> - </span></td><td><span class="ta-dash"> - </span></td></tr>
<tr><td class="ta-row-label">Stack / Grid layout</td><td><span class="ta-dash"> - </span></td><td><span class="ta-check">✓</span></td><td><span class="ta-check">✓</span></td><td><span class="ta-dash"> - </span></td></tr>
<tr><td class="ta-row-label">CMS structure</td><td><span class="ta-dash"> - </span></td><td><span class="ta-check">✓</span></td><td><span class="ta-check">✓</span></td><td><span class="ta-dash"> - </span></td></tr>
<tr><td class="ta-row-label">Variants / hover</td><td><span class="ta-dash"> - </span></td><td><span class="ta-dash"> - </span></td><td><span class="ta-check">✓</span></td><td><span class="ta-dash"> - </span></td></tr>
<tr><td class="ta-row-label">Scroll Transform</td><td><span class="ta-dash"> - </span></td><td><span class="ta-dash"> - </span></td><td><span class="ta-check">✓</span></td><td><span class="ta-dash"> - </span></td></tr>
<tr><td class="ta-row-label">Complex pointer state</td><td><span class="ta-dash"> - </span></td><td><span class="ta-check">✓</span></td><td>Sometimes</td><td><span class="ta-check">✓</span></td></tr>
<tr><td class="ta-row-label">APIs / custom data</td><td><span class="ta-dash"> - </span></td><td><span class="ta-check">✓</span></td><td>Sometimes</td><td><span class="ta-check">✓</span></td></tr>
<tr><td class="ta-row-label">Final visual QA</td><td><strong>Human</strong></td><td><strong>Human</strong></td><td><strong>Human</strong></td><td><strong>Human</strong></td></tr>
</tbody>
</table>
</div>
<p>My current rule is simple: <strong>use native Framer when native Framer is enough.</strong> A normal entrance reveal does not need a custom React component. A straightforward scroll-driven scale or opacity change can remain a native Scroll Transform. Custom React becomes worthwhile when the interaction genuinely needs state, unusual pointer behavior, APIs, advanced data or logic that would otherwise be difficult to maintain.</p>
<h2 id="ta-taste">8. The biggest AI failure is usually not technical</h2>
<p>In this project, AI has rarely been blocked by the ability to create something. The harder problem is deciding whether that something belongs on the site.</p>
<p>I rejected concepts because they felt too much like SaaS, too much like an infographic, too dark, too busy, too similar to another section, too decorative, or simply too obviously AI-designed.</p>
<p>One version of Selected Work contained a large project visual, a vertical project rail, technology indicators, project metadata, a browser frame, capability labels and progress lines. Every element was defensible individually. Together they made the section feel like a dashboard.</p>
<p>The stronger direction was to remove most of the UI and let the project itself take over the viewport.</p>
<blockquote>Many AI design problems are subtraction problems, not generation problems.</blockquote>
<h2 id="ta-motion">9. Some “premium” motion ideas were deliberately removed</h2>
<p>The same pattern applies to animation. More motion does not automatically make a site feel more premium.</p>
<p>During the portfolio work I considered or tested typewriter text, animated counters, stronger glow, additional sticky scenes, more project navigation and multiple overlapping scroll effects. Some were technically fine and still got removed.</p>
<p>A count-up animation for experience metrics such as “30+” or “15+”, for example, immediately pushed the section toward a familiar agency-template pattern. A quieter mask reveal with a line draw and restrained stagger felt more deliberate.</p>
<p>I also do not want every Home section to use the same interaction model. The current direction gives each major section a different job:</p>
<ul>
<li><strong>Hero:</strong> interaction-led - pointer depth and the custom exploded system;</li>
<li><strong>Selected Work:</strong> scroll-presentation-led - large project scenes replacing a conventional project list;</li>
<li><strong>Beyond the Canvas:</strong> system-animation-led - a technical trajectory that becomes interactive.</li>
</ul>
<p>The goal is not to make the site a motion demo reel. The goal is to make each interaction reinforce the story of the section.</p>
<h2 id="ta-roles">10. What ChatGPT does vs what Codex does vs what Framer does</h2>
<div class="ta-actions">
<div class="ta-action"><div class="ta-action-title">ChatGPT</div><ul><li>Art direction</li><li>Page architecture</li><li>UX critique</li><li>Concept comparison</li><li>Interaction ideas</li><li>Implementation briefs</li></ul></div>
<div class="ta-action"><div class="ta-action-title">Codex</div><ul><li>Project inspection</li><li>Existing component context</li><li>Source-file reading</li><li>Scoped implementation</li><li>Code-component work</li><li>Technical QA</li></ul></div>
<div class="ta-action"><div class="ta-action-title">Framer</div><ul><li>Production canvas</li><li>Responsive layout</li><li>CMS</li><li>Native motion</li><li>Visual tuning</li><li>Final project structure</li></ul></div>
<div class="ta-action"><div class="ta-action-title">Human</div><ul><li>Taste</li><li>Prioritization</li><li>Trade-offs</li><li>Final visual QA</li><li>What gets removed</li><li>What gets published</li></ul></div>
</div>
<p>These tools are not replacements for one another. They form a production chain, and the quality of the handoff matters as much as the quality of the individual tool.</p>
<h2 id="ta-recommend">11. The workflow I would recommend</h2>
<ol>
<li><strong>Define what the section is supposed to communicate.</strong> Do not begin with animation.</li>
<li><strong>Explore more than one visual direction.</strong> The first polished result is not necessarily the right result.</li>
<li><strong>Prototype complex interactions outside the production project.</strong> Disposable HTML/CSS/JS is still an extremely useful design environment.</li>
<li><strong>Ask the agent to inspect the existing Framer project before editing.</strong> It should understand pages, components, CMS, variables, breakpoints and code components.</li>
<li><strong>Give the agent a narrow implementation boundary.</strong> Explicitly state what it can and cannot change.</li>
<li><strong>Prefer native Framer features when they are sufficient.</strong> Especially for layout, CMS, variants, responsive behavior and Scroll Transform.</li>
<li><strong>Use React only when the interaction genuinely benefits from it.</strong> Custom code is a tool, not a quality badge.</li>
<li><strong>Inspect the layer structure, not only the screenshot.</strong> A visually correct result can still have poor production architecture.</li>
<li><strong>Expect to delete generated ideas.</strong> Fast exploration is only useful if weak output is cheap to reject.</li>
<li><strong>Keep publishing separate from implementation.</strong> The agent can help build; the final publishing decision remains deliberate.</li>
</ol>
<h2 id="ta-time">How AI has changed where I spend my time</h2>
<p>The biggest benefit is not that AI “does the work.” It reduces the time between an idea and something I can inspect.</p>
<div class="ta-table-wrap">
<table class="ta-table">
<thead><tr><th>Traditional iteration</th><th>AI-assisted iteration</th></tr></thead>
<tbody>
<tr><td>Idea</td><td>Idea</td></tr>
<tr><td>Design manually</td><td>Generate several directions quickly</td></tr>
<tr><td>Prototype manually</td><td>Reject weak concepts before production</td></tr>
<tr><td>Build in Framer</td><td>Prototype the strongest direction</td></tr>
<tr><td>Discover the concept is weak</td><td>Give the approved direction to the agent</td></tr>
<tr><td>Rebuild</td><td>Manual Framer QA and refinement</td></tr>
</tbody>
</table>
</div>
<p>That shift is valuable because it moves more of my time toward judgment: deciding what should exist, what should be removed, how the section should behave and whether the implementation structure is good enough to maintain. The same reduction in handoff friction is one reason I see more studios adopting Framer; I covered that separately in <a href="/framer-for-agencies-why-studios-are-switching/">Framer for agencies: why studios are switching</a>.</p>
<h2 id="ta-unattended">Would I let AI build the entire portfolio unattended?</h2>
<p>No. Not for this project.</p>
<p>The portfolio itself is supposed to demonstrate my ability to make decisions about design, motion, hierarchy and implementation. Blindly accepting generated output would undermine the point of the site.</p>
<p>I want AI to accelerate exploration, prototyping, implementation and repetitive technical work. I do not want it deciding which visual idea deserves to exist.</p>
<h2 id="ta-final">Final thoughts</h2>
<p>The interesting question is no longer whether AI can generate a website. It can. The more useful question is where AI belongs inside a professional web design and Framer development workflow.</p>
<blockquote>ChatGPT accelerates exploration. Codex accelerates implementation. Framer remains the production system. Human judgment decides what deserves to ship.</blockquote>
<p>That is much more useful to me than one-click website generation. I plan to update this case study when the portfolio is finished with final screenshots, implementation details and a clearer breakdown of which interactions stayed native in Framer and which ones justified custom React.</p>
</div>
<section class="ta-related" aria-labelledby="ta-related-title">
<h2 id="ta-related-title">Related Framer reading</h2>
<p class="ta-related-intro">More practical notes on Framer, platform choice, SEO and production workflows.</p>
<div class="ta-related-grid">
<a class="ta-related-link" href="/is-framer-good-for-seo/">
<span class="ta-related-kicker">Framer / SEO</span>
<span class="ta-related-title">Is Framer Good for SEO? Complete Technical Analysis 2026</span>
</a>
<a class="ta-related-link" href="/framer-for-agencies-why-studios-are-switching/">
<span class="ta-related-kicker">Framer / Agencies</span>
<span class="ta-related-title">Framer for Agencies: Why Studios Are Switching</span>
</a>
<a class="ta-related-link" href="/framer-vs-webflow-2026/">
<span class="ta-related-kicker">Platform comparison</span>
<span class="ta-related-title">Framer vs Webflow in 2026: Honest Comparison from an Agency That Uses Both</span>
</a>
<a class="ta-related-link" href="/framer-vs-wordpress-2026/">
<span class="ta-related-kicker">Platform comparison</span>
<span class="ta-related-title">Framer vs WordPress 2026: Which Platform Should You Build On?</span>
</a>
</div>
</section>
<section class="ta-faq" id="ta-faq">
<h2>Frequently Asked Questions</h2>
<div class="ta-faq-list">
<div class="ta-faq-item">
<p class="ta-faq-q">Can Codex build directly inside a Framer project?</p>
<p class="ta-faq-a">In my workflow, Codex is used with Framer’s external-agent connection so it can inspect the real project context before implementing scoped changes. I still review the canvas, structure and responsive behavior manually before anything is considered finished.</p>
</div>
<div class="ta-faq-item">
<p class="ta-faq-q">Do you design the site in ChatGPT or in Framer?</p>
<p class="ta-faq-a">Both, but for different reasons. I use ChatGPT heavily for art direction, concept exploration, critique and prototype planning. Framer remains the production environment where the final responsive system, CMS, native interactions and visual tuning live.</p>
</div>
<div class="ta-faq-item">
<p class="ta-faq-q">Why create an HTML/CSS prototype before Framer?</p>
<p class="ta-faq-a">For interaction-heavy sections it is a cheap, disposable way to validate motion, hierarchy and responsive behavior before touching the production project. If the idea fails, I can discard the prototype without contaminating the real Framer layer structure.</p>
</div>
<div class="ta-faq-item">
<p class="ta-faq-q">Should every advanced Framer interaction use React?</p>
<p class="ta-faq-a">No. I prefer native Framer for layout, CMS, variants, basic entrances and many scroll transforms. React becomes useful when the interaction genuinely requires more complex state, custom pointer logic, APIs or behavior that would be awkward to maintain natively.</p>
</div>
<div class="ta-faq-item">
<p class="ta-faq-q">What is the biggest risk of using AI agents for design implementation?</p>
<p class="ta-faq-a">A visually correct result can hide a weak implementation structure. Overuse of absolute positioning, unnecessary custom code or changes outside the intended scope can make a site harder to maintain even when the screenshot looks right.</p>
</div>
<div class="ta-faq-item">
<p class="ta-faq-q">Does AI remove the need for a designer or developer?</p>
<p class="ta-faq-a">Not in this workflow. It removes some mechanical friction between idea, prototype and implementation. The difficult decisions - hierarchy, restraint, trade-offs, architecture and what to remove - still require experienced judgment.</p>
</div>
</div>
</section>
<div class="ta-cta">
<div class="ta-cta-label">Tarasovs Digital Agency</div>
<h3 class="ta-cta-title">Need a Framer site that goes beyond the template?</h3>
<p class="ta-cta-text">I design and build Framer websites with custom interaction, React when it is justified, scalable CMS structure and production-focused QA.</p>
<a href="/contact-us/" class="ohio-widget button ta-cta-btn">Discuss a Framer project →</a>
<p style="margin:14px 0 0;font-size:14px;"><a href="https://yuriitarasov.framer.website/" target="_blank" rel="noopener">View the live Framer portfolio →</a></p>
</div>
</div>
