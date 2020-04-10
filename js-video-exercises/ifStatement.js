function ifstate(wasThat) {
  if (wasThat) {
    return "yes it is true";
  } else {
    return "sorry it is false";
  }
}
console.log(ifstate(true));

function equality(val) {
  if (val == 12) {
    return "equal";
  }
  return "not equal";
}
console.log(equality(12));

//scrict equal
function strictEq(val) {
  if (val === 3) {
    return true;
  }
  return false;
}
console.log(strictEq("3"));

//compare values  using

function compare(a, b) {
  if (a == b) {
    return "equal";
  }
  return "not equal";
}
console.log(compare(4, "4"));

//compare with inequality op

function inequlity(val) {
  if (val != 99) {
    return "not equal";
  }
  return "equal";
}
console.log(inequlity("99"));
//compare with strict inequality op

function stInequlity(val) {
  if (val !== 99) {
    return "not equal";
  }
  return "equal";
}
console.log(stInequlity("99"));

//using operators
function check(val) {
  if (val > 10 && val < 15) {
    return "greater 10";
  }

  if (val <= 10 || val == 4) {
    //lessthan or equal 2
    return "lessthan 10";
  }
}
console.log(check(12));

function else2(val) {
  if (val > 10) {
    return "greater 10";
  } else if (val < 10) {
    return "lessthan 10";
  } else {
    return "10";
  }
}
