var ground = new Ground(positionX, positionY, tr * squareWidth, td * squareWidth);
// console.log(ground);

ground.init = function() {
    // 主要初始化 ground 对象的 dom 元素
    this.viewContent.style.position = "absolute";
    this.viewContent.style.left = this.x + "px";
    this.viewContent.style.top = this.y + "px";
    this.viewContent.style.width = this.width + "px";
    this.viewContent.style.height = this.height + "px";
    this.viewContent.style.background = "orange";

    document.body.appendChild(this.viewContent);

    // 有了工厂之后，我们通过这个工厂来创建地板和围墙

    this.squareTable = []; // 这个其实是一个二维数组，里面用于存储每一行的小方块
    for (var y = 0; y < tr; y++) {
        this.squareTable[y] = new Array(td);
        for (var x = 0; x < td; x++) {
            // 这里需要一个判断，有些坐标的小方块是围墙，有些坐标的小方块是地板
            if (x === 0 || x === td - 1 || y === 0 || y === tr - 1) {
                var newSquare = SquareFactory.create('Wall', x, y, 'black');
            } else {
                var newSquare = SquareFactory.create('Floor', x, y, 'gray');
            }
            this.squareTable[y][x] = newSquare;
            this.viewContent.appendChild(newSquare.viewContent);
        }
    }
}

// ground.init();

/**
 * 往舞台上面添加一个方块
 */
ground.append = function(square){
  this.viewContent.appendChild(square.viewContent); // 视觉上面方块添加上去
  // 二维数组也要做变化，因为回头是根据数组的数据来做各种判断
  this.squareTable[square.y][square.x] = square;
}

/**
 * 删除舞台上面的一个小方块
 */
ground.remove = function(x, y){
  var currentSquare = this.squareTable[y][x];
  this.viewContent.removeChild(currentSquare.viewContent);
  this.squareTable[y][x] = null;
}