const fs = require("node:fs");
   
const readableStream = fs.createReadStream("./file.txt",{
    encoding:"utf-8",
    highWaterMark:3,
});
const writeableStream = fs.createWriteStream("./file2.txt");

// //event emitter using
// readableStream.on("data",(chunkofdata) =>{
//     console.log(chunkofdata);
//     writeableStream.write(chunkofdata) ;
// });


//using pipe method to write data to another stream
readableStream.pipe(writeableStream);