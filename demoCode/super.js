// Super也可以在object initializer / literal 符号中使用。在下面的例子中，两个对象各定义了一个方法。在第二个对象中, 我们使用super调用了第一个对象中的方法。 当然，这需要我们先利用 Object.setPrototypeOf() 将obj2的原型加到obj1上，然后才能够使用super调用 obj1上的method1。
// var obj1 = {
//   method1() {
//     console.log("method 1");
//   }
// };

// var obj2 = {
//   method2() {
//     super.method1();
//   }
// };

// Object.setPrototypeOf(obj2, obj1);
// obj2.method2();

class Polygon {
  constructor({ ...props }) {
    console.log(props,"props-Polygon")
    for (const key in props) {
      this[key] = props[key];
    }
  }
  static sayName() {
    console.log("Hi, I am a ", this.name + ".");
  }
  getValue() {
    console.log("-------------------------------------------")
    console.log(this,"getValue-Polygon");
    console.log("-------------------------------------------")
    return "return-getValue";
  }
}

class Square extends Polygon {
  constructor(props) {
    // this.height;
    // ReferenceError，super 需要先被调用！

    /*
     这里，它调用父类的构造函数的 length, 
     作为Polygon 的 width和 height.
  */

    super(props);

    console.log(props, "props-Square");
    /*
      注意: 在派生的类中, 在你可以使用'this'之前, 必须先调用super()。
      忽略这, 这将导致引用错误。
  */
    this.name = "0000";
  }

  static say() {
    super.sayName();
  }

  get area() {
    console.log(this, "this");
    console.log(super.getValue(), "getValue-Square");

    return this.height * this.width;
  }

  set area(value) {
    this.area = value;
  }
}

let s = new Square({ height: 100, width: 200, name: "100" });

console.log(s.area);
console.log(Square.say());
console.log(s.getValue(), "new");
