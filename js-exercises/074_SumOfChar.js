const readline = require("readline-sync");
let str = readline.question("enter the string :");

countSumOfNum = str => {
  let arr = str.split(""),
    sum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] / 1 >= 0) sum += parseInt(arr[i]);
  }
  return sum;
};

console.log(countSumOfNum(str));
