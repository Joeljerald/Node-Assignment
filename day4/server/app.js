import http, { createServer } from 'http'
import dotenv from 'dotenv'
import path from 'path'
import fs from 'fs'

const app=createServer();
dotenv.config();

const port=process.env.PORT || 3000;

app.listen(port,()=>{
    console.log(`The server is running on http://localhost:${port}`);
})

const folderPath=path.join(process.cwd(),"students")
fs.mkdir(folderPath,{recursive:true},(e)=>{
    if(e){
        console.log(e);
    }
    else{
        console.log("Folder Successfully Created ");
        
    }

    const filePath=path.join(folderPath,"students.txt")
    const student="Joel,\nDarvin,\nGodson,\nJamie,\nAmalan"

    fs.writeFile(filePath, student, (e) => {
    if (e) {
        console.log(e);
    } else {
        console.log("Student Entered Successfully");
    }
})

    const renamedFile = path.join(folderPath, "StudentsData.txt");



    setTimeout(()=>{
        fs.readFile(filePath,"utf-8",(e,d)=>{
        if(e){
            console.log(e);
        }
        else{
            console.log(d);
            
        }
    })

    setTimeout(()=>{
        fs.appendFile(filePath,"\nHakkim",(e)=>{
        if(e){
            console.log(e);            
        }
        else{
            console.log("New Student Data added successfully ");
            fs.readFile(filePath, "utf-8", (e, data) => {
            if (e) {
                console.log(e);
            } else {
                console.log(data);
            }
        })
        }
    })
    },2000)

    setTimeout(()=>{
        fs.rename(filePath,renamedFile,(e)=>{
        if(e){
            console.log(e);
        }
        else{
            console.log("File Renamed Successfully");
        }
    })
    },3000)

    setTimeout(()=>{
        fs.unlink(renamedFile,(e)=>{
        if(e){
            console.log(e);
        }
        else{
            console.log("Student Data Deleted Successfully");
            
        }
    })
    },7000)
    },5000)

})


