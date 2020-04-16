const readline = require("readline-sync");

let value = readline.question("Enter a value :");

checkType = str => {
  var format = /^[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]*$/;

  if (str.match(format)) {
    return "this is  special character";
  } else if (str === str.toLowerCase()) {
    return "this string is lowercase";
  } else if (str === str.toUpperCase()) {
    return "this string is uppercase";
  } else {
    return "other type";
  }
};

console.log(checkType(value));
