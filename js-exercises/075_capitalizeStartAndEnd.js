const readline = require("readline-sync");
let string = readline.question("enter the string :");

capitalizeBothEnd = (arrSeparate, stringConcat) => {
  charConcat = "";
  for (let j = 0; j < arrSeparate.length; j++) {
    if (j === 0 || j === arrSeparate.length - 1) {
      let cap = arrSeparate[j];
      charConcat += cap.toUpperCase();
    } else {
      charConcat += arrSeparate[j];
    }
  }
  return (stringConcat + charConcat + " ");
};

capitalizeStartEnd = str => {
  let arr = str.split(" ");
  let stringConcat = "";
  for (let i = 0; i < arr.length; i++) {
    let arrSeparate = arr[i].split("");
    stringConcat = capitalizeBothEnd(arrSeparate, stringConcat);
  }
  return stringConcat;
};

console.log(capitalizeStartEnd(string));