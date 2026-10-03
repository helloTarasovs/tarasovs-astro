---
title: "Connect Claude to Framer (2026): Setup & Results"
slug: "connect-claude-to-framer"
pubDate: "2026-07-22T14:27:02Z"
updatedDate: "2026-07-25T06:04:02Z"
excerpt: "Quick Answer To connect Claude to Framer, use Framer’s native External Agent…"
categories: ["framer","insights","marketing","seo"]
cover:
  src: "/wp-content/uploads/2026/07/connect-claude-to-framer-f-i.webp"
  alt: "How to connect Claude Code to Framer with the External Agent - plus a real 18-minute build, and the two places the output still needs a human before it goes live"
  width: 1254
  height: 1254
seo:
  title: "Connect Claude to Framer (2026): Setup & Results from Tarasovs"
  description: "How to connect Claude Code to Framer with the External Agent - plus a real 18-minute build, and the two places the output still needs a human before it goes live."
  canonical: "/connect-claude-to-framer/"
  robots: "index, follow"
  ogImage: "/wp-content/uploads/2026/07/connect-claude-to-framer-f-i.webp"
jsonld:
  - {"@context":"https://schema.org","@type":"TechArticle","headline":"Connect Claude to Framer (2026): Setup + What to Check After","description":"How to connect Claude Code to Framer with the External Agent - plus a real 18-minute build, and the two places the output still needs a human before it goes live.","datePublished":"2026-07-22T14:27:02+00:00","image":["https://tarasovs.me/wp-content/uploads/2026/07/tarasovs-connect-claude-to-framer-future-image.webp","https://tarasovs.me/wp-content/uploads/2026/07/framer-agent-alt-text-variable-binding-failure.webp","https://tarasovs.me/wp-content/uploads/2026/07/framer-agent-default-vs-written-metadata.webp","https://tarasovs.me/wp-content/uploads/2026/07/framer-cms-detail-page-metadata-bindings.webp","https://tarasovs.me/wp-content/uploads/2026/07/framer-agent-built-homepage.webp","https://tarasovs.me/wp-content/uploads/2026/07/framer-agent-responsive-breakpoints.webp"],"author":{"@type":"Person","name":"Yurii Tarasov","jobTitle":"Founder & GEO Strategist","worksFor":{"@type":"Organization","name":"Tarasovs Digital Agency","url":"https://tarasovs.me/"}},"publisher":{"@type":"Organization","name":"Tarasovs Digital Agency","url":"https://tarasovs.me/"},"mainEntityOfPage":{"@type":"WebPage","@id":"https://tarasovs.me/connect-claude-to-framer/"},"about":[{"@type":"Thing","name":"Framer"},{"@type":"Thing","name":"Claude Code"},{"@type":"Thing","name":"AI design agents"},{"@type":"Thing","name":"Technical SEO"}],"name":"Connect Claude to Framer (2026): Setup + What to Check After","dateModified":"2026-07-22T15:24:18+00:00","url":"https://tarasovs.me/connect-claude-to-framer/","inLanguage":"en-US","articleSection":["Framer","Insights","SEO"],"isPartOf":{"@type":"Blog","@id":"https://tarasovs.me/category/insights/","name":"Insights - Tarasovs Digital Agency"},"citation":["https://www.framer.com/help/articles/how-to-set-up-framer-for-claude-code-codex-and-cursor/","https://www.framer.com/help/articles/use-external-agents-with-framer/","https://www.framer.com/agents/external/"]}
  - {"@context":"https://schema.org","@type":"HowTo","name":"How to connect Claude to Framer","description":"Connect Claude Code to a Framer workspace using Framer's native External Agent.","totalTime":"PT5M","step":[{"@type":"HowToStep","position":1,"name":"Install the Framer agent skills","text":"Confirm Node.js 24 or newer with node -v, then run npx @framer/agent setup in your terminal. This installs two skills into ~/.agents/skills/ and ~/.claude/skills/. Verify with ls ~/.claude/skills/ that framer and framer-code-components are present.","url":"https://tarasovs.me/connect-claude-to-framer/#setup"},{"@type":"HowToStep","position":2,"name":"Start a Claude Code session","text":"Run claude in your terminal from the same directory. This must be Claude Code in the terminal, not a chat panel inside your editor.","url":"https://tarasovs.me/connect-claude-to-framer/#setup"},{"@type":"HowToStep","position":3,"name":"Run the framer skill and authorize","text":"Type /framer inside the session, or hand the agent your Framer project link directly. A browser window opens the first time and you authorize access. Framer's documented flow is to open the project, copy the URL from the address bar or use Copy Project Link in the desktop app, and pass that link to the agent.","url":"https://tarasovs.me/connect-claude-to-framer/#setup"},{"@type":"HowToStep","position":4,"name":"Verify the published output","text":"After the agent finishes, publish and read the published head on three page types: home, a listing page, and two different CMS detail pages. Compare two detail items to confirm dynamic values are actually binding, and search the HTML for literal var(-- strings that indicate a failed binding.","url":"https://tarasovs.me/connect-claude-to-framer/#verification"}],"mainEntityOfPage":{"@type":"WebPage","@id":"https://tarasovs.me/connect-claude-to-framer/"},"image":"https://tarasovs.me/wp-content/uploads/2026/07/tarasovs-connect-claude-to-framer-future-image.webp","supply":[{"@type":"HowToSupply","name":"Node.js 24 or newer"},{"@type":"HowToSupply","name":"A Framer project"}],"tool":[{"@type":"HowToTool","name":"Claude Code"}]}
  - {"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"How do I connect Claude to Framer?","acceptedAnswer":{"@type":"Answer","text":"Run npx @framer/agent setup in your terminal to install Framer's agent skills, start a Claude Code session with claude, then run /framer inside that session and authorize your workspace in the browser that opens."}},{"@type":"Question","name":"Does Framer have an MCP server?","acceptedAnswer":{"@type":"Answer","text":"No. Framer's official integration is not an MCP server. It is a native External Agent connection using locally installed skills and Framer's project API, shipped with Framer 3.0 on 16 June 2026, and Framer's documentation states no separate MCP server is required. Some third-party guides incorrectly describe it as MCP-based and tell you to add connection details as an MCP server. Community MCP plugins do exist via the Framer Plugin API, but they are a separate route and require the project to be open in your browser."}},{"@type":"Question","name":"Why does /framer say Unknown command?","acceptedAnswer":{"@type":"Answer","text":"Usually because you are typing into a different chat panel such as GitHub Copilot Chat rather than Claude Code, because you installed the skills from inside a running session that has not been restarted, or because the skill's registered name differs from the folder name."}},{"@type":"Question","name":"Does the Framer agent handle SEO metadata?","acceptedAnswer":{"@type":"Answer","text":"Yes when you ask, but not by default. Left alone it publishes with My Framer Site as the title and Made with Framer as the description. When prompted it sets titles, descriptions, Open Graph and Twitter tags correctly across static and CMS pages alike, including dynamic values on CMS detail pages. Alt text was where it went wrong."}},{"@type":"Question","name":"Why is my Framer alt text showing as a var variable string?","acceptedAnswer":{"@type":"Answer","text":"The altText attribute accepts a variable reference syntactically but does not resolve it at render, so it prints the reference as a literal string. Use the Alt Text field on the CMS Image item instead, since Framer's image type carries source and alt together and that value flows through the binding to both listing and detail pages."}},{"@type":"Question","name":"Why do all my Framer CMS pages have the same meta description?","acceptedAnswer":{"@type":"Answer","text":"Almost always because the collection template has no description field bound to its page settings, so every item inherits the site-wide default. Add a description field to the collection, bind it in the template page settings, and fill it per item. Verify by comparing two different detail pages, since a single page checked on its own cannot tell you whether a value is dynamic or static."}},{"@type":"Question","name":"Can the Framer agent publish my site?","acceptedAnswer":{"@type":"Answer","text":"Yes, if you tell it to. Its work lands in the project for review by default and reaches production when you publish. Framer's documentation states changes go live when you publish them yourself or instruct the agent to, and in our test the agent asked for approval and then published itself. On client projects keep publishing as a deliberate separate step, and note that an agent describing something as live may be describing preview state."}},{"@type":"Question","name":"Should I trust the agent's summary of what it did?","acceptedAnswer":{"@type":"Answer","text":"No. Treat it as a claim about intent, not a verification of outcome. In our test it twice described alt text as correctly set when it was not, and neither problem was visible anywhere except the published HTML."}}],"mainEntityOfPage":{"@type":"WebPage","@id":"https://tarasovs.me/connect-claude-to-framer/"}}
  - {"@context":"https://schema.org","@type":"TechArticle","headline":"Connect Claude to Framer (2026): Setup + What to Check After","description":"How to connect Claude Code to Framer with the External Agent - plus a real 18-minute build, and the two places the output still needs a human before it goes live.","datePublished":"2026-07-22T14:27:02+00:00","image":["https://tarasovs.me/wp-content/uploads/2026/07/tarasovs-connect-claude-to-framer-future-image.webp","https://tarasovs.me/wp-content/uploads/2026/07/framer-agent-alt-text-variable-binding-failure.webp","https://tarasovs.me/wp-content/uploads/2026/07/framer-agent-default-vs-written-metadata.webp","https://tarasovs.me/wp-content/uploads/2026/07/framer-cms-detail-page-metadata-bindings.webp","https://tarasovs.me/wp-content/uploads/2026/07/framer-agent-built-homepage.webp","https://tarasovs.me/wp-content/uploads/2026/07/framer-agent-responsive-breakpoints.webp"],"author":{"@type":"Person","name":"Yurii Tarasov","jobTitle":"Founder & GEO Strategist","worksFor":{"@type":"Organization","name":"Tarasovs Digital Agency","url":"https://tarasovs.me/"}},"publisher":{"@type":"Organization","name":"Tarasovs Digital Agency","url":"https://tarasovs.me/"},"mainEntityOfPage":{"@type":"WebPage","@id":"https://tarasovs.me/connect-claude-to-framer/"},"about":[{"@type":"Thing","name":"Framer"},{"@type":"Thing","name":"Claude Code"},{"@type":"Thing","name":"AI design agents"},{"@type":"Thing","name":"Technical SEO"}],"name":"Connect Claude to Framer (2026): Setup + What to Check After","dateModified":"2026-07-22T15:24:18+00:00","url":"https://tarasovs.me/connect-claude-to-framer/","inLanguage":"en-US","articleSection":["Framer","Insights","SEO"],"isPartOf":{"@type":"Blog","@id":"https://tarasovs.me/category/insights/","name":"Insights - Tarasovs Digital Agency"},"citation":["https://www.framer.com/help/articles/how-to-set-up-framer-for-claude-code-codex-and-cursor/","https://www.framer.com/help/articles/use-external-agents-with-framer/","https://www.framer.com/agents/external/"]}
  - {"@context":"https://schema.org","@type":"HowTo","name":"How to connect Claude to Framer","description":"Connect Claude Code to a Framer workspace using Framer's native External Agent.","totalTime":"PT5M","step":[{"@type":"HowToStep","position":1,"name":"Install the Framer agent skills","text":"Confirm Node.js 24 or newer with node -v, then run npx @framer/agent setup in your terminal. This installs two skills into ~/.agents/skills/ and ~/.claude/skills/. Verify with ls ~/.claude/skills/ that framer and framer-code-components are present.","url":"https://tarasovs.me/connect-claude-to-framer/#setup"},{"@type":"HowToStep","position":2,"name":"Start a Claude Code session","text":"Run claude in your terminal from the same directory. This must be Claude Code in the terminal, not a chat panel inside your editor.","url":"https://tarasovs.me/connect-claude-to-framer/#setup"},{"@type":"HowToStep","position":3,"name":"Run the framer skill and authorize","text":"Type /framer inside the session, or hand the agent your Framer project link directly. A browser window opens the first time and you authorize access. Framer's documented flow is to open the project, copy the URL from the address bar or use Copy Project Link in the desktop app, and pass that link to the agent.","url":"https://tarasovs.me/connect-claude-to-framer/#setup"},{"@type":"HowToStep","position":4,"name":"Verify the published output","text":"After the agent finishes, publish and read the published head on three page types: home, a listing page, and two different CMS detail pages. Compare two detail items to confirm dynamic values are actually binding, and search the HTML for literal var(-- strings that indicate a failed binding.","url":"https://tarasovs.me/connect-claude-to-framer/#verification"}],"mainEntityOfPage":{"@type":"WebPage","@id":"https://tarasovs.me/connect-claude-to-framer/"},"image":"https://tarasovs.me/wp-content/uploads/2026/07/tarasovs-connect-claude-to-framer-future-image.webp","supply":[{"@type":"HowToSupply","name":"Node.js 24 or newer"},{"@type":"HowToSupply","name":"A Framer project"}],"tool":[{"@type":"HowToTool","name":"Claude Code"}]}
  - {"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"How do I connect Claude to Framer?","acceptedAnswer":{"@type":"Answer","text":"Run npx @framer/agent setup in your terminal to install Framer's agent skills, start a Claude Code session with claude, then run /framer inside that session and authorize your workspace in the browser that opens."}},{"@type":"Question","name":"Does Framer have an MCP server?","acceptedAnswer":{"@type":"Answer","text":"No. Framer's official integration is not an MCP server. It is a native External Agent connection using locally installed skills and Framer's project API, shipped with Framer 3.0 on 16 June 2026, and Framer's documentation states no separate MCP server is required. Some third-party guides incorrectly describe it as MCP-based and tell you to add connection details as an MCP server. Community MCP plugins do exist via the Framer Plugin API, but they are a separate route and require the project to be open in your browser."}},{"@type":"Question","name":"Why does /framer say Unknown command?","acceptedAnswer":{"@type":"Answer","text":"Usually because you are typing into a different chat panel such as GitHub Copilot Chat rather than Claude Code, because you installed the skills from inside a running session that has not been restarted, or because the skill's registered name differs from the folder name."}},{"@type":"Question","name":"Does the Framer agent handle SEO metadata?","acceptedAnswer":{"@type":"Answer","text":"Yes when you ask, but not by default. Left alone it publishes with My Framer Site as the title and Made with Framer as the description. When prompted it sets titles, descriptions, Open Graph and Twitter tags correctly across static and CMS pages alike, including dynamic values on CMS detail pages. Alt text was where it went wrong."}},{"@type":"Question","name":"Why is my Framer alt text showing as a var variable string?","acceptedAnswer":{"@type":"Answer","text":"The altText attribute accepts a variable reference syntactically but does not resolve it at render, so it prints the reference as a literal string. Use the Alt Text field on the CMS Image item instead, since Framer's image type carries source and alt together and that value flows through the binding to both listing and detail pages."}},{"@type":"Question","name":"Why do all my Framer CMS pages have the same meta description?","acceptedAnswer":{"@type":"Answer","text":"Almost always because the collection template has no description field bound to its page settings, so every item inherits the site-wide default. Add a description field to the collection, bind it in the template page settings, and fill it per item. Verify by comparing two different detail pages, since a single page checked on its own cannot tell you whether a value is dynamic or static."}},{"@type":"Question","name":"Can the Framer agent publish my site?","acceptedAnswer":{"@type":"Answer","text":"Yes, if you tell it to. Its work lands in the project for review by default and reaches production when you publish. Framer's documentation states changes go live when you publish them yourself or instruct the agent to, and in our test the agent asked for approval and then published itself. On client projects keep publishing as a deliberate separate step, and note that an agent describing something as live may be describing preview state."}},{"@type":"Question","name":"Should I trust the agent's summary of what it did?","acceptedAnswer":{"@type":"Answer","text":"No. Treat it as a claim about intent, not a verification of outcome. In our test it twice described alt text as correctly set when it was not, and neither problem was visible anywhere except the published HTML."}}],"mainEntityOfPage":{"@type":"WebPage","@id":"https://tarasovs.me/connect-claude-to-framer/"}}
wpId: 229547
legacyUrl: "/connect-claude-to-framer/"
---
<style>
.ta-post {
--surface: #f8f7ff; --elevated: #f0eef9; --hover: #ede9fe;
--text: #0f0a1e; --text-2: #4b4466; --text-3: #9490a8;
--border: #e4e0f0; --border-a: #7C3AED; --stat-clr: #7C3AED;
--shadow: 0 4px 24px rgba(0,0,0,0.07); --glow: 0 0 40px rgba(124,58,237,0.10);
--qa-bg: #faf9ff; --qa-border: #e4e0f0;
--accent: #7C3AED; --accent-bright: #A855F7; --accent-soft: #6D28D9;
--r-sm: 6px; --r-md: 12px; --r-lg: 14px; --r-xl: 20px;
--s-sm: 14px; --s-md: 22px; --s-lg: 30px; --s-xl: 48px; --s-2xl: 66px;
line-height: 1.75;
color: var(--text);
}
body.dark-scheme .ta-post {
--surface: #130F24; --elevated: #1C1535; --hover: #231A42;
--text: #F8F7FF; --text-2: #B8B0D4; --text-3: #7B7399;
--border: #2D2250; --border-a: #5B21B6; --stat-clr: #A855F7;
--shadow: 0 4px 24px rgba(0,0,0,0.40); --glow: 0 0 60px rgba(168,85,247,0.25);
--qa-bg: #130F24; --qa-border: #2D2250;
}
.ta-post *, .ta-post *::before, .ta-post *::after { box-sizing: border-box; }
/* ---------- QUICK ANSWER ---------- */
.ta-post .ta-qa {
background: var(--qa-bg);
border: 1px solid var(--qa-border);
border-left: 4px solid var(--accent);
border-radius: var(--r-md);
padding: var(--s-lg);
margin-bottom: var(--s-xl);
}
.ta-post .ta-qa-label {
font-size: 0.75rem; font-weight: 700;
text-transform: uppercase; letter-spacing: 0.12em;
color: var(--accent); margin-bottom: var(--s-sm);
}
.ta-post .ta-qa p { color: var(--text); line-height: 1.7; margin-bottom: 0.85rem; }
.ta-post .ta-qa p:last-child { margin-bottom: 0; }
.ta-post .ta-qa strong { color: var(--text); font-weight: 700; }
/* ---------- STATS ---------- */
.ta-post .ta-stats {
display: grid; grid-template-columns: repeat(4, 1fr);
gap: var(--s-sm); margin: var(--s-lg) 0 var(--s-xl);
}
.ta-post .ta-stat {
background: var(--surface); border: 1px solid var(--border);
border-radius: var(--r-md); padding: var(--s-md);
text-align: center; transition: border-color .2s, box-shadow .2s;
}
.ta-post .ta-stat:hover { border-color: var(--border-a); box-shadow: var(--glow); }
.ta-post .ta-stat-num {
font-size: 2.1rem; font-weight: 800; color: var(--stat-clr);
line-height: 1; margin-bottom: 8px; letter-spacing: -0.02em;
}
.ta-post .ta-stat-lbl { font-size: 0.78rem; color: var(--text-2); line-height: 1.45; }
/* ---------- TOC ---------- */
.ta-post .ta-toc {
background: var(--surface); border: 1px solid var(--border);
border-radius: var(--r-md); padding: var(--s-lg); margin-bottom: var(--s-xl);
}
.ta-post .ta-toc-label {
font-size: 0.8rem; font-weight: 700; text-transform: uppercase;
letter-spacing: 0.1em; color: var(--text-3); margin-bottom: var(--s-sm);
}
.ta-post .ta-toc ol { list-style: decimal; padding-left: 1.4rem; margin: 0; }
.ta-post .ta-toc li { margin-bottom: 6px; }
.ta-post .ta-toc a {
color: var(--accent); text-decoration: none;
font-size: 0.92rem; transition: color .15s;
}
.ta-post .ta-toc a:hover { color: var(--accent-bright); }
/* ---------- BODY PROSE ---------- */
.ta-post .ta-body h2 {
font-size: 1.95rem; font-weight: 800; color: var(--text);
margin: var(--s-xl) 0 var(--s-md);
letter-spacing: -0.02em; line-height: 1.25; scroll-margin-top: 90px;
}
.ta-post .ta-body h3 {
font-size: 1.35rem; font-weight: 700; color: var(--text);
margin: var(--s-lg) 0 var(--s-sm); line-height: 1.35;
}
.ta-post .ta-body h3::before {
content: ''; display: inline-block; width: 4px; height: 0.95em;
background: var(--accent); margin-right: 12px;
vertical-align: middle; border-radius: 2px;
}
.ta-post .ta-body p { margin-bottom: var(--s-md); color: var(--text); line-height: 1.8; }
.ta-post .ta-body strong { color: var(--text); font-weight: 700; }
.ta-post .ta-body a {
color: var(--accent); text-decoration: underline;
text-decoration-color: var(--border-a); text-underline-offset: 3px;
transition: color .15s;
}
.ta-post .ta-body a:hover { color: var(--accent-bright); }
.ta-post .ta-body ul, .ta-post .ta-body ol {
padding-left: 1.5rem; margin-bottom: var(--s-md);
}
.ta-post .ta-body li { color: var(--text); line-height: 1.7; margin-bottom: 8px; }
.ta-post .ta-body ul li::marker { color: var(--accent); }
.ta-post .ta-note {
background: var(--elevated); border-left: 3px solid var(--accent-soft);
border-radius: 0 var(--r-sm) var(--r-sm) 0;
padding: var(--s-md); margin: var(--s-lg) 0;
font-size: 0.95rem; color: var(--text-2);
}
.ta-post .ta-note p { margin-bottom: 0; color: var(--text-2); }
/* ---------- CODE ---------- */
.ta-post .ta-code {
background: var(--elevated); border: 1px solid var(--border);
border-radius: var(--r-sm); padding: 14px 18px;
margin: var(--s-sm) 0 var(--s-md);
overflow-x: auto; font-size: 0.9rem; line-height: 1.6;
}
.ta-post .ta-code code {
font-family: ui-monospace, SFMono-Regular, Menlo, Consolas, monospace;
color: var(--text); background: none; padding: 0; white-space: pre;
}
.ta-post .ta-body p code, .ta-post .ta-faq code, .ta-post li code {
font-family: ui-monospace, SFMono-Regular, Menlo, Consolas, monospace;
background: var(--elevated); border: 1px solid var(--border);
border-radius: 4px; padding: 1px 6px; font-size: 0.88em; color: var(--accent);
}
/* ---------- FIGURE ---------- */
.ta-post .ta-fig { margin: var(--s-lg) 0 var(--s-xl); }
.ta-post .ta-fig img {
width: 100%; height: auto; display: block;
border-radius: var(--r-md); border: 1px solid var(--border);
}
.ta-post .ta-fig figcaption {
font-size: 0.85rem; color: var(--text-3);
margin-top: 12px; line-height: 1.55;
}
/* ---------- STAGES ---------- */
.ta-post .ta-stages {
display: grid; grid-template-columns: repeat(3, 1fr);
gap: var(--s-sm); margin: var(--s-lg) 0 var(--s-xl);
}
.ta-post .ta-stage {
background: var(--surface); border: 1px solid var(--border);
border-radius: var(--r-md); padding: var(--s-md);
position: relative; overflow: hidden;
}
.ta-post .ta-stage::before {
content: ''; position: absolute; top: 0; left: 0; right: 0; height: 2px;
background: linear-gradient(90deg, var(--accent), var(--accent-bright));
}
.ta-post .ta-stage-num {
font-size: 0.72rem; font-weight: 700; text-transform: uppercase;
letter-spacing: 0.1em; color: var(--accent); margin-bottom: 6px;
}
.ta-post .ta-stage-title {
font-size: 1.1rem; font-weight: 700; color: var(--text);
margin-bottom: 10px; line-height: 1.25;
}
.ta-post .ta-stage p { font-size: 0.9rem; color: var(--text-2); line-height: 1.6; margin: 0 0 10px; }
.ta-post .ta-stage p:last-child { margin-bottom: 0; }
.ta-post .ta-stage code {
font-family: ui-monospace, SFMono-Regular, Menlo, Consolas, monospace;
background: var(--elevated); border: 1px solid var(--border);
border-radius: 4px; padding: 2px 7px; font-size: 0.85em; color: var(--accent);
display: inline-block;
}
/* ---------- TABLE ---------- */
.ta-post .ta-table-wrap {
overflow-x: auto; margin: var(--s-lg) 0 var(--s-xl);
border-radius: var(--r-md); border: 1px solid var(--border);
}
.ta-post .ta-table { width: 100%; border-collapse: collapse; font-size: 0.93rem; }
.ta-post .ta-table thead tr { background: var(--elevated); }
.ta-post .ta-table th,
.ta-post table.ta-table th {
padding: 15px 22px !important; text-align: left !important;
font-weight: 700 !important; font-size: 0.75rem !important;
text-transform: uppercase; letter-spacing: 0.08em;
color: var(--accent) !important; border: none !important;
border-bottom: 1px solid var(--border-a) !important; vertical-align: middle !important;
}
.ta-post .ta-table td,
.ta-post table.ta-table td {
padding: 15px 22px !important; color: var(--text) !important;
border: none !important; border-bottom: 1px solid var(--border) !important;
line-height: 1.6 !important; vertical-align: top !important; text-align: left !important;
}
.ta-post .ta-table tr:last-child td { border-bottom: none !important; }
.ta-post .ta-table tr:hover td { background: var(--hover); }
.ta-post .ta-table .row-label {
font-weight: 600; color: var(--text-2) !important; white-space: nowrap;
}
/* ---------- ACTION CARDS ---------- */
.ta-post .ta-actions {
display: grid; grid-template-columns: repeat(4, 1fr);
gap: var(--s-sm); margin: var(--s-lg) 0 var(--s-xl);
}
.ta-post .ta-action {
background: var(--surface); border: 1px solid var(--border);
border-radius: var(--r-md); padding: var(--s-md);
}
.ta-post .ta-action-title {
font-size: 0.9rem; font-weight: 700; color: var(--accent);
margin-bottom: var(--s-sm); padding-bottom: 8px;
border-bottom: 1px solid var(--border);
}
.ta-post .ta-action ul { list-style: none; padding: 0; margin: 0; }
.ta-post .ta-action li {
font-size: 0.87rem; color: var(--text-2); line-height: 1.5;
padding-left: 26px; position: relative; margin-bottom: 9px;
}
.ta-post .ta-action li:last-child { margin-bottom: 0; }
.ta-post .ta-action li::before {
content: ' - '; position: absolute; left: 0; color: var(--accent-soft);
}
/* ---------- FAQ ---------- */
.ta-post .ta-faq {
margin-top: var(--s-2xl); padding-top: var(--s-xl);
border-top: 1px solid var(--border);
}
.ta-post .ta-faq h2 {
font-size: 1.95rem; font-weight: 800;
margin-bottom: var(--s-lg); color: var(--text); letter-spacing: -0.02em;
}
.ta-post .ta-faq-list { display: flex; flex-direction: column; gap: 4px; }
.ta-post .ta-faq-item {
background: var(--surface); border: 1px solid var(--border);
border-radius: var(--r-md); padding: var(--s-md) var(--s-lg);
transition: border-color .2s;
}
.ta-post .ta-faq-item:hover { border-color: var(--border-a); }
.ta-post .ta-faq-q {
font-weight: 700; font-size: 1rem; color: var(--text); margin-bottom: 10px;
}
.ta-post .ta-faq-a { font-size: 0.93rem; color: var(--text-2); line-height: 1.7; margin: 0; }
/* ---------- CTA ---------- */
.ta-post .ta-cta {
background: var(--surface); border: 1px solid var(--border-a);
border-radius: var(--r-xl); padding: var(--s-xl);
margin-top: var(--s-2xl); text-align: center;
box-shadow: var(--glow); position: relative; overflow: hidden;
}
.ta-post .ta-cta::before {
content: ''; position: absolute; top: -80px; right: -80px;
width: 300px; height: 300px;
background: radial-gradient(circle, rgba(168,85,247,0.15), transparent 70%);
pointer-events: none;
}
.ta-post .ta-cta-label {
font-size: 0.75rem; font-weight: 700; text-transform: uppercase;
letter-spacing: 0.12em; color: var(--accent); margin-bottom: var(--s-sm);
}
.ta-post .ta-cta-title {
font-size: 1.6rem; font-weight: 800; color: var(--text);
margin-bottom: var(--s-sm); line-height: 1.3;
}
.ta-post .ta-cta-text {
font-size: 1rem; color: var(--text-2);
max-width: 560px; margin: 0 auto var(--s-lg); line-height: 1.7;
}
.ta-post .ta-cta-text a { color: var(--accent); text-decoration: underline; text-underline-offset: 3px; }
.ta-post .ta-cta-btn,
.ta-post a.ohio-widget.button.ta-cta-btn {
display: inline-block; background: var(--accent) !important; color: #fff !important;
font-weight: 700; font-size: 1rem; padding: 14px 32px;
border-radius: var(--r-lg); text-decoration: none;
border: none !important; box-shadow: none;
transition: background .2s, box-shadow .2s, transform .15s;
}
.ta-post .ta-cta-btn:hover,
.ta-post a.ohio-widget.button.ta-cta-btn:hover {
background: var(--accent-bright) !important; color: #fff !important;
box-shadow: 0 0 30px rgba(168,85,247,0.4); transform: translateY(-1px);
}
/* ---------- RESPONSIVE ---------- */
@media (max-width: 768px) {
.ta-post .ta-stats { grid-template-columns: repeat(2, 1fr); }
.ta-post .ta-stages { grid-template-columns: 1fr; }
.ta-post .ta-actions { grid-template-columns: repeat(2, 1fr); }
.ta-post .ta-body h2 { font-size: 1.6rem; }
.ta-post .ta-body h3 { font-size: 1.2rem; }
.ta-post .ta-faq h2 { font-size: 1.6rem; }
.ta-post .ta-cta { padding: var(--s-lg); }
.ta-post .ta-cta-title { font-size: 1.35rem; }
}
@media (max-width: 520px) {
.ta-post .ta-stats { grid-template-columns: 1fr; }
.ta-post .ta-actions { grid-template-columns: 1fr; }
.ta-post .ta-qa { padding: var(--s-md); }
.ta-post .ta-toc { padding: var(--s-md); }
.ta-post .ta-faq-item { padding: var(--s-md); }
}
</style>
<div class="ta-post">
<div class="ta-qa">
<div class="ta-qa-label">Quick Answer</div>
<p><strong>To connect Claude to Framer, use Framer's native External Agent - not an MCP server. Run <code>npx @framer/agent setup</code>, start a Claude Code session, run <code>/framer</code>, and authorize your workspace in the browser.</strong> Claude then reads and writes your canvas, components, and CMS directly.</p>
<p>It works, and it is fast: a three-page e-commerce site with a live CMS collection in 18 minutes. But when we asked it to set SEO metadata and alt text and it reported the job complete, <strong>the work was real and mostly right - but not everything it called done had shipped</strong>. The metadata was correct, all the way down to per-product tags on CMS detail pages. The alt text was not: it published as a raw <code>var(--variable-…)</code> string on every product image, and when we flagged it, the agent's fix replaced that with one identical generic sentence across all six products - and reported that as resolved too.</p>
<p>That is the shape of it: the agent does the job, and two things need a human afterwards - image alt text and CMS metadata. Neither is visible in the editor. Both are visible in the published HTML.</p>
</div>
<div class="ta-stats">
<div class="ta-stat">
<div class="ta-stat-num">18m</div>
<div class="ta-stat-lbl">to build three pages with a working CMS collection</div>
</div>
<div class="ta-stat">
<div class="ta-stat-num">2</div>
<div class="ta-stat-lbl">rounds of pushback before alt text was actually right</div>
</div>
<div class="ta-stat">
<div class="ta-stat-num">6</div>
<div class="ta-stat-lbl">products left sharing one generic alt by the "fix"</div>
</div>
<div class="ta-stat">
<div class="ta-stat-num">0</div>
<div class="ta-stat-lbl">of the problems the agent found on its own</div>
</div>
</div>
<nav class="ta-toc">
<div class="ta-toc-label">In this guide</div>
<ol>
<li><a href="#what-it-is">What the Framer External Agent is</a></li>
<li><a href="#setup">Setup, step by step</a></li>
<li><a href="#problems">The five things that go wrong during setup</a></li>
<li><a href="#permissions">Permission modes: how to stop clicking "Yes"</a></li>
<li><a href="#build">The build: 18 minutes, three pages, one CMS collection</a></li>
<li><a href="#said-vs-shipped">What shipped, and what needed a second pass</a></li>
<li><a href="#why">Why variable bindings are where it breaks</a></li>
<li><a href="#verification">The verification pass, in order</a></li>
<li><a href="#client-work">When to use this on client work</a></li>
</ol>
</nav>
<div class="ta-body">
<h2 id="what-it-is">What the Framer External Agent is</h2>
<p>Framer 3.0 launched on 16 June 2026. Alongside canvas-native Agents, Git-style Branching and a rebuilt Community, it shipped External Agents - connections to the AI tools people already use, including Claude Code, Codex, Cursor and Gemini CLI.</p>
<p>Notably, it is not an MCP server. There is no local server to run and no tunnel to keep alive. You install a set of skills locally, authorize a workspace once, and your agent talks to Framer's project API directly.</p>
<div class="ta-note">
<p><strong>If you read that this is MCP-based - it isn't.</strong> Several third-party guides describe External Agents as MCP connectors and tell you to add connection details to your tool as an MCP server. That is not how the native connection works, and following those steps will waste your afternoon. Framer's own documentation is explicit that no separate MCP server is required. If you searched for "Framer MCP" and landed on setup involving server URLs and connection tokens, you are reading about the community plugin route, not the official one.</p>
</div>
<p>Two skills get installed:</p>
<ul>
<li><strong><code>framer</code></strong> - canvas, pages, components, CMS, publishing workflow</li>
<li><strong><code>framer-code-components</code></strong> - React code components and overrides</li>
</ul>
<p>The distinction matters. "AI in Framer" does not mean generating code. The External Agent manipulates the actual design canvas - frames, stacks, text layers, breakpoints - the same objects you would move by hand. Code components are a separate, optional layer.</p>
<h3>The three properties that make it usable on real projects</h3>
<p><strong>It edits the editor, not the live site.</strong> Every change lands as an unpublished edit, and nothing reaches production on its own. It will publish if you tell it to - in our test it asked first, we approved, and it shipped - but the default is that work sits in the project waiting for review. This turns out to matter more than it sounds; see below.</p>
<p><strong>Every external agent change goes on a branch.</strong> You get a diff to review, and you merge or discard. If the agent goes off-brief, you throw the branch away instead of undoing forty operations by hand.</p>
<p><strong>Access is per-project and revocable.</strong> The agent only reaches projects you explicitly connected, and you can revoke access at any time.</p>
<h3>What it still cannot do</h3>
<p>Framer publishes a list of unsupported actions, worth reading before you plan a workflow around the agent. As of the <a href="https://www.framer.com/help/articles/how-to-set-up-framer-for-claude-code-codex-and-cursor/" rel="noopener" target="_blank">June 2026 setup documentation</a>, it cannot delete, rename or move pages, update site settings or project settings, assign code overrides to nodes, or access analytics data.</p>
<p>Two of those matter more than they sound. <strong>Code overrides</strong> - the second installed skill will write override code happily, but assigning it to a layer is still manual, which is easy to miss if you read "code components and overrides" as end-to-end. And <strong>site settings</strong>, which is where custom head code lives, so JSON-LD is not something to delegate.</p>
<div class="ta-note">
<p>One caveat from our own test: the documentation lists site settings as unsupported, yet the site-level title and description did change after our SEO prompt. Either the list is incomplete, or what the agent called the "site default" was in fact a page-level setting. We could not tell the two apart from the published output - worth checking on your own project rather than assuming either way.</p>
</div>
<p>If you have read our <a href="/figma-to-framer-handoff-workflow/">Figma to Framer handoff workflow</a>, this slots into the same place: after direction is set, before polish.</p>
<h2 id="setup">Setup, step by step</h2>
<p>Three commands and a browser click. Five minutes if nothing goes wrong.</p>
<div class="ta-note">
<p><strong>Before you start:</strong> Framer's setup requires Node.js 24 or newer. Run <code>node -v</code> first. This is the single most common reason setup fails before it starts, and the error does not always make the cause obvious.</p>
</div>
</div>
<div class="ta-stages">
<div class="ta-stage">
<div class="ta-stage-num">Stage 1</div>
<div class="ta-stage-title">Install the skills</div>
<p><code>npx @framer/agent setup</code></p>
<p>Installs two skills into <code>~/.agents/skills/</code> and <code>~/.claude/skills/</code>. Verify with <code>ls ~/.claude/skills/</code> - you want <code>framer</code> and <code>framer-code-components</code>.</p>
</div>
<div class="ta-stage">
<div class="ta-stage-num">Stage 2</div>
<div class="ta-stage-title">Start a session</div>
<p><code>claude</code></p>
<p>Any working directory will do - the skills install globally. This has to be Claude Code in the terminal, not a chat panel in your editor.</p>
</div>
<div class="ta-stage">
<div class="ta-stage-num">Stage 3</div>
<div class="ta-stage-title">Run the skill</div>
<p><code>/framer</code></p>
<p>A browser window opens. Authorize access. The project does not need to stay open while the agent works.</p>
</div>
</div>
<div class="ta-body">
<p>Framer's <a href="https://www.framer.com/help/articles/use-external-agents-with-framer/" rel="noopener" target="_blank">documented flow</a> points the agent at a specific project rather than a workspace: open the project, copy the URL from the address bar - or right-click the project tab in the desktop app and choose Copy Project Link - then hand that link to the agent in your first message.</p>
<div class="ta-code"><code>What pages do I have in &lt;Framer project link&gt;</code></div>
<p>This is the more reliable route, and it avoids the failure in point 5 below. Skip it and the agent works from whatever the authorized workspace contains - or builds something new if it finds nothing.</p>
<p>Then prompt normally. From there the agent runs until it needs a decision from you.</p>
<div class="ta-note">
<p>Commands here use macOS and Linux syntax. On Windows PowerShell the skills land under <code>$HOME\.claude\skills\</code>; use <code>Get-ChildItem</code> in place of <code>ls</code> and <code>Get-Content</code> in place of <code>head</code>.</p>
</div>
<h2 id="problems">The five things that go wrong during setup</h2>
<p>We hit every one of these, in roughly this order of cost.</p>
<h3>1. You are typing into the wrong chat</h3>
<p>If <code>/framer</code> returns <code>Unknown command: /framer</code>, look at what else the autocomplete offers. If you see <code>/explain @workspace</code>, <code>/delegate @cli</code>, <code>/search @vscode</code>, or a model picker labelled "Agent / Auto", you are in GitHub Copilot Chat, not Claude Code. Copilot knows nothing about <code>~/.claude/skills/</code>.</p>
<p>Claude Code runs in the terminal. Open the integrated terminal and run <code>claude</code> there.</p>
<h3>2. Skills do not hot-reload</h3>
<p>Skills load when a session starts. If you ran setup from inside a running session, that session cannot see them. Exit with <code>Ctrl+D</code> and start <code>claude</code> again.</p>
<div class="ta-note">
<p>There is no <code>/exit</code> command in Claude Code - that trips people up too. <code>Ctrl+D</code>, or <code>Ctrl+C</code> twice.</p>
</div>
<h3>3. The skill name may not be what you expect</h3>
<p>The slash command comes from the <code>name</code> field in the skill's frontmatter, not the folder name. Check with <code>head -10 ~/.claude/skills/framer/SKILL.md</code>, or type <code>/fr</code> and read the autocomplete.</p>
<h3>4. Project creation times out on first authorization</h3>
<p>On a fresh workspace the agent may report that project creation failed with exit code 1. It needed browser authorization and timed out waiting. It retries and opens the browser properly. Not a real failure, just slow.</p>
<h3>5. It creates a new project instead of using yours</h3>
<p>If the agent reports "No existing Framer projects found," it will generate a brand new project from scratch. Fine for a test. Not fine when you meant to work on a client site and picked the wrong workspace during authorization. Check the workspace before you authorize.</p>
<h2 id="permissions">Permission modes: how to stop clicking "Yes"</h2>
<p>By default Claude Code asks before every state-changing action. During a Framer build that is dozens of prompts.</p>
<p>The mistake is pressing <strong>1 (Yes)</strong> - that approves one command, once, and the same category asks again ten seconds later. Press <strong>2</strong>, "Yes, and always allow," and the rule persists.</p>
<p>Beyond that: <strong>Shift+Tab</strong> cycles permission modes inside a session - default → acceptEdits → plan. In <code>acceptEdits</code>, file edits plus common filesystem commands run without asking, scoped to your working directory. <strong><code>/permissions</code></strong> pre-approves specific tools, with rules that persist across sessions. <strong>Auto mode</strong>, where available, replaces prompts with a background safety classifier that blocks actions it judges irreversible or destructive.</p>
<div class="ta-note">
<p>One thing we would not do on client work: <code>--dangerously-skip-permissions</code>. In bypass mode, MCP and tool calls auto-approve too - and the Framer agent has write access to your CMS.</p>
</div>
<h2 id="build">The build: 18 minutes, three pages, one CMS collection</h2>
<p>We gave it a deliberately vague brief - "test flower shop website" - and let it run. <strong>18 minutes and 17 seconds</strong>, including time the session sat idle waiting on permission prompts.</p>
<p>It wrote a design plan before touching the canvas: category, layout pattern, colour direction, density, typography, section breakdown, reusable systems. Then it looked up fonts and icons before building. Output:</p>
<ul>
<li><strong>Three pages</strong> - Home, Shop, and a CMS-driven Product Detail template</li>
<li><strong>A Products CMS collection</strong> with six real items (name, price, image, description)</li>
<li><strong>A Product Card component</strong> reused on Home and Shop</li>
<li><strong>A shared layout</strong> for navigation and footer</li>
<li><strong>A design system</strong> - cream/blush/sage tokens, a serif display face, a sans body face, line icons</li>
</ul>
<p>The copy was better than expected - lines with an actual voice, usable as a starting draft rather than something to delete.</p>
</div>
<figure class="ta-fig">
<img loading="lazy" src="/wp-content/uploads/2026/07/framer-agent-built-homepage.webp" width="1200" height="1951" alt="The finished home page: a serif headline over a hero bouquet photograph, a three-column featured products grid pulled from the CMS, an editorial story section and a footer with contact details">
<figcaption>The home page as published, from a one-line brief. Nothing on this page was positioned by hand.</figcaption>
</figure>
<div class="ta-body">
<p>It built desktop-only, and said so rather than pretending otherwise. Asked for the smaller sizes, it added them as a separate pass:</p>
</div>
<figure class="ta-fig">
<img loading="lazy" src="/wp-content/uploads/2026/07/framer-agent-responsive-breakpoints.webp" width="1600" height="1509" alt="Framer canvas showing the same home page laid out across Desktop, Tablet and Phone breakpoints, with the product grid collapsing from three columns to two to one">
<figcaption>Tablet and Phone breakpoints, added on request. Framer breakpoints inherit downward from Desktop, so this is a refinement pass rather than a starting point.</figcaption>
</figure>
<div class="ta-body">
<p>Worth knowing about Framer's model: breakpoints inherit downward, Desktop is the source and Tablet/Phone override it. There is no true mobile-first authoring the way there is in CSS, so smaller breakpoints are a distinct pass.</p>
<p>So far, so impressive. Then we asked it to do SEO.</p>
<h2 id="said-vs-shipped">What shipped, and what needed a second pass</h2>
<p>We gave it one prompt:</p>
<div class="ta-note">
<p><em>Set SEO metadata for every page: unique title tag, meta description, and Open Graph title/description/image. Add descriptive alt text to all images.</em></p>
</div>
<p>First, the baseline. The site was already live at this point - the agent had asked whether it should publish, we said yes, and it published. That is worth noting on its own: the agent does not publish silently, but it will publish, and it did so before a single line of metadata had been written. Here is what was in the head:</p>
</div>
<figure class="ta-fig">
<img loading="lazy" src="/wp-content/uploads/2026/07/framer-agent-default-vs-written-metadata.webp" width="1600" height="1246" alt="Framer site head before and after one SEO prompt: the earlier build publishes the placeholder title My Framer Site and description Made with Framer, the later build carries written metadata and Open Graph tags">
<figcaption>The same site, 32 minutes apart. Unprompted, the agent ships Framer’s placeholder metadata on every page. Asked once, it writes the lot.</figcaption>
</figure>
<div class="ta-body">
<p>It came back with a clean summary. Site default title set. Unique title and description on Home and Shop. Product Detail handled dynamically through CMS template variables - title as <code>{{Name}} | Bloom &amp; Twine</code>, description as <code>{{Description}}</code>, Open Graph image bound to each product's own photo. Hand-written alt text on the hero and story photos. Product images bound to each product's Name variable so alt text matches the product shown.</p>
<p>Then: <em>"Everything previewed cleanly."</em></p>
<p>Here is what we found in the published <code>&lt;head&gt;</code>.</p>
</div>
<div class="ta-table-wrap">
<table class="ta-table">
<thead>
<tr>
<th>What the agent reported</th>
<th>What actually shipped</th>
</tr>
</thead>
<tbody>
<tr><td class="row-label">Site-wide title and description</td><td>Correct</td></tr>
<tr><td class="row-label">Unique title and description on Home and Shop</td><td>Correct</td></tr>
<tr><td class="row-label">Open Graph tags on Home and Shop</td><td>Correct</td></tr>
<tr><td class="row-label">Dynamic title on product pages</td><td>Correct - resolves per product</td></tr>
<tr><td class="row-label">Dynamic description, og:title, og:description, og:image on product pages</td><td>Correct - resolve per product</td></tr>
<tr><td class="row-label">Per-product alt text via variable binding</td><td><strong>Rendered as literal <code>var(--variable-…)</code></strong></td></tr>
<tr><td class="row-label">Alt text "fixed" after we flagged it</td><td><strong>One identical generic string across all six products</strong></td></tr>
<tr><td class="row-label">"Everything previewed cleanly"</td><td><strong>Preview state, not published state</strong></td></tr>
</tbody>
</table>
</div>
<div class="ta-body">
<p>The metadata half held up. Titles, descriptions, Open Graph and Twitter tags all resolve per product on the CMS detail pages - the bindings work, and they work well. Framer's SEO surface is genuinely capable, and the agent drove it correctly.</p>
</div>
<figure class="ta-fig">
<img loading="lazy" src="/wp-content/uploads/2026/07/framer-cms-detail-page-metadata-bindings.webp" width="1600" height="998" alt="Framer CMS product page head showing title, meta description, Open Graph and Twitter tags all resolving to values specific to that individual product">
<figcaption>A CMS detail page in the current build. Title, description, Open Graph and Twitter tags all resolve per item from the collection template.</figcaption>
</figure>
<div class="ta-body">
<p>The alt text half did not. And the way it failed is more instructive than a simple miss.</p>
<h3>Failure 1: alt text as a raw variable string</h3>
<p>The product images came out with alt attributes reading <code>var(--variable-Fd9DSjP02)</code> - the binding reference printed as a literal string into the published HTML, on every card in the Shop grid.</p>
</div>
<figure class="ta-fig">
<img loading="lazy" src="/wp-content/uploads/2026/07/framer-agent-alt-text-variable-binding-failure.webp" width="1600" height="889" alt="Framer published HTML before and after: an image alt attribute rendering a variable binding as the literal string var open bracket dash dash variable, then a descriptive alt pulled from the CMS Image field">
<figcaption>Top: the binding the agent set, as it published. Bottom: the same image after the alt text was set on the CMS Image item instead.</figcaption>
</figure>
<div class="ta-body">
<p>Framer's <code>altText</code> attribute accepts a variable reference syntactically. It does not resolve it at render. Unlike text content or fill, it prints what it was given. Nothing errors, nothing warns, and the canvas looks correct.</p>
<p>The agent had reported this specific item as done: product images bound to each product's Name variable so alt text matches the product shown. That is a precise, confident description of something that did not happen.</p>
<h3>Failure 2: the fix that was a regression</h3>
<p>We pointed out the broken alt. The agent diagnosed it, explained that the attribute cannot be data-bound, and replaced it with a single static string - <code>alt="Flower arrangement from Bloom &amp; Twine"</code>, on all six products. It reported this as resolved.</p>
<p>Six different products sharing one generic alt is not descriptive alt text. For accessibility and for image search it is barely better than empty. It replaced a visible bug with an invisible one.</p>
<p>The actual solution existed the whole time. Framer's CMS Image field has its own <strong>Alt Text</strong> property, sitting right next to Resolution and Focal Point. Fill it per item and the value flows through the image binding to both the Shop grid and the detail page. Once pointed at it, the agent did exactly that, and every product now carries genuinely distinct alt text.</p>
<h2 id="why">Why variable bindings are where it breaks</h2>
<p>Both failures share one root: <strong>variable binding works in some places and not others, and nothing tells you which is which.</strong></p>
<p>The editor accepts the binding. No error appears. The canvas preview looks fine. The difference between "accepted syntactically" and "resolves at render" only becomes visible in published output - which the agent does not read back.</p>
<p>There is a second, subtler trap in the same area. When we first checked the live site, the metadata was still the Framer defaults. The agent had asked <em>"Want me to publish these changes now?"</em> - it knew perfectly well the work was unpublished. Later, after the alt fix, it reported <em>"Confirmed live."</em> Preview state and production state are two different things, and an agent's summary does not reliably distinguish them.</p>
<p>Which gives the working rule: <strong>an agent's report is a claim, not a verification.</strong> It tells you what it attempted. Only the published <code>&lt;head&gt;</code> tells you what shipped.</p>
<h2 id="verification">The verification pass, in order</h2>
<p>Assume nothing until it is in the published HTML. This takes ten minutes.</p>
</div>
<div class="ta-actions">
<div class="ta-action">
<div class="ta-action-title">1. Confirm you are reading production</div>
<ul>
<li>Framer stamps a published-date comment at the top of the source</li>
<li>If it predates the agent's work, you are reading a stale build</li>
<li>Publish before you audit</li>
</ul>
</div>
<div class="ta-action">
<div class="ta-action-title">2. Dump the head on three page types</div>
<ul>
<li>Home, a listing page, and one CMS detail page</li>
<li>The detail page matters most - that is where bindings live</li>
</ul>
</div>
<div class="ta-action">
<div class="ta-action-title">3. Compare two CMS items</div>
<ul>
<li>One detail page cannot show whether a value is dynamic or hardcoded</li>
<li>Two can - this is the check that catches silent binding failures</li>
<li>Grep the HTML for <code>var(--</code> while you are there</li>
</ul>
</div>
<div class="ta-action">
<div class="ta-action-title">4. Check quality, not presence</div>
<ul>
<li>Alt uniqueness, not "does every image have alt"</li>
<li>Add JSON-LD yourself - head code lives in site settings, which the agent cannot update</li>
<li>Re-verify after every structural change</li>
</ul>
</div>
</div>
<div class="ta-body">
<p>For step 2, this pasted into the browser console gives you everything at once:</p>
<div class="ta-code"><code>console.table({
title: document.title,
desc: document.querySelector('meta[name=description]')?.content,
ogTitle: document.querySelector('meta[property="og:title"]')?.content,
ogDesc: document.querySelector('meta[property="og:description"]')?.content,
ogImage: document.querySelector('meta[property="og:image"]')?.content,
imgsNoAlt: [...document.images].filter(i =&gt; !i.alt).length,
alts: [...document.images].map(i =&gt; i.alt)
});</code></div>
<p>For anyone working on <a href="/services/geo-ai-search-optimization/">AI search optimization</a>, steps 3 and 4 matter most. Duplicate descriptions and generic alt text do not just weaken rankings; they strip out the signals a retrieval layer uses to decide what a page is actually about. A catalogue where every item describes itself identically is a catalogue no AI platform can distinguish between.</p>
<p>Webflow approached this from the other direction - its AEO tooling ships audits and LLM-visibility tracking alongside the connector, which we covered in <a href="/aeo-for-webflow-sites-step-by-step/">AEO for Webflow sites</a>. Framer's agent is the stronger builder. It is not yet opinionated about being found.</p>
<h2 id="client-work">When to use this on client work</h2>
<p><strong>Yes, for:</strong> internal prototypes and pitch concepts; first-pass structure where direction is already agreed; repetitive build work like populating CMS collections or applying a component across many pages; exploring layouts fast enough to throw two away.</p>
<p><strong>Carefully, for:</strong> client production sites, with a full verification pass afterward; anything touching a live CMS, where branching protects you but permissions still need to be tight.</p>
<p><strong>No, for:</strong> unattended work on a published client site; anything where brand system fidelity matters more than speed.</p>
<p>The honest summary is that this works. Eighteen minutes for a three-page site with a working CMS, correct heading structure, clean internal linking and per-product metadata is remarkable, and we are not going back to doing that part by hand.</p>
<p>What it needs is a moderation pass, and the pass is short. Two places consistently want a human: <strong>image alt text</strong>, where variable binding fails silently and the agent's own fix made it worse, and <strong>CMS metadata</strong>, where you cannot tell a working binding from a broken one without comparing two items in the published HTML.</p>
<p>That is not a criticism of the tool. It is the shape of the job now. The agent closed the gap on execution; the remaining gap is verification, and it is not one a better model closes on its own - an agent cannot check its own output against the thing it cannot see. Somebody has to open the published page. That somebody is where an agency earns its fee in 2026.</p>
<p>That is also why we wrote about <a href="/framer-for-agencies-why-studios-are-switching/">why studios are switching to Framer</a> without treating the tooling as the whole story.</p>
<div class="ta-note">
<p>Tested July 2026 against Framer 3.0 and Claude Code. Both are moving quickly - verify against current behaviour.</p>
</div>
</div>
<section class="ta-faq" id="faq">
<h2>Frequently Asked Questions</h2>
<div class="ta-faq-list">
<div class="ta-faq-item">
<p class="ta-faq-q">How do I connect Claude to Framer?</p>
<p class="ta-faq-a">Run <code>npx @framer/agent setup</code> in your terminal to install Framer's agent skills, start a Claude Code session with <code>claude</code>, then run <code>/framer</code> inside that session and authorize your workspace in the browser that opens.</p>
</div>
<div class="ta-faq-item">
<p class="ta-faq-q">Does Framer have an MCP server?</p>
<p class="ta-faq-a">Framer's official integration is not an MCP server - it is a native External Agent connection using locally installed skills and Framer's project API. It shipped with Framer 3.0 on 16 June 2026. Community MCP plugins exist via the Framer Plugin API, but they require the project to be open in your browser.</p>
</div>
<div class="ta-faq-item">
<p class="ta-faq-q">Why does npx @framer/agent setup fail?</p>
<p class="ta-faq-a">The most common cause is an outdated Node.js - Framer's setup requires version 24 or newer, so check with <code>node -v</code> before anything else. The second most common cause is running it where the agent cannot open a browser to complete authorization.</p>
</div>
<div class="ta-faq-item">
<p class="ta-faq-q">Why does /framer say "Unknown command"?</p>
<p class="ta-faq-a">Usually because you are typing into a different chat panel such as GitHub Copilot Chat rather than Claude Code; because you installed the skills from inside a running session that has not been restarted; or because the skill's registered name differs from the folder name.</p>
</div>
<div class="ta-faq-item">
<p class="ta-faq-q">Does the Framer agent handle SEO metadata?</p>
<p class="ta-faq-a">Yes, when you ask - but not by default. Left alone it publishes with "My Framer Site" as the title and "Made with Framer" as the description. When prompted it sets titles, descriptions, Open Graph and Twitter tags correctly across static and CMS pages alike, including dynamic values on CMS detail pages. Alt text was where it went wrong.</p>
</div>
<div class="ta-faq-item">
<p class="ta-faq-q">Why is my Framer alt text showing as var(--variable-...)?</p>
<p class="ta-faq-a">The altText attribute accepts a variable reference syntactically but does not resolve it at render, so it prints the reference as a literal string. Use the Alt Text field on the CMS Image item instead - Framer's image type carries source and alt together, and that value flows through the binding to both listing and detail pages.</p>
</div>
<div class="ta-faq-item">
<p class="ta-faq-q">Why do all my Framer CMS pages have the same meta description?</p>
<p class="ta-faq-a">Almost always because the collection template has no description field bound to its page settings, so every item inherits the site-wide default. Add a description field to the collection, bind it in the template's page settings, and fill it per item. Verify by comparing two different detail pages - a single page checked on its own cannot tell you whether a value is dynamic or static.</p>
</div>
<div class="ta-faq-item">
<p class="ta-faq-q">Can the agent publish my site?</p>
<p class="ta-faq-a">Yes, if you tell it to. Its work lands in the project for review by default and reaches production when you publish - Framer's documentation says changes go live when you publish them yourself or instruct the agent to. In our test the agent asked for approval and then published itself. On client projects, keep publishing as a deliberate separate step, and note that an agent describing something as "live" may be describing preview state.</p>
</div>
<div class="ta-faq-item">
<p class="ta-faq-q">Can it break a live client site?</p>
<p class="ta-faq-a">Not directly. Changes are unpublished and land on a branch you review before merging. The real risk is CMS writes - the agent can create, update and delete collection items - so keep permissions scoped rather than running in bypass mode.</p>
</div>
<div class="ta-faq-item">
<p class="ta-faq-q">Does it build responsive layouts?</p>
<p class="ta-faq-a">Not unless you ask. It built desktop-only until prompted. Framer breakpoints inherit from Desktop downward, so mobile is a refinement pass rather than a starting point.</p>
</div>
<div class="ta-faq-item">
<p class="ta-faq-q">How long does a Framer agent build take?</p>
<p class="ta-faq-a">Our three-page test with a CMS collection took 18 minutes end to end, including idle time on permission prompts. Switch Claude Code to acceptEdits mode with Shift+Tab and it runs without stopping.</p>
</div>
<div class="ta-faq-item">
<p class="ta-faq-q">Should I trust the agent's summary of what it did?</p>
<p class="ta-faq-a">No. Treat it as a claim about intent, not a verification of outcome. In our test it twice described alt text as correctly set when it was not, and neither problem was visible anywhere except the published HTML.</p>
</div>
</div>
</section>
<div class="ta-cta">
<h2 id="related-reading">Related reading</h2>
<ul>
<li><a href="/framer-chatgpt-codex-workflow/">Building a Framer Website with ChatGPT + Codex: My Real 2026 Workflow</a></li>
</ul>
<div class="ta-cta-label">Tarasovs Digital Agency</div>
<h3 class="ta-cta-title">The agent built it. Who checked it?</h3>
<p class="ta-cta-text">An agent can build a Framer site in eighteen minutes. It will also report alt text as done while every product image carries a broken binding string. We audit Framer builds for search and AI visibility - metadata, bindings, schema, crawlability, and whether AI platforms cite you at all. See our <a href="/services/framer-development/">Framer development</a> and <a href="/services/geo-ai-search-optimization/">GEO AI search optimization</a> services.</p>
<a href="/contact-us/" class="ohio-widget button ta-cta-btn">Get your free audit →</a>
</div>
</div>
