const readline = require("readline-sync");

let sum = 0;
const elementSum = str => {
  str.split(",").map(el => {
    sum = sum + parseInt(el);
  });
  console.log(sum);
};

let str = readline.question("Enter array decimal elements separated by comma:");
elementSum(str);
