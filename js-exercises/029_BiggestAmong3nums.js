const readline = require("readline-sync");

let number1 = parseInt(readline.question("Enter first number :"));
let number2 = parseInt(readline.question("Enter second number :"));
let number3 = parseInt(readline.question("Enter third number :"));

const biggest = (num1, num2, num3) => {
  return num1 > num2
    ? num1 > num3
      ? num1 + " is the biggest"
      : num3 + " is the biggest"
    : num2 > num3
    ? num2 + " is the biggest"
    : num3 + " is the biggest";
};

console.log(biggest(number1, number2, number3));
