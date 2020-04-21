const readline = require("readline-sync");

let num = readline.question("Enter a number :");

reverseNumber = number => {
  let reverse = 0;
  while (number > 0) {
    reverse = reverse * 10 + (number % 10);
    number = Math.floor(number / 10);
  }
  return reverse;
};

console.log(reverseNumber(num));
