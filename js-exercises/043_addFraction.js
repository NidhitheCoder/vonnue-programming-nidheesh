const readline = require("readline-sync");

let numerator1 = readline.question("enter the first numerator :");
let denominator1 = readline.question("enter the first denominator :");
let numerator2 = readline.question("enter the second numarator :");
let denominator2 = readline.question("enter the second denominator :");

findCommonDivider = (number1, number2) => {
  let limit = number1 >= number2 ? number1 : number2;

  for (let i = limit; i >= 2; i--) {
    if (number1 % i === 0 && number2 % i === 0) {
      return [Math.floor(number1 / i), Math.floor(number2 / i)];
    }
  }
  return [number1, number2];
};

addFractions = (num1, deno1, num2, deno2) => {
  let newdeno = deno1 * deno2;
  let newNum = num1 * deno2 + num2 * deno1;
  let commonDivider = findCommonDivider(newNum, newdeno);

  return (
    num1 +
    "/" +
    deno1 +
    " + " +
    num2 +
    "/" +
    deno2 +
    " = " +
    commonDivider[0] +
    "/" +
    commonDivider[1]
  );
};

console.log(addFractions(numerator1, denominator1, numerator2, denominator2));
