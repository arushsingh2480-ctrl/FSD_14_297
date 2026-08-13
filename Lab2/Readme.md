# File sys of NodeJs
it allows js code running outside the browser and interact directly to OS
# common opr on file/folder
Reading and writing files = readFile(), writeFile(), appendFile()
-Directory management = mkdir(), rmdir(), readdir()
-Metadata/information = stat(), lstat(), fstat()
-Watching foor changes = watch(), watchFile(), unwatchFile()
-Streaming Large Files = createReadStream(), createWriteStream()
-File Operations = rename(), truncate(), unlink(), link(), syslink()
# asynchronous = takes some time
# note: await can be used with any promise in async function. that async func will also be accessed by await keyword
# async ke andar await for calling again await