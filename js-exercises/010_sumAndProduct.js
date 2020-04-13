const readline = require("readline-sync");

let num = readline.question("Enter a number :");
let option = readline.question("Enter sum for sum,product for product :");

let sum = 0,
  product = 1;
if (option.toUpperCase() == "SUM") {
  for (i = 1; i <= num; i++) {
    sum += i;
  }
  console.log(sum);
} else if (option.toUpperCase() == "PRODUCT") {
  for (i = 1; i <= num; i++) {
    product *= i;
  }
  console.log(product);
} else {
  console.log(" wrong option");
}
