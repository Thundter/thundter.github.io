import fs from "fs"
import Path from 'path'

const initialDirectory = "./blogs"

const checkDirectory = (directory) => {
    var directories = []

    console.log(`checkDirectory: ${directory}`)

    fs.readdirSync(directory).map(item => {
        var diskItem = directory + '/' + item
        if (fs.statSync(diskItem).isDirectory()) {
            checkDirectory(diskItem)
        } else {
            checkFile(diskItem)
        }
    })
}

const checkFile = (file) => {
    var extension = file.split('/').pop().split('.').pop();

    if (["md","mdx"].includes(extension)){
    } else {
        return
    }

    // console.log(`checkFile: ${file}`)

    if (isMissingHeader(file)) {
        // console.log(`${file} missing header`)
        addHeader(file)
    }
}

const isMissingHeader = (file) => {
    // console.log(`${file} header check`)
    var fileContents = fs.readFileSync(file, 'utf8');
    const lines = fileContents.split('\n');

    var barCount = 0
    lines.forEach(line => {
        if (line.trim() === "---" ) {
            barCount++
        }
    });

    return barCount < 2 
}

const toTitleCase = input => {
    return input.toLowerCase().split(' ').map(word =>
        word.charAt(0).toUpperCase() + word.slice(1)
    ).join(' ');
};

const addHeader = (file) => {
    console.log(`${file} add header`)
    var fileContents = fs.readFileSync(file, 'utf8')

    // needs correct layout path
    var layout = `../layouts/Blog.astro`
    const title = toTitleCase(Path.parse(file).name)
    const stats = fs.statSync(file);
    const fileDate = `${stats.ctime.toISOString().split('T')[0]}`
    
    // get from directory
    const path = file.replace(Path.basename(file),"").replace(/^[./]+|[./]+$/g, '');
    const tags = path.split('/')

    tags.forEach(element => {
        layout = "../" + layout        
    });

    const output = `---
layout: "${layout}"
title: "${title}"
date: "${fileDate}"
tags: [${tags}]
---`

    fs.writeFileSync(file,`${output}
${fileContents}`,{encoding:'utf8',flag:'w'})
}

checkDirectory(initialDirectory)

console.log("::Finished::")

