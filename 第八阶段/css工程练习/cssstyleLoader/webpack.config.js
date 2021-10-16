const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const path = require('path')
module.exports = {
    mode: "development",
    output: {
        filename: '[name].[chunkhash:5].js',
        path: path.resolve(__dirname, "dist")
    },
    module: {
        rules: [{
            test: /\.css$/i,
            use: ["style-loader", "css-loader"]
        }, {
            test: /\.(png|jpe?g|gif)$/i,
            use: "file-loader",
        }, ]
    },
    plugins: [new CleanWebpackPlugin()]
}