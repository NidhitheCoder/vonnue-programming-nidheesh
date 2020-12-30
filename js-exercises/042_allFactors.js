const readline = require("readline-sync");

let num = parseInt(readline.question("enter a number : "));

findFactors = number => {
  let midValue = Math.floor(number / 2);
  let arrFactors = [number];

  for (let i = 1; i <= midValue; i++) {
    if (number % i === 0) {
      arrFactors.push(i);
    }
  }

  return arrFactors;
};

console.log(findFactors(num));
