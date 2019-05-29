const person = {
  name: "xf",
  isHuman: false,
  printIntroduction: function() {
    console.log(`My name is ${this.name}. Am I human? ${this.isHuman}`);
  }
};

const me = Object.create(person, {
  foo: {
    writable: true,
    configurable: true,
    value: "hello"
  },
  name: {
    value: "小花"
  }
});

console.log(me.foo);
console.log(me.isHuman);
me.printIntroduction();

// expected output: "My name is Matthew. Am I human? true"
