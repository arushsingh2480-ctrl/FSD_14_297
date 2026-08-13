import { writeFile, readFile, appendFile } from "fs/promises";

//await writeFile("stud.txt", "Ravikant Singh\nRoll no:82");
//console.log("File written");

//const data =  await readFile("stud.txt", "utf-8");
//console.log(`file contents: ${data}`);//synchronous not called OS by using await becomes asyn

const addContent = async(fname,content)=>{
    await writeFile("notes.txt","fs is easy")
    console.log("added sucess")
}

const readContent =async(fname)=>{
    const data = await readFile(fname,'utf-8');
    return data;
};

const appendData = async (fname,content)=>{
    await appendFile(fname,"\n"+content);
    console.log("data appended");
};

await addContent('notes.txt',"fs is easy in js");
console.log("Contents\n",await readContent("notes.txt"));
await appendData('notes.txt',"it can add", "read and update content")
console.log("Updatd Contents\n", await readContent("note.txt"));
