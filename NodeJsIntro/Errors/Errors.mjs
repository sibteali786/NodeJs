// import {readFile} from "fs";
import {readFile} from "fs/promises";

// readFile(new URL('./../modules/App/app.js',import.meta.url),'utf-8',(err,data)=>{
//     if(err){
//         // handle the error
//         // console.error(err);
//         throw err
//     } else {
//         // otheriwse if no error then handle the data
//         console.log("Succesfully Read the file");
//     }
// })


// asynchronous code 

// try {    
//     const result = await readFile(new URL('./../modules/App/app.js',import.meta.url),'utf-8')
// }catch (e) {
//     throw e
// }


// Another way
// const result = await readFile(new URL('./../modules/App/app.js',import.meta.url),'utf-8')
// .catch(e=>{
//     console.log(e);
// })


// Situation when code is not in our control like a condition where we are using some external library 
process.on("uncaughtException",(e)=>{
    console.log(e);
})

const result = await readFile(new URL('./../modules/App/app.js',import.meta.url),'utf-8')
console.log("Hello");