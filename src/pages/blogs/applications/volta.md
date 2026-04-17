---
layout: "../../../layouts/Blog.astro"
title: "Volta"
website: "https://volta.sh/"
date: "2025-03-21"
tags: ["Volta", "Javascript", "nvm"]
---

Simply: allows 2 applications with different versions of node to run together on the same machine at the same time

1.  `winget install Volta.Volta` or `choco install volta -y`
2.  `volta install node@14.21.3`
3.  `volta install node@16.20.2`

__note:__ if VSCode was open during the above install, then it will need to be restarted for the commands below to work

4. The pin command adds a volta entry to package.json and means that whenever you open the workspace volta loads up the specified node (and appropriate npm)
    In the VS terminal of the ...
    a. widget project workspace run `volta pin node@16.20.2`
    b. admin project workspace run `volta pin node@14.21.3` 
    
5. `npm run watch` in the VS terminal starts the watch using the correct node version
    Can have both projects watched with different versions at the same time.

__note:__ Needed `npm clean-install` before first run after getting the new node version.
__note:__ NVM does not need to be uninstalled for volta to work
