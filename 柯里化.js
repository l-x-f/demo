function curryIt(fn) {
  // 参数fn函数的参数个数
  var n = fn.length;
  var args = [];
  return function(arg) {
    args.push(arg);
    if (args.length < n) {
      return arguments.callee; // 返回这个函数的引用
    } else {
      return fn.apply(this, args);
    }
  };
}
function add(a, b, c, d, e) {
  return Array.from(arguments).reduce((pre, next) => pre + next);
}
var c = curryIt(add);
var c1 = c(1)(2)(3)(4)(1000);

console.log(c1); //[1, 2, 3]
