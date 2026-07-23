import fs from "fs";
import path from "path";

const projectPath = process.cwd();

const folders = [
    path.join(projectPath, "public"),
    path.join(projectPath, "public", "css"),
    path.join(projectPath, "public", "js"),
    path.join(projectPath, "public", "images"),
    path.join(projectPath, "uploads"),
    path.join(projectPath, "uploads", "documents"),
    path.join(projectPath, "uploads", "videos"),
    path.join(projectPath, "config"),
    path.join(projectPath, "logs")
];


folders.forEach((folder) => {
    fs.mkdir(folder, { recursive: true }, (err) => {
        if (err) {
            console.log(err);
        } else {
            console.log("Folder Created:", folder);
        }
    });
});