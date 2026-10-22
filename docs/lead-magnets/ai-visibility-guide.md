# How to Get Your Website Mentioned by AI: A Step-by-Step Guide

*From Tarasovs Digital Agency. For business owners who want to show up when customers ask ChatGPT, Perplexity, or Google AI Overviews for a recommendation.*

> **[Personal note for this recipient: 2–3 sentences on what you noticed on their website. Delete this line before sending.]**

More people now ask an AI assistant "who should I hire for…" or "what's the best… near me" instead of scrolling through search results. The assistant names a few businesses, and those are often the only ones the customer considers.

There is no switch that guarantees a mention. AI answers change, and no one controls them. What you can control is whether AI systems can read your site, understand what you do, and find other sources that confirm it. The ten steps below cover exactly that, in the order we'd tackle them.

---

## Step 1. Check what AI says about you today (15 minutes)

Before changing anything, write down where you stand.

1. List 5–10 questions a real customer would ask, for example "best [your service] in [your city]" or "who can help with [problem you solve]."
2. Ask each one in ChatGPT, Perplexity, Gemini, and Google (look at the AI Overview at the top).
3. Ask each assistant directly: "What do you know about [your business name]?"

For every answer, note three things in a simple sheet: **Were you mentioned? Was the information correct? Which competitors were named?** This is your baseline. You'll repeat it in Step 10.

More detail: [Google's AI Now Answers Most Brand Searches](https://tarasovs.me/ai-overviews-branded-searches/)

## Step 2. Make sure AI crawlers are allowed in

If an assistant's crawler can't open your pages, nothing else on this list matters.

- Open `yourdomain.com/robots.txt` and check that it doesn't block **OAI-SearchBot** and **ChatGPT-User** (ChatGPT), **PerplexityBot**, **Claude-User**, **Googlebot**, and **Bingbot**.
- A blanket `Disallow: /` for all bots is the most common accidental block.
- Ask whoever manages your hosting or CDN (for example Cloudflare) whether a firewall or "bot protection" setting blocks AI crawlers. robots.txt alone doesn't show that.

Blocking **GPTBot** is fine if you don't want your content used for AI training. It doesn't affect ChatGPT Search, which uses OAI-SearchBot.

More detail: [How to Rank in ChatGPT Search](https://tarasovs.me/how-to-rank-in-chatgpt-search/)

## Step 3. Get indexed by Bing, not just Google

ChatGPT Search draws heavily on Bing's index. Many businesses rank on Google and are missing from Bing.

- Create a free [Bing Webmaster Tools](https://www.bing.com/webmasters) account (you can import your site from Google Search Console in a few clicks).
- Submit your XML sitemap and check for crawl errors.

## Step 4. Make sure your content works without JavaScript

Some AI crawlers don't run JavaScript. If your services, prices, or menu only appear after scripts load, or sit inside an embedded widget (iframe), the crawler may see an empty page.

Quick test: open your page, right-click, choose **View Page Source**, and search for a sentence from your main text. If you can't find it, ask your developer about server-side rendering.

## Step 5. Answer the main question in the first 150 words

AI systems pull short, self-contained passages. Put a clear answer at the top of each important page:

- **What** you do, **for whom**, and **where**.
- One or two concrete details (years in business, the area you serve, a real result).
- Plain language, no slogans.

A good test: if someone read only your first paragraph, could they explain what you offer?

## Step 6. Use question-shaped headings and self-contained sections

Write section headings the way customers ask questions: "How much does X cost?", "How long does Y take?", "Do you work with Z?". Under each heading, answer fully in that section, so it still makes sense when quoted on its own, without the rest of the page.

## Step 7. Add a real FAQ section and structured data

- Add 5–10 genuine questions customers ask you, with direct answers, to your key service pages.
- Ask your developer to add **FAQPage** schema for those questions, plus **Organization** or **LocalBusiness** schema with your name, address, phone, hours, and social profiles. Check it with Google's [Rich Results Test](https://search.google.com/test/rich-results).
- Make sure the FAQ in the schema matches the visible text word for word.

## Step 8. Keep your business details identical everywhere

AI systems cross-check sources. Conflicting details lower their confidence in you.

Check that your **business name, address, phone, hours, and service categories** match on your website, Google Business Profile, Bing Places, Yelp, industry directories, and social profiles. Fix old addresses and phone numbers first.

## Step 9. Earn mentions on other websites

Assistants trust what independent sources say about you more than what you say about yourself.

- Ask happy customers for reviews on Google and the platforms your industry uses.
- Get listed in relevant directories and "best [service] in [city]" roundups.
- Offer expert comments to local or industry publications.
- Publish case studies and comparison content that others can reference.

More detail: [How to Get Your Business Cited in ChatGPT Answers](https://tarasovs.me/how-to-get-your-business-cited-in-chatgpt-answers/)

## Step 10. Prove expertise, then re-check every month

- Strengthen your About page: who runs the business, experience, credentials, real photos.
- Add author names and short bios to articles.
- Show case studies with specific, verifiable results.

Then repeat your Step 1 check once a month with the same questions. The share of answers where your business appears is called **Share of Model**. Track it over time rather than reacting to a single answer.

More detail: [Share of Model: How to Measure AI Search Visibility](https://tarasovs.me/share-of-model-ai-search-visibility/)

---

## Optional: add an llms.txt file

An `llms.txt` file is a short, plain-text summary of your site for AI tools. It's quick to add, but there's no evidence yet that major assistants rely on it, so do it after Steps 1–10, not instead of them.

Template and examples: [llms.txt Implementation Guide](https://tarasovs.me/llms-txt-guide/)

---

## Want us to look at your site?

If you'd like a second pair of eyes, reply to this email. We'll tell you which of these steps would make the biggest difference for your website first.

Tarasovs Digital Agency
hello@tarasovs.me · [tarasovs.me](https://tarasovs.me/)
