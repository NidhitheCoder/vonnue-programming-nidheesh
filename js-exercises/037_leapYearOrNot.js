const readline = require("readline-sync");

let year = parseInt(readline.question("enter the year :"));

checkLeapYear = yr => {
  if (yr % 4 === 0) {
    return "this is a leap year";
  }
  return "this is not a leap year";
};

console.log(checkLeapYear(year));
