export class duration {
    constructor(duration = 1000) {
        this.num = 1
        this.time = duration
        this.timer = null
        this.callbakc = null
    }
    start() {
        this.timer = setInterval(() => {
            this.callbakc && this.callbakc(this.num)
            this.num++
        }, this.time);
    }
    stop() {
        clearInterval(this.timer)
        this.timer = null
    }
}