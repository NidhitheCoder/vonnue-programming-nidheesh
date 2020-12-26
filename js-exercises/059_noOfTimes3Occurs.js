const readline = require("readline-sync");

let limit = readline.question("enter limit :");

countThree = limit => {
  let count = 0;
  for (let i = 3; i <= limit; i++) {
    let num = i,
      digit;

    while (num > 0) {
      digit = num % 10;
      if (digit === 3) {
        count++;
      }
      num = Math.floor(num / 10);
    }
  }
  return count;
};

console.log(countThree(limit));
