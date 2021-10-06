((moudles) => {
    const okmodules = {}

    function require(id) {
        if (okmodules[id]) {
            return okmodules[id]
        }
        const module = {
            exports: {}
        }
        const exports = module.exports
        moudles[id](module, exports, require)
            // console.log(module.exports);
        okmodules[id] = module.exports
        return module.exports
    }
    const info = require("./index.js")
    console.log(info);
})({
    "./a.js": function(module, exports, require) {
        console.log(555);
        module.exports.a = 'a.js'
    },
    "./b.js": function(module, exports, require) {
        console.log(66);
        exports.b = 'b.js'
    },
    "./index.js": function(module, exports, require) {
        const a = require('./a.js')
        const b = require('./b.js')
        console.log(a);
        console.log(b);
        console.log("index.js");
        module.exports = "tmd成功了"
    }
})