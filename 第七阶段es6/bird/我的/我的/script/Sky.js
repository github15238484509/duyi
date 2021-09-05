// 创建个天空类 sky

// 获取天空的位置信息
const skydom = document.querySelector(".sky")
const getSkyStyle = getComputedStyle(skydom)
const skyWidht = parseFloat(getSkyStyle.width);
const skyheight = parseFloat(getSkyStyle.height);
class Sky extends Rect {
    constructor(widht, height, left, top, xspeed, yspeed, dom) {
        super(widht, height, left, top, xspeed, yspeed, dom)
        this.stop = false
    }
    move(num) {
        if (this.stop) {
            return
        }
        super.move(num)
        if (this.left <= -skyWidht / 2) {
            this.left = 0
        }
    }
}

// const sky = new Sky(skyWidht, skyheight, 0, 0, -100, 0, skydom)
// setInterval(() => {
//     sky.move(16 / 1000)
// }, 16);