const readline = require("readline-sync");

let number = readline.question("Enter a number :");

const sumWt3And5 = num => {
  let sum = 0;
  for (let i = 1; i <= num; i++) {
    if (i % 3 == 0 || i % 5 == 0) {
      sum += i;
    }
  }
  return sum;
};
console.log(sumWt3And5(number));
