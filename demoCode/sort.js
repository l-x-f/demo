// let OBJ = {
//   a: 100,
//   b: 300
// };

// with (OBJ) {
//   a = 0;
//   b = 0;
// }

// console.log(OBJ);

// try {
//   throw "0";
// } catch (err) {
//   console.log(err, "err");
// }

// const a = [];
// a.push('Hello'); // 可执行
// // a.length = 0;    // 可执行
// console.log(a,"a")

// const foo = {};

// // 为 foo 添加一个属性，可以成功
// foo.prop = 123;
// foo.prop // 123
// console.log(foo,"foo")

// const [a, b, c, d, e] = 'hello';
// const {a, b, c, d, e}= 'hello';
// console.log(a)// "h"
// console.log(b) // "e"
// console.log(c)// "l"
// console.log(d) // "l"
// console.log(e) // "o"

// let x = 1;
// let y = 2;

// [x, y] = [y, x];

// console.log(x, y);

// 1.传统冒泡排序写法。(易于理解，引入了变量)
function bubbleSort_1(data) {
  for (let i = 0; i < data.length; i++) {
    for (let j = 0; j < data.length - i - 1; j++) {
      if (data[j] > data[j + 1]) {
        let tem = data[j];
        data[j] = data[j + 1];
        data[j + 1] = tem;
      }
    }
  }
}

// 2.异或运算（^）在两个二进制位不同时返回1，相同时返回0。(难以理解，未引入了变量)
// 例:
let a = 1; // 二进制表示:01
let b = 3; // 二进制表示:11
a = a ^ b; // 01 ^ 11 (不同时返回1，相同时返回0)  返回二进制 10即十进制2  此时a =2
b = b ^ a; // 11 ^ 10 (不同时返回1，相同时返回0)  返回二进制 01即十进制1  此时b =1
a = a ^ b; // 10 ^ 01 (不同时返回1，相同时返回0)  返回二进制 11即十进制3  此时b =3
// 此时a和b的值已经交换过来了

function bubbleSort_2(data) {
  for (let i = 0; i < data.length; i++) {
    for (let j = 0; j < data.length - i - 1; j++) {
      if (data[j] > data[j + 1]) {
        data[j] ^= data[j + 1];
        data[j + 1] ^= data[j];
        data[j] ^= data[j + 1];
      }
    }
  }
}

// 3.ES6变量的解构赋值-交换变量的值。(易于理解，未引入了变量)
function bubbleSort_3(data) {
  for (let i = 0; i < data.length; i++) {
    for (let j = 0; j < data.length - i - 1; j++) {
      if (data[j] > data[j + 1]) {
        [data[j], data[j + 1]] = [data[j + 1], data[j]];
      }
    }
  }
}

let arr = [9, 9, 9, 0, 2, 5, 6, 3, 7, 8, 9, 11];
bubbleSort_1(arr);
// bubbleSort_2(arr);
// bubbleSort_3(arr);
console.log(arr);
