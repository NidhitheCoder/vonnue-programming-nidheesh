function check(a, b) {
  return a > b;
}
console.log(check(20, 40));

function checkab(a, b) {
  if (a < 0 || b < 0) {
    return undefined;
  }
  return Math.round(Math.pow(Math.sqrt(a) + Math.sqrt(b), 2));
}
console.log(checkab(-2, 2));
