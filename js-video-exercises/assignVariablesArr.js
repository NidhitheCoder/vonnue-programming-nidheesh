const [z,y,,x]=[1,2,3,4,5]
console.log(z,y,x);

let a=8,b=6;
(()=>{
    "use strict";
    [a,b]=[b,a]
})();
console.log(a)
console.log(b)

// destruction assignment wt rest operator


const num=[1,2,3,4,5,6,7,8]
 function removeFirst2(list){
 const [ , , ...arr]=list
 return arr;
 }
console.log(removeFirst2(num))
console.log(num)