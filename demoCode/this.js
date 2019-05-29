// function f() {
//   return console.log(this.a);
// }

// // f.bind({ a: "100" })();
// // s();

// let a = { a: 100 };

// let b = [[[[[[[[[[[[[[[[[[[100]]]]]]]]]]]]]]]]]]];

// console.log(b.flat(Infinity));
// console.log(Array.prototype.keys());

function getStatus(status) {
  console.log(status);
  return status;
}

var result = !+getStatus("1");
console.log(result);
