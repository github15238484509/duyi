// 创建个大地类 Land

// 获取天空的位置信息
const landdom = document.querySelector(".land")
const getLandStyle = getComputedStyle(landdom)
const landWidht = parseFloat(getLandStyle.width);
const landheight = parseFloat(getLandStyle.height);
const landTop = document.querySelector(".container").offsetHeight - landheight - 4
class Land extends Rect {
    constructor(widht, height, left, top, xspeed, yspeed, dom) {
        super(widht, height, left, top, xspeed, yspeed, dom)
    }
    move(num) {
        super.move(num)
        if (this.left <= -landWidht / 2) {
            this.left = 0
        }
    }
}

// const land = new Land(landWidht, landheight, 0, landTop, -100, 0, landdom)
// setInterval(() => {
//     land.move(16 / 1000)
// }, 16);