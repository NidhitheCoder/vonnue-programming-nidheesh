const readline = require("readline-sync");

let num = parseInt(readline.question("enter the number :"));

sumOfSquares = no => {
  for (let j = 1; j < no; j++) {
    for (let i = 1; i < no; i++) {

      let sumOfSquare = i * i + j * j;
      if (sumOfSquare === no) {
        return true;
      }
      
    }
  }

  return false;
};

console.log(sumOfSquares(num));
