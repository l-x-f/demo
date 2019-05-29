class Demo {
  constructor({ nickname, gender }) {
    this.nickname = nickname;
    this.gender = gender;
  }

  say() {
    console.log(this, "this-say");
    console.log(this.nickname);
  }
  static say() {
    console.log(this, "this-say-static");
    console.log(this.nickname);
  }

  handle() {
    console.log(this);
    this.say();
  }

  static handle() {
    console.log(this);
    this.say();
  }
}

class Children extends Demo {
  constructor({ nickname, gender }) {
    super({ nickname, gender });
  }

  childrenHandle() {
    super.handle();
  }

  static childrensay() {
    super.handle();
  }
}

// let demo = new Children({ nickname: "小明", gender: "女" });
// demo.childrenHandle();

Children.childrensay();
