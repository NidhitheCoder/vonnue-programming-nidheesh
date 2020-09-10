let array = [4, 3, 1000, 4, 6, 33, 5, 22, 99, 33];

reverseArray = arr => {
  let limit = arr.length - 1,
    firstEl;
  for (let i = 0; i <= Math.floor(limit / 2) ; i++) {
    firstEl = arr[i];
    arr[i] = arr[limit - i];
    arr[limit - i] = firstEl;
  }
  return arr;
};

console.log(reverseArray(array));
