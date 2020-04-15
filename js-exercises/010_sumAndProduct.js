const readline = require("readline-sync");

let number = readline.question("Enter a number :");
let option = readline.question("Enter sum for sum,product for product :");

const findSum = num => {
  let sum = 0;
  for (let i = 1; i <= num; i++) {
    sum += i;
  }
  return sum;
};

const findProduct = num => {
  let product = 1;
  for (let i = 1; i <= num; i++) {
    product *= i;
  }
  return product;
};

if (option.toUpperCase() == "SUM") {
  console.log(findSum(number));
} else if (option.toUpperCase() == "PRODUCT") {
  console.log(findProduct(number));
} else {
  console.log(" wrong option");
}
