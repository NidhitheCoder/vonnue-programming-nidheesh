const readline = require("readline-sync");
let str = readline.question("enter a string words separated by dots: ");

reverse = val => {
  let arrVal = val.split("."),
    newArr = [];
  for (let i = arrVal.length - 1; i >= 0; i--) {
    newArr.push(arrVal[i]);
  }
  return newArr.join(".");
};

console.log(reverse(str));
