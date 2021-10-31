(function($, player) {

    function MusicPlayer(dom) {
        this.dom = dom
        this.data = null
            // this.now = 0
        this.imgTimer = null
        this.constructorIndex = null
        this.listConstructor = null

    }
    MusicPlayer.prototype = {
        init() {
            this.getDom()
            this.getData("../mock/data.json");
        },
        getData(url) {
            $.ajax({
                url: url,
                methods: "get",
                success: (data) => {
                    this.data = data
                    this.constructorIndex = new player.constructorIndex(data.length)
                    this.progess = new player.progess.Progess(player.music.audio)
                    this.loadMusic(this.constructorIndex.index)
                    player.music.end(() => {
                        this.loadMusic(this.constructorIndex.next())
                    })
                    this.controlMusic()
                    this.renderListEvent(data, this.dom)
                }
            })
        },
        getDom() {
            this.record = document.querySelector(".songImg img");
            this.controlBtns = document.querySelectorAll(".control li");
            this.name = document.querySelector('.name');
            this.singer = document.querySelector('.singer');
            this.album = document.querySelector('.album');
        },
        loadMusic(index) {
            player.render(this.data[index], this)
            player.music.load(this.data[index].audioSrc)
            this.progess.init(this.data[index].duration)
            if (player.music.status === "play") {
                this.controlBtns[2].className = 'playing'
                player.music.play()
            }
        },
        controlMusic() {
            var that = this
                // this.controlBtns[1] 上
                // this.controlBtns[2] 暂停
                // this.controlBtns[3] 下
                // this.controlBtns[4]
            this.controlBtns[1].addEventListener("touchend", () => {
                player.music.status = 'play'
                this.loadMusic(this.constructorIndex.prev())

            })
            this.controlBtns[2].addEventListener("touchend", function() {
                var status = player.music.status == "pause" ? 'play' : 'pause';
                this.className = player.music.status == "pause" ? 'playing' : ''
                player.music[status]()
                if (status == 'play') {
                    that.imgRotate(that.record.rotate || 0)
                    that.progess.move()
                } else {
                    that.imgStopRotate()
                    that.progess.stop()
                }

            })
            this.controlBtns[3].addEventListener("touchend", () => {
                player.music.status = 'play'
                    // this.loadMusic(++this.now)
                this.loadMusic(this.constructorIndex.next())
                this.imgRotate(0)
                that.progess.stop()
                that.progess.move()
            })
            this.controlBtns[4].addEventListener("touchend", () => {
                this.listConstructor.show(this.constructorIndex.index)
            })
        },
        imgRotate(deg) {
            clearInterval(this.imgTimer)
            this.imgTimer = setInterval(() => {
                deg = deg + 0.2
                this.record.style.transform = `rotate(${deg}deg)`
                this.record.rotate = deg
            }, 1000 / 60);
        },
        imgStopRotate() {
            clearInterval(this.imgTimer)
        },
        renderListEvent(data, dom) {
            this.listConstructor = new player.listConstructor(data, dom)
            this.listConstructor.init()
            this.listConstructor.dllist.forEach((item, index) => {
                item.addEventListener("touchend", () => {
                    if (index === this.constructorIndex.index) {
                        return
                    }
                    this.constructorIndex.index = index
                    player.music.status = 'play'
                    this.loadMusic(index)
                    this.listConstructor.show(index)
                })
            })
            this.listConstructor.close.addEventListener("touchend", () => {
                this.listConstructor.show(this.constructorIndex.index)
            })
        }
    }

    const music = new MusicPlayer(document.querySelector("#wrap"))
    music.init()
    console.log(music);
})(window.Zepto, window.player)