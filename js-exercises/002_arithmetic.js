// npm install readline-sync  --> for getting iput from terminal

const readline = require("readline-sync");

const add = (num1, num2) => {
  return parseInt(num1) + parseInt(num2);
};

const substract = (num1, num2) => {
  return num1 - num2;
};

const divide = (num1, num2) => {
  return num1 / num2;
};

const multiply = (num1, num2) => {
  return num1 * num2;
};

const modulas = (num1, num2) => {
  return num1 % num2;
};

const greaterthan = (num1, num2) => {
  return num1 > num2;
};

const lessthan = (num1, num2) => {
  return num1 < num2;
};

const isEqual = (num1, num2) => {
  return num1 === num2;
};

let number1 = readline.question("enter first Number :");
let number2 = readline.question("Enter second Number :");

console.log("added");
console.log(add(number1, number2));
console.log("\ndivide :");
console.log(divide(number1, number2));
console.log("\nmultiplication :");
console.log(multiply(number1, number2));
console.log("\nsubstract :");
console.log(substract(number1, number2));
console.log("\nmodulas :");
console.log(modulas(number1, number2));
console.log("\ncheck first number is graterthan second number :");
console.log(greaterthan(number1, number2));
console.log("\ncheck first number is lessthan second number :");
console.log(lessthan(number1, number2));
console.log("\ncheck first number is equal to second number :");
console.log(isEqual(number1, number2));
