const readline = require("readline-sync");

let binary = readline.question("enter a binary number :");

convertToDec = binaryNum => {
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

console.log(convertToDec(binary));
