twentytimes = yr => {
  let nextYear = yr;
  let arr = [];
  for (let j = 0; j < 20; j++) {
    arr.push(nextYear);
    nextYear = nextYear + 4;
  }
  return arr;
};

printLeapYears = (year) => {
  if (year % 4 === 0) {
    return twentytimes(year);
  } else {
    for (let i = 1; i <= 3; i++) {
      year = year + 1;
      if (year % 4 === 0) {
        return twentytimes(year);
      }
    }
  }
};

let year = new Date().getFullYear();
console.log(printLeapYears(year));
