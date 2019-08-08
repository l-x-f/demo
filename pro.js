// var x = 30;

// function test() {
//   console.log(x);
//   var x = 10;
//   console.log(x);
//   x = 20;
//   function x() {}

//   console.log(x);
// }

// test();

// [Function: x]
// 10
// 20

// const schedules = [
//   { id: 1, value: 100 },
//   { id: 2, value: 200 },
//   { id: 3, value: 300 },
//   { id: 4, value: 400 }
// ];

// const sum = schedules.map(val => val.id).reduce((pre, next) => pre + next);

// console.log(sum); //10

// f = function () {
//     return true;
// };
// g = function () {
//     return true;
// };

(function() {
  console.log(g);
  console.log(f);
  if (!g) {
    console.log(g);
    //12行
    f = function f() {
      return false;
    };
    function g() {
      return true;
    }
  }
})(); //16行

// alert(g());
// alert(f());
