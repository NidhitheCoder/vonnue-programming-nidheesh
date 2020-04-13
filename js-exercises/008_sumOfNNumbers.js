const readline = require("readline-sync");

let num = readline.question("Enter a number :");
sum = 0;

for (i = 1; i <= num; i++) {
  sum += i;
}
console.log(sum);
