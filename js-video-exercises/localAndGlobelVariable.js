var outer = "textout";
function myFun() {
  var outer = "textin";
  return outer;
}
console.log(myFun());
console.log(outer);

// function with return

function ret(num) {
  return num - 3;
}
console.log(ret(19));

//undefined value return from function
var sum = 0;
function undefReturn() {
  return (sum = sum + 3);
}
console.log(undefReturn());

var sum2 = 0;
function undefReturn2() {
  return (sum2 += 3);
}
console.log(undefReturn2());
var process = 0;
function processed(num) {
  return (num + 5) / 3;
}
process = processed(10);
console.log(process);
