var myArr = [];
var i = 0;
while (i < 5) {
  myArr.push(i);
  i++;
}
console.log(myArr);

for (var i = 5; i < 10; i++) {
  myArr.push(i);
}
console.log(myArr);
for (var i = 5; i > 0; i--) {
  myArr.push(i);
}
console.log(myArr);

var myArray = [];
var i = 0;
do {
  myArray.push(i);
  i++;
} while (i < 5);
console.log(myArray);
