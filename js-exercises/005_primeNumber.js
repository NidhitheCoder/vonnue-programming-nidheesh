const readline = require("readline-sync");
let num = readline.question("enter a positive number :");
const checkPrime = val => {
  if (val == 1) {
    return "it is not a prime number";
  }
  let flag = true;
  for (let i = val - 1; i > 1; i--) {
    if (val % i == 0) {
      flag = false;
    }
  }

  if (flag == true) {
    return "it is a prime number";
  }
  return "it is not a prime number";
};

console.log(checkPrime(num));
