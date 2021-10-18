const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
    mode: "development",
    output: {
        filename: '[name].[chunkhash:5].js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: "/"
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, "public/index.html")
        }),
        new MiniCssExtractPlugin({
            filename: "css/[name].[contenthash:5].css",
            chunkFilename: "[id].css",
        })
    ],

    devServer: {
        open: true
    },
    module: {
        rules: [{
                test: /\.css$/i,
                use: [MiniCssExtractPlugin.loader, 'css-loader']
            },
            {
                test: /\.(jpg)|(png)|(gif)$/i,
                loader: "file-loader",
                options: {
                    name: '[name].[hash:5].[ext]',
                    outputPath: 'images',
                },
            }
        ]
    },
}