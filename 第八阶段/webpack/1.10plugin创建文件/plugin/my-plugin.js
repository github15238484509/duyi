class My_plugin {
    apply(compiler) {
        compiler.hooks.emit.tap("My_plugin", compilation => {
            console.log(compilation.assets);
            compilation.assets["a.txt"] = {
                source() {
                    return 'tmd'
                },
                size() {
                    return "13kb"
                }
            }
        })
    }
}
module.exports = My_plugin