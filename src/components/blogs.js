import fs from "fs"

var directoryToCheck = "../pages/blogs"

const interpretDirectory = (spacer, directory) => {
    var files = []
    var directories = []
    var content = ""
    var directoryParts = directory.replace(directoryToCheck, "").replace("\\", "/").trim("/").split("/")
    var directoryName = toTitleCase(directoryParts.pop())
    var directoryDifference = directory.replace(directoryToCheck, "")

    fs.readdirSync(directory).map(item => {
        var diskItem = directory + '/' + item
        if (fs.statSync(diskItem).isDirectory()) {
            directories.push(diskItem)
        } else {
            files.push(diskItem)
        }
    })

    directories.forEach(d => {
        content += interpretDirectory(spacer, d)
    })

    content += interpretFiles(spacer, files)

    // console.log(`interpretDirectory::spacer:${spacer}|directoryName:${directoryName}|directory:${directory}`)

    return `
${spacer}<li class="blogs__list__folderitem">
${directoryName ? `${spacer}  <label>📁${directoryName}</label>` : ""} 
${spacer}  <ul class="blogs__directory__ul">
${spacer}    ${content}
${spacer}  </ul>
${spacer}</li>`
}

const interpretFiles = (spacer, files) => {
    var content = `${spacer}<table>`

    if (files) {
        files.forEach(f => {
            content += interpretFile(spacer, f)
        })
    } else {
        console.log(`interpretFiles::no files`)
    }

    content += `${spacer}</table>`
    return content
}

const interpretFile = (spacer, file) => {
    var filename = file.split('/').pop()

    if (filename.startsWith("_") || filename.endsWith(".yml")) {
        // console.log(`interpretFile::skipped|${file}`)
        return ""
    }

    // console.log(`interpretFile::spacer:${spacer}|file:${file}`)

    var relativePath = removeExtension(file.replace(directoryToCheck, "/blogs/").replace("\\", "/").replace("//", "/").trim("/"))
    var className = `blogs__${relativePath.split("/").join("__")}`.replace("____", "__")
    var title = getTitle(file)
    var fileType = getFileType(file)

    // console.log(`interpretFile::spacer:${spacer}|title:${title}|fileType:${fileType}|file:${file}|relativePath:${relativePath}`)

    return `
${spacer}  <tr class="blogs__list__fileitem">
${spacer}    <td class="blogs__filetype">${fileType}</td>
${spacer}    <td><a href={\"${relativePath}\"} class="${className}">${title}</a></td>
${spacer}  </tr>`
}

const removeExtension = input => {
    var extension = input.split('.').pop();
    return input.slice(0, -(extension.length + 1)).trim(".")
}

const toTitleCase = input => {
    return input.toLowerCase().split(' ').map(word =>
        word.charAt(0).toUpperCase() + word.slice(1)
    ).join(' ');
};

const getTitle = (file) => {
    var defaultTitle = toTitleCase(removeExtension(file.split("/").pop()))
    var fileContents = fs.readFileSync(file, 'utf8');

    // console.log("fileContents::", fileContents)

    // title found, returning remaining value
    const lines = fileContents.split('\n');
    var output = lines.find(line => line.startsWith("title:"));

    if (!output) {
        // console.log(`getTitle::file:${file}|no title`)
        return defaultTitle
    }

    output = output.replace("title:", "").trim().replaceAll('"', '')
    // console.log(`getTitle:${output}|file:${file}`)

    return output
}

const getFileType = (file) => {
    var fileContents = fs.readFileSync(file, 'utf8');
    const lines = fileContents.split('\n');
    var layout = lines.find(line => line.startsWith("layout:"));

    if (!layout) {
        console.log(`getFileType::file:${file}|no layout`)
        return "Unknwn"
    }

    layout = layout.replace("layout:", "").trim().replaceAll('"', '').replace(".astro", "").split("/").pop()

    // console.log(`getFileType:${layout}|file:${file}`)

    //│├└📁📂🍔🍖🧀 !

    var output = ""
    
    switch (layout) {
        case "Review":
            output = "⭐"
            break;
        case "Recipe":
            output = "🍽️"
            break;
        case "Blog":
            output = "✍️"
            break;
        default:
            output = "❓"
    }

    // console.log(`getFileType:${layout}|file:${file}|output:${output}`)

    return output
}

const output = `
---
/* generated code - do not change manually */
---
<div class="blogs__directory">
    Table of Contents
    ${interpretDirectory("", directoryToCheck)}
</div>
<style>
  .blogs__directory {
    margin: 5px 0 0 5px;
    width: 25%;
    height: 100vh;
    float: left;
    position: fixed;
    left: 0;
    top: 0;
    border-style: solid;
    border-color: var(--border);
    border-width: 0 1px 0 0;
    overflow-y: auto;
    z-index: 1000;
  }

  ul {
    margin-left: 16px;
    padding: 0;
  }

  li {
    display: list-item;
    list-style-position: inside;
    list-style-type: none;
  }

  li.active {
    background: var(--text);
    color: var(--background);
  }

</style>
<script>
  const { pathname } = window.location;
  const anchor = document.querySelector(\`a[href="\${pathname}"]\`)?.parentElement;

  if (anchor) {
    anchor.classList.add("active");
  }
</script>
`

fs.writeFile("./Blogs.astro", output, function (err) {
    if (err) {
        return console.log(err);
    }
});
