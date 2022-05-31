#! /usr/bin/env node
import fetch from "node-fetch";
import open from "open";
import yargs from 'yargs';

// Dealing the with flags passsed to the reddit command when we write it in browser
// console.log(process.argv)
const {argv} = yargs(process.argv)
const res = await fetch("https://reddit.com/.json")
const data = await res.json()
const children = data.data.children 
const randomPost = children[Math.floor(Math.random() * data.data.children.length)]
const link = `https://reddit.com${randomPost.data.permalink}` 
// console.log(data);

if (argv.print){
    console.log(`
        title : ${randomPost.data.title},
        link:${link}
    `);
}else {
    open(link)
}