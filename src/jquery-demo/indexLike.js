// Array.prototype.slice.call(arguments)能将具有length属性的对象转成数组
class JqueryLike {
  constructor(selector) {
    let slice = Array.prototype.slice;
    let dom = slice.call(document.querySelectorAll(selector));
    let len = dom ? dom.length : 0
    for(let i = 0; i < len; i++) {
      this[i] = dom[i];
    };
    this.length = len;
    this.selector = selector;
  };

  append(node) {
    // ...
  };

  addClass(node) {
    // ...
  };

  html(node) {
    // ...
  };
};

window.$ = function(selector) {
  // 工厂模式
  return new JqueryLike(selector);
};

// 测试代码
let $p = $('p');
console.log($p, '$p')
console.log($p.addClass, 'addClass');