var SnakeHead = Tool.signal(Tool.extends(Square))
var snakehead = new SnakeHead(3 * width, 1 * height, width, height)
snakehead.updataBackground(snakeHeadColor)
snakehead.render()
snakehead.type = "die"

var SnakeBody = Tool.extends(Square)
var SnakeBody1 = new SnakeBody(2 * width, 1 * height, width, height)
SnakeBody1.updataBackground(snakeBodyColor)
SnakeBody1.render()
SnakeBody1.type = "die"

var SnakeBody2 = new SnakeBody(1 * width, 1 * height, width, height)
SnakeBody2.updataBackground(snakeBodyColor)
SnakeBody2.render()
SnakeBody2.type = "die"

snakehead.last = null
snakehead.next = SnakeBody1

SnakeBody1.last = snakehead
SnakeBody1.next = SnakeBody2

SnakeBody2.last = SnakeBody1
SnakeBody2.next = null

var snake = {
    head: snakehead,
    tail: SnakeBody2,
    nextX: snakehead.x / width,
    nextY: snakehead.y / height,
    direction: snakeDirection,
    init() {
        ground.append(snakehead)
        ground.append(SnakeBody1)
        ground.append(SnakeBody2)
    },
    start() {
        this.getNext()
        return ground.getNextType(this.nextX, this.nextY)
    },
    getNext() {
        switch (this.direction) {
            case "left":
                this.nextX = this.nextX - 1
                this.nextY = this.nextY
                break;
            case "right":
                this.nextX = this.nextX + 1
                this.nextY = this.nextY
                break;
            case "top":
                this.nextX = this.nextX
                this.nextY = this.nextY - 1
                break;
            case "bottom":
                this.nextX = this.nextX
                this.nextY = this.nextY + 1
                break;
        }
    },
    move(status) {
        var create = new SnakeBody(this.head.x, this.head.y, width, height)
        create.updataBackground(snakeBodyColor)
        create.render()
        create.type = "die"
        ground.append(create)

        create.last = this.head
        create.next = this.head.next
        this.head.next = create
        create.next.last = create

        if(!status){
            var wall = new Floor(this.tail.x, this.tail.y, width, height)
            wall.updataBackground(floorColor)
            wall.render()
            wall.type = "move"
            ground.append(wall)
            
            var dao = this.tail.last
            dao.next = null
            this.tail = dao
        }

        this.head.updataPostion(this.nextX * width, this.nextY * height)
        ground.append(this.head)
    }
}