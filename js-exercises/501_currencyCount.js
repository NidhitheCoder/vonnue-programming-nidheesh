// this program shows that how many number of
// the given currency we can use in the given amount
// eg- amt:1234,currency:100,result is 12 numbers of currency 100 in this program.
// if currency: 1000 then,result is 1 numbers of currency 1000 in this program.
const readline = require("readline-sync");
let amount = parseInt(readline.question("enter a number :"));
let counter = parseInt(readline.question("enter currency :"));

countCurrency = (num, counter) => {
  let result = "Possible number of currency " + counter + " in " + num + " is ";
  switch (counter) {
    case 1:
      result += num / 1;
      break;
    case 2:
      result += num / 2;
      break;
    case 5:
      result += num / 5;
      break;
    case 10:
      result += num / 10;
      break;
    case 20:
      result += num / 20;
      break;
    case 50:
      result += num / 50;
      break;
    case 100:
      result += num / 100;
      break;
    case 500:
      result += num / 500;
      break;
    case 2000:
      result += num / 2000;
      break;
    default:
      result = "You enterd invalid currency format";
  }
  return result;
};

console.log(countCurrency(amount, counter));
