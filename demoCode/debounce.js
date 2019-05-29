const debounce = (fn, ms = 0) => {
  let timeoutId;
  return function(...args) {
    console.log(args,"args")
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => fn.apply(this, args), ms);
  };
};
const add = (x, y) => console.log(x + y);
debounce(add, 100)(1, 2);
