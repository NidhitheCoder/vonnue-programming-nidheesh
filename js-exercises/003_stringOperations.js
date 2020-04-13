// npm install readline-sync  --> for getting iput from terminal

const readline = require("readline-sync");

const reverseStr = str => {
  return str
    .split("")
    .reverse()
    .join("");
};

const MixLetters = (str1, str2) => {
  const len = str1.length > str2.length ? str1.length : str2.length;
  let combine = "";
  for (i = 0; len > i; i++) {
    if (str1[i] == undefined) {
      combine = combine + str2[i];
    } else if (str2[i] == undefined) {
      combine = combine + str1[i];
    } else {
      combine = combine + str1[i] + str2[i];
    }
  }
  return combine;
};

const removeWhiteSpace = val => {
  for (i = 0; val.length > i; i++) {
    if (val[i] == " ") {
      val = val.replace(" ", "");
    }
  }
  return val;
};

let firstString = readline.question("enter first string :");
let secondString = readline.question("enter second string :");

console.log("\nconcatenate : " + firstString.concat(secondString));
console.log("\nreverse first string: " + reverseStr(firstString));
console.log("\nreverse second string : " + reverseStr(secondString));
console.log(
  "\nreverse concatenate : " +
    reverseStr(firstString).concat(reverseStr(secondString))
);
console.log("\nmixletters : " + MixLetters(firstString, secondString));
console.log("\nremove whitespaces 1st: " + removeWhiteSpace(firstString));
console.log("\nremove whitespaces 2nd: " + removeWhiteSpace(secondString));
