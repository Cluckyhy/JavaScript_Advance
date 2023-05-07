var name = "window";

/* 
new
  1、创建一个空对象
  2、执行prototype
  3、将this指向这个空对象，并执行函数体中代码
  4、将这个新的对象默认返回
*/

// {} -- 对象
// {} -- 代码块
function Person(name) {
  this.name = name;
  this.obj = {
    name: "obj",
    foo1: function () {
      return function () {
        console.log(this.name);
      };
    },
    foo2: function () {
      return () => {
        console.log(this.name);
      };
    },
  };
}

// person1/person2都是对象实例
var person1 = new Person("person1");
var person2 = new Person("person2");

person1.obj.foo1()() // 默认绑定，window
person1.obj.foo1.call(person2)() // 默认绑定，window
person1.obj.foo1().call(person2) // 显式绑定，person2

person1.obj.foo2()() // 上层作用域查找，obj
person1.obj.foo2.call(person2)() // 上层作用域查找，person2
person1.obj.foo2().call(person2) // 上层作用域查找，obj