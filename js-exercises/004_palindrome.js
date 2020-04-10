var readline = require("readline-sync");
var str = readline.question("enter a string :");

function checkPalindrome(val) {

  let rev = "";
  for (i = val.length - 1; i >= 0; i--) {
    rev = rev + val[i];
  }

  if (val == rev) {
    return "this is a palindrome";
  }
  return "this is not a palindrome";
}
console.log(checkPalindrome(str));
