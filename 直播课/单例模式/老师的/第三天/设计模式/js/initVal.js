// 该文件用于存放一些全局性的东西

// 游戏区域大小
var tr = 30; // 行 
var td = 30; // 列

// 每个方块的大小
var squareWidth = 20;

// 游戏舞台距离浏览器边缘的位置
var positionX = 200;
var positionY = 100;

// 蛇移动的速度
var intervalTime = 300;

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
// 这里补充一个 update 的方法
// 我们知道，有一些类是单例类，只会创建一个小方块对象
// 例如食物和蛇头，但是这两个小方块我们又需要能够移动的效果
// 所以我们新增一个 update 方法，用于更新小方块的坐标
Square.prototype.update = function(x, y){
  this.x = x;
  this.y = y;
  this.viewContent.style.left = x * squareWidth + "px";
  this.viewContent.style.top = y * squareWidth + "px";
}


// 这个是一个测试方法
Square.prototype.collide = function(){
  console.log("this is a test");
}

var Ground = tool.single(Square); // 游戏场景的构造函数，有且只有一个，所以采用的是单例模式

// 经过分析，我们发现还有地板、墙、蛇头、蛇身体、蛇、食物
// 首先生成上面各自的构造函数（类）

var Food = tool.single(Square); // 食物类

var Floor = tool.extends(Square); // 地板类
var Wall = tool.extends(Square); // 围墙

var SnakeHead = tool.single(Square); // 蛇头
var SnakeBody = tool.extends(Square); // 蛇身体
var Snake = tool.single(); // 蛇

// 游戏里面的地板是由多个小方块组成
// var floor1 = new Floor(positionX + squareWidth, positionY+squareWidth, squareWidth,squareWidth);
// var floor2 = new Floor(positionX + squareWidth*2, positionY+squareWidth, squareWidth,squareWidth);
// var floor3 = new Floor(positionX + squareWidth*3, positionY+squareWidth, squareWidth,squareWidth);

// var wall1 = new Wall(...);
// var wall2 = new Wall(...);

// 我们期望有那么一个像工厂的东西，能够批量的生成对象，并且这个工厂有不同的流水线
// 不同的流水线生产不同的产品

// var floor1 = SquareFactory.create('Floor',x,y,'gray');
// var wall1 = SquareFactory.create('Wall',x,y,'black');

// 因此，我们的工厂大致就应该是
// SquareFactory.create('方块类型', x坐标, y坐标, '颜色');
// 传入对应的参数，就会给我们返回不同类型的小方块

// 最后生成一个游戏类的构造函数
var Game = tool.single();