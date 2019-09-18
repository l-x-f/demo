const goodsSpecs = [
  {
    buttonKey: "normal",
    specName: 1,
    oldPrice: 1,
    newPrice: 1,
    initailSalesVolume: 1,
    totalStock: 1
  },
  {
    buttonKey: "normal",
    specName: 2,
    oldPrice: 2,
    newPrice: 2,
    initailSalesVolume: 2,
    totalStock: 2
  }
];

goodsSpecs.forEach(val => {
  delete val.buttonKey;
});

console.log(goodsSpecs);
