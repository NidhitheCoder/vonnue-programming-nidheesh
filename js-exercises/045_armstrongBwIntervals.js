const readline = require("readline-sync");

let startingValue = parseInt(readline.question("enter a starting number :"));
let endingValue = parseInt(readline.question("enter an ending  number :"));

findCube = num => {
  return Math.pow(num, 3);
};

returnSum = val => {
  let num,
    sum = 0;

  while (val > 0) {
    num = val % 10;
    sum += findCube(num);
    val = Math.floor(val / 10);
  }
  return sum;
};

printArmstrong = (start, end) => {
  let result = [];
  for (let i = start; i <= end; i++) {
    if (i === returnSum(i)) {
      result.push(i);
    }
  }
  return result;
};

console.log(printArmstrong(startingValue, endingValue));
