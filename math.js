// module.exports = (a,b) => {
//     return a + b
// }

// const add  = (a,b) => {
//     return a + b
// }
// const subtract = (a,b) => {
//     return a - b
// }
// // module.exports = add 
// /* Using third way to import multiple way
//   module using key- value  */
// module.exports = {
//     add,
//     subtract,
// };

// fourth way = best way
module.exports.add  = (a,b) => {
    return a + b
}
module.exports.subtract = (a,b) => {
    return a - b
}
//fifth way
exports.multiple = (a,b) => {
    return a * b;
}