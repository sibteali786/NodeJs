// import fs from 'fs'; 
import {readFile, writeFile} from "fs/promises";
// console.log(fs);
import path from "path";
// const template = await readFile(path.join(__dirname,'template.html'))   // The common js method OR Old way
console.log(import.meta.url);   // Absolute path to index.mjs 

// Without any encoding 

// const template = await readFile(new URL('template.html',import.meta.url))
// console.log(template);
// console.log(template.toString());

// with encoding

let template = await readFile(new URL('template.html',import.meta.url),'utf-8')
console.log(template);

const data = {
     title:"Learn Node.js",
     body:"This is final Html"
}

// replacing the body and title
// Object.entries(data) returns an array of key value pairs
for (const [k,v] of Object.entries(data)) {
    template = template.replace(`{${k}}`,v)
}

console.log(template);

await writeFile(new URL('index.html',import.meta.url),template) // second argument is the file we want to write
