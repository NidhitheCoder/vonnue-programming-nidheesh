
let stringValue = "this is a string";

removeVowel = str => {
  let vowels = ["a", "e", "i", "o", "u"];
  for (let i = 0; i < str.length; i++) {

    vowels.forEach(val => {
      if (val === str[i]) {
        str=str.replace(str[i],"")
      }
    });
  }
  return str;
};

console.log(removeVowel(stringValue));
