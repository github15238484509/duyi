var Ground = Tool.signal(Tool.extends(Square))
var ground = new Ground(groundX, groundY, groundWidht, groundHeight)
ground.updataBackground(groundColor)
ground.init = function () {
    this.render()
    var fragment = document.createDocumentFragment()
    for (let i = 0; i < map.length; i++) {
        for (let j = 0; j < map[i].length; j++) {
            var wall = null
            if (i === 0 || j === 0 || i === map.length - 1 || j === map[i].length - 1) {
                wall = new Wall(i * width, j * height, width, height)
                wall.updataBackground(wallColot)
                wall.type="die"
            } else {
                wall = new Floor(i * width, j * height, width, height)
                wall.updataBackground(floorColor)
                wall.type="move"
            }
            wall.render()
            map[i][j] = wall
            fragment.appendChild(wall.dom)
        }
    }
    this.dom.appendChild(fragment)
    document.body.appendChild(this.dom)
    
}
ground.append = function (suqare) {
    var x = suqare.x / width
    var y = suqare.y / height
    this.remove(x, y)
    map[x][y] = suqare
    ground.dom.appendChild(suqare.dom)
}
ground.remove = function (x, y) {
    var dom = map[x][y]
    dom.dom.remove()
    map[x][y] = null
}
ground.getNextType = function (x,y) {
    return map[x][y]
}


// ground.init()