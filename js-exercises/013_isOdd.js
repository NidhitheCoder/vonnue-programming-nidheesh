const readline = require("readline-sync");

let number = readline.question("enter a positive number :");

checkOdd = num => {
  if (num % 2 !== 0) {
    return "this is an odd number";
  } else {
    return "this this is an even number";
  }
};

console.log(checkOdd(number));
