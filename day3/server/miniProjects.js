import fs from "fs";
import path from "path";
import os from "os";
import process from "process";
import dotenv from "dotenv";

dotenv.config();



console.log(process.env.APP_NAME1);
console.log(process.env.PORT);
console.log(process.env.AUTHOR);


console.log(os.hostname());
console.log(os.platform());
console.log(process.version);
console.log(process.cwd());



const reportsFolder = path.join(process.cwd(), "storage", "reports");
const backupFolder = path.join(process.cwd(), "storage", "backup");
const imagesFolder = path.join(process.cwd(), "uploads", "images");
const documentsFolder = path.join(process.cwd(), "uploads", "documents");



fs.mkdir(reportsFolder, { recursive: true }, (err) => {
    if (err) return console.log(err);
    console.log("Reports folder created.");
})

fs.mkdir(backupFolder, { recursive: true }, (err) => {
    if (err) return console.log(err);
    console.log("Backup folder created.");
})

fs.mkdir(imagesFolder, { recursive: true }, (err) => {
    if (err) return console.log(err);
    console.log("Images folder created.");
})

fs.mkdir(documentsFolder, { recursive: true }, (err) => {
    if (err) return console.log(err);
    console.log("Documents folder created.")


    const reportFile = path.join(reportsFolder, "report.txt");

    fs.writeFile(reportFile, "Node.js Day 3 Assignment", (err) => {
        if (err) {
            return console.log(err);
        }

        console.log("report.txt created.");

        fs.readFile(reportFile, "utf-8", (err, data) => {
            if (err) {
                return console.log(err);
            }

            console.log("\nReport Content:");
            console.log(data);


            const renamedFile = path.join(reportsFolder, "daily-report.txt");

            fs.rename(reportFile, renamedFile, (err) => {
                if (err){
                    return console.log(err);
                } 

                console.log("File renamed.");

                

                const backupFile = path.join(backupFolder, "daily-report.txt");

                fs.copyFile(renamedFile, backupFile, (err) => {
                    if (err){
                        return console.log(err);
                    } 

                    console.log("File copied to backup.");

                    fs.unlink(renamedFile, (err) => {
                        if (err) return console.log(err);

                        console.log("Original file deleted.");
                    })
                })
            })
        })
    })
})