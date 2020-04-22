const readline = require("readline-sync");

let octal = parseInt(readline.question("enter a octal number :"));

convertToDec = octalNum => {
  let num,
    decimal = 0,
    inc = 0;

  while (octalNum > 0) {
    num = octalNum % 10;
    decimal += num * Math.pow(8, inc);
    octalNum = Math.floor(octalNum / 10);
    inc++;
  }
  return decimal;
};

console.log(convertToDec(octal));
