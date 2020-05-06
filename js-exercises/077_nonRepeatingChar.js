const readline = require("readline-sync");
let string = readline.question("enter the string :");

findCount = (arr,i) => {
  let count = 0;
  for (let j = 0; j < arr.length; j++) {
    if (arr[i] === arr[j]) {
      count++;
    }
  }
  return count;
};

findNonRpeatingCharacters = str => {
  let arr = str.split(""),
    stringArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (findCount(arr,i) === 1) {
      stringArr.push(arr[i]);
    }
  }
  return stringArr;
};

console.log(findNonRpeatingCharacters(string));
