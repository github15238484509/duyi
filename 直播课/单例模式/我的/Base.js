var tr = 30; //水平有多少个方块
var td = 30; //垂直有多少个方块
var width = 20; //小方块的宽度
var height = 20; //小方块的高度
var speed = 300; // 蛇头移动的速度
var snakeDirection = 'bottom' //蛇的默认移动方向
var groundX = 100; //地图在页面水平的位置
var groundY = 100; //地图在页面垂直的位置

var groundWidht = tr * width; //地图的宽度
var groundHeight = td * height; //地图的宽度

function getMap(tr, td) {
    var map = new Array(tr)
    for (let x = 0; x < tr; x++) {
        map[x] = new Array(td)
    }
    return map
}
var map = getMap(tr, td) //生成地图

var groundColor = "#967701"
var wallColot = "black"
var floorColor = "gray"
var snakeHeadColor = "green"
var snakeBodyColor = "pink"
var foodColor = "red"