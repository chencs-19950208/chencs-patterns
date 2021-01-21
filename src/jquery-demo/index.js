/**
 * 模拟jquery得库
 * dom操作api
 * @class Jquery
 */
class Jquery {
  constructor(selector) {
    const result = document.querySelectorAll(selector);
    const length = result.length;
    for (let i = 0; i < length; i++) {
      this[i] = result[i];   // dom属性依次遍历写入this中
    };
    this.length = length;
    this.selector = selector;
  };

  get(index) {
    return this[index];
  };

  each(fn) {
    for (let i = 0; i < this.length; i++) {
      const elem = this[i];
      fn(elem);
    }
  };
  
  on(type, fn) {
    return this.each(elem => {
      elem.addEventListener(type, fn, false);
    })
  };
}

const $ = new Jquery();

// jquery插件
Jquery.prototype.xxx = function () {};

// 扩展 (通过继承，在原来得基础上扩展)
class myJquery extends Jquery {
  constructor(selector) {
    super(selector);
  };
}