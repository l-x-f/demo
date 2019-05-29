// const deepClone = obj => {
//   let clone = Object.assign({}, obj);
//   Object.keys(clone).forEach(
//     key =>
//       (clone[key] =
//         typeof obj[key] === "object" ? deepClone(obj[key]) : obj[key])
//   );
//   return Array.isArray(obj) && obj.length
//     ? (clone.length = obj.length) && Array.from(clone)
//     : Array.isArray(obj)
//     ? Array.from(obj)
//     : clone;
// };

// let add = [0, 122, 3, 100];

// let a = deepClone(add);
// a[0] = 1000;
// console.log(a, "a");
// console.log(add, "add");

let obj = { name: "小飞", gender: "男" };
let clone = Object.assign({}, obj);
obj.name = "小米";

console.log(obj, "obj");
console.log(clone, "clone");

let arr = [1, 200, 2, 100, 100];

let arr = [1, 2, 200, 100, 100];

let arr = [1, 2, 100, 200, 100];

let arr = [1, 2, 100, 100, 200];

arr.sort((a, b) => {
  console.log(a, b);
  return a - b > 0;
});
console.log(arr, "arr");
