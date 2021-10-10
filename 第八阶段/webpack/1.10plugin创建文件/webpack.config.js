const My_plugin = require("./plugin/my-plugin")
module.exports = {
    mode: "development",
    devtool: 'cheap-source-map',
    plugins: [new My_plugin()]
}