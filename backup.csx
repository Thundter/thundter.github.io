
var inputDirectory = "C:\\TFS";
var rejectedDirectoryNames = new System.Collections.Generic.List<string> { ".vs", "obj", "bin", "packages", "TestResults" };
var rejectedFileExtensions = new System.Collections.Generic.List<string> { ".user", ".dll", ".exe" };

// copy contents to temp directory

var guidString = Guid.NewGuid().ToString().Replace("-", "").ToUpper();
var tempPath = System.IO.Path.Combine(System.IO.Path.GetTempPath(),guidString);  
var tempDestinationDirectory = System.IO.Path.Combine(tempPath,inputDirectory.Split('\\').Last());  

Console.WriteLine(tempDestinationDirectory);

ProcessDirectory(inputDirectory, tempDestinationDirectory);



public void ProcessDirectory(string sourceDirectory, string destinationDirectory)
{
    var sourceDirInfo = new System.IO.DirectoryInfo(sourceDirectory);

    // validation
    if (rejectedDirectoryNames.Contains(sourceDirInfo.Name)){ return; }

    // validation
    if (!System.IO.Directory.Exists(sourceDirectory)){ return; }

    // create destination directory if it doesn't exist
    if (!System.IO.Directory.Exists(destinationDirectory))
    {
        System.IO.Directory.CreateDirectory(destinationDirectory);
    } 

    // 
    Console.WriteLine($"Dir: {sourceDirectory} -> {destinationDirectory}");

    foreach (var directory in System.IO.Directory.GetDirectories(sourceDirectory))
    {
        ProcessDirectory(directory, System.IO.Path.Combine(destinationDirectory,directory.Split('\\').Last()));
    }

    foreach (var file in System.IO.Directory.GetFiles(sourceDirectory))
    {
        ProcessFile(file, System.IO.Path.Combine(destinationDirectory,file.Split('\\').Last()));
    }
}


public void ProcessFile(string sourceFile, string destinationFile)
{
    var fileInfo = new System.IO.FileInfo(sourceFile);

    if (rejectedFileExtensions.Contains(fileInfo.Extension)){
        return;
    }

    if (!System.IO.File.Exists(destinationFile))
    {
        System.IO.File.Copy(sourceFile, destinationFile, true);
    } 

    Console.WriteLine($"    File: {sourceFile} -> {destinationFile}");
}
