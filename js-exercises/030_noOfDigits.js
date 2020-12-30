const readline = require("readline-sync");

let number = readline.question("enter a number :");

const countDigits = num => {
  let count = 1;

  while (num > 10) {
    count += 1;
    num = num / 10;
  }
  
  return count;
};

console.log(countDigits(number));
