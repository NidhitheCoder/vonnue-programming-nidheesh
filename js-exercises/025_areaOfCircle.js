const readline = require("readline-sync");

let radious = parseInt(readline.question("Enter radious :"));

findArea = rad => {
  let pi = 3.14;
  return pi * Math.pow(rad, 2);
};

console.log("The area of the circle is : " + findArea(radious));
