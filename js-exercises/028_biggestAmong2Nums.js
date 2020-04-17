const readline = require("readline-sync");

var number1 = parseInt(readline.question(" enter first number :"));
var number2 = parseInt(readline.question(" enter first number :"));

const checkBiggest = (num1, num2) => {
  return num1 > num2
    ? num1 + " is biggest"
    : num1 < num2
    ? num2 + " is biggest"
    : "numbers are equal";
};

console.log(checkBiggest(number1, number2));
