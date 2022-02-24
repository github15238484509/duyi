//观察者模式第一种
;
(() => {
    function MyEvent() {
        this.cache = {}
        this.cacheOnce = {}
    }
    MyEvent.prototype.on = function (type, handle) {
        if (!this.cache[type]) {
            this.cache[type] = []
        }
        this.cache[type].push(handle)
    }
    MyEvent.prototype.emit = function (type) {
        if (this.cache[type]) {
            for (const key of this.cache[type]) {
                key()
            }
        };

        if (!this.cacheOnce[type]) return;
        for (const key of this.cacheOnce[type]) {
            key()
        }
        this.cacheOnce[type] = undefined
    }
    MyEvent.prototype.clear = function (type) {
        if (!this.cache[type]) return;
        this.cache[type] = []
    }
    MyEvent.prototype.remove = function (type, handle) {
        if (!this.cache[type]) return;
        this.cache[type] = this.cache[type].filter((fn) => {
            return fn !== handle
        })
    }
    MyEvent.prototype.once = function (type, handle) {
        if (!this.cacheOnce[type]) {
            this.cacheOnce[type] = []
        }
        this.cacheOnce[type].push(handle)
    }

    var a = new MyEvent()
    a.once("qwer", function () {
        console.log(222);
    })
    a.on("qwer", function () {
        console.log(222);
    })
    a.on("qwer", function () {
        console.log(222);
    })
    // a.emit("qwer")
    // a.emit("qwer")
})()


//观察者模式第二种
;
(() => {
    function MyEvent() {}
    MyEvent.prototype.$cache = {

    }
    MyEvent.prototype.on = function (key, ...handle) {
        if (!this.$cache[key]) {
            this.$cache[key] = []
        }
        this.$cache[key].push(...handle)
    }
    MyEvent.prototype.set = function (key, value) {
        var temp = this[key]
        this[key] = value
        for (const item of this.$cache[key]) {
            item(value, temp)
        }
    }
    MyEvent.prototype.remove = function (key, handle) {
        if (!this.$cache[key]) return false;
        this.$cache[key] = this.$cache[key].filter((fn) => {
            return fn !== handle
        })
    }
    MyEvent.prototype.clear = function (key) {
        if (this.$cache[key]) this.$cache[key] = [];
        return true
    }
    var a = new MyEvent()
    a.a = "a"
    a.b = "b"
    a.c = "c"
    a.d = "d"

    function aaaaaaaa(newValue, lodValue) {
        console.log("aa", newValue, lodValue);
    }
    a.on("a", aaaaaaaa, function (newValue, lodValue) {
        console.log(newValue, lodValue);
    })
    a.remove("a", aaaaaaaa)
    // a.set("a", "aa22")
})()

//继承第二种方法 观察者模式第二种
;
(() => {
    function MyEvent() {}
    MyEvent.prototype.$cache = {

    }
    MyEvent.prototype.on = function (key, ...handle) {
        if (!this.$cache[key]) {
            this.$cache[key] = []
        }
        this.$cache[key].push(...handle)
    }
    MyEvent.prototype.set = function (key, value) {
        var temp = this[key]
        this[key] = value
        for (const item of this.$cache[key]) {
            item(value, temp)
        }
    }
    MyEvent.prototype.remove = function (key, handle) {
        if (!this.$cache[key]) return false;
        this.$cache[key] = this.$cache[key].filter((fn) => {
            return fn !== handle
        })
    }
    MyEvent.prototype.clear = function (key) {
        if (this.$cache[key]) this.$cache[key] = [];
        return true
    }

    function inherit(target, origin) {
        function F() {}
        F.prototype = origin.prototype
        F.prototype.constructor = target
        target.prototype = new F()
        return target
    }

    function Son(name, age) {
        this.name = name
        this.age = age
    }
    Son = inherit(Son, MyEvent)
    var son = new Son("son", 12)
    console.log(son);
    son.on("name", function (newValue, lodValue) {
        console.log("新的名字为：" + newValue + "旧的名字为：" + lodValue);
    })
    son.set("name", "heihei")
})()