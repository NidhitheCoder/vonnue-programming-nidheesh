function myFun() {
  console.log("this is the function console");
}
myFun();

function usable(a, b) {
  console.log(a + b);
}
usable(4, 4);

// globel scope of the function

var globalVar = "hellow";

function fun1() {
  LocalVar = "heyy";
  var oops = "change";
}
function fun2() {
  console.log(globalVar);
  console.log(LocalVar);
  console.log(oops);
}
fun1();
fun2();
