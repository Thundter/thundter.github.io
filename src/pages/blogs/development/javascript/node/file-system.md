---
layout: "../../../../../layouts/Blog.astro"
title: "File System"
date: "2026-07-31"
tags: [blogs,development,javascript,node]
---

### date times of a file 

- `birthdate` - created
- `mtime` - modified
- `ctime` - changed

``` js
const Fs = require('fs')

const { birthtime, mtime, ctime } = Fs.statSync(file)
```

all values are date instances

### create an empty file

- asynchronous empty file creation 
- uses helper library fs-extra providing same API as `fs` with additional convenience methods

``` js
const Fs = require('fs-extra')

async function ensureFile (path) {  
  await Fs.ensureFile(path)
}
```

### Async Check File Exists

``` js
const { promises: Fs } = require('fs')

async function exists (path) {  
  try {
    await Fs.access(path)
    return true
  } catch {
    return false
  }
}
```

### Async rename file

``` js
const { promises: Fs } = require('fs')

await Fs.rename(oldPath, newPath)  
```

### is path a directory|file

``` js
const { promises: Fs } = require('fs')

/**
 * @param {String} path
 * @returns {Boolean}
 */
async function isDirectory(path) {  
  const stats = await Fs.stat(path)

  return stats.isDirectory()
}

/**
 * @param {String} path
 * @returns {Boolean}
 */
async function isFile(path) {  
  const stats = await Fs.stat(path)

  return stats.isFile()
}
```

### home directory

``` js
const os = require('os')

os.homedir()  
```
