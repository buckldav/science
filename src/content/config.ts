import { defineCollection, z } from "astro:content";

const disclosure = defineCollection({
  type: "content",
  // Type-check frontmatter using a schema
  schema: z.object({
    title: z.string(),
    description: z.string(),
    fees: z.string(),
    materials: z.array(z.string()).optional(),
    fieldWork: z.array(
      z.object({
        location: z.string(),
        website: z.string().url().optional(),
        fee: z.string(),
        motivation: z.string(),
      })
    ),
  }),
});

const slides = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    theme: z.string(),
  }),
});

export const collections = { disclosure, slides };
