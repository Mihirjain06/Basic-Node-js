//node is optional in this require
const path = require("node:path");

// console.log(__filename);
// console.log(__dirname);
// //it will display the base name of the file and directory
// console.log(path.basename(__filename));
// console.log(path.basename(__dirname));
// //extension
// console.log(path.extname(__filename));
//  //parse 
// console.log(path.parse(__filename));
// //isabsolute
// console.log(path.isAbsolute(__filename));
// console.log(path.isAbsolute("./Cars.js"));
//Join
// console.log(path.join(__dirname, "data.json"));
//resolve
console.log(path.resolve(__dirname, "data.json"));
