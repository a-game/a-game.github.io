import { author } from "site";
import { defineCollection, z } from "astro:content";

const page = z.object({
  title: z.string(),
  description: z.string(),
  featured: z.boolean().or(z.number()).optional(),
});

const posts = defineCollection({
  type: "content",
  schema: () =>
    page.extend({
      pubDate: z.date(),
      author: z.string().default(author),
      draft: z.boolean().optional(),
      canonical: z.string().url().optional(), // If post is published elsewhere
    }),
});

const projects = defineCollection({
  type: "content",
  schema: ({ image }) =>
    page.extend({
      image: image().optional(),
      tech: z.array(z.string()).default([]),
    }),
});

export const collections = { posts, projects };
