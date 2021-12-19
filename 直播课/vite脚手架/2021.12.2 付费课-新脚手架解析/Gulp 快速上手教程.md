# *gulp* 快速上手教程



本文主要包含以下内容：



- *gulp* 基本介绍
- 使用 *gulp* 打包项目



## *gulp* 基本介绍



*gulp* 是一个前端构建工具，与 *grunt* 相比，*gulp* 无需写一大堆繁杂的配置参数，*API* 也非常简单，学习起来很容易，而且 *gulp* 使用的是 *node.js* 中 *stream* 来读取和操作数据，其速度更快。如果你还没有使用过前端构建工具，或者觉得 *grunt* 太难用的话，那就尝试一下 *gulp* 吧。

*gulp* 的官网地址为：*https://gulpjs.com/*

<img src="https://xiejie-typora.oss-cn-chengdu.aliyuncs.com/2021-11-06-141238.png" alt="image-20211106221237421" style="zoom:50%;" />

也有对应的中文网地址：*https://www.gulpjs.com.cn/*

<img src="https://xiejie-typora.oss-cn-chengdu.aliyuncs.com/2021-11-06-141302.png" alt="image-20211106221302010" style="zoom:40%;" />



例如，在从开发环境转换到生产环境时，我们一般需要做以下的事情：
- 对于 *CSS* 文件
    - 压缩
    - 转码（自动添加前缀）
- 对于 *JS* 文件
    - 压缩
    - 转码（ *ES6* 转 *ES5* ）
- 对于 *HTML* 文件
    - 压缩
    - 转码（对格式的转换）
- 对于静态资源文件的处理
- 对于第三方文件的处理

这些操作都可以通过 *gulp* 帮助我们自动化完成。



**安装 *gulp***



要使用 *gulp*，首先第一步就是安装。

安装分为**全局安装**和**局部安装**。*gulp* 不仅需要全局安装，也需要局部安装。

- 全局安装 *gulp* 是安装的 *gulp-cli* 工具，相当于为电脑提供了一个启动 *gulp* 的环境，安装完成后可以在命令行运行 *gulp* 的各种命令。

- 局部安装 *gulp* 是安装的一个让我们在代码中可以使用 *gulp* 各种 *API* 的 *JS* 库。具体的自动化构建工作也是由该 *JS* 来执行的。

全局安装的命令如下： 

```js
npm install gulp-cli -g
```

安装完成后输入 *gulp --version* 指令能够查看对应的版本。

```js
(base) Jie-Xie:~ Jie$ gulp --version
CLI version: 2.3.0
Local version: Unknown
```

在查看版本时，出现了 *2* 个 *version*，一个是 *cli* 的版本号，当前是 *2.3.0*，另一个就是本地项目版本了，目前是 *Unknown* 未知，需要我们在具体的项目中局部安装 *gulp* 后才会有版本号。



## 使用 *gulp* 打包项目



接下来，我们来使用 *gulp* 来打包一个现有的项目。

首先介绍一下我们要打包的项目《 *JavaScript* 版本学生管理系统 》

<img src="https://xiejie-typora.oss-cn-chengdu.aliyuncs.com/2021-11-06-141817.png" alt="image-20211106221817874" style="zoom:50%;" />

该项目是一个典型的单页应用，由一个 *html* 文件和多个 *js* 模块组成。



首先第一步，在项目的根目录下创建一个 *gulpfile.js* 文件，我们所有的自动化任务都在该文件中进行配置。

<img src="https://xiejie-typora.oss-cn-chengdu.aliyuncs.com/2021-11-06-141956.png" alt="image-20211106221955572" style="zoom:50%;" />

我们希望打包好的项目直接放在一个目录下面，例如 *dist* 目录下就有我们所有打包好的文件，而不是 HTML 文件打包后放在 HTML 目录，CSS 文件打包后放在 CSS 目录下，这样我们还得手动从一个个目录里面拿出打包的文件，太麻烦了！

所以调整目录结构如下：

<img src="https://xiejie-typora.oss-cn-chengdu.aliyuncs.com/2021-11-06-144052.png" alt="image-20211106224051807" style="zoom:50%;" />

我们将所有的源码都放入一个叫 *src* 的目录里面，然后对整个 *src* 源码目录进行打包，打包出来的文件放入到整个 *dist*（一般都叫这个名字）目录里面，这样在交付给后端或者自己部署的时候，直接拿 *dist* 目录的文件即可，非常方便。

现在你再想想无论是 *vue* 还是 *react* 项目，我们都是在 *src* 目录下面写代码的，这下子知道是为什么了的吧～



接下来，我们需要安装如下的依赖：

<img src="https://xiejie-typora.oss-cn-chengdu.aliyuncs.com/2021-11-06-142331.png" alt="image-20211106222331140" style="zoom:50%;" />

因为 *gulp* 在上线后就不会用了，所以上面的依赖全部安装为开发依赖，注意各个依赖的版本号尽量和本文档保持相同，以避免一些因版本不同出现的问题。

安装命令如下：

