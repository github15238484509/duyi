const path = require('path')
const HtmlPlackPlugin = require('html-webpack-plugin')
module.exports = {
    mode: "development",
    output: {
        filename: "[name].[chunkhash:5].js",
        path: path.resolve(__dirname, "dist")
    },
    plugins: [new HtmlPlackPlugin({
        template: path.resolve("public/index.html")
    })],
    devServer: {
        open: true
    },
    module: {
        rules: [
            { test: /\.less$/, use: ['style-loader', 'css-loader', "less-loader"] },
        ]
    }
}