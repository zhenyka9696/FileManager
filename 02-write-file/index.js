const prompt = require("prompt-sync")();
let input= prompt("Type your input");
//console.log(name);
require("fs").writeFileSync("index.txt",input);