/** 
 * 适配器模式
 * 1. 原来的接口不适用现在的业务需求，调用者与提供者之间需要进行一层转换，适配器，就是中间
 * 进行转换的东西。
 * adaptee 提供者， target 转换
 */

// 提供者 (不适用调用者的要求)
class Adaptee {
  specificRequest() {
    return '美国标准';
  }
};

// 转换
class Target {
  constructor() {
    this.adaptee = new Adaptee();
  };
  // 进行转换
  request() {
    let info = this.adaptee.specificRequest();
    return `${info} -> 转换器 -> 中国标准`;
  }
};

// 调用者 （测试）
const target = new Target();
const res = target.request();

console.log(res);


/**  
 * 场景：1.封装旧的接口， 2. vue 中computed
*/