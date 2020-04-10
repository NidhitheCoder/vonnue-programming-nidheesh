var arr = ["hellow", 2, [1, 2, 3]];

console.log(arr[2]);
var num = [1, 2, 3, 4];
num[1] = 5;
console.log(num);
arr[1] = "haii";

var threeLayer = [
  1,
  2,
  3,
  [2, 6],
  [
    [1, 2, 3],
    [4, 5, 6]
  ]
];
console.log(threeLayer[4][0]);

//push arr
var arrStr = ["hai", "joe"];
arrStr.push("change");

console.log(arrStr.pop());
arrStr.push("change");
arrStr.push("new");

//manipulate arr with shift
console.log(arrStr.shift());
console.log(arrStr);

// mANIPULATE ARRAY  with unshift

console.log(arrStr.unshift("happy"));
console.log(arrStr);

// nested arrays

var myList = [
  ["banana", 3],
  ["apple", 4]
];
console.log(myList);
