// Content collections matching scripts/wp-export.mjs output.
import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const seo = z
  .object({
    title: z.string().optional(),
    description: z.string().optional(),
    canonical: z.string().optional(),
    robots: z.string().optional(),
    ogImage: z.string().optional(),
  })
  .optional();

const cover = z
  .object({
    src: z.string(),
    alt: z.string().default(''),
    width: z.number().optional(),
    height: z.number().optional(),
  })
  .optional();

const base = {
  title: z.string(),
  slug: z.string(),
  pubDate: z.coerce.date(),
  updatedDate: z.coerce.date().optional(),
  categories: z.array(z.string()).default([]),
  tags: z.array(z.string()).default([]),
  cover,
  seo,
  jsonld: z.array(z.any()).default([]),
  wpId: z.number().optional(),
  legacyUrl: z.string().optional(),
};

const posts = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/posts' }),
  schema: z.object({ ...base, excerpt: z.string().optional() }),
});

const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  // summary / task / details / gallery come from the Ohio portfolio fields on the live pages
  // (the WordPress REST export left most project bodies empty).
  schema: z.object({
    ...base,
    summary: z.string().optional(),
    task: z.string().optional(),
    details: z.array(z.object({ label: z.string(), value: z.string() })).default([]),
    gallery: z
      .array(z.object({ src: z.string(), alt: z.string().default(''), width: z.number().optional(), height: z.number().optional() }))
      .default([]),
  }),
});

// One JSON file per dispensary (data from /wp-json/tdv/v1/dispensaries/{slug})
const profiles = defineCollection({
  loader: glob({ pattern: '**/*.json', base: './src/content/profiles' }),
  schema: z
    .object({
      name: z.string(),
      slug: z.string(),
      city: z.string().optional(),
      state: z.string().optional(),
      website_url: z.string().optional(),
      ai_score: z.coerce.number().optional(),
      ai_mentions: z.coerce.number().optional(),
      ai_valid_prompts: z.coerce.number().optional(),
      ai_top3_count: z.coerce.number().optional(),
      ai_breakdown: z.any().optional(),
      needsData: z.boolean().optional(),
      updatedDate: z.coerce.date().optional(),
      seo,
      legacyUrl: z.string().optional(),
    })
    .passthrough(),
});

export const collections = { posts, projects, profiles };
