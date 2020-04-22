let num = 5,
  row = 3;

findFactorial = num => {
  let fact = 1;
  for (let i = 2; i <= num; i++) {
    fact = fact * i;
  }
  return fact;
};

findPermutation = (n, r) => {
  let nFact = findFactorial(n);
  return nFact / findFactorial(n - r);
};

console.log(findPermutation(num, row));
