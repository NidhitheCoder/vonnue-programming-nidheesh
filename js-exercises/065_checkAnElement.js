let array = [4, 3, 55, 4, 6, 33, 5, 22, 99, 33];
let number = 22;

checkElement = (arr, num) => {
  let result = arr.filter(function(el) {
    return el === num ? true : false;
  });
  return result.length > 0;
};

console.log(checkElement(array, number));
