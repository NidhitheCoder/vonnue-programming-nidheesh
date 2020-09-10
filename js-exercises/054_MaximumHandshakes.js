let num = 15;

countHandshakes = num => {
  return (num * (num - 1)) / 2;
};

console.log(countHandshakes(num));
