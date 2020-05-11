let arr = [1, 11, 6, 17];

countTripletes = arr => {
  let count = 0;
  arr.sort((a, b) => {
    return a - b;
  });
  
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] + arr[i + 1] === arr[i + 2]) {
      count++;
    }
  }
  return count;
};

console.log(countTripletes(arr));