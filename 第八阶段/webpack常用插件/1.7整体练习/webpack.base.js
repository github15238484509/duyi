const path = require("path")
const { CleanWebpackPlugin } = require("clean-webpack-plugin")
const HtmlWebpackPlugin = require("html-webpack-plugin")
const CopyPlugin = require("copy-webpack-plugin");
module.exports = {
    mode: "development",
    entry: {
        index: path.resolve(__dirname, "src/index"),
        detail: path.resolve(__dirname, "src/detail"),
    },
    output: {
        filename: "script/[name].[chunkhash:5].js",
        path: path.resolve(__dirname, "dist")
    },
    stats: {
        modules: false,
        colors: true
    },
    devServer: {
        open: true,
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, "public/list.html"),
            chunks: ["index"],
            filename: "list.[contenthash:5].html"
        }),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, "public/detail.html"),
            chunks: ["detail"],
            filename: "detail.[contenthash:5].html"
        }),
        new CopyPlugin({
            patterns: [
                { from: "./public/img", to: "" },
            ],
        }),
        // new CopyPlugin({
        //     patterns: [
        //         { from: "./public/css", to: "" },
        //     ],
        // }),
    ]
}