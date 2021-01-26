/** 
 * 装饰器模式
 * a中本省具备1，2 方法
 * 通过装饰器之后拥有了1，2，3的方法
 * 且a中仍然是1， 2方法
 */

// 原型
class Circle {
  draw() {
    console.log('画了一个圆形');
  }
}

// 装饰器
class Decorator {
  constructor(circle) {
    this.circle = circle;
  };

  draw() {
    // console.log(this.circle);
    this.circle.draw();
    this.setDecorator(this.circle);
  };

  setDecorator(circle) {
    console.log('画了一个边框');
  };
};


// 测试
let cir = new Circle();
cir.draw();


console.log('---分割线---');

let dec = new Decorator(cir);
console.log(dec)
dec.draw();


/** 
 * 场景：
 * 1. ES7装饰器
 * 2. core-decorator
 */

// ES7装饰器
@test
class Demo{
  constructor() {

  }
};

function test (target) {
  target.isDec = true;
};

alert(Demo.isDec);