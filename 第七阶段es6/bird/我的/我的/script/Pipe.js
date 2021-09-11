// 创建一个柱子
class Pipe extends Rect {
    constructor(width, height, left, top, xspeed, yspeed, dom) {
        super(width, height, left, top, xspeed, yspeed, dom)
    }
    move(num) {
        super.move(num)
    }
}

function random(min, max) {
    return Math.floor(Math.random() * (max - min) + min)
}

// 创建一对柱子
class DoublePipe {
    constructor(width, left, xspeed) {
        // 获取天空的高度 skyheight  150 默认的柱子间的缝隙 80 最低的柱子高度
        const height = skyheight - 150; //两个柱子的总高和
        const UPpipeHeight = random(80, height - 80)
        const DownpipeHeight = height - UPpipeHeight

        const upPipe = document.createElement("div");
        upPipe.className = "pipe up";
        this.up = new Pipe(width, UPpipeHeight, left, 0, xspeed, 0, upPipe);

        const downPipe = document.createElement("div");
        downPipe.className = "pipe down";
        this.down = new Pipe(width, DownpipeHeight, left, skyheight - DownpipeHeight, xspeed, 0, downPipe);

        const box = document.querySelector(".container")
        box.appendChild(this.up.dom)
        box.appendChild(this.down.dom)

    }
    get removeStatus() {
        return this.up.left <= -54
    }
    move(num) {
        this.up.move(num)
        this.down.move(num)
    }
    remove() {
        this.up.dom.remove()
        this.down.dom.remove()
    }
}
const pipeLeft = document.querySelector(".container").offsetWidth - 4



class PipeGroup {
    constructor(createTime) {
        this.group = [];
        this.createTime = createTime;
        this.timer = null;
    }
    move(num) {
        for (let i = 0; i < this.group.length; i++) {
            var item = this.group[i];
            item.move(num)
            if (item.removeStatus) {
                this.group.splice(i, 1)
                item.remove()
                i--
            }
        }
    }
    createPipe() {
        if (this.timer) {
            return
        }
        this.timer = setInterval(() => {
            this.group.push(new DoublePipe(54, pipeLeft, -100))
        }, 2000);
    }
    stopPipe() {
        clearInterval(this.timer)
    }
}

// const pipegroup = new PipeGroup(2000)
// pipegroup.createPipe()
// setInterval(() => {
//     pipegroup.move(16 / 1000)
// }, 16);