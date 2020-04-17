const readline = require("readline-sync");

let number1 = parseInt(readline.question("enter value for A :"));
let number2 = parseInt(readline.question("enter value for B :"));
swap = (num1, num2) => {
  num1 = num1 + num2;
  num2 = num1 - num2;
  num1 = num1 - num2;
  return "A is now : " + num1 + "\nB is now : " + num2;
};

console.log(swap(number1, number2));
