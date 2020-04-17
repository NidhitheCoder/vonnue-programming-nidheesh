const readline = require("readline-sync");

let limit = readline.question("enter the limit :");

const findSum = val => {
  let sum = 0;

  for (let i = 1; i <= val; i++) {
    sum += i;
  }
  
  return sum;
};

console.log(findSum(limit));
