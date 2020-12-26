let number = 34562;

convertToWords = num => {
  let words = [
    "Zero",
    "One",
    "Two",
    "Three",
    "Four",
    "Five",
    "Six",
    "Seven",
    "Eight",
    "Nine"
  ];
  let numInWords = "";

  if (num === 0) {
    return "zero";
  }

  while (num > 0) {
    let digit = num % 10;
    for (let i = 0; i < words.length; i++) {
      if (i === digit) {
        numInWords = words[i] + " " + numInWords;
      }
    }
    num = Math.floor(num / 10);
  }
  return numInWords;
};

console.log(convertToWords(number));
