//program to findout longest palindrom in a string
const readline = require("readline-sync");
let stringVal = readline.question("enter a string value :");

checkPalindrome = val => {
  let rev = "";
  for (let i = val.length - 1; i >= 0; i--) {
    rev = rev + val[i];
  }

  if (val == rev) {
    return 1;
  }
  return 0;
};

findLongest = str => {
  let arr = str.split(" ");
  let len = 0,
    strNew;
  for (let i = 0; i < arr.length; i++) {
    if (checkPalindrome(arr[i]) === 1) {
      if (len < arr[i].length) {
        len = arr[i].length;
        strNew = arr[i];
      }
    }
  }

  return strNew;
};

console.log(findLongest(stringVal));
