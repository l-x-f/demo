
// #
// a == 1 && a == 2 && a == 3


// 对象转换成原始类型的值，算法是先调用valueOf方法；如果返回的还是对象，再接着调用toString方法，

// 方案一 toString
// var a = {
//     value: 1,
//     toString() {
//         return a.value++
//     }
// }


// 方案二 valueOf
// var a = {
//     value: 1,
//     valueOf() {
//         return a.value++
//     }
// }


// 方案三  es6 的 Symbol.toPrimitive 方法，相比toString 和 valueOf。Symbol.toPrimitive方法在转换基本类型的时候优先级最高。

// var a = {
//     [Symbol.toPrimitive]: (function (hint) {
//         var i = 1;
//         return function () {
//             return i++;
//         }
//     })()
// }


// 方案四 数组在转换基本类型的时候toString 接口默认调用数组的 join 方法，重写数组的 join 方法。
var a = [1, 2, 3];
a.join = a.shift;
// a.toString = a.shift;  // 直接改写数组的toString方法





// 方案五 es6的  Reflect.defineProperty 等同于Object.defineProperty
// Reflect.defineProperty(global, 'a', {
//     get() {
//         return this.value = this.value ? (this.value += 1) : 1;
//     }
// })



// 方案六  Object.defineProperty
// (node环境下是global，浏览器环境把global换成window)

// Object.defineProperty(global, 'a', {
//     get() {
//         return this.value = this.value ? (this.value += 1) : 1;
//     }
// })



// 方案七 es6的 Proxy
// var a = new Proxy({}, {
//     i: 1,
//     get: function () {
//         return () => this.i++;
//     }
// });



// 方案八 reg
var a = {
    reg: /\d/g,
    valueOf() {
        return this.reg.exec(123)[0]
    }
}



console.log(a == 1 && a == 2 && a == 3)