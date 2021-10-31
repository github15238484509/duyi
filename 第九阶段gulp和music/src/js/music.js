(function(root) {
    function CreatMusic() {
        this.audio = new Audio()
        this.status = "pause"
    }
    CreatMusic.prototype = {
        load(src) {
            this.audio.src = src;
            this.audio.load()
        },
        pause() {
            this.audio.pause()
            this.status = "pause"
        },
        play() {
            this.audio.play();
            this.status = "play"
        },
        fromTo(time) {
            this.audio.currentTime = time
        },
        end(fu) {
            return this.audio.onended = fu
        }
    }
    root.music = new CreatMusic()
})(window.player || (window.player = {}))