var Food = Tool.signal(Tool.extends(Square))
var food = new Food(60, 200, width, height)
food.type = "eat"
food.updataBackground(foodColor)
food.render()

food.init = function () {
    ground.append(food)
}
food.updata = function () {
    var x = null;
    var y = null
    while (true) {
        x = Math.floor(Math.random() * tr)
        y = Math.floor(Math.random() * td)
        var type = ground.getNextType(x, y)
        if (type.type === "move") {
            break
        }
    }
    this.updataPostion(x * width, y * height) 
    ground.append(food)
}