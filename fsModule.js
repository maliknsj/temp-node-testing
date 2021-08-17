const fs = require("fs")

const readFile = fs.readFileSync("./textfiles/test.txt", "utf8");
console.log(readFile);
const writeFile = fs.writeFileSync("./textfiles/writtenFile.txt", "Jaleel is trying to write in this file... As you are reading it, it means he was successful", { flag: "a" });