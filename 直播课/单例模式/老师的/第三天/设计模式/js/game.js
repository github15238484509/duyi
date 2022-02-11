// 游戏控制类，起到整个游戏的控制作用
var game = new Game();
game.timer = null; // 计时器
game.score = 0; // 记分
game.isGameOver = false; // 游戏是否结束

// 游戏初始化
game.init = function () {
    ground.init();
    snake.init();

    // 玩家可以上下左右的控制蛇的方向
    document.onkeydown = function (e) {
        if (e.key === "ArrowLeft" && snake.direction != directionNum.right) {
            snake.direction = directionNum.left;
        } else if (e.key === "ArrowRight" && snake.direction != directionNum.left) {
            snake.direction = directionNum.right;
        } else if (e.key === "ArrowUp" && snake.direction != directionNum.bottom) {
            snake.direction = directionNum.top;
        } else if (e.key === "ArrowDown" && snake.direction != directionNum.top) {
            snake.direction = directionNum.bottom;
        }
    }

    document.getElementById("btn").onclick = function () {
        game.start();
    }

    // 初始化食物
    createFood();
}

// 游戏开始
game.start = function () {
    // 其实就是装一个定时器，不停的调用蛇 getNextSquare 方法
    if (!this.isGameOver) {
        this.timer = setInterval(function () {
            snake.getNextSquare();
        }, intervalTime);
    }
}

// 游戏结束
game.over = function () { 
    clearInterval(this.timer);
    if(window.confirm(`您的得分为${this.score}分，是否重新开始游戏？`)){
        this.init();
    }
}

game.init();

/**
 * 创建食物的函数
 */
function createFood() {
    // 首先需要确定食物的坐标，随机生成一个食物坐标
    var x = null;
    var y = null;

    // 虽然食物的坐标是随机的，但是也要排除一些特殊的点
    var flag = true;
    while (flag) {
        // 首先排除围墙，取1-28之间的随机数
        x = Math.floor(Math.random() * (tr - 2) + 1);
        y = Math.floor(Math.random() * (tr - 2) + 1);

        // 排除食物不在蛇身上
        var ok = true; // for 循环跳出的条件
        for (var node = snake.head; node; node = node.next) {
            if (x === node.x && y === node.y) {
                // 进入此 if，说明当前生成的小方块在蛇头或者蛇身上面
                ok = false;
                break;
            }
        }
        if(ok){
            flag = false;
        }
    }
    var food = SquareFactory.create('Food',x,y,'red');
    ground.remove(x,y);
    ground.append(food);
}