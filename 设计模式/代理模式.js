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
    class LazyImage {
        constructor(initialImag, originImage, dom = document.body) {
            this.initialImag = initialImag
            this.originImage = originImage
            this.init()
        }
        init() {

        }
    }
})()