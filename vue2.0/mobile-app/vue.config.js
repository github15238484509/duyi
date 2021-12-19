const px2rem = require("postcss-px2rem")
module.exports = {
    css: {
        loaderOptions: {
            postcss: {
                plugins: [px2rem({
                    remUnit: 75
                })]
            }
        }
    }
}