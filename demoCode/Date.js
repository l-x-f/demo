// const date = Date.now();
// console.log(date);

// function fib(num) {
//   if (num === 0 || num === 1) return num;
//   return fib(num - 2) + fib(num - 1);
// }

// for (let index = 0; index < 10; index++) {
//   console.log(fib(index));
// }

const deepClone = obj => {
  let clone = Object.assign({}, obj);
  Object.keys(clone).forEach(
    key =>
      (clone[key] =
        typeof obj[key] === "object" ? deepClone(obj[key]) : obj[key])
  );
  return Array.isArray(obj) && obj.length
    ? (clone.length = obj.length) && Array.from(clone)
    : Array.isArray(obj)
    ? Array.from(obj)
    : clone;
};

let obj = {
  name: "消费",
  hobby: ["1", "2", "3"]
};

let data = deepClone(obj);
data.name = "小飞";
console.log(data);
console.log(obj);
