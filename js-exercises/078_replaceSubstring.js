const readline = require("readline-sync");
let string = readline.question("enter a string :");
let actualWord = readline.question("enter actual word :");
let replaceWord = readline.question("enter a word that replace actual word :");

replaceString = (str, actualWord, replaceWord) => {
  let start = str.search(actualWord);
  let length = actualWord.length;
  let prev = str.slice(0, start);
  let next = str.slice(start + length, start.length);
  str = prev + replaceWord + next;
  return str;
};

console.log(replaceString(string, actualWord, replaceWord));
