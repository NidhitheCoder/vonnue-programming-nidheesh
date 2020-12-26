const readline = require("readline-sync");

let letter = readline.question("please enter a letter :");
let vowels = ["a", "e", "i", "o", "u"];

checkVowel = letter => {
  for (let i = 0; i <= 5; i++) {
    if (vowels[i] === letter) {
      return "this is a vowel";
    }
  }
  return "this is consonant";
};

console.log(checkVowel(letter));
