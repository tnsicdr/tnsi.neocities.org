import { defineCollection, z } from "astro:content";

const blogCollection = defineCollection({
  type: "content",
  schema: z.object({
    date: z.string().transform((str) => new Date(str)),
    draft: z.boolean().optional().default(false),
    tags: z.array(z.string()).optional(),
    title: z.string(),
  }),
});

export const collections = {
  blog: blogCollection,
};
