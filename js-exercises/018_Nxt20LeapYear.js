const twentytimes = yr => {
  let nextYear = yr;
  for (let i = 0; i < 20; i++) {
    console.log(nextYear);
    nextYear = nextYear + 4;
  }
};

let year = new Date().getFullYear();
if (year % 4 == 0) {
  twentytimes(year);
} else {
  for (let i = 1; i <= 3; i++) {
    year = year + 1;
    if (year % 4 == 0) {
      twentytimes(year);
    }
  }
}
