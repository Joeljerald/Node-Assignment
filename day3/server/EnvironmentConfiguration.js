import dotenv from "dotenv";
import process from "process";

dotenv.config();

console.log(process.env.APP_NAME);
console.log(process.env.PORT);
console.log(process.env.AUTHOR);
console.log(process.env.DB_NAME);
console.log(process.version);
console.log(process.cwd());

