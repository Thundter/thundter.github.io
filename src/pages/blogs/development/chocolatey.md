---
layout: "../../../layouts/Blog.astro"
title: "Chocolatey"
website: "https://chocolatey.org"
date: "2024-10-27"
tags: ["chocolatey", "install"]
---

A package manager for windows

[Packages](https://community.chocolatey.org/packages/)

## Install 

Chocolatey can be installed using various methods 

### [Standard](https://chocolatey.org/install#install-step1)

1. Ensure you are using your powershell in admin mode
1. Run `Get-ExecutionPolicy`. If it returns `Restricted`, then run `Set-ExecutionPolicy AllSigned` or `Set-ExecutionPolicy Bypass -Scope Process`. Remember to revert this after installation
1. Run 
``` powershell
Set-ExecutionPolicy Bypass -Scope Process -Force; [System.Net.ServicePointManager]::SecurityProtocol = [System.Net.ServicePointManager]::SecurityProtocol -bor 3072; iex ((New-Object System.Net.WebClient).DownloadString('https://community.chocolatey.org/install.ps1'))
```
this is the current version on the site 
1. run `choco` or `choco -?` to see if it worked

<!-- ### [Install using NuGet Package Manager](https://chocolatey.org/courses/installation/installing?method=install-using-nuget-package-manager) -->

### NuGet Package Manager

install by downloading the chocolatey.nupkg file and installing it 

1. ensure the NuGet Package Provider is installed and trusted

    1. Install the NuGet Provider: Run the following command in PowerShell to install the NuGet package provider
    ``` powershell
    Install-PackageProvider -Name NuGet -MinimumVersion 2.8.5.201 -Force
    ```

    1. If the PowerShell Gallery is not trusted, you may also need to set its installation policy to trusted:
    ``` powershell
    Set-PSRepository -Name PSGallery -InstallationPolicy Trusted
    ```

1. Download the Chocolatey Package
You can download the `chocolatey.nupkg` file directly from a repository (such as the official community feed or an internal repository) to a local path. 

1. Install the Package: Once the .nupkg file is downloaded, use the NuGet command line tool (nuget.exe) or PowerShell to install it:

``` powershell
nuget install chocolatey.nupkg -OutputDirectory .\chocolatey
```

### chocolatey.lib via Package Manager Console in Visual Studio

Alternatively, if using the chocolatey.lib package within a .NET project, you can add it via the Package Manager Console:

``` powershell
Install-Package chocolatey.lib
```

### in Visual Studio

1. open Visual Studio 20XX with admin privileges
1. in Visual Studio open package manager console
1. run `Install-Package chocolatey` in package manager console and wait for it to finish
1. run `Initialize-Chocolatey` in package manager console and wait for it to finish
1. run `choco` or `choco -?` to see if it worked

## Applications

[NotePad++](https://chocolatey.org/packages/notepadplusplus) - `choco install notepadplusplus -y`

[7 Zip](https://chocolatey.org/packages/7zip.install) - `choco install 7zip.install -y`

[VSCode](https://chocolatey.org/packages/vscode) - `choco install vscode -y`

[VSCodium](https://community.chocolatey.org/packages/vscodium) - `choco install vscodium -y` - __More Instructions Required__

[Git](https://chocolatey.org/packages/git) - `choco install git -y`

[NODE JS](https://chocolatey.org/packages/nodejs) - `choco install nodejs -y`

[Visual Studio 2026 Professional](https://community.chocolatey.org/packages/visualstudio2026professional) - `choco install visualstudio2026professional -y` - __PAID PRODUCT__

[Visual Studio 2026 Community](https://community.chocolatey.org/packages/visualstudio2026community) - `choco install visualstudio2026community -y`

[Agent Ransack](https://chocolatey.org/packages/agentransack) - `choco install agentransack -y` - would like a replacement

[VLC](https://community.chocolatey.org/packages/vlc) - `choco install vlc -y` check for LTS version, this installs latest

[Steam Client](https://community.chocolatey.org/packages/steam) - `choco install steam -y`

[Windows Terminal](https://community.chocolatey.org/packages/microsoft-windows-terminal) - `choco install microsoft-windows-terminal -y`

[Microsoft .NET 6.0 SDK](https://community.chocolatey.org/packages/dotnet-6.0-sdk) - `choco install dotnet-6.0-sdk -y`

[Microsoft .NET 8.0 SDK](https://community.chocolatey.org/packages/dotnet-8.0-sdk) - `choco install dotnet-8.0-sdk -y`

[Microsoft .NET 10.0 SDK](https://community.chocolatey.org/packages/dotnet-10.0-sdk) - `choco install dotnet-10.0-sdk -y`

[brave browser](https://community.chocolatey.org/packages/brave/1.41.99) - `choco install brave -y`

[NVM](https://community.chocolatey.org/packages/nvm) - `choco install nvm -y`

<!-- Was Free, now Paid, not using anymore [Fork](https://community.chocolatey.org/packages/git-fork) - `choco install git-fork -y` - [site](https://fork.dev/) - __PAID PRODUCT__ -->

[fiddler](https://community.chocolatey.org/packages/fiddler) - `choco install fiddler -y`

[MySQL Workbench](https://community.chocolatey.org/packages/mysql.workbench) - `choco install mysql.workbench -y`

[docker desktop](https://community.chocolatey.org/packages/docker-desktop) - `choco install docker-desktop -y` - __PAID PRODUCT__

[postman](https://community.chocolatey.org/packages/postman) - `choco install postman -y` - __CLOUDED PRODUCT__

[Git Extensions](https://community.chocolatey.org/packages/gitextensions) - `choco install gitextensions -y`

[Discord](https://community.chocolatey.org/packages/discord) - `choco install discord -y`

