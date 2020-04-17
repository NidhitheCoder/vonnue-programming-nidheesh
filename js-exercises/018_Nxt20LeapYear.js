printLeapYears = year => {
  let count = 1,
    arrYears = [];

  while (count <= 20) {
    if (year % 4 === 0) {
      arrYears.push(year);
      count += 1;
      year += 4;
    } else {
      year += 1;
    }
  }

  return arrYears;
};

let year = new Date().getFullYear();
console.log(printLeapYears(year));
