const readline = require("readline-sync");

let val = readline.question("enter a character :");

getAscii = value => {
  return value.charCodeAt();
};

console.log(getAscii(val));
