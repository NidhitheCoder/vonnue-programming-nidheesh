const readline = require("readline-sync");

let num = parseInt(readline.question("enter a limit : "));

findDivisors = number => {
  let midValue = Math.floor(number / 2);
  let arr = [number];

  for (let i = 1; i <= midValue; i++) {
    if (number % i === 0) {
      arr.push(i);
    }
  }
  return arr;
};

findNumbers = num => {
  let result = [];
  for (let i = 10; i <= num; i++) {
    let arrDivisors = findDivisors(i);

    if (arrDivisors.length === 9) {
      result.push(i);
    } 
  }
  return result;
};

console.log(findNumbers(num));
