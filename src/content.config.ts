import { glob } from "astro/loaders";
import { defineCollection, z } from "astro:content";

const blog = defineCollection({
  loader: glob({ base: "./src/content/blog", pattern: "**/*.{md,mdx}" }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      pubDatetime: z.date(),
      modDatetime: z.date().optional().nullable(),
      description: z.string(),
      heroImage: image().optional(),
      tags: z.array(z.string()).default(["others"]),
      featured: z.boolean().optional(),
      category:  z.string().optional(),
      author: z.object({
        name: z.string(),
        description: z.string().optional(),
        avatar: image().optional(),
      })
    }),
});

// const about = defineCollection({
//   loader: glob({ base: "./src/content/about", pattern: "**/*.{md,mdx}" }),
//   schema: z.object({
//     title: z.string(),
//     description: z.string().optional(),
//   }),
// });


export const collections = { blog };