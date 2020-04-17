const readline = require("readline-sync");

let num = readline.question("enter a number :");

check = number => {
  if (number > 0) {
    return "this number is a positive";
  } else if (number < 0) {
    return "this number is negative";
  } else {
    return "zero";
  }
};

console.log(check(num));
