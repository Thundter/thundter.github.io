---
layout: "../../../layouts/Blog.astro"
title: "Volta"
website: "https://volta.sh/"
date: "2025-03-21"
tags: ["Volta", "Javascript", "nvm"]
---

Simply: allows more than one application with different requirements for versions of node to run together on the same machine at the same time

1.  `winget install Volta.Volta` 

    or `choco install volta -y`

2.  navigate to code that you need node installed on in terminal and run the following in that directory 

    `volta install node@14.21.3`

    where `14.21.3` is the version of node needed in the 1st directory

3.  then navigate to code for the 2nd directory 

    `volta install node@16.20.2`

    where `16.20.2` is the version of node needed in the 2nd directory

    installing a version of node with Volta makes that version available to use in any other application on the machine

    if using the same version again use the pin command instead  

__note:__ if VSCode was open during the above install, then it will need to be restarted for the commands below to work

4. The pin command adds a volta entry to package.json and means that whenever you open the workspace volta loads up the specified node (and appropriate npm)

    run `volta pin node@16.20.2` to use this version of node in that directory

    by pining the version you save it in your `package.json` file which makes it available to install with `npm i`

5.  running the application in the VS terminal starts the watch using the correct node version

    Can have both projects watched with different versions at the same time

__notes:__ 
- Needed `npm clean-install` before first run after getting the new node version.
- NVM does not need to be uninstalled for volta to work

## Sources:

[Guide](https://docs.volta.sh/guide/)
