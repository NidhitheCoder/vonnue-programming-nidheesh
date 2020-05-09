countDuplicate = (arr, i) => {
  let inc = 1;
  for (let m = i + 1; m < arr.length; m++) {
    if (arr[m] === arr[i]) {
      inc++;
    } else {
      return inc;
    }
  }
  return inc;
};

removeDuplicate = str => {
  let arr = str.split(""),
    count = 0;
  while (arr.length >= count) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === arr[i + 1]) {
        let inc = countDuplicate(arr, i);
        arr.splice(i, inc);
        i = i - 1;
      }
    }
    count++;
  }
  return arr.join("");
};

console.log(removeDuplicate("acaaabbbacdddd"));
console.log(removeDuplicate("abccbd"));
console.log(removeDuplicate("azxxzy"));
