const readline = require("readline-sync");

let number = readline.question("enter a number :");

checkPower = num => {
  let result = 1;
  
  for (let i = 1; i <= num; i++) {
    result *= 3;
    if (result === num) {
      return "This number is power of 3 of " + i;
    }
  }

  return "This number is not a power of 3 of any number";
};

console.log(checkPower(number));
