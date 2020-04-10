function checkEqual(a, b) {
  // replace this if else statement using ternary operator
  //   if (a === b) {
  //     return true;
  //   } else {
  //     return false;
  //   }
  //
  //this is actually ternary operator
  //return a === b ? true : false;
  //
  // but we can optimize this code like shown below
return a === b;
}

console.log(checkEqual(2, 2));


//multiple-conditional (ternery) operator

function checkSign(num){
    return num > 0 ? "positive" :num < 0 ? "negative": 0
}
console.log(checkSign(-2))
console.log(checkSign(2))
console.log(checkSign(0))