```js
npm i @babel/core@7.15.8 @babel/preset-env@7.15.8 gulp@4.0.2 gulp-autoprefixer@8.0.0 gulp-babel@8.0.0 gulp-cssmin@0.2.0 gulp-htmlmin@5.0.1 gulp-uglify@3.0.2
```

> 注：安装之前先使用 *npm init -y* 初始化一下项目



接下来在 *gulpfile.js* 文件中来书写打包配置。



首先引入依赖：

```js
// gulp 配置文件

var gulp = require('gulp');

// 导入插件
var cssmin = require('gulp-cssmin'); // 压缩 CSS 的插件
var autoprefixer = require('gulp-autoprefixer'); // CSS 代码添加前缀
var uglify = require('gulp-uglify'); // 压缩 JS 代码
var htmlmin = require('gulp-htmlmin'); // 压缩 HTML 代码
const babel = require('gulp-babel'); // 导入 gulp-babel
```



接下来就需要配置各种各样的任务。

首先配置处理 *HTML* 代码的任务：

```js
var htmlHandler = function () {
    return gulp.src('./src/html/*.html')
        .pipe(htmlmin({
            collapseWhitespace: true, // 表示移出空格
            removeEmptyAttributes: true, // 表示移出空的属性(仅限于原生属性)
            collapseBooleanAttributes: true, // 移出 checked 类似的布尔值属性
            removeAttributeQuotes: true, // 移出属性上的双引号
            minifyCSS: true, // 压缩内嵌式 css 代码(只能基本压缩, 不能自动添加前缀)
            minifyJS: true, // 压缩内嵌式 JS 代码(只能基本压缩, 不能进行转码)
            removeStyleLinkTypeAttributes: true, // 移出 style 和 link 标签上的 type 属性
            removeScriptTypeAttributes: true, // 移出 script 标签上默认的 type 属性
        }))
        .pipe(gulp.dest('./dist/html'));
}
```

在上面的代码中，我们书写了一个名为 *htmlHandler* 的函数，这个在 *gulp* 中被称之为一个任务，然后通过 *gulp* 的 *src* 方法读取到 *src* 目录下的所有 *html* 文件，使用 *htmlmin* 方法来进行压缩，压缩时传入了一个配置对象，最后将压缩后的代码输出到 *dist* 的 *html* 目录下。



接下来配置处理 *CSS* 代码的任务：

```js
var cssminHandler = function () {
    // 1. 告诉 gulp 要压缩什么文件
    return gulp.src('./src/css/*.css')  // 通过 src 方法可以找到处理的文件
        .pipe(autoprefixer()) // 为 css 代码添加前缀
        .pipe(cssmin()) // 在这里进行压缩
        .pipe(gulp.dest('./dist/css'))
}
```

和上面配置 *html* 任务的代码基本类似，只不过在压缩之前我们增加了为 *css* 代码添加前缀这个步骤，使用到了 *autoprefixer* 这个插件来帮助我们完成这个工作，使用该插件时需要指定要兼容到哪些版本的浏览器，所以在 *package.json* 中我们添加 *browserslist* 属性：

```js
"browserslist": [
  "last 2 versions"
]
```



接下来配置处理 *JS* 代码的任务：

```js
var jsHandler = function () {
    return gulp.src('./src/js/*.js')
        .pipe(babel(
            {
                presets: ['@babel/env']
            }
        ))
        .pipe(uglify())
        .pipe(gulp.dest('./dist/js'));
}
```

上面的代码中，使用 *babel* 插件来对 *JS* 代码进行转译，*uglify* 插件来进行代码的压缩，最后输出到 *dist* 的 *js* 目录下。



最后是对图片的处理：

```js
var imgHandler = function () {
    return gulp.src('./src/images/**')
        .pipe(gulp.dest('./dist/images'))
}
```

在上面的代码中，图片倒没有做任务的压缩处理，因为一般从 *UI* 设计师那里拿到的图片已经是处理过的，所以单纯的做了一下转移工作。



处理各种代码、图片的任务都配置好之后，我们要做的就是自动化执行所有的任务。

在 *gulp* 中，可以使用 *gulp.parallel( )* 方法来并行执行多个任务。

```js
gulp.parallel(任务1, 任务2, 任务3, ...)
```

所以我们将我们上面所定义的任务放入到 *gulp.parallel* 方法中，并做一个默认导出：

```js
module.exports.default = gulp.parallel(cssminHandler, jsHandler, htmlHandler, imgHandler);
```



至此，我们整个配置工作就已经完成了。

打开终端，切换到项目根目录下，输入 *gulp* 进行打包，效果如下：

<img src="https://xiejie-typora.oss-cn-chengdu.aliyuncs.com/2021-11-07-023906.png" alt="image-20211107103906139" style="zoom:50%;" />

最终，我们的项目就成功从开发版本构建成为了上线部署的版本。

<img src="https://xiejie-typora.oss-cn-chengdu.aliyuncs.com/2021-11-07-024035.png" alt="image-20211107104034833" style="zoom:50%;" />



-*EOF*-

