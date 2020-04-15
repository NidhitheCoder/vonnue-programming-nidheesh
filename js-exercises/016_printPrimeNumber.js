const readline = require("readline-sync");
let number = readline.question("enter a number :");
const printPrime = num => {
  for (let i = 2; i <= num; i++) {
    let flag = true;
    let mid = Math.floor(i / 2) + 1;
    for (let j = 2; j <= mid; j++) {
      if (i % j == 0 && i != 2) {
        flag = false;
      }
    }
    if (flag == true) {
      console.log(i);
    }
  }
};
printPrime(number);
