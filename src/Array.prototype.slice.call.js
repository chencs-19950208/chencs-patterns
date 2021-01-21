const test = {
  0: 'a1',
  1: 'a2',
  2: 'a3',
  length: 3,
};

// 对象中一定要包含length属性 (key必须是数组下标，就可以转化成数组)
const test1 = Array.prototype.slice.call(test);
console.log(test1, 'test1');
for(let i = 0; i < test1.length; i++) {
  console.log(test1[i]);
};