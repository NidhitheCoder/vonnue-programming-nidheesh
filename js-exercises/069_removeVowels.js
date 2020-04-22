
let stringValue = "this is a string";

const removeVowel = str => {
  let vowels = ["a", "e", "i", "o", "u"];
  for (i = 0; i < str.length; i++) {

    vowels.forEach(val => {
      if (val === str[i]) {
        str=str.replace(str[i],"")
      }
    });
  }
  return str;
};
console.log(removeVowel(stringValue));
