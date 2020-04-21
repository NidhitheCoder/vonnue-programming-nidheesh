const readline = require("readline-sync");

let start = parseInt(readline.question("enter the starting point:"));
let stop = parseInt(readline.question("enter the ending point :"));

const findSumByRange = (start, stop) => {
  let sum = 0;
  for (let i = start; i <= stop; i++) {
    sum += i;
  }
  return sum;
};

console.log(findSumByRange(start, stop));
