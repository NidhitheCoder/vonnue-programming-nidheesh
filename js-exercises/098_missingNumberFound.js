let arr = [2, 3, 4, 5, 6, 7, 8, 9, 10];

findNumber = arr => {
  let num = arr.length + 1;
  let sum = arr.reduce((a, b) => {
    return a + b;
  }, 0);
  let total = (num * (num + 1)) / 2;
  return total - sum;
};

console.log(findNumber(arr));
