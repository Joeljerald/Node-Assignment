import http, { createServer } from 'http'
import dotenv from 'dotenv'
import os from 'os'
import process from 'process'
import fs from 'fs'
import path from 'path'

dotenv.config();
const app=createServer();

const port =process.env.PORT || 3000;

app.listen(port,()=>{
    console.log(`Server running on the http://localhost:${port}`);
})

console.log(os.hostname());
console.log(os.platform());
console.log(os.arch());
console.log(os.cpus());
console.log(os.totalmem());
console.log(os.freemem());


console.log(process.version);
console.log(process.cwd);
console.log(process.platform);
console.log(process.argv);
console.log(process.env);

const folderPath=path.join(process.cwd(),"uploads","images","videos","documents")

fs.mkdir(folderPath,{recursive:true},(e)=>{
    if(e){
        console.log(e);   
    }
    else{
        console.log("Folder is Created");
    }

    const filePath=path.join(folderPath,"data.txt")

    fs.writeFile(filePath,"This the Day3 assignment in Node",(e)=>{
        if(e){
            console.log(e);
        }
        else{
            console.log("Written Successfully");
            
        }
    })
    
    fs.readFile(filePath,"utf-8",(e,d)=>{
        if(e){
            console.log(e);  
        }
        else{
            console.log(d);
            
        }
    })
})

const relativePath = "./public/images/logo.png";
const absolutePath = path.resolve(relativePath);

console.log("Relative Path:", relativePath);
console.log("Absolute Path:", absolutePath);








