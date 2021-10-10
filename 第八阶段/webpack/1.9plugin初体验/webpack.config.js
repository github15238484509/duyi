const My_plugin = require("./plugin/my-plugin")
module.exports = {
    mode: "production",
    plugins: [new My_plugin()]
}