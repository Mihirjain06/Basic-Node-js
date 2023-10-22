//First Way
// const add = (a, b) => {
//     return a +  b;
// }
// export default add;

//Second way
// export default (a, b) => {
//   return a + b;
// };

//Third way
const add = (a, b) => {
  return a + b;
};
const subtract = (a, b) => {
    return a - b;
}

export default{
    add,
    subtract,
}