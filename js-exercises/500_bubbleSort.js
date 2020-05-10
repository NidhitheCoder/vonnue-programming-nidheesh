 let arr = [5, 45, 6, 34, 86, 873, 0, 3, 8, 2, 8, 5, 34, 3, 22, 1, 0];


bubbleSort = arr => {
  let count = 0;
  while (count < arr.length) {
    for (let i = 0; i <= arr.length; i++) {
      if (arr[i] > arr[i + 1]) {
        let temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
      }
    }
    count++;
  }
  return arr;
};

console.log(bubbleSort(arr));