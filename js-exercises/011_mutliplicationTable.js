const multiplicationTable = () => {
  for (let i = 1; i <= 12; i++) {
    console.log("Multiplication table of " + i);
    console.log("**************************\n");
    for (let j = 1; j <= 10; j++) {
      let result = i * j;
      console.log(j + " X " + i + " = " + result);
    }
    console.log("\n");
  }
};
multiplicationTable();
