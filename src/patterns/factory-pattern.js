/** 
 * 工厂模式
 * 将new 操作单独封装
 * 遇到new的时候，就要考虑是否该使用工厂模式
 */
// 统一类
class Product {
  constructor(name) {
    this.name = name;
  }
  init() {
    alert('初始化！')
  }
  func1() {
    alert('执行了func1')
  }
  func2() {
    alert('执行了func2')
  }
};

// 工厂函数
class Creator{
  create() {
    return new Product()
  }
}

// 测试
let creater = new Creator();
let p = creater.create('p1'); // 属性传入，构造她的实例，然后具备了一些统一的想法
p.init();
p.func1();

// 场景
// Jquery， React 中的createElement, vue中的异步组件

/**  
 * 总结： 
 *  构造函数与创建者分离
 *  符合开放封闭原则
 */