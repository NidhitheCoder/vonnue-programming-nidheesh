const readline = require("readline-sync");

let arr = [];
let result = [];
arr = readline.question("Enter array decimal elements separated by comma:");

let constant = readline.question("Enter constant value :");

result = arr.split(",").map(el => {
  return constant * parseInt(el);
});
console.log(result);
