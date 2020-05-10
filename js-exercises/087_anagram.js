const readline = require("readline-sync");
let str1 = readline.question("Enter first string :");
let str2 = readline.question("Enter second string :");

checkAnagram = (s1, s2) => {
  s1 = s1.replace(" ", "").toLowerCase();
  s2 = s2.replace(" ", "").toLowerCase();
  str1Arr = s1.split("");
  str2Arr = s2.split("");
  let count = [];

  for (let i = 0; i < str1Arr.length; i++) {
    let inc = 0;
    for (let j = 0; j < str2Arr.length; j++) {
      if (str1Arr[i] === str2Arr[j]) {
        inc++;
      }
    }
    count.push(inc);
  }

  if (count.includes(0)) {
    return "this strings are no anagram";
  }
  return "this strings are anagram";
};

console.log(checkAnagram(str1, str2));
