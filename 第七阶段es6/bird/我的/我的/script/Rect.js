//创建一个正方形的类


// 1.创建一个正方形的类 
//   他有宽高位置速度等信息
// 2.为他设置个移动方法
class Rect {
    constructor(width, height, left, top, xspeed, yspeed, dom) {

        this.width = width; //
        this.height = height; //
        this.left = left; //
        this.top = top; //
        this.xspeed = xspeed; //
        this.yspeed = yspeed; //
        this.dom = dom; //

    }
    move(duration) { //duartion 单位为秒
        console.log();
        this.left += this.xspeed * duration;
        this.top += this.yspeed * duration;
        this.render()
    }
    render() {
        this.dom.style.width = this.width + "px";
        this.dom.style.height = this.height + "px";
        this.dom.style.top = this.top + "px";
        this.dom.style.left = this.left + "px";
    }
}