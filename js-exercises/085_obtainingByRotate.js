shiftLetters = arr => {
  let newArr = arr,
    count = 0,
    newVal = "";
  while (count < 2) {
    newVal = newArr.pop() + newVal;
    count++;
  }
  return newVal + newArr.join("");
};

checkObtain = (str1, str2) => {
  let clockwise = shiftLetters(str2.split("")),
    antiClockwise = shiftLetters(str2.split("").reverse());
  antiClockwise = antiClockwise
    .split("")
    .reverse()
    .join("");

  if (str1 === clockwise || str1 === antiClockwise) {
    return "Yes";
  }
  return "No";
};

console.log(checkObtain("amazon", "onamaz"));
