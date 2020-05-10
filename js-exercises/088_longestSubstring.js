const readline = require("readline-sync");
let str1 = readline.question("Enter first string :");

findSubstrLen = s1 => {
  s1 = s1.replace(" ", "").toLowerCase();
  arr = s1.split("");
  let counter = [];
  for (let i = 0; i < arr.length; i++) {
    if (!counter.includes(arr[i])) {
      counter.push(arr[i]);
    }
  }
  return "longest substring length is " + counter.length;
};

console.log(findSubstrLen(str1));
