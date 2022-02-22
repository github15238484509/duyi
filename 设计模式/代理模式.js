;
(() => {
    class House {
        sellHouse(name) {
            console.log("出售一个房子", name)
        }
        buyHouse(name) {
            console.log('购买一个房子', name)
        }
    }

    class MerchantHousr extends House {
        constructor() {
            super()
        }
        sell(name) {
            this.sellHouse(name)
            console.log("送一个看们狗")

        }
        buy(name) {
            this.buyHouse(name)
            console.log('送一个女主人')

        }
    }
    var sellName = "小草屋"
    var buyName = "别墅"

    var merchant = new MerchantHousr()

    merchant.buy(buyName)
    merchant.sell(sellName)
})() //代理买卖房子
;
(() => {
    function ajax(params) {
        console.log('发送请求', params);
        return params + Math.random()
    }
    var store = new Map()
    var surrogate = function (params) {
        if (store.has(params)) {
            return store.get(params)
        }
        var resutl = ajax(params)
        store.set(params, resutl)
        return resutl
    }
    surrogate(1)
    surrogate(1)
    surrogate(2)
})() //单例缓存数据

;
(() => {
    class Store {
        constructor(type, time) {
            this.type = type
            this.time = time
        }
        getType = {
            local: 'localStorage',
            session: 'sessionStorage'
        }
        setItem(key, value) {
            var value = {
                value,
                time: Date.now()
            }
            window[this.getType[this.type]].setItem(key, JSON.stringify(value))
        }
        getItem(key) {
            var result = window[this.getType[this.type]].getItem(key)
            result = JSON.parse(result)
            var currentNow = Date.now()
            if (currentNow < this.time + result.time) {
                return result.value
            }
            window[this.getType[this.type]].removeItem(key)
            return null
        }
    }
    var local = new Store("local", 1000)
    local.setItem("a", 132)
    console.log(local.getItem("a"));
    setTimeout(() => {
        console.log(local.getItem("a"));
    }, 500)

    var session = new Store("session", 1000)
    session.setItem("a", 132)
    console.log(session.getItem("a"));
    setTimeout(() => {
        console.log(session.getItem("a"));
    }, 2000)
})() //代理缓存时间



;
(() => {
    function CreateImage(dom, src) {
        this.img = document.createElement("img")
        this.dom = dom
        this.img.src = src
        this.dom.appendChild(this.img)
        this.setSrc = function (url) {
            this.img.src = url
            this.app()
        }
        this.app = function () {
            this.dom.appendChild(this.img)
        }
        this.setSrc(src)
    }
    var perch = "https://img-blog.csdnimg.cn/2020021311390278.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzM5ODYxNDQx,size_16,color_FFFFFF,t_70"

    class ProxyImage {
        constructor(url, proxyFun) {
            var img = new Image()
            img.onload = function () {
                setTimeout(() => {
                    proxyFun.setSrc(this.src)
                }, 1000)
            }
            img.src = url
        }
    }
    var origin = "https://img2.baidu.com/it/u=1034746523,1428781265&fm=253&fmt=auto&app=138&f=JPEG?w=1134&h=500"
    // new ProxyImage(origin, new CreateImage(imgDom, perch))
})()


;
(() => {
    var btns = document.querySelectorAll("button")
    var target = document.querySelector("#imgDom")
    console.log(btns);

    function random(start, end) {
        return Math.floor(Math.random() * (end - start)) + start
    }

    // abcdef
    function randomColor() {
        var arr = ["a", "b", "c", "d", "e", "f"]
        var str = "#"
        for (let i = 0; i < 6; i++) {
            [i];
            str += arr[random(0, 6)]
        }
        return str
    }


    function getStyle(type) {
        if (type === "border") {
            return ["border", `${random(0,10)}px solid ${randomColor()}`]
        } else if (type === "color") {
            return ["color", randomColor()]
        } else if (type === "background") {
            return ["backgroundColor", randomColor()]
        } else if (type === "width") {
            return ["width", `${random(100,200)}px`]
        } else if (type === "height") {
            return ["height", `${random(100,200)}px`]
        }
    }


    function ProxyStyle(fn, time = 300) {
        var timer = null;
        var styles = new Map()
        return function () {
            this.set = function (key, value) {
                styles.set(key, value)
                this.render()
            }
            this.render = function () {
                clearTimeout(timer)
                timer = setTimeout(() => {
                    styles.forEach((e, a) => {
                        fn.call(this, e)
                    })
                    styles.clear()
                }, time)
            }
        }
    }

    function setinfo(tyle) {
        target.style[tyle[0]] = tyle[1]
    }
    var proxystyle = new(ProxyStyle(setinfo, 1000))()
    for (const item of btns) {
        item.onclick = function () {
            proxystyle.set(getStyle(this.dataset.tyle)[0], getStyle(this.dataset.tyle))
        }
    }
})()





;
(() => {
    function Verification() {
        this.cache = []
    }
    /**
     * 
     * @param {DOM} dom input 元素
     * @param {errorDOM} errorDom 错误提示 元素
     * @param {Array} Verifica [{method:'adas',errorMessage:'你发的不对'}]
     */
    Verification.prototype.add = function (dom, errorDom, Verifica = []) {
        this.cache.push(() => {
            var flage = true
            for (let i = 0; i < Verifica.length; i++) {
                var arr = Verifica[i].method.split(":")
                var method = arr.shift()
                arr.unshift(dom.value)
                arr.push(Verifica[i].errorMessage)
                var status = this.verificaList[method](...arr)
                if (status !== true) {
                    errorDom.innerText = status
                    return false
                } else {
                    errorDom.innerText = ""
                }
            }

            return flage
        })
    }
    Verification.prototype.start = function () {
        var flage = true
        this.cache.forEach((fn) => {
            if (fn() === false) {
                flage = false
                return
            }
        })
        return flage
    }
    Verification.prototype.extend = function (config) {
        console.log(config);
        for (const key in config) {
            if (Object.hasOwnProperty.call(config, key)) {
                this.verificaList[key] = config[key]
            }
        }
    }
    Verification.prototype.verificaList = {
        maxLength(value, lenght, errorMessage) {
            if (value.length > lenght) {
                return errorMessage
            }
            return true
        },
        empty(value, errorMessage) {
            if (value == "") {
                return errorMessage
            }
            return true
        },
        minLength(value, lenght, errorMessage) {
            if (value.length < lenght) {
                return errorMessage
            }
            return true
        },


    }
    var account = document.querySelector(".account")
    var accountError = document.querySelector(".accountError")

    var account1 = document.querySelector(".account1")
    var accountError1 = document.querySelector(".accountError1")

    var submit = document.querySelector(".submit")
    console.log(account, accountError);
    var cache = new Verification()
    cache.extend({
        phone: function (value, errorMessage) {
            if (value.length !== 11) {
                return errorMessage
            }
            return true
        }
    })

    cache.add(account, accountError, [{
        method: 'empty',
        errorMessage: "不能为空"
    }, {
        method: 'maxLength:6',
        errorMessage: "长度大于6"
    }, {
        method: 'minLength:4',
        errorMessage: "长度不能小于4"
    }])

    var cache1 = new Verification()
    cache1.add(account1, accountError1, [{
        method: 'empty',
        errorMessage: "不能为空"
    }, {
        method: 'phone',
        errorMessage: "不是手机号"
    }])

    submit.onclick = function () {
        if (cache.start()) {
            console.log("ok");
        } else {
            console.log("error");
        }
        if (cache1.start()) {
            console.log("ok");
        } else {
            console.log("error");
        }
    }
})()