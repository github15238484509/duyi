(function(root) {
    class Index {
        constructor(length) {
            this.length = length
            this.index = 0
        }
        prev() {
            return this.get(-1)
        }
        next() {
            return this.get(1)
        }
        get(value) {
            this.index = (this.index + value + this.length) % this.length
            return this.index
        }
    }

    root.constructorIndex = Index
})(window.player || (window.player = {}))