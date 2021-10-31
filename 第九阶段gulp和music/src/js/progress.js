(function(root) {
    class Progess {
        constructor(audio) {
            this.audio = audio
            this.totalTime = 0
            this.audioId = null
            this.getDom()
        }
        init(time) {
            this.totalTime = time
            this.totalDom.innerHTML = this.formatTime(this.totalTime || 0)
        }
        getDom() {
            this.currentDom = document.querySelector(".curTime")
            this.totalDom = document.querySelector(".totalTime")
            this.circleDom = document.querySelector(".circle")
            this.frontBgDom = document.querySelector(".frontBg")
            this.dragDom = document.querySelector(".drag")
            this.event()
        }
        move() {
            var This = this;
            this.stop();
            if (this.audio.paused) {
                return
            }

            function start() {
                console.log(444);
                This.currentDom.innerHTML = This.formatTime(This.audio.currentTime || 0)
                This.circleDom.style.transform = `translateX(${((This.audio.currentTime / This.totalTime) * This.circleDom.parentElement.offsetWidth)}px)`
                This.circleDom.transtate = ((This.audio.currentTime / This.totalTime) * This.circleDom.parentElement.offsetWidth)
                This.frontBgDom.style.width = (This.audio.currentTime / This.totalTime) * 100 + '%'
                This.audioId = requestAnimationFrame(start)
            }
            start()
        }
        stop() {
            cancelAnimationFrame(this.audioId)
        }
        updatedTime(time) {
            this.audio.currentTime = time
        }
        formatTime(time) {
            var m = Math.floor(Math.floor(time) / 60);
            var s = Math.ceil(time) % 60;
            m = m < 10 ? "0" + m : m
            s = s < 10 ? "0" + s : s
            return m + ':' + s
        }
        event() {
            var This = this
            console.log(this.audio);
            this.dragDom.addEventListener("touchstart", function(e) {
                var per = (e.changedTouches[0].clientX - this.offsetLeft) / this.offsetWidth;
                This.circleDom.style.transform = `translateX(${(per * This.circleDom.parentElement.offsetWidth)}px)`
                This.frontBgDom.style.width = per * 100 + '%'
                This.currentDom.innerHTML = This.formatTime(per * This.totalTime)
                This.updatedTime(per * This.totalTime)
            })

            this.circleDom.addEventListener("touchstart", function(e) {
                e.stopPropagation()
                e.preventDefault()
                this.classList.add("active")
                this.disx = e.changedTouches[0].clientX
                this.disOK = this.transtate || 0
                This.stop()
                console.log(this.disOK);
            })
            this.circleDom.addEventListener("touchmove", function(e) {
                e.stopPropagation()
                e.preventDefault()
                var l = this.disOK + e.changedTouches[0].clientX - this.disx
                if (l <= 0) {
                    l = 0
                } else if (l > this.parentElement.offsetWidth) {
                    l = this.parentElement.offsetWidth
                }
                This.circleDom.style.transform = `translateX(${l}px)`
                this.transtate = l
                This.frontBgDom.style.width = (l / this.parentElement.offsetWidth) * 100 + '%'
                This.currentDom.innerHTML = This.formatTime(l / this.parentElement.offsetWidth * This.totalTime)
            })
            this.circleDom.addEventListener("touchend", function(e) {
                e.stopPropagation()
                e.preventDefault()
                this.classList.remove("active")
                This.updatedTime((this.transtate / this.parentElement.offsetWidth) * This.totalTime)
                This.move()
            })



        }
    }

    root.progess = {
        Progess,
    }

})(window.player || (window.player = {}))