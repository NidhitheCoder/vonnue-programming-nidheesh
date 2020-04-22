
let stringValue = "javascript";

const countVowel = str => {
  let vowels = ["a", "e", "i", "o", "u"];
  let count = 0;

  for (i = 0; i < str.length; i++) {
    vowels.forEach(val => {
      if (val === str[i]) {
        count++;
      }
    });
  }
  return count;
};

console.log(countVowel(stringValue));
