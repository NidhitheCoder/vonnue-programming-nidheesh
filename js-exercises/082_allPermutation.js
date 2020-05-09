getValues = arr => {
  let result = [];
  for (let k = 0; k < arr.length; k++) {
    let val = arr[k];
    for (let m = 0; m < arr.length; m++) {
      if (k !== m) {
        val += arr[m];
      }
    }
    result.push(val);
  }
  return result;
};

permute = str => {
  let arr = str.split("");
  let result = getValues(arr);
  result = result.concat(getValues(arr.reverse()));
  return result;
};

console.log(permute("ABC"));
