const readline = require("readline-sync");

let number = readline.question("enter a number :");

printPrime = num => {
  let result = [];
  for (let i = 2; i <= num; i++) {
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

console.log(printPrime(number));
