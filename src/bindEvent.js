function bindEvent (elem, type, selector, fn) {
  if (fn == null) {
    fn = selector;
    selector = null;
  };

  elem.addEventListener(type, event => {
    const target = event.target;

    if (selector) {
      // 代理绑定
      if(target.matchs(selector)) {
        fn.call(target, event);
      };
    } else {
      // 普通绑定
      fn.call(target, event);
    }
  })
};