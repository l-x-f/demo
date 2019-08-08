const arr = [0, 1, 2, 3, 4, 5, 6];
let s = "";

s = arr.reduce((pre, next) => {
  const image = `<img style="max-width:100%;" src="${pre}">`;
  const n = `<img style="max-width:100%;" src="${next}">`;
  return image + n;
});

console.log(s);
