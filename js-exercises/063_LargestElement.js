findLargest = arr => {
  let big = 0;
  for (let i = 0; i < arr.length; i++) {
    if (big <= arr[i]) {
      big = arr[i];
    }
  }
  return big;
};

console.log(findLargest([56, 2, 3, 44, 10, 6, 44, 56, 3, 99]));
