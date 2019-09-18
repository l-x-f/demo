const urlList = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// let imageTemplateList = ''
// urlList.forEach(item => {
//   const image = `<img style="max-width:100%;" src="${item}">`
//   imageTemplateList = imageTemplateList + image
// })
const imageTemplateList = urlList.reduce(
  (pre, next) => `${pre}<img style="max-width:100%;" src="${next}">`,
  []
);

console.log(imageTemplateList);
