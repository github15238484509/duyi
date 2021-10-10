const { CleanWebpackPlugin } = require("clean-webpack-plugin")
const HtmlWebpackPlugin = require("html-webpack-plugin")
const path = require("path")

module.exports = {
    mode: "production",
    entry: {
        home: path.resolve(__dirname, "src/index.js"),
        a: path.resolve(__dirname, "src/a.js")
    },
    output: {
        filename: '[chunkhash:5].js',
        path: path.resolve(__dirname, "dist")
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, "public/index.html"),
            filename: "all.html",
            chunks: "all"
        }),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, "public/index.html"),
            chunks: ["home"],
            filename: "home.html"
        }), new HtmlWebpackPlugin({
            template: path.resolve(__dirname, "public/index.html"),
            chunks: ["a"],
            filename: "a.html"
        }),
    ]
}