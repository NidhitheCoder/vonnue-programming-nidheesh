//random fraction numbers
function randomFraction() {
  return Math.random();
}
 console.log(randomFraction())

//random whole numbers

var randomNumberBW0and19 = Math.floor(Math.random() * 20);
function randomWhole() {
  return Math.floor(Math.random() * 10);
}
 console.log(randomWhole())

//random whole numbera within a Range
function randomWithinARange(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
console.log(randomWithinARange(5,15))