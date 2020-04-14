const readline = require("readline-sync");

let number = readline.question("Enter a number :");
sum = 0;
const findSum = (sum, num) => {
  for (let i = 1; i <= num; i++) {""
    sum += i;
  }
  return sum;
};
console.log(findSum(sum, number));
