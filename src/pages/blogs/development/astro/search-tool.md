---
layout: "../../../../layouts/Blog.astro"
title: "Search Tool"
date: "2024-10-27"
tags: ["astro", "search"]
---

To create a search tool for your Markdown (`.md`) files using the latest version of Astro, use **Pagefind** via the `astro-pagefind` integration.  This is a popular, zero-configuration, full-text search solution that works perfectly with Astro's static site generation. 

### 1. Install Dependencies

Install both `astro-pagefind` and `pagefind`:

```bash
npm install astro-pagefind pagefind
```

### 2. Add Integration

Add the `pagefind` integration to your `astro.config.ts`:

```ts
// astro.config.ts
import { defineConfig } from "astro/config";
import pagefind from "astro-pagefind";

export default defineConfig({
  integrations: [
    pagefind(), // Add this line
  ],
});
```

### 3. Build Your Site

Run a build to generate the search index:

```bash
npm run build
```

Pagefind automatically indexes all generated HTML content, including text from your Markdown files. 

### 4. Create a Search Page

Create `src/pages/search.astro`:

```astro
---
import BaseLayout from "../layouts/BaseLayout.astro";
import { PagefindUI } from "@pagefind/default-ui";
---

<BaseLayout title="Search">
  <h1>Search</h1>
  <div id="search" data-pagefind-ui></div>
  <script>
    new PagefindUI({ element: "#search" });
  </script>
</BaseLayout>
```

### 5. (Optional) Style the Search

Customize the look using CSS variables:

```css
:root {
  --pagefind-ui-primary: #0062cc;
  --pagefind-ui-text: #333;
  --pagefind-ui-background: white;
}
```

## sources
https://search.brave.com/ask?q=astro+create+a+search+tool+to+search+my+md+files+using+latest+astro+version&quickAnswerKey=08e56ad6b467edcf216607e30c21dd315689&quickAnswerQuery=astro+create+a+search+tool+to+search+my+md+files+using+latest+astro+version&conversation=08f4f56dab8e8b411be5884b15388d5246a5
https://github.com/shishkin/astro-pagefind
https://scottwillsey.com/astro-pagefind/
https://syntackle.com/blog/pagefind-search-in-astro-site/
https://pagefind.app/
https://dbushell.com/2024/11/21/static-search-page-find/
https://www.webdong.dev/en/post/how-to-add-search-to-any-kind-of-static-site-using-pagefind/
