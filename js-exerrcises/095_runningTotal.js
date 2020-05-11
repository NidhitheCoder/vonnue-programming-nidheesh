const readline = require("readline-sync");
let limit = readline.question("enter limit :");

findTotal = limit => {
  let count = 0,
    sum = 0;
  while (count <= limit) {
    sum += count;
    console.log(count + " " + sum);
    count++;
  }
};

findTotal(limit);
