---
layout: "../../../../../layouts/Blog.astro"
title: "File System"
date: "2026-07-31"
tags: [blogs,development,javascript,node]
---

### examples 

in the examples below 

``` js
var file // a file path as string
```

### date times of a file 

- `birthdate` - created
- `mtime` - modified
- `ctime` - changed

``` js
import fs from 'fs'

const { birthtime, mtime, ctime } = fs.statSync(file)
```

all values are date instances

### create an empty file

- asynchronous empty file creation 
- uses helper library fs-extra providing same API as `fs` with additional convenience methods

``` js
import fs from 'fs-extra'

await fs.ensureFile(path)
```

### Async Check File Exists

``` js
import { promises as fsPromises } from 'fs';   

async function exists (path) {  
  try {
    await fsPromises.access(path)
    return true
  } catch {
    return false
  }
}
```

### Async rename file

``` js
import { promises as fsPromises } from 'fs';   

await fsPromises.rename(oldPath, newPath)  
```

### is path a directory|file

``` js
import { promises as fsPromises } from 'fs';   

const stats = await Fs.stat(path)

console.log(stats.isDirectory())
console.log(stats.isFile())
```

### home directory

``` js
const os = require('os')

os.homedir()  
```

### update file changed & access date times

- creates `file` if it doesn’t exist
- @param {String} file

``` js
import fs from 'fs-extra'

async touch (file) {  
  await fs.ensureFile(file)

  const now = new Date()
  await fs.utimes(file, now, now)
}
```

### file contents 

- Returns the content of the given file

``` js
import { promises as fsPromises } from 'fs';

const contents = await fsPromises.readFile(file, 'utf8');   
```

