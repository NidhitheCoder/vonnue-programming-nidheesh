let str = "java sCRIPT";

changeCharType = val => {
  if (val === val.toUpperCase()) {
    return val.toLowerCase();
  }
  return val.toUpperCase();
};

toggleCharacter = str => {
  let arr = str.split(""),
    result = "";
  for (let i = 0; i < arr.length; i++) {
    result = result + changeCharType(arr[i]);
  }
  return result;
};

console.log(toggleCharacter(str));
