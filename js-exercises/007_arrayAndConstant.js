const readline = require("readline-sync");

let arr = [];
let result = [];
arr = readline.question("Enter array decimal elements separated by comma:");

let constant = readline.question("Enter constant value :");
const addConstant = (arr, constant) => {
  result = arr.split(",").map(el => {
    return constant * parseInt(el);
  });
  return result;
};
console.log(addConstant(arr, constant));
