// 创建游戏类
class Game {
    constructor() {
        this.land = new Land(landWidht, landheight, 0, landTop, -100, 0, landdom);
        this.sky = new Sky(skyWidht, skyheight, 0, 0, -100, 0, skydom)
        this.pipegroup = new PipeGroup(2000);
        this.bird = new Bird(birdWidht, birdheight, 100, 10, 0, 0, briddom);
        this.timer = null;
        this.gameover = false;
    }
    move(num) {
        this.bird.move(num)
        this.land.move(num)
        this.sky.move(num)
        this.pipegroup.move(num)
    }
    start(num) {
        if (this.timer) {
            return
        }
        this.event()
        this.pipegroup.createPipe()
        this.bird.starSwing()
        this.timer = setInterval(() => {
            this.move(num)
            this.overGame()
        }, 16);
    }
    stop() {
        this.bird.stopSwing()
        this.pipegroup.stopPipe()
        clearInterval(this.timer)
        this.gameover = true
    }
    event() {
        window.onkeydown = (e) => {
            if (e.code === 'Space') {
                if (this.gameover) {
                    window.location.reload()
                }
                this.bird.jump()
            }
        }
    }
    isHit(rec1, rec2) {
        // 横向：两个矩形的中心点的横向距离，是否小于矩形宽度之和的一半
        // 纵向：两个矩形的中心点的纵向距离，是否小于矩形高度之和的一半
        var centerX1 = rec1.left + rec1.width / 2;
        var centerY1 = rec1.top + rec1.height / 2;
        var centerX2 = rec2.left + rec2.width / 2;
        var centerY2 = rec2.top + rec2.height / 2;
        var disX = Math.abs(centerX1 - centerX2); //中心点横向距离
        var disY = Math.abs(centerY1 - centerY2); //中心点总想距离
        if (disX < (rec1.width + rec2.width) / 2 &&
            disY < (rec1.height + rec2.height) / 2
        ) {
            return true;
        }
        return false;
    }
    overGame() {
        if (this.bird.top === this.bird.minHei || this.bird.top >= this.bird.maxHei) {
            this.stop()
        }
        for (let i = 0; i < this.pipegroup.group.length; i++) {
            const pair = this.pipegroup.group[i];
            //看柱子对pair是否跟bird进行了碰撞
            if (this.isHit(this.bird, pair.up) || this.isHit(this.bird, pair.down)) {
                this.stop()
            }
        }

    }
}

var game = new Game()
game.start(16 / 1000)