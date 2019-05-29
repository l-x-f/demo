var arr = [1, 3];
var allArr = [
  { id: 1, name: "s" },
  { id: 2, name: "ds" },
  { id: 3, name: "gg" }
];
// var finalArr = [];

let finalArr = allArr.filter(val => !arr.includes(val.id));

console.log(finalArr, "finalArr");

// allArr.forEach((val, index) => {
//   if (arr.includes(val.id)) allArr.splice(index, 1);
// });
// console.log(allArr, "allArr");
