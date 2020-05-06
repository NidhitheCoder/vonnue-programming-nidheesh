const readline = require("readline-sync");
let string = readline.question("enter the string :");

findCount = str => {
  let arr = str.split(""),
    stringArr = [];
  for (let i = 0; i < arr.length; i++) {
    let count = 0;
    for (let j = 0; j < arr.length; j++) {
      if (arr[i] === arr[j]) {
        count++;
      }
    }
    if (count === 1) {
      stringArr.push(arr[i]);
    }
  }
  return stringArr;
};

console.log(findCount(string));
