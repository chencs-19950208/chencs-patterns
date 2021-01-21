import Jquery from './jquery-demo/index';
import Bind from './bind-demo';
import promise from './promise-demo';
// class person {
//   constructor(name) {
//     this.name = name;
//   };

//   getName() {
//     return this.name;
//   };
// };

// let newPerson = new person('chencs');
// console.log(newPerson.getName());
/**  
 * 深拷贝
 */

const obj = {
  age: 20,
  name: 'chencs',
  address: {
    city: '杭州市'
  },
  arr: ['a', 'b', 'c']
};

const obj1 = deepClone(obj);
obj1.address.city = '上海';
console.log(obj.address.city); // obj 跟 obj1都变化了，拷贝之后修改obj1，不影响obj




