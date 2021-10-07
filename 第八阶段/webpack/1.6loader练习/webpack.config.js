module.exports = {
    mode: 'development',
    module: {
        rules: [{
            test: /.js$/,
            use: ["./loaders/hehie",
                "./loaders/one"
            ]
        }]
    }
}