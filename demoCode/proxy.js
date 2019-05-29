let obj = {
  // a: 1
};
// let proxyObj = new Proxy(obj, {
//   get: function(target, prop) {
//     console.log(target,"target")
//     console.log(prop,"prop")
//     return prop in target ? target[prop] : 0;
//   },
//   set: function(target, prop, value) {
//     target[prop] = 888;
//   }
// });

// console.log(proxyObj.a); // 1
// console.log(proxyObj.b); // 0

// proxyObj.a = 666;
// console.log(proxyObj.a); // 888
console.log(obj.a); // 0

Object.defineProperty(obj, "a", {
  // writable: true,
  enumerable: true,
  configurable: true,
  get: function() {
    console.log(arguments, "arguments");
    return 1;
  },
  set: function(newVal) {
    console.log(newVal, "newVal");
    return newVal;
  }
});

console.log(obj.a); // 0
obj.a = 2;
console.log(obj.a); // 0
