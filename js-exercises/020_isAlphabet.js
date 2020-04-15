const readline = require("readline-sync");

let char = readline.question("enter a value :");
const checkAlpha = letter => {
  let exp = /^[A-Za-z]+$/;
  if (letter.match(exp)) {
    return "it is an alphabet";
  } else {
    return "not an alphabet";
  }
};
console.log(checkAlpha(char));
