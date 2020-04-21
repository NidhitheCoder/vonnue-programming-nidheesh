const readline = require("readline-sync");

let num = parseInt(readline.question("enter a number :"));

const findProduct = num => {
  let product = 1;
  for (i = 1; i <= num; i++) {
    product *= i;
  }
  return product;
};

const check = val => {
  let num,
    sum = 0,
    actualNum = val;
  while (val > 0) {
    num = val % 10;
    sum += findProduct(num);
    val = Math.floor(val / 10);
  }

  if (sum === actualNum) {
    return "this is a strong number";
  }
  return "this is not a strong number";
};

console.log(check(num));
