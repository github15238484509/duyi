module.exports = {
    devServer: {
        proxy: {
            '/Home': {
                target: 'https://api.coinone.space',
            },
        }
    }
}