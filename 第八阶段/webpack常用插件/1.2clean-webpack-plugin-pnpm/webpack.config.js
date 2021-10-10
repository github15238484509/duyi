const { CleanWebpackPlugin } = require("clean-webpack-plugin")
const path = require('path')
module.exports = {
    mode: "development",
    output: {
        filename: "[chunkhash:5].js",
        path: path.resolve(__dirname, "dist")
    },
    plugins: [new CleanWebpackPlugin()]
}