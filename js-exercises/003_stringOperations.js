// npm install readline-sync  --> for getting iput from terminal

const readline = require("readline-sync");

const reverseStr = str => {
  return str
    .split("")
    .reverse()
    .join("");
};

const mixLetters = (str1, str2) => {
  let len = str1.length > str2.length ? str1.length : str2.length;
  let combine = "";
  for (let i = 0; len > i; i++) {
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
const splitIntoTwo = str => {
  let len = str.length;
  let mid = len / 2;
  let half1, half2;
  half1 = str.slice(0, mid);
  half2 = str.slice(mid, len);
  return half1 + "," + half2;
};

const removeWhiteSpace = val => {
  let result = "";
  for (let i = 0; val.length > i; i++) {
    if (val[i] !== " ") {
      result = result + val[i];
    }
  }
  return result;
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
console.log("\nmixletters : " + mixLetters(firstString, secondString));
console.log("\n1st one :split into two : " + splitIntoTwo(firstString));
console.log("\n2st one :split into two : " + splitIntoTwo(secondString));
console.log("\nremove whitespaces 1st: " + removeWhiteSpace(firstString));
console.log("\nremove whitespaces 2nd: " + removeWhiteSpace(secondString));
