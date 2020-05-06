// remove non-string
const readline = require("readline-sync");
let str = readline.question("enter the string :");

removeNonString = str => {
  let arr = str.split(""),
    newStr = "";
  for (let i = 0; i < arr.length; i++) {
    let val = arr[i];
    let exp = /^[A-Za-z]+$/;
    if (val.match(exp)) {
      newStr += arr[i];
    }
  }
  return newStr;
};

console.log(removeNonString(str));
