# 使用 *vue + webpack* 搭建 *vue* 项目



目前，前端热门的 *React* 或者 *Vue* 都提供了对应的脚手架工具，例如 *React* 所对应的脚手架工具为 *create-react-app*，*Vue* 所对应的脚手架工具为 *vue-cli*。

使用这些脚手架工具，可以让我们快速的搭建一个前端项目，而无需考虑里面繁琐的细节问题。

但有些时候，使用脚手架所搭建出来的项目，里面包含了很多我们不需要的东西（视项目具体需求而定），所以这个时候就需要我们自己来搭建整个项目。

一般来讲，现在所搭建的项目，都是基于 *webpack* 的，因为有很多模块需要我们打包。然后不同的技术需要安装不同的 *loader*。

本文，我们就一起来看一下如何使用 *vue + webpack* 来搭建一个 *vue* 的项目。



## 第一步：建立项目目录



首先，我们建立我们的项目目录。

例如我在我的桌面上创建 *app* 目录，然后终端切换到该目录下，进行项目目录的初始化。

```js
npm init -y
```

初始化好的项目目录下会生成一个 *package.json* 文件，内容如下：

<img src="https://xiejie-typora.oss-cn-chengdu.aliyuncs.com/2021-11-07-065910.png" alt="image-20211107145909963" style="zoom:50%;" />



## 第二步：安装依赖

首先需要全局安装 *webpack、webpack-cli*，安装命令如下： 

```js
npm install webpack webpack-cli -g
```

安装完成后可以通过 *webpack -v* 以及 *webpack-cli -v* 来查看版本号：

<img src="https://xiejie-typora.oss-cn-chengdu.aliyuncs.com/2021-11-07-074507.png" alt="image-20211107154507059" style="zoom:50%;" />

接下来在本地项目安装如下的依赖，这里为了避免各依赖版本所带来的问题，锁定了依赖的版本号。安装命令如下：

```js
npm install webpack@4.39.3 webpack-cli@3.3.7 vue@2.6.10 vue-loader@15.7.1 vue-template-compiler@2.6.10 css-loader@3.2.0 file-loader@4.2.0 style-loader@1.0.0 url-loader@2.1.0 html-webpack-plugin@3.2.0
```

安装完成后，项目根目录下会生成相应的 *node_modules* 目录，*package.json* 中也会新增 *dependencies* 字段，用以记录各个依赖以及版本号。如下图所示：

<img src="https://xiejie-typora.oss-cn-chengdu.aliyuncs.com/2021-11-07-075819.png" alt="image-20211107155818556" style="zoom:50%;" />



## 第三步：创建根组件和入口文件

接下来我们在项目根目录中创建 *src* 目录，然后在 *src* 下创建根组件 *App.vue* 以及入口文件 *index.js*。

如下图所示：

<img src="https://xiejie-typora.oss-cn-chengdu.aliyuncs.com/2021-11-07-070138.png" alt="image-20211107150138028" style="zoom:50%;" />

两个文件所对应的代码如下：

*/src/App.vue*

```vue
<template>
  <div id="app">{{text}}</div>
</template>
<script>
export default {
  data() {
    return {
      text: "236"
    };
  }
};
</script>
<style></style>
```

*/src/index.js*

```js
import Vue from 'vue'
import App from './app.vue'

const root = document.createElement('div')
document.body.appendChild(root)

new Vue({
    render: (h) => h(App)
}).$mount(root)
```



## 第四步：创建 *webpack* 配置文件

接下来，我们要使用 *webpack* 进行打包，首先需要创建 *webpack* 的配置文件。

在项目根目录下创建 *webpack.config.js* 文件，如下：

<img src="https://xiejie-typora.oss-cn-chengdu.aliyuncs.com/2021-11-07-070348.png" alt="image-20211107150348585" style="zoom:50%;" />

