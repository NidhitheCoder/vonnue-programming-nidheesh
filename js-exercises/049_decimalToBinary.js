const readline = require("readline-sync");

let decimal = readline.question("enter a decimal number :");

convertToBin = decimalNum => {
  let binary = 0,
    i = 1;

  while (decimalNum > 0) {
    binary = (decimalNum % 2) * i + binary;
    decimalNum = Math.floor(decimalNum / 2);
    i = i * 10;
  }
  return binary;
};

console.log(convertToBin(decimal));
