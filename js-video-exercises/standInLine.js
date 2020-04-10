function nextInLine(arr, item) {
  arr.push(item);
  return arr.shift();
}
var arrAll = [1, 2, 3, 4];
console.log("beforre: " + JSON.stringify(arrAll));
console.log(nextInLine(arrAll, 6));
console.log("After : " + JSON.stringify(arrAll));
