const readline = require("readline-sync");

let num = readline.question("enter a number :");

replaceDigit = val => {
  let num,
    newNumber = 0,
    i = 1;

  while (val > 0) {
    num = val % 10;
    
    if (num === 0) {
      newNumber = newNumber + i * 1;
    } else {
      newNumber = newNumber + num * i;
    }
    val = Math.floor(val / 10);
    i = i * 10;
  }
  return newNumber;
};

console.log(replaceDigit(num));
