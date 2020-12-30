const readline = require("readline-sync");
let number = parseInt(readline.question("enter a number :"));

getPrimeNumbers = num => {
  let arr = [];
  for (let i = 2; i <= num; i++) {
    let flag = true;
    let mid = Math.floor(i / 2) + 1;

    for (let j = 2; j <= mid; j++) {
      if (i % j === 0 && i !== 2) {
        flag = false;
      }
    }

    if (flag === true) {
      arr.push(i);
    }
  }
  return arr;
};

checkWithSum = number => {
  let primeArray = getPrimeNumbers(number);

  for (let j = 0; primeArray.length > j; j++) {
    for (let k = j + 1; primeArray.length > k; k++) {
      let sum = primeArray[j] + primeArray[k];

      if (sum === number) {
        return true;
      }
    }
  }

  return false;
};

console.log(checkWithSum(number));
