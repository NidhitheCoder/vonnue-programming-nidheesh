const readline = require("readline-sync");

let number1 = parseInt(readline.question("enter the first number : "));
let number2 = parseInt(readline.question("enter the second number : "));

findFactors = num => {
  let arrFactors = [num];
  for (let i = Math.floor(num / 2); i > 0; i--) {
    if (num % i === 0) {
      arrFactors.push(i);
    }
  }
  return arrFactors;
};

findGcd = (num1, num2) => {
  let num1Fact, num2Fact;
  num1Fact = findFactors(num1);
  num2Fact = findFactors(num2);

  for (let j = 0; j <= num1Fact.length - 1; j++) {
    for (let k = 0; k <= num2Fact.length - 1; k++) {
      if (num1Fact[j] === num2Fact[k]) {
        return num1Fact[j];
      }
    }
  }
};
console.log(findGcd(number1, number2));
