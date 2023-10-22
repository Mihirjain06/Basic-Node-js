const { error } = require("node:console");
const fs = require("node:fs/promises");

console.log("First"); 
fs.readFile("file.txt", "utf-8")
  .then((data) => console.log(data))
  .catch((error) => console.log(error));


async function readFile() {
    try {
        const data = await fs.readFile("file.txt","utf-8");
        console.log(data);
    }catch(err){
        console.log(err);
    }

}
readFile();



// const fs = require("node:fs");

// console.log("First");
// const filecontents = fs.readFileSync("./file.txt", "utf-8");
// console.log(filecontents);

// //UTF-8 encodes a character into a binary string of one, two, three, or four bytes
// //using callbacks function
// fs.readFile("./file.txt", "utf-8", (error, data) => {
//   if (error) {
//     console.log(error);
//   } else {
//     console.log(data);
//   }
// });

// console.log("Second");
// //path of the file, contents of the file instead of overiding
// fs.writeFileSync("./greet.txt", "Hello Mr.Mihir!");

// //async method here a is appned the pervious file contents
// fs.writeFile("./greet.txt", " Hello Mihir Jain!",{flag:"a"}, (err) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log("File Has Been Written");
//   }
// });
