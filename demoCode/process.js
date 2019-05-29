console.log(process.argv.slice(2))
console.log(process.versions)
console.log(process.platform)
console.log(process.cw)
class Foo {
  static bar() {
      console.log(this,"static bar")
    this.baz();

  }
  static baz() {
    console.log('hello'," static baz");
  }
  baz() {
    console.log(this,"baz")
    console.log('world');
  }
}

Foo.bar() // hello


let  f=new Foo()
f.baz()