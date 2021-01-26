/**   
 * 单例模式
 * 系统中被唯一使用
 * 一个类只有一个实例，通俗说只能new 一个
 * js实现单例模式，不像java那样，当多此new的时候，会报错
 * 虽然js 能够模拟实现单例模式，但是多此new的时候，不会报错。
 */

class Person {
  constructor(name) {
    this.name = name
  }
  login() {
    console.log(`${this.name}login in ........`)
  }
}

Person.getInstance = (function () {
  let instance;
  // 通过闭包的方式来实现像java中私有化
  return function() {
    if (!instance) {
      instance = new Person('系统');
    };
    
    return instance
  }
})()

let obj1 = Person.getInstance();
obj1.login();

let obj2 = Person.getInstance();
obj2.login();

console.log('obj1 === obj2', obj1 === obj2); // ture

// 但是无法避免，使用使用Person直接去new （可以通过模块化去控制在外部去new）
console.log('-------分割符-------');
let obj3 = new Person('系统');
obj3.login();
console.log(obj3 === obj1, 'obj3 === obj1'); // false


/**  
 * 应用场景
 * 1. Jquery 中 $符号
 * 2. 模拟登录框
 */

// 模拟登录框
class LoginItem {
  constructor() {
    this.state = 'hide';
  }
  show() {
    if (this.state === 'show') {
      console.log('已经存在');

      return;
    }

    this.state = 'show';
    console.log('登录框显示成功')
  }
  hide() {
    if (this.state === 'hide') {
      console.log('已经隐藏');
      return;
    };

    this.state = 'hide';
    console.log('登录框隐藏成功')
  }
};

LoginItem.getInstance = (function () {
  let instance;
  return function() {
    if (!instance) {
      instance = new LoginItem();
    };

    return instance;
  };
})()

let login1 = LoginItem.getInstance();
let login2 = LoginItem.getInstance();

login1.show();
login2.show();
login2.hide();
login1.hide();

console.log('login1 === login2', login1 === login2);