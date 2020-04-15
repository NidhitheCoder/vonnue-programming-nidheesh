const readline = require("readline-sync");

let number = readline.question("Enter a number :");

const findSum = num => {
  let sum = 0;
  for (let i = 1; i <= num; i++) {
    sum += i;
  }
  return sum;
};
console.log(findSum(number));
