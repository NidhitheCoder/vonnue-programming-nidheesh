// How to find the first non repeated character of a given String?
const readline = require("readline-sync");
let str = readline.question("enter a string :");

check = str => {
  let alphabet = "no non repeate character";
  let arr = str.split("");
  for (let i = arr.length - 1; i >= 0; i--) {
    let count = 0;
    for (let j = 0; j <= arr.length; j++) {
      if (j !== i && arr[i] === arr[j]) {
        count = count + 1;
      }
    }
    if (count === 0) {
      alphabet = arr[i];
    }
  }
  return alphabet;
};

console.log(check(str));
