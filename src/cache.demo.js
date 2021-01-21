// 闭包的实际应用

// 闭包隐藏数据, 通过暴露的api来访问隐藏的数据
function createCache() {
  const data = {};
  
  return {
    get: function (key, val) {
      return data[key];
    },

    set: function (key, val) {
      data[key] = val;
    },
  }
};