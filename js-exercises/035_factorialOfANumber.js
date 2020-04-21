const readline = require("readline-sync");

let number = readline.question("Enter a number :");

const factorial = num => {
  let product = 1;
  for (let i = 1; i <= num; i++) {
    product *= i;
  }
  return product;
};

console.log(factorial(number));
