const readline = require("readline-sync");

let num = readline.question("Enter limit :");

const generateSeries = limit => {
  let sum = 0,
    digit = 1,
    swaper,
    result = [];

  while (sum <= limit) {
    swaper = sum;
    result.push(sum);
    sum  += digit;
    digit = swaper;
  }

  return result;
};

console.log(generateSeries(num));
