const path = require('path')
const HtmlWebpackPlugin = require("html-webpack-plugin")
const { CleanWebpackPlugin } = require("clean-webpack-plugin")


module.exports = {
    mode: "development",
    output: {
        filename: "[name].[chunkhash:5].js",
        path: path.resolve(__dirname, "dist")
    },
    devServer: {
        open: true
    },
    module: {
        rules: [{
            test: /\.(png|jpe?g|gif)$/i,
            // loader: "file-loader",
            // options: {
            //     name: '[name].[hash:5].[ext]',
            // },
            loader: 'url-loader',
            options: {
                limit: 20
            }
        }]
    },
    plugins: [new HtmlWebpackPlugin({
        template: path.resolve(__dirname, "public/index.html")
    }), new CleanWebpackPlugin()]
}