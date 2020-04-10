let fun = function() {
  return new Date();
};

// this is arrow function  and with parameters

// let funArrow=()=>{
// return "this is arrow function"
// };

let funArrow = str => str + " this is arrow function";
console.log(fun);
console.log(funArrow("new world."));

//higher order arrow functions
const arr = [1, 2, 3, 6, 54, 6];

arr.filter(num => {
  console.log(num);
});

arr.map(num => {
  console.log(num + 5);
});

//rest operator

const sumFind = (function() {
  return function sum(...args) {
    // const args = [x, y, z];
    return args.reduce((a, b) => a + b, 0);
  };
})();
console.log(sumFind(2, 1, 999));
