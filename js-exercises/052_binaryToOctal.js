const readline = require("readline-sync");

let binary = readline.question("enter a binary number :");

convertBinToDec = binaryNum => {
  let num,
    decimal = 0,
    power = 1;

  while (binaryNum > 0) {
    num = binaryNum % 10;
    decimal = decimal + num * power;
    binaryNum = Math.floor(binaryNum / 10);
    power += power;
  }
  return decimal;
};

convertToOctal = binary => {
  let octal = 0,
    i = 1;
  let decimalNum = convertBinToDec(binary);

  while (decimalNum > 0) {
    octal += (decimalNum % 8) * i;
    decimalNum = Math.floor(decimalNum / 8);
    i = i * 10;
  }
  return octal;
};

console.log(convertToOctal(binary));
