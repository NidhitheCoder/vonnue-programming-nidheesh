const readline = require("readline-sync");
let str = readline.question("enter the string :");

removeSpace = str => {
  let arr = str.split(""),
    newStr = "";
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== " ") {
      newStr += arr[i];
    }
  }
  return newStr;
};

console.log(removespace(str));
