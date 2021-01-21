/**
 * 深拷贝
 * @param {*} obj 
 */
export const deepClone = (obj = {}) => {
  if (typeof obj !== 'object' || obj == null) {
    // obj 是null， 不是数组，对象的时候，返回原值
    return obj;
  };

  // 初始化返回值
  let result;
  if (obj instanceof Array) {
    result = [];
  } else {
    result = {};
  }

  // 遍历属性 for...in 即可遍历数组也可遍历对象
  for(let key in obj) {
    if(obj.hanOwnProperty(key)) {
      result[key] = deepClone(obj[key]);
    };
  };

  return result;
}