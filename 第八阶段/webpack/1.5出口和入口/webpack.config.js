const path = require("path")

module.exports = {
    mode: 'production',
    entry: {
        main: "./src/index.js",
        a: './src/a.js',
        b: ["./src/a.js", "./src/index.js"]
    },
    output: {
        path: path.resolve("./", 'target'),
        filename: "[name]_[chunkhash:8].js"
    }
}