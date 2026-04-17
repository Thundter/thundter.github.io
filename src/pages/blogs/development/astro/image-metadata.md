---
layout: "../../../../layouts/Blog.astro"
title: "ImageMetadata"
date: "2026-04-13"
tags: ["astro", "ImageMetadata"]
---

ImageMetadata is a TypeScript type provided by Astro that defines the shape of optimized image data, enabling type safety when dynamically importing or processing images.  It is primarily used with the import.meta.glob function to map image files (e.g., src/assets/*.{jpeg,jpg,png,gif}) and with the getImage function to retrieve optimized image properties. 

Dynamic Imports: When using import.meta.glob<{ default: ImageMetadata }>, the type ensures that the returned object contains valid image metadata for each file, allowing you to safely access src, width, height, and format properties. 
Custom Components: It serves as the type for props in custom image components, ensuring that variables holding image paths or metadata are correctly validated before being passed to the <Image /> component. 
Usage Example:

``` ts
import type { ImageMetadata } from 'astro';
import { Image } from 'astro:assets';
import { getImage } from 'astro:assets';

const images = import.meta.glob<{ default: ImageMetadata }>('/src/assets/*.{jpeg,jpg,png,gif}');
const myImage = await getImage({ src: images['./src/assets/logo.png']() });
```

This type is essential for handling local images in the src/ directory, where Astro analyzes the file to generate optimized versions and metadata automatically. 

AI-generated answer. Please verify critical facts.

## use as a parameter

The `ImageMetadata` type in Astro is used to represent information about imported images, such as `src`, `width`, `height`, and `format`. It's commonly used with `import.meta.glob` to dynamically import and optimize images. 

### Using `ImageMetadata` with Dynamic Imports
To dynamically load images (e.g., from user input or CMS content), use `import.meta.glob` with `ImageMetadata` typing:

```ts
const images = import.meta.glob<{ default: ImageMetadata }>('/src/assets/**/*.{jpg,jpeg,png,gif}');
```

This creates a map of image paths to their metadata, allowing dynamic rendering via Astro’s `<Image />` component. 

### Key Parameters for `<Image />` Component
- **`src`**: Accepts `ImageMetadata`, string (public or remote URL), or promise. 
- **`alt`**: Required descriptive text.
- **`width` / `height`**: Required for `public/` images; auto-inferred for `src/` imports. 
- **`layout`**: Controls responsive behavior (`constrained`, `full-width`, etc.).
- **`inferSize`**: For remote images, fetches dimensions automatically (Astro ≥5.17.3). 
- **`priority`**: Optimizes loading for above-the-fold images.

### Example: Dynamic Image Loader
```astro
---
import { Image } from 'astro:assets';
interface Props { imagePath: string; alt: string; }
const { imagePath, alt } = Astro.props as Props;
const images = import.meta.glob<{ default: ImageMetadata }>('/src/assets/**/*.{png,jpg}');
if (!images[imagePath]) throw new Error(`${imagePath} not found`);
---
<Image src={(await images[imagePath]()).default} alt={alt} />
```

## source: 

https://search.brave.com/search?q=astro+ImageMetadata&summary=1&conversation=08ea5220d02bbffe2c44c6978d18060a7ad4
https://cosmicthemes.com/blog/astro-dynamic-image-imports/
https://docs.astro.build/en/reference/modules/astro-assets/
https://github.com/withastro/docs/blob/main/src/content/docs/en/recipes/dynamically-importing-images.mdx
https://www.npmjs.com/package/@astrojs/image
https://tanggd.github.io/en/guides/integrations-guide/image/
https://docs.astro.build/en/recipes/build-custom-img-component/
https://docs.astro.build/en/recipes/dynamically-importing-images/
https://cosmicthemes.com/blog/astro-dynamic-image-imports/
https://docs.astro.build/en/reference/modules/astro-assets/
