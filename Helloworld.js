// require("./add")
// require("./iife")
// const cars = require("./Cars");
// console.log(cars.getname());
// cars.setname("Volvo");
// console.log(cars.getname());

// const add = require("./math")
// console.log(add(5,5));
 //third way
const math = require("./math");
// console.log(math.add(3,4));
// console.log(math.subtract(2,4));

const { add, subtract , multiple} = math;
console.log(math.add(3,4));
console.log(math.subtract(2,4));
console.log(math.multiple(3,4));

 