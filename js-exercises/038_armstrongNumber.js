const readline = require("readline-sync");

let num = parseInt(readline.question("enter a number :"));

findCube = num => {
  return Math.pow(num, 3);
};

checkArmstrong = val => {
  let num,
    sum = 0,
    actualNum = val;

  while (val > 0) {
    num = val % 10;
    sum += findCube(num);
    val = Math.floor(val / 10);
  }

  if (sum === actualNum) {
    return "this is an Armstrong number";
  }
  return "this is not an Armstrong number";
};

console.log(checkArmstrong(num));
