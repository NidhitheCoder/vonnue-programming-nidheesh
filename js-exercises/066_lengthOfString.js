let str = "sample";

countLength = str => {
  let arr = [],
    count = 1;
  if (str === "") {
    return 0;
  }

  arr = str.split("");
  arr.reduce(() => {
    count++;
  });
  return count;
};
console.log(countLength(str));
