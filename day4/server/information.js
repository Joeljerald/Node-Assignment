import os from "os";
import process from "process";

console.log(process.version);
console.log(process.cwd());

console.log(os.hostname());
console.log(os.platform());
console.log(os.arch());
console.log(os.cpus().length);
console.log(process.pid);

