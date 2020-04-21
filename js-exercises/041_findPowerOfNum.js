const readline = require("readline-sync");

let num = readline.question("enter the number :");
let pow = readline.question("enter the power :");

const findPower = (number, power) => {
  return Math.pow(number, power);
};

console.log(findPower(num, pow));
