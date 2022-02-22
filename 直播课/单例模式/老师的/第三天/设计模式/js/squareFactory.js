// 工厂

function SquareFactory(){} // 厂房

const sf = new SquareFactory();
// const sf = new SquareFactory();
// sf.Food(1,2,3);
// sf.Floor(1,2,3);

// 有了厂房之后，我们就需要创建不同的流水线，用来生产不同类型的小方块

//这个就是生产地板的流水线
SquareFactory.prototype.Floor = function(x, y, color){
  var floor = new Floor(x, y, squareWidth, squareWidth);
  // 接下来就需要初始化该 DOM 对象的信息
  // 由于其他的流水线在生产好小方块后都需要做这个事情，所以我们统一书写一个 init 方法
  this.init(floor, color, 'move');
  return floor;
}


// 生产墙的流水线
SquareFactory.prototype.Wall = function(x, y, color){
  var wall = new Wall(x, y, squareWidth, squareWidth);
  // 接下来就需要初始化该 DOM 对象的信息
  // 由于其他的流水线在生产好小方块后都需要做这个事情，所以我们统一书写一个 init 方法
  this.init(wall, color, 'die');
  return wall;
}


// 生产蛇头的流水线
SquareFactory.prototype.SnakeHead = function(x, y, color){
  var snakeHead = new SnakeHead(x, y, squareWidth, squareWidth);
  // 接下来就需要初始化该 DOM 对象的信息
  // 由于其他的流水线在生产好小方块后都需要做这个事情，所以我们统一书写一个 init 方法
  this.init(snakeHead, color, 'die');
  // 蛇头是单例模式生成的对象，所以后面再创建的时候，更新坐标
  snakeHead.update(x,y);
  return snakeHead;
}

// 生产蛇身体的流水线
SquareFactory.prototype.SnakeBody = function(x, y, color){
  var snakeBody = new SnakeBody(x, y, squareWidth, squareWidth);
  // 接下来就需要初始化该 DOM 对象的信息
  // 由于其他的流水线在生产好小方块后都需要做这个事情，所以我们统一书写一个 init 方法
  this.init(snakeBody, color, 'die');
  return snakeBody;
}

// 生产食物
SquareFactory.prototype.Food = function(x, y, color){
  var food = new Food(x, y, squareWidth, squareWidth);
  // 接下来就需要初始化该 DOM 对象的信息
  // 由于其他的流水线在生产好小方块后都需要做这个事情，所以我们统一书写一个 init 方法
  this.init(food, color, 'eat');
  // 由于食物是单例模式生成的对象，所以需要更新坐标
  food.update(x,y);
  return food;
}


/**
 * 
 * @param {*} square 要初始化的方块对象
 * @param {*} color 颜色
 * @param {*} action 方块的行为（不同小方块对应的蛇的行为不同，但是这是明天的内容）
 */
SquareFactory.prototype.init = function(square, color, action){
  square.viewContent.style.position = "absolute";
  square.viewContent.style.width = square.width + "px";
  square.viewContent.style.height = square.height + "px";
  square.viewContent.style.background = color;

  square.viewContent.style.left = square.x * square.width + "px";
  square.viewContent.style.top = square.y * square.width + "px";

  square.collide = action; // 该属性用于记录蛇头碰到该方块时要做的行为
}



/**
 * 
 * @param {*} type 方块类型
 * @param {*} x x 坐标
 * @param {*} y y 坐标
 * @param {*} color 颜色
 */
// SquareFactory.create('Floor',x,y,'gray');
// SquareFactory.create('Wall',x,y,'black');
// 这个才是对外暴露的接口
SquareFactory.create = function(type, x, y, color){
  // 根据传入的参数，开始生产对应的方块
  return sf[type](x, y, color);
}