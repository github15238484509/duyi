module.exports = {
    mode: 'production',
    module: {
        rules: [{
            test: /.css$/,
            use: ['./loaders/css']
        }]
    }
}