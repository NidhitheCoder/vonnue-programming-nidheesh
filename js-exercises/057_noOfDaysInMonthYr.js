const readline = require("readline-sync");
let year = readline.question("enter the year :");
let month = readline.question("enter the Month name : ");

findNoOfDays = (year, month) => {
  let months = [
    {
      name: "january",
      days: 31
    },
    { name: "february", days: 28 },
    { name: "march", days: 31 },
    { name: "april", days: 30 },
    { name: "may", days: 31 },
    { name: "june", days: 30 },
    { name: "july", days: 31 },
    { name: "august", days: 31 },
    { name: "septamber", days: 30 },
    { name: "october", days: 31 },
    { name: "november", days: 30 },
    { name: "december", days: 31 }
  ];

  if (year % 4 === 0) {
    months[1]["days"] = 29;
  }

  for (let i = 0; i < 12; i++) {
    if (months[i]["name"] === month.toLowerCase()) {
      return months[i]["days"];
    }
  }
  return "please enter currectly";
};

console.log(findNoOfDays(year, month));
