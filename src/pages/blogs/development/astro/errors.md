---
layout: "../../../../layouts/Blog.astro"
title: "Astro Errors"
date: "2024-10-27"
tags: ["astro", "errors"]
---

These are some of the Astro error's I've encountered that have needed me to take detours 

``` bash
Type '{ children: any; poster: ImageMetadata | undefined; title: string; subtitle: string | undefined; website: string | undefined; tags: string[]; date: Date; }' is not assignable to type 'IntrinsicAttributes & Props'.
  Property 'poster' does not exist on type 'IntrinsicAttributes & Props'.ts(2322)
```

what the heck does this mean?