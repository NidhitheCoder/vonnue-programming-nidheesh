let stringValue = "javascript";

countVowel = str => {
  let vowels = ["a", "e", "i", "o", "u"];
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    vowels.forEach(val => {
      if (val === str[i]) {
        count++;
      }
    });
  }
  return count;
};

console.log(countVowel(stringValue));
