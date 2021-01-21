/**
 * 模拟bind
 * apply , call, bind 第一个就是this，后面是参数
 * apply 后面是参数数组
 */
Function.prototype.bind1 = function () {
  // 参数拆解数组
  const args = Array.prototype.slice.call(arguments);
  
  // 取出this， 参数数组的第一项
  const t = args.shift();

  // 当前对象
  const self = this;

  return function () {
    return self.apply(t, args)
  };
};