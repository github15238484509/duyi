const path = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
console.log(CleanWebpackPlugin);
const HtmlWebpackPlguin = require("html-webpack-plugin")
const CopyWebpackPlugin = require("copy-webpack-plugin")
const CopyPlugin = require("copy-webpack-plugin");
module.exports = {
    mode: "development",
    output: {
        filename: "[name].[chunkhash].js",
        path: path.resolve(__dirname, "dist")
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlguin({
            template: path.resolve(__dirname, "public/index.html")
        }),
        new CopyPlugin({
            patterns: [{
                from: path.resolve(__dirname, 'public/img'),
                to: './'
            }]
        })
    ]
}