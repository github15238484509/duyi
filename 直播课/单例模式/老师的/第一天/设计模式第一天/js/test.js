// 返回能够创建单例的构造函数
function getSingle(fn) {
  var instance = null; // 存储实例对象
  return function () {
      if (instance !== null) {
          return instance;
      }
      fn.apply(this, arguments);
      instance = this; // 将创建出来的实例对象赋值给 instance，下一次直接进入 if 然后 return
     
  }
}

// 人类构造函数
var Person = function (name, age) {
  this.name = name;
  this.age = age;
}

// 获取新的构造函数
var singlePerson = new getSingle(Person);
var xiejie = new singlePerson("xiejie",18);
var weiwei = new singlePerson("weiwei",18);