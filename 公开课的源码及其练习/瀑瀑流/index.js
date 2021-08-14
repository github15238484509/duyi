(function() {
    var arrimg = [
        "./img/0.jpg",
        "./img/1.jpg",
        "./img/2.jpg",
        "./img/3.jpg",
        "./img/4.jpg",
        "./img/5.jpg",
        "./img/6.jpg",
        "./img/7.jpg",
        "./img/8.jpg",
        "./img/9.jpg",
        "./img/10.jpg",
        "./img/11.jpg",
        "./img/12.jpg",
        "./img/13.jpg",
    ]
    var heightarr = [0, 0, 0, 0]
    var box = document.querySelector(".box")

    function gouzuoitem() {
        var div = document.createElement("div")
        div.className = "item"
        var img = new Image()
        var index = Math.floor(Math.random() * 14)
        img.src = arrimg[index]
        div.append(img)
        img.onload = function() {
            var min = Math.min.apply(null, heightarr)
            var index = heightarr.indexOf(min)
            div.style.top = min + 'px'
            box.append(div)
            div.style.left = index * this.parentElement.offsetWidth + 'px'
            heightarr[index] += this.parentElement.offsetHeight
        }
    }

    function init(num) {
        for (let i = 0; i < num; i++) {
            gouzuoitem()
        }
    }
    window.addEventListener("scroll", ((time) => {
            var timer = Date.now()
            return function() {
                var time11 = Date.now()
                if (time11 - timer > time) {
                    godowm()
                    timer = time11
                }
            }
        })(200))
        // 到底判断
    function godowm() {
        var lastitem = document.querySelector(".box .item:last-child").offsetTop + document.querySelector(".box .item:last-child").offsetHeight / 2
        var pageoffset = window.pageYOffset
        var clientHeiht = document.documentElement.clientHeight
            // console.log(document.querySelector(".box .item:last-child").offsetTop + document.querySelector(".box .item:last-child").offsetHeight / 2);
            // console.log(window.pageYOffset);
            // console.log(document.documentElement.clientHeight);
            // console.log(pageoffset);
            // console.log(clientHeiht);
            // console.log(lastitem);
        if ((lastitem - pageoffset - clientHeiht) < 100) {
            init(10)
        }
    }
    init(10)
})()