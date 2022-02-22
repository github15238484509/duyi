var webpack = require('webpack');
module.exports = {
    // 要引入webpack
    configureWebpack: {
      plugins: [
        new webpack.ProvidePlugin({
          'window.Quill': 'quill/dist/quill.js',//注意路径，可能与你们路径不一致
          'Quill': 'quill/dist/quill.js' //注意路径，可能与你们路径不一致
        }),
      ]
    }
  }