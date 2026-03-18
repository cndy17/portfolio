import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const work = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/work" }),
  schema: z.object({
    order: z.number(),
    title: z.string(),
    subtitle: z.string(),
    year: z.number(),
    stack: z.array(z.string()),
    tags: z.array(z.string()),
    role: z.string().optional(),
    github: z.string().url().optional(),
    cursorLabel: z.string(),
    heroImage: z.string().optional(),
    stats: z
      .array(
        z.object({
          value: z.string(),
          label: z.string(),
        }),
      )
      .optional(),
  }),
});

const makes = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/makes" }),
  schema: z.object({
    order: z.number(),
    title: z.string(),
    material: z.string(),
    year: z.number(),
    wip: z.boolean().default(false),
    photos: z.array(z.string()).optional(),
  }),
});

export const collections = { work, makes };
