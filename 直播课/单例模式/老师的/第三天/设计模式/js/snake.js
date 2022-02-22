var snake = new Snake();
snake.head = null; // 存储蛇头的对象
snake.tail = null; // 存储蛇的蛇尾

// 该对象用于和蛇头坐标做计算，得出下一个方块的坐标
var directionNum = {
  left : {x : -1, y : 0},
  right : { x : 1, y : 0},
  top : {x : 0, y: -1},
  bottom : {x : 0, y : 1}
}

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

  // 昨天已经将蛇绘制出来了，今天首先将蛇每一个方块链接起来
  // 通过 next 或者 last 属性可以找到当前小方块的上一个或者下一个小方块
  // 初始化链表
  snakeHead.next = snakeBody1;
  snakeHead.last = null;

  snakeBody1.next = snakeBody2;
  snakeBody1.last = snakeHead;

  snakeBody2.next = null;
  snakeBody2.last = snakeBody1;

  // 我们初始化链表的目的是为了方便我们找到某一个方块的下一个方块
  // 但是这里有一个问题，哪一个是下一个？？
  // 这个就要根据方向来决定了
  this.direction = directionNum.right; // 默认往右边移动
}

// 根据当前蛇头的坐标获取到下一个小方块
snake.getNextSquare = function(){
  var nextSquare = ground.squareTable[this.head.y + this.direction.y][this.head.x + this.direction.x];
  // 获取到下一个小方块后，该小方块上面有一个标识
  // 该标识是什么，接下来蛇的行为就是什么
  this.collideMethod[nextSquare.collide](nextSquare);
}

snake.collideMethod = {
  // 蛇移动
  /**
   * 
   * @param {*} square 是下一个小方块
   * @param {*} isEat 是一个布尔值 如果吃到了食物就是 true，没吃到就是false
   */
  move(square, isEat){
    // console.log("move");
    // 首先我们在旧蛇头的位置创建一个新的身体
    var newBody = SquareFactory.create("SnakeBody",snake.head.x, snake.head.y,'green');

    // 更新链表
    newBody.next = snake.head.next;
    newBody.last = null;
    newBody.next.last = newBody;
    // 链表更新完之后，就可以将这个小方块加入到舞台了
    ground.remove(snake.head.x, snake.head.y);
    ground.append(newBody);

    // 在碰撞的位置添加一个新的蛇头
    var newHead = SquareFactory.create("SnakeHead", square.x, square.y,'deeppink');

    // 更新链表
    newHead.next = newBody;
    newHead.last = null;
    newBody.last = newHead;

    // 接下来可以将新的蛇头添加到舞台上面了
    ground.remove(square.x, square.y);
    ground.append(newHead);

    // 接下来根据 isEat 这个布尔值来决定是否删除最后一个身体
    if(!isEat){
      // 说明就要删除最后一个身体
      var newFloor = SquareFactory.create("Floor",snake.tail.x,snake.tail.y,"grey");
      ground.remove(snake.tail.x, snake.tail.y);
      ground.append(newFloor);
      // 不要忘了更新蛇尾
      snake.tail = snake.tail.last;
    }
  },
  // 吃东西
  eat(square){
    this.move(square, true);
    game.score++;
    // 添加判断，到了一定分数，修改 timer 的值
    createFood();
  },
  // 死掉了
  die(){
    game.over();
  }
}

// snake.init();