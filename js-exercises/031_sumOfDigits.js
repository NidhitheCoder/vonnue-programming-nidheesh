const readline = require("readline-sync");

let num = parseInt(readline.question("enter a number :"));

const sumDigits = val => {
  let sum = 0;

  while (val > 0) {
    let digit = Math.floor(val % 10);
    sum += digit;
    val = val / 10;
  }

  return sum;
};

console.log(sumDigits(num));
