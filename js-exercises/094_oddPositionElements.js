let arr = [2, 1, 3, 5, 4, 6, 8, 6, 9, 8],
  result = [];

findOddPositions = arr => {
  for (let i = 1; i < arr.length; i = i + 2) {
    result.push(arr[i]);
  }
  return result;
};

console.log(findOddPositions(arr));
