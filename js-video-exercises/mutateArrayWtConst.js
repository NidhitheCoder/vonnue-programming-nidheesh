

const s = [3, 4, 6];
function edit() {
  "use strict";

  //s = [2, 3, 1];
  s[0] = 2;
  s[1] = 3;
  s[2] = 1;
  return s;
}
console.log(edit());

// prevent object mutation
function freezObj() {
  "use strict";
  const MATH_CONSTANTS = {
    PI: 3.14
  };

  Object.freeze(MATH_CONSTANTS)

  try {
    MATH_CONSTANTS.PI = 99;
  } catch (ex) {
    console.log(ex);
  }
  return MATH_CONSTANTS.PI;
}
console.log(freezObj());
