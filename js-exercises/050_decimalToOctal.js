const readline = require("readline-sync");

let decimal = readline.question("enter a decimal number :");

convertToOctal = decimalNum => {
  let octal = 0,
    i = 1;

  while (decimalNum > 0) {
    octal = octal + (decimalNum % 8) * i;
    decimalNum = Math.floor(decimalNum / 8);
    i = i * 10;
  }

  return octal;
};

console.log(convertToOctal(decimal));
