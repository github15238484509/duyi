# *Parcel* 快速上手教程



本文主要包含以下内容：



- *Parcel* 基本介绍
- 使用 *Parcel* 打包项目



## *Parcel* 基本介绍



*Parcel* 是一个 *Web* 应用打包工具，使用工作进程启用多核编译，并具有文件系统缓存，即使在重新启动后也可快速重新构建。

<img src="https://xiejie-typora.oss-cn-chengdu.aliyuncs.com/2021-11-06-072618.gif" alt="2021-11-06 15.26.01" style="zoom:45%;" />

*Parcel* 的中文官网地址：*https://www.Parceljs.cn/*



*Parcel* 有如下的特点：

- 打包所有资源：*Parcel* 支持 *JS、CSS、HTML*，文件资源等等，不需要安装任何插件。
- 零配置代码拆分：*Parcel* 使用动态  *import( )* 语法拆分输出包，所以只加载初始加载时所需的内容。
- 模块热替换：当我们在开发过程中进行更改时，*Parcel* 会自动更新浏览器中的模块，不需要进行任何配置。当我们开发一个小型项目时，使用 *Parcel* 能够很快搭建起脚手架，专注于我们的开发。



目前已经有许多应用非常广泛的打包工具，比如 *webpack* 和 *browserify*。那么为什么要使用 *Parcel* 呢 ?

答案是：为了提高开发体验。

*Parcel* 最被称道的两个特点就是**零配置**和**快速打包**，这其实也是解决了 *webpack* 的两个痛点。



### 零配置

首先我们来看第一个特点，*Parcel* 主打的**极速零配置**。

许多打包工具需要许多配置，下载许多插件，仅仅为了让应用工作，就需要写上超过 *500* 行的配置，这是十分常见的。这些配置不仅无聊而且耗时，而且想要配置正确也不容易。这往往不能使应用在性能上达到最优化。

*Parcel* 很自豪地告诉你，我们不需要任何配置，仅仅需要指出你的入口文件，它就能帮你解决问题。在 *Parcel* 中内置了 *html、babel、typescript、less、sass、vue* 等功能，无需配置。

并且不同于 *webpack* 只能将 *js* 文件作为入口，在 *Parcel* 中万物皆资源，所以 *html* 文件 *css* 文件都可以作为入口来打包。不同于 *webpack* 的复杂配置，只需要一个 *Parcel index.html* 命令就可以直接起一个自带热更新的 *server* 来开发 *vue/react* 项目。



### 快速打包

已有的打包器运行速度也很缓慢。 拥有许多文件和依赖的大型应用需要花费数分钟打包, 在开发阶段文件经常需要改变的情况下，这尤其痛苦。 文件 *watcher* 会帮助我们重新打包，但初次启动仍然十分缓慢。 *Parcel* 利用现代的多核处理器去编译代码，这就在初次构建时节省了许多时间。它还有一个文件系统缓存，可以保存每个文件的编译结果，从而实现更快的后续启动。

以下是 *Parcel* 官方的一个数据，基于一个合理大小的应用，包含 *1726* 个模块，*6.5M* 未压缩大小。

在一台有 *4* 个物理核心 *CPU* 的 *2016 MacBook Pro* 上构建。

| 打包工具              | 时间   |
| --------------------- | ------ |
| *browserify*          | 22.98s |
| *webpack*             | 20.71s |
| *parcel*              | 9.98s  |
| *parcel - with cache* | 2.64s  |



当然，就目前来讲，*Parcel* 还没有成熟到能够取代 *webpack* 的地步，主要有以下 *2* 个不足：

- *0* 配置虽然好，但是也有一定的代价，那就是无法轻松的对构建工作进行定制化，如果想要配置一些复杂的构建功能就会非常麻烦。
- 生态相比于 *webpack* 比较小众，如果遇到错误查找解决方案比较麻烦。



## 使用 *Parcel* 打包项目



下面，我们来使用 *Parcel* 来打包一个现有的项目。



要使用 *Parcel*，首先第一步是需要安装，安装命令如下：

```js
npm install -g parcel-bundler
```

安装完毕后，可以使用 *parcel --version* 来查询安装的 *Parcel* 的版本号：

<img src="https://xiejie-typora.oss-cn-chengdu.aliyuncs.com/2021-11-07-030152.png" alt="image-20211107110151715" style="zoom:50%;" />

下面我们依然是对《 *JavaScript* 版学生管理系统 》来进行打包。

首先需要对源码进行一些修改，改为 *ES Module* 的形式来引入模块。

*index.html*

```html
<script src="../js/index.js" type="module"></script>
```

*index.js*

```js
import {$, $$, createLi} from './util.js'
import {randomContent, lastName, firstName,cityName,charArr,numArr} from './myMock.js'
import {validateForm} from './validateForm.js'
```

在上面的代码中，*index.html* 只引入了一个 *index.js* 文件，这就是我们整个 *JavaScript* 代码的入口文件。由于是以 *ES Module* 的形式引入的，所以添加了 *type="module"* 属性。

之后，*index.js* 中要用到的其他 *JS* 文件的函数或者变量，也是以 *import* 的形式引入进来的，当然前提是对应的 *JS* 文件有 *export* 该函数或者变量。

> 注：上面只列举了部分改动的代码，详细请参阅对应的源码，但是总结起来就是整个项目修改为了 *ES Module* 的形式。



源码修改完毕后，要做的事情就很简单了，直接一行代码搞定：

```js
parcel html/index.html
```

打包完毕后 *Parcel* 会自动的启动一个本地服务器，可以在 *http://localhost:1234* 查看到打包后运行的项目效果。

我们可以明显的感受到 *Parcel* 确实做到了极速零配置，并且速度也非常快。



-*EOF*-
