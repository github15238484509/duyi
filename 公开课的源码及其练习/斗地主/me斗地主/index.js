var boxgame = document.querySelector(".game")

function Poker(value, color) {
    this.value = value
    this.color = color
    this.img = new Image()
    this.img.src = `./img/${value}_${color}.jpg`
    boxgame.appendChild(this.img)
}
Poker.prototype.setpostion = function(left, top) {
    this.img.style.left = left + "px"
    this.img.style.top = top + "px"
}

function Pokerstack(x, y, offsetx, offsety) {
    this.stack = []
    this.left = x
    this.top = y
    this.offsetx = offsetx
    this.offsety = offsety
}
Pokerstack.prototype.push = function(item) {
    this.stack.push(item)
}
Pokerstack.prototype.setpostion = function() {
        var index = 1000
        for (let i = 0; i < this.stack.length; i++) {
            this.stack[i].img.style.zIndex = index
            index = index - 1
            this.stack[i].setpostion(this.left + this.offsetx * i, this.top + this.offsety * i)
        }
    }
    // 创建五个stack  一个总的，四个小的
var allstack = new Pokerstack(200, 200, 0.3, 0.3)
var threestack = []
threestack[0] = new Pokerstack(0, 20, 0, 20) //left
threestack[1] = new Pokerstack(200, 0, 30, 0) //bottom
threestack[2] = new Pokerstack(500, 20, 0, 20) //right
threestack[3] = new Pokerstack(0, 20, 20, 0) //top

// 生成54张牌放在总stack中

function random54() {
    for (let i = 1; i <= 13; i++) {
        for (let j = 1; j <= 4; j++) {
            var item = new Poker(i, j)
            allstack.push(item)
        }
    }
    allstack.push(new Poker(14, 1))
    allstack.push(new Poker(15, 1))
    allstack.stack.sort(function(a, b) {
        return Math.random() - 0.5
    })
    allstack.setpostion()
}
random54()
    // 随机想4个stack放入牌
function random4() {
    var current = Math.floor(Math.random() * 3)
    while (allstack.stack.length !== 3) {
        threestack[current].stack.push(allstack.stack.shift())
        current = (current + 1) % 3
    }
    threestack[3].stack.push(allstack.stack.shift())
    threestack[3].stack.push(allstack.stack.shift())
    threestack[3].stack.push(allstack.stack.shift())
    for (let i = 0; i < 1; i++) {
        threestack[i].setpostion()
    }
}
random4()