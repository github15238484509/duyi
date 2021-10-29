(function($, player) {

    function MusicPlayer(dom) {
        this.dom = dom
        this.data = null
            // this.now = 0
        this.imgTimer = null
        this.constructorIndex = null
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
                    console.log(this.constructorIndex);
                    // this.loadMusic(this.now)
                    this.loadMusic(this.constructorIndex.index)
                    this.controlMusic()
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
                // this.controlBtns[1]
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
                } else {
                    that.imgStopRotate()
                }

            })
            this.controlBtns[3].addEventListener("touchend", () => {
                player.music.status = 'play'
                    // this.loadMusic(++this.now)
                this.loadMusic(this.constructorIndex.next())
                this.imgRotate(0)
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
        }
    }

    const music = new MusicPlayer(document.querySelector("#wrap"))
    music.init()
    console.log(music);
})(window.Zepto, window.player)