function Game() {
    this.timer = null
    this.score = 0
    this.speed = speed
    this.move = function () {
        snake.move()
    }
    this.die = function () {
        this.over()
    }
    this.eat = function () {
        snake.move(true)
        food.updata()
        this.score = this.score + 1
        if (this.score % 2 === 0) {
            clearInterval(this.timer)
            this.speed = this.speed * 0.98
            this.start()
        }
    }
}
Game.prototype.start = function () {
    this.timer = setInterval(() => {
        var info = snake.start()
        this[info.type]()
    }, this.speed);
}
Game.prototype.over = function () {
    clearInterval(this.timer)
}
Game.prototype.init = function () {
    ground.init()
    snake.init()
    food.init()
    document.onkeydown = function (e) {
        switch (e.key) {
            case "ArrowUp":
                if (snake.direction !== "bottom") {
                    snake.direction = "top"
                }
                break;
            case "ArrowRight":
                if (snake.direction !== "left") {
                    snake.direction = "right"
                }
                break;
            case "ArrowLeft":
                if (snake.direction !== "right") {
                    snake.direction = "left"
                }
                break;
            case "ArrowDown":
                if (snake.direction !== "top") {
                    snake.direction = "bottom"
                }
                break;
        }
    }
}

var Game = Tool.signal(Game)
var game = new Game()
game.init()
game.start()