接下来在 *webpack.config.js* 文件中定义入口文件，出口文件，配置 *loader* 以及插件。

具体代码如下：

```js
// webpack.config.js
const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const HTMLPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const isDev = process.env.NODE_ENV === 'development';

const config = {
    entry: path.join(__dirname, 'src/index.js'), // 入口文件 用path.join(__dirname, 'src/index.js')将路径拼接为绝对路径
    output: {
        filename: 'bundle.js', // 文件输出
        path: path.join(__dirname, '/dist')
    },
    plugins: [
        new VueLoaderPlugin(),
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: isDev ? '"development"' : '"production"'
            }
        }),
        new HTMLPlugin() // 处理html模版
    ],
    module: {
        rules: [{
                test: /\.vue$/,
                loader: 'vue-loader' // 处理以.vue结尾的文件
            },
            {
                test: /\.css$/, // 处理css文件
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test: /\.(gif|jpg|jpeg|png|svg)$/, // 处理图片文件
                use: [{
                    loader: 'url-loader',
                    options: {
                        limit: 1024,
                        name: '[name].[ext]'
                    }
                }]
            }
        ]
    }
}
if (isDev) {
    config.devtool = '#cheap-module-eval-source-map' // 调试代码时可以看到自己原本的代码，而不是编译后的
    config.devServer = {
        port: 8000, // 对应的端口号
        host: 'localhost',  // 对应的域名
        overlay: {
            errors: true // 将 webpack 编译的错误显示在网页上面
        },
        open: true // 在启用 webpack-dev-server 时，自动打开浏览器
    }
    config.plugins.push(
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin()
    )
}
module.exports = config;
```



## 第五步：项目打包

接下来，我要对我所书写的代码进行打包，在 *package.json* 中的 *scripts* 字段新增如下的代码：

```js
"build": "webpack"
```

具体操作如下图：

<img src="https://xiejie-typora.oss-cn-chengdu.aliyuncs.com/2021-11-07-070540.png" alt="image-20211107150539975" style="zoom:50%;" />

使用 *npm run build* 来进行项目打包，结果如下：

<img src="https://xiejie-typora.oss-cn-chengdu.aliyuncs.com/2021-11-07-070905.png" alt="image-20211107150904803" style="zoom:50%;" />

可以看到我们的源码已经成功被打包，项目根目录产生了一个 *dist* 目录，我们打包好后的文件就在里面。

<img src="https://xiejie-typora.oss-cn-chengdu.aliyuncs.com/2021-11-07-080143.png" alt="image-20211107160143383" style="zoom:50%;" />



## 第六步：项目热加载

在项目开发中，我们并不需要每次调试时都先打包，然后运行打包后的文件。

此时，我们就可以使用项目热加载。

首先，在项目中安装 *webpack-dev-server*，命令如下：

```js
npm install webpack-dev-server@3.8.0
```

接下来在 *package.json* 中的 *scripts* 字段新增如下的代码：

```js
"start" : "webpack-dev-server"
```

具体操作如下图：

<img src="https://xiejie-typora.oss-cn-chengdu.aliyuncs.com/2021-11-07-071337.png" alt="image-20211107151336884" style="zoom:50%;" />

之后我们就使用 *npm start* 来启动项目，*webpack-dev-server* 会启动一个端口为 *8080* 的本地服务器：

<img src="https://xiejie-typora.oss-cn-chengdu.aliyuncs.com/2021-11-07-080458.png" alt="image-20211107160458598" style="zoom:50%;" />

访问 *http://localhost:8080/*，就可以看到我们打包好的项目效果，并且支持热更新功能。

<img src="https://xiejie-typora.oss-cn-chengdu.aliyuncs.com/2021-11-07-080751.gif" alt="2021-11-07 16.07.21" style="zoom:50%;" />



至此，我们就完成了不借助 *vue-cli*，自己搭建了一个基于 *webpack* 的 *vue* 项目。



-*EOF*-

