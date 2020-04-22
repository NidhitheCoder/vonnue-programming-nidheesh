let stringValue = "abZcd";

sortString = str => {
  str=str.toLowerCase();
  console.log(str)
  let arr = str.split("");

  for (let i = 0; i <= arr.length - 1; i++) {
    for (let i = 0; i < arr.length; i++) {

      if (arr[i] > arr[i + 1]) {
        let temp = arr[i + 1];
        arr[i + 1] = arr[i];
        arr[i] = temp;
      }

    }
  }

  return arr;
};
console.log(sortString(stringValue));
