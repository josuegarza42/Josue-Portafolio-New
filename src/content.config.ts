import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";
import { rssSchema } from "@astrojs/rss";

const blog = defineCollection({
  loader: glob({ pattern: "**/[^_]*.md", base: "./src/data/blog" }),
  schema: rssSchema.extend({ period: z.string().optional() }),
});

const blogEs = defineCollection({
  loader: glob({ pattern: "**/[^_]*.md", base: "./src/data/blog-es" }),
  schema: rssSchema.extend({ period: z.string().optional() }),
});

export const collections = { blog, blogEs };
