---
layout: "../../../../layouts/Blog.astro"
title: "Node Version Manager"
date: "2026-07-02"
tags: ["development", "javascript", "nvm" ]
---

[Shell](https://www.nvmnode.com/guide/installation-sh.html) - [Windows](https://github.com/coreybutler/nvm-windows/releases)

- `nvm list` - lists versions of nvm

- `nvm install `[version] - install missing node version

## Install

There are three primary methods to install Node.js on Linux, depending on whether you need system-wide stability or version flexibility. 

### 1. Node Version Manager (NVM)

Recommended for Developers This is the best option for managing multiple Node.js versions without requiring root access.

``` bash
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/master/install.sh | bash
source ~/.bashrc
nvm install node
```

### 2. NodeSource Repository

Latest Stable Version Use this to install the most recent stable release via your system package manager.

- Ubuntu/Debian:
    ``` bash
    curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
    sudo apt install -y nodejs
    ```

- CentOS/RHEL/Fedora:
    ``` bash
    curl -fsSL https://rpm.nodesource.com/setup_18.x | sudo bash -
    sudo yum install -y nodejs
    ```

### 3. Default Package Manager

Quick Setup This method is easiest but often provides an older version of Node.js that may not be the latest. 

- Ubuntu/Debian: `sudo apt install nodejs npm`
- CentOS/RHEL: `sudo yum install nodejs npm`
- Fedora: `sudo dnf install nodejs`

After installation, verify the setup by running node -v and npm -v. 

### Windows install 

https://docs.microsoft.com/en-us/windows/dev-environment/javascript/nodejs-on-windows

[How to install for Windows 10](https://dev.to/skaytech/how-to-install-node-version-manager-nvm-for-windows-10-4nbi)

## Source

https://search.brave.com/search?q=Install+Node.js+on+linux&summary=1&conversation=095bb315f6a9e25359dcc50b578ac45b4c9e