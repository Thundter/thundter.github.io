---
layout: "../../../../layouts/Blog.astro"
title: "Remove Whitespace"
date: "2026-05-16"
tags: ["python", "whitespace"]
---

To remove whitespace from a Python string, select the method that matches your specific goal, as Python strings are immutable and return a new string. 

Remove all whitespace (spaces, tabs, newlines): Use re.sub(r"\s+", "", s) for robust pattern matching or "".join(s.split()) for high performance, as split() handles all unicode whitespace. 
Remove only literal space characters: Use s.replace(" ", ""), which is simple but ignores tabs or newlines. 
Trim leading and trailing whitespace: Use s.strip(), or s.lstrip() and s.rstrip() for one-sided removal. 
Normalize multiple spaces between words: Use " ".join(s.split()) to collapse all whitespace into single spaces while preserving word order. 
Fastest deletion of known characters: Use s.translate(str.maketrans('', '', string.whitespace)) for maximum speed when removing standard whitespace characters. 
import re
import string

``` py
s = "  Hello   World\n\t  "

# 1. Remove ALL whitespace (spaces, tabs, newlines)
clean_all_regex = re.sub(r"\s+", "", s)
clean_all_join = "".join(s.split())

# 2. Remove ONLY space characters (keeps \t and \n)
clean_spaces_only = s.replace(" ", "")

# 3. Trim ends only
trimmed = s.strip()

# 4. Normalize spaces (collapse multiple to single space)
normalized = " ".join(s.split())

# 5. Fastest removal of standard whitespace
clean_translate = s.translate(str.maketrans('', '', string.whitespace))
```

## Source 

https://search.brave.com/search?q=python+string+remove+whitespace&summary=1&conversation=08eeee9c7aaf8b92ea97231562c4083015a4

[digitalocean - remove-spaces-from-string](https://www.digitalocean.com/community/tutorials/python-remove-spaces-from-string)
