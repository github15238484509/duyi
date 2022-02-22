var snake = new Snake();
snake.head = null; // 存储蛇头的对象
snake.tail = null; // 存储蛇的蛇尾

snake.init = function(){
  // 创建蛇头
  var snakeHead = SquareFactory.create('SnakeHead', 3, 1, 'deeppink');

  // 创建蛇身体
  var snakeBody1 = SquareFactory.create('SnakeBody', 2, 1, 'green');
  var snakeBody2 = SquareFactory.create('SnakeBody', 1, 1, 'green');

  snake.head = snakeHead;
  snake.tail = snakeBody2;

  // 接下来就需要将这些对象的 DOM 对象添加到舞台上面
  ground.remove(snakeHead.x, snakeHead.y);
  ground.append(snakeHead)

  ground.remove(snakeBody1.x,snakeBody1.y);
  ground.append(snakeBody1);

  ground.remove(snakeBody2.x,snakeBody2.y);
  ground.append(snakeBody2);
}

snake.init();