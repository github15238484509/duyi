// 该文件用于存放一些全局性的东西

// 游戏区域大小
var tr = 30; // 行 
var td = 30; // 列

// 每个方块的大小
var squareWidth = 20;

// 游戏舞台距离浏览器边缘的位置
var positionX = 200;
var positionY = 100;

// 方块的构造函数，之后无论是食物，还是蛇头，蛇尾，围墙，地板都要通过 Square 构造函数
/**
 * 
 * @param {*} x 
 * @param {*} y 
 * @param {*} width 方块宽度
 * @param {*} height 方块高度
 * @param {*} dom 具体的 DOM 对象，如果没有就创建一个空的 div
 */
function Square(x, y, width, height, dom){
  this.x = x;
  this.y = y;
  this.width = width;
  this.height = height;
  this.viewContent = dom || document.createElement("div");
}
// 这个是一个测试方法
Square.prototype.collide = function(){
  console.log("this is a test");
}

var Ground = tool.single(Square); // 游戏场景的构造函数，有且只有一个，所以采用的是单例模式