---
layout: "../../../../layouts/Blog.astro"
title: "directory structure of blogs collection"
date: "2026-04-13"
tags: ["astro", "blogs", "collection"]
---

The directory structure for an Astro blog collection follows a specific convention centered around the `src/content/` directory. 

## Blog Collection Structure

The **blogs collection** is created as a top-level directory within `src/content/`.  Each Markdown (`.md`) or MDX (`.mdx`) file inside represents a blog post. 

### Standard Directory Layout
```
src/
├── content/
│   └── blog/               # The blog content collection
│       ├── first-post.md
│       ├── second-post.md
│       └── draft-post.md   # Can be excluded with a leading underscore (_)
├── content.config.ts       # Configuration file for defining collections and schemas
├── pages/
│   ├── index.astro         # Homepage
│   └── blog/
│       └── [slug].astro    # Dynamic route template for individual blog posts
└── ...
```

### Key Points
- **`src/content/blog/`**: This folder is the designated collection for all blog posts. 
- **File Naming**: Use lowercase with dashes (e.g., `my-first-blog-post.md`) for consistency. 
- **`content.config.ts`**: This file (located in `src/`) is used to define the blog collection and its schema for type safety. 
- **Dynamic Routing**: The `[slug].astro` file in `src/pages/blog/` is used to generate individual pages for each post based on its filename or frontmatter slug.

