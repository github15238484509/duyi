(function(root) {
    class listConstructor {
        constructor(list, dom) {
            this.data = list
            this.dom = dom

            this.dllist = []
            this.listDom = null
            this.close = null
        }
        show(index) {
            this.listDom.classList.toggle("active")
            this.addClass(index)
        }
        init() {
            this.listDom = document.createElement("list")
            this.listDom.classList.add("list")
            var dl = document.createElement("dl")
            var dt = document.createElement("dt")
            dt.innerHTML = "歌曲列表"
            dl.appendChild(dt)
            var listdata = this.data
            for (let i = 0; i < listdata.length; i++) {
                var dd = document.createElement("dd");
                dd.innerHTML = listdata[i].name
                this.dllist.push(dd)
                dl.appendChild(dd)
            }
            for (let i = 0; i < listdata.length; i++) {
                var dd = document.createElement("dd");
                dd.innerHTML = listdata[i].name
                this.dllist.push(dd)
                dl.appendChild(dd)
            }
            this.listDom.appendChild(dl)
            this.close = document.createElement("div")
            this.close.className = "close"
            this.close.innerText = "关闭"
            this.listDom.appendChild(this.close)
            this.dom.appendChild(this.listDom)
        }
        addClass(index) {
            this.dllist.forEach((item, i) => {
                item.classList.remove("active")
                if (i == index) {
                    item.classList.add("active")
                }
            })
        }
    }
    root.listConstructor = listConstructor
})(window.player || (window.player = {}))