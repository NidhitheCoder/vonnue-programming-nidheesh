// string convert to integer
function convertToInteger(str) {
  return parseInt(str);
}
console.log(convertToInteger("56"));

//use the parsInt function with a radix
function convertToInteger2(str) {
  return parseInt(str, 2);
}
console.log(convertToInteger2("10010"));
