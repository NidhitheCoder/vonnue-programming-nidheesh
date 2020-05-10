const readline = require("readline-sync");
let val = readline.question("Enter a number as string :");

atoi = val => {
  // val= parseInt(val)
  if (val / 1 > 0) {
    let sum = 0,
      count = 1;
    while (val > 0) {
      let rem = val % 10;
      val = Math.floor(val / 10);
      sum = sum + rem * count;
      count *= 10;
    }
    return sum;
  } else if (val / 1 < 0) {
    return "You entered a negative number";
  } else return val / 1;
};

console.log(atoi(val));