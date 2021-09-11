// 创建个鸟类 

// 获取天空的位置信息
const briddom = document.querySelector(".bird")
const getBirdStyle = getComputedStyle(briddom)
const birdWidht = parseFloat(getBirdStyle.width);
const birdheight = parseFloat(getBirdStyle.height);
class Bird extends Rect {
    constructor(widht, height, left, top, xspeed, yspeed, dom) {
        super(widht, height, left, top, xspeed, yspeed, dom)
        this.g = 200;
        this.swing = 1;
        this.minHei = 0;
        this.maxHei = 600 - 27
        timer: null;
    }
    move(num) {
        super.move(num)
        this.yspeed += this.g * num;
        this.dom.className = `bird swing${this.swing}`
        if (this.top <= 0) {
            this.top = 0
        } else if (this.top >= this.maxHei) {
            this.top = this.maxHei
        }
    }
    jump() {
        this.yspeed = -150
    }
    starSwing() {
        if (this.timer) {
            return
        }
        this.timer = setInterval(() => {
            this.swing = (this.swing + 1) % 3 + 1
        }, 100);
    }
    stopSwing() {
        clearInterval(this.timer)
    }
}