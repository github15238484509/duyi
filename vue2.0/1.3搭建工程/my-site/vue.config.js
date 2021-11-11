module.exports = {
    devServer: {
        proxy: {
            '/api132': {
                target: 'http://awwwe.com',
            },
        },
        hot:true,//自动保存
        open : true,//自动启动
    }
}