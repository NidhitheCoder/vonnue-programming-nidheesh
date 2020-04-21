const readline = require("readline-sync");

let num = parseInt(readline.question("enter a number here :"));

checkPerfectNumber = number => {
  let midValue = Math.floor(number / 2);
  let divSum = 0;

  for (let i = 1; i <= midValue; i++) {
    if (number % i === 0) {
      divSum += i;
    }
  }

  if (number === divSum) {
    return "this is a perfect number";
  }
  return "this is not a perfect number";
};

console.log(checkPerfectNumber(num));
