(function($, player) {

    function MusicPlayer(dom) {
        this.dom = dom
        this.data = null
        this.now = 0
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
                    this.loadMusic(this.now)
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
            this.controlMusic()
        },
        controlMusic() {
            // this.controlBtns[1] 上
            // this.controlBtns[2] 暂停
            // this.controlBtns[3] 下
            // this.controlBtns[1]
            this.controlBtns[2].onclick = function() {
                var status = player.music.status == "pause" ? 'play' : 'pause';
                this.className = player.music.status == "pause" ? 'playing' : ''
                player.music[status]()
            }
        }
    }

    const music = new MusicPlayer(document.querySelector("#wrap"))
    music.init()
    console.log(music);
})(window.Zepto, window.player)