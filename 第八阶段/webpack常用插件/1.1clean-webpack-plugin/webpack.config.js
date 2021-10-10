var { CleanWebpackPlugin } = require("clean-webpack-plugin")
const path = require("path")
module.exports = {
    mode: "development",
    output: {
        filename: "[name].[chunkhash:5].js",
        path: path.resolve(__dirname, 'dist') //一定要加上不然清楚不掉dist文件加
    },
    plugins: [new CleanWebpackPlugin()]
}