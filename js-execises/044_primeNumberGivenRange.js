const readline = require("readline-sync");

let number1 = parseInt(readline.question("enter  starting number :"));
let number2 = parseInt(readline.question("enter  ending number :"));

printPrime = (num1, num2) => {
  let result = [];

  for (let i = num1; i <= num2; i++) {
    let flag = 0;
    let mid = Math.floor(i / 2);
    for (let j = 1; j <= mid; j++) {
      if (i % j === 0) {
        flag += 1;
      }
    }

    if (flag === 1) {
      result.push(i);
    }
  }
  return result;
};

console.log(printPrime(number1, number2));
