import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const blogs = defineCollection({
  loader: glob({
    pattern: "**/[^_]*.{md,mdx}",
    base: "./src/pages/blogs",
  }),
  schema: z.object({
    title: z.string(),
    poster: z.object({
      src: z.string(),
      width: z.number().optional(),
      height: z.number().optional(),
    }).optional(),
    subtitle: z.string().optional(),
    date: z.coerce.date().optional(),
    tags: z.array(z.string()).optional()
  }),
});

export const collections = { blogs };
