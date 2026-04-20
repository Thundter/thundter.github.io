# Replaces Blogs.astro with an updated version
from pathlib import Path
import os

directoryToCheck="../pages/blogs"
#│├└📁ыR

def interpretDirectory(spacer, directory):
    directoryParts=directory.replace(directoryToCheck, "").replace("\\", "/").strip("/").split("/")
    directoryName=directoryParts[-1]
    # print("directoryName: ", directory, directoryName)

    content=""
    for path, dirs, files in os.walk(directory):
        dirs.sort()
        files.sort()
        directoryDifference=path.replace(directory,"").strip("\\").strip("/")
        # print("compare:", path, directory, path == directory, directoryDifference)
        if directoryDifference == "": # fix subdirectories
            for file in files:
                if file.endswith(".md") | file.endswith(".mdx"):
                    fullFilePath=(directory + "/" + file).replace("//", "/")
                    # print("file:", fullFilePath)
                    content+=interpretFile(spacer + "   ", fullFilePath)
        elif len(directoryDifference.replace("\\", "/").split("/")) == 1:
            content+=interpretDirectory(spacer + "   ", path)
        # else:
        #     print("directoryDifference:", directoryDifference)

    nbsp=""
    for item in range(len(directoryParts)-1):
        nbsp+="&nbsp;&nbsp;&nbsp;"

    if directoryName=="":
        directoryIcon=""
    else:
        directoryIcon="📁 "

    return f"""
    {spacer}<li class="blogs__list__item">
    {spacer}  {nbsp}{directoryIcon}{directoryName.title()}
    {spacer}  <ul class="blogs__directory__ul">
    {spacer}    {content}
    {spacer}  </ul>
    {spacer}</li>"""

def interpretFile(spacer, file):
    # print("interpretFile(", spacer, file,")") 
    if not Path(file).is_relative_to(directoryToCheck):
        raise ValueError(f"{file} is not in {directoryToCheck}")

    filename = os.path.basename(file)

    if filename.startswith("_"):
        return ""

    relativePath=file.replace(directoryToCheck, "").replace("\\", "/").strip("/")
    relativePath=relativePath.removesuffix(".md").removesuffix(".mdx")
    pathParts=relativePath.split("/")
    className="__".join(pathParts)
    className=f"blogs__{className}".replace("____","__")
    title=getTitle(file).title()
    fileType=getFileType(file)

    nbsp="&nbsp;&nbsp;"
    for item in range(len(pathParts)-2):
        nbsp+="&nbsp;&nbsp;&nbsp;"

    return f"""
    {spacer}<li class="blogs__list__item">
    {spacer}  {nbsp}{fileType}
    {spacer}  <a href={{`/blogs/{relativePath}`}} class="{className}">
    {spacer}    {title}
    {spacer}  </a>
    {spacer}</li>"""

def getTitle(file):
    my_file = open(file,'r')
    lineContent=my_file.readline()
    lineContent=lineContent.strip()
    # print("getTitle:", file, lineContent) 
    if lineContent == "---":
        output=""
        while True:
            lineContent=my_file.readline()
            lineContent=lineContent.strip()
            # print("getTitle lineContent:", lineContent)
            if lineContent == "---":
                # no title found, returning filename
                output, extension = os.path.splitext(file)
                output = output.replace("\\", "/").replace("-"," ").split("/")[-1]
                break
            elif lineContent.startswith("title:"):
                # title found, returning remaining value
                lineContent=lineContent.replace("title:", "")
                output=lineContent.strip().strip("\"")
                break
            else:
                continue    
        my_file.close()
        # print("getTitle:=", output)
        return output
    else:
        my_file.close()
        output, extension = os.path.splitext(file)
        return output.replace("\\", "/").split("/")[-1]

def getFileType(file):
    my_file = open(file,'r')
    lineContent=my_file.readline()
    lineContent=lineContent.strip()
    # print("getFileType:", file, lineContent) 
    if lineContent == "---":
        output=""
        while True:
            lineContent=my_file.readline()
            lineContent=lineContent.strip()
            # print("getFileType:", lineContent) 
            if lineContent == "---":
                # no recommend found, returning ы
                output="ы"
                break
            elif lineContent.startswith("recommend:"):
                # recommend found, returning R
                output="R"
                break
            else:
                continue
        my_file.close()
        return output
    else:
        my_file.close()
        return "ы"

# delete previous file
if os.path.exists("Blogs.astro"):
    os.remove("Blogs.astro")

# write file
with open("Blogs.astro", "w", encoding="utf-8") as f:
    f.write(f"""---
/* generated code - do not change manually */
---

<div class="blogs__directory">
    Table of Contents{interpretDirectory("", directoryToCheck)}
</div>
<style>
  .blogs__directory {{
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
  }}

  ul {{
    margin: 0;
    padding: 0;
  }}

  li {{
    display: list-item;
    list-style-position: inside;
    list-style-type: none;
  }}

  li.active {{
    background: var(--text);
    color: var(--background);
  }}

</style>
<script>
  const {{ pathname }} = window.location;
  const activeNavigationElement = document.querySelector(
    `nav a[href="${{pathname}}"]`
  );

  if (activeNavigationElement) {{
    activeNavigationElement.classList.add("active");
  }}
</script>
    """)
