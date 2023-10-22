const buffer = new Buffer.from("Mihir");

buffer.write("Jain"); 
console.log(buffer.toString());
console.log(buffer);
console.log(buffer.toJSON());