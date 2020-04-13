const readline = require("readline-sync");

let num = readline.question("Enter a number :");
sum = 0;

for (i = 1; i <= num; i++) {
  if (i % 3 == 0 || i % 5 == 0) {
    sum += i;
  }
}
console.log(sum);
