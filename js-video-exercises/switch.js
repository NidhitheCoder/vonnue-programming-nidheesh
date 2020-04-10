function switchSt(val) {
  var answer = "";
  switch (val) {
    case 1:
    case 2:
      answer = "beta";
      break;
    case 3:
      answer = "gamma";
      break;
    case 4:
      answer = "delta";
      break;
    default:
      answer = "orange";
      break;
  }
  return answer;
}
console.log(switchSt(2));

function switchSt2(val) {
  var answer = "";
  switch (val) {
    case "lol":
      answer = "greater 10";
      break;
    case "hai":
      answer = "lessthan 10";
      break;
    default:
      answer = "10";
      break;
  }
  return answer;
}

console.log(switchSt2("lol"));
