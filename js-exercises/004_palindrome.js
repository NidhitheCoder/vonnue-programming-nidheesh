const readline = require("readline-sync");

let str = readline.question("enter a string :");

const checkPalindrome = val => {
  let rev = "";
  for (let i = val.length - 1; i >= 0; i--) {
    rev = rev + val[i];
  }

  if (val == rev) {
    return "this is a palindrome";
  }
  return "this is not a palindrome";
};

console.log(checkPalindrome(str));
