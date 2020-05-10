let strArray = [6, 5, 3, 8, 1, 7, 2, 4];

insertion = arr => {
  let count = 1;
  while (count <= arr.length) {
    for (let j = count; j >= 0; j--) {
      if (arr[j] < arr[j - 1]) {
        let temp = arr[j];
        arr[j] = arr[j - 1];
        arr[j - 1] = temp;
      }
    }
    count++;
  }
  return arr;
};

console.log(insertion(strArray));
