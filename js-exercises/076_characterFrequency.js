const readline = require("readline-sync");
let string = readline.question("enter the string :");

// this function helps to findout
// count of every character in given string
findCount = str => {
  let arr = str.split(""),
    stringArr = [],
    counter = [];
  for (let i = 0; i < arr.length; i++) {
    let count = 1;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] === arr[j]) {
        count++;
      }
    }
    if (stringArr.includes(arr[i]) === false) {
      stringArr.push(arr[i]);
      counter.push([arr[i], count]);
    }
  }
  return counter;
};

printCount = str => {
  let result = findCount(str);
  for (let i = 0; i < result.length; i++) {
    console.log(result[i][0] + " = " + result[i][1]);
  }
};

printCount(string);
