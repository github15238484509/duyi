// 工具文件，我们会书写一些工具方法
// 通过观察，我们发现整个游戏都是由一个一个小方块组成的
// 所以我们需要书写一个生产小方块的类

// 但是在此之前，我们先来书写一个工具对象

var tool = {
  inherit(target, origin){
    // 通过圣杯模式实现继承
    var F = function(){}
    F.prototype = origin.prototype;
    target.prototype = new F();
    target.prototype.constructor = target;
  },
  extends(origin){
    var target = function(){
      origin.apply(this,arguments);
    }
    this.inherit(target, origin);
    return target;
  },
  single(origin){
    var target = (function(){
      var instance = null;
      return function(){
        if(instance !== null){
          return instance;
        }
        origin && origin.apply(this,arguments);
        instance = this;
      }
    })();

    origin && this.inherit(target, origin);
    return target;
  }
}


// 接下来我们来对上面的工具对象进行一个测试

// function Square(x, y, width, height){
//   this.x = x;
//   this.y = y;
//   this.width = width;
//   this.height = height;
// }
// // 这个是一个测试方法
// Square.prototype.collide = function(){
//   console.log("this is a test");
// }

// // 测试：
// var Food = tool.single(Square);
// var f = new Food(10,20,30,40);
// var f2 = new Food(10,20,30,40);
// console.log(f === f2); // true
// f.collide();