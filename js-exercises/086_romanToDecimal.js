convertToDecimal = str => {
  let arr = str.toUpperCase().split("");
  let decVal = 0;

  for (let i = arr.length - 1; i >= 0; i--) {
    switch (arr[i]) {
      case "I":
        decVal = decVal + 1;
        break;
      case "V":
        if (arr[i - 1] === "I") {
          decVal = decVal + 3;
        } else {
          decVal = decVal + 5;
        }
        break;
      case "X":
        if (arr[i - 1] === "I") {
          decVal = decVal + 8;
        } else {
          decVal = decVal + 10;
        }
        break;
      case "L":
        if (arr[i - 1] === "X") {
          decVal = decVal + 30;
        } else {
          decVal = decVal + 50;
        }
        break;
      case "C":
        if (arr[i - 1] === "X") {
          decVal = decVal + 80;
        } else if (arr[i - 1] === "M") {
          decVal = decVal - 100;
        } else {
          decVal = decVal + 100;
        }

        break;
      case "D":
        if (arr[i - 1] === "C") {
          decVal = decVal + 300;
        } else {
          decVal = decVal + 500;
        }

        break;
      case "M":
        if (arr[i - 1] === "c") {
          decVal = decVal + 500;
        } else {
          decVal = decVal + 1000;
        }
        break;
    }
  }
  return decVal;
};

console.log(convertToDecimal("DCLXXVIII"));
