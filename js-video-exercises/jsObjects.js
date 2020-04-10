var person = {
  name: "july",
  age: 34,
  eligible: true,
  needs: [["apple", "green apple"], ["orange"]]
};
var me = [
  {
    "my name": "nidheesh",
    "my age": 25,
    "my eligible": true,
    needs: ["grapes", "orange"]
  },
  {
    "my name": "viswanath",
    "my age": 29,
    "my eligible": true,
    needs: ["grapes", "apple"],
    friends: {
      name: "july",
      age: 34,
      eligible: true,
      needs: {
        name: "orange",
        weight: 12,
        type: {
          c: "ind",
          no: 120
        }
      }
    }
  }
];
console.log(person.name);
console.log(me["my name"]);

var agen = "age";
console.log(person[agen]);

person.name = "nimmy";
console.log(person);

person.hobby = "singing";
console.log(person);

person["likes"] = "smile";
console.log(person);

delete person["likes"];
console.log(person);

delete person.hobby;
console.log(person);

//objects substitute switch statement easly
function click(a) {
  if (person.hasOwnProperty(a)) {
    return person[a];
  }
  return "change me";
}
console.log(click("age"));
console.log(me[1].friends.needs.type.c);
console.log(person.needs[0]);
