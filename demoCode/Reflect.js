var myObject = {
  foo: 1,
  bar: 2,
  get baz() {
    return this.foo + this.bar;
  },
  set baz(val) {
    return val;
  }
};
const myReceiverObject = {
  foo: 0
};

Reflect.set(myObject, "foo", "100", myReceiverObject);
console.log(myReceiverObject);

console.log(
  Reflect.get(myObject, "foo"),
  Reflect.get(myObject, "bar"),
  Reflect.get(myObject, "baz")
);
