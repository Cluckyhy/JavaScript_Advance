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
  this.foo1 = function () {
    console.log(this.name);
  };
  this.foo2 = () => console.log(this.name);
  this.foo3 = function () {
    return function () {
      console.log(this.name);
    };
  };
  this.foo4 = function () {
    // 第一个表示式this -> person1
    // 第二个表示式this -> person2
    // 第三个表示式this -> person1
    return () => {
      console.log(this.name);
    };
  };
}

// person1/person2都是对象实例
var person1 = new Person("person1");
var person2 = new Person("person2");

person1.foo1(); // 隐式绑定，person1
person1.foo1.call(person2); // 显式绑定，person2

person1.foo2(); // 上层作用域查找，person1
person1.foo2.call(person2); // 上层作用域查找，person1

person1.foo3()(); // 默认绑定，window
person1.foo3.call(person2)(); // 默认绑定，window
person1.foo3().call(person2); // 显式绑定，person2

person1.foo4()(); // 上层作用域查找，person1
person1.foo4.call(person2)(); // 上层作用域查找，person2
person1.foo4().call(person2); // 上层作用域查找，person1
