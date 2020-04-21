const readline = require("readline-sync");

let num1 = parseInt(readline.question("enter first number :"));
let num2 = parseInt(readline.question("enter second number :"));

findLcm = (number1, number2) => {
  let limit = number1 * number2;
  let smaller = number1 <= number2 ? number1 : number2;

  for (let i = smaller; i <= limit; i++) {
    if (i % number1 === 0 && i % number2 === 0) {
      return i;
    }
  }
  
};

console.log(findLcm(num1, num2));
