import { defineConfig, s, defineCollection } from "velite";
import remarkGfm from "remark-gfm";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";

export const posts = defineCollection({
  name: "posts",
  pattern: "src/content/blog/*.mdx",
  schema: s.object({
    title: s.string(),
    date: s.date(),
    summary: s.string().optional(),
    cover: s.string().optional(),
    tags: s.array(s.string()).optional(),
    published: s.boolean().default(true),
  }),
});

export default defineConfig({
  collections: { posts },
  mdx: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [rehypeSlug, rehypeAutolinkHeadings],
  },
});
