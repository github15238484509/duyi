# *Vite* 快速上手教程



本文主要包含以下内容：



- *Vite* 基本介绍
- 搭建 *Vite* 项目
- *Vite* 项目简单分析



## *Vite* 基本介绍



***Vite***（法语单词，“快” 的意思）是一种新型的前端构建工具，是一个由原生 *ESM* 驱动的 *Web* 开发构建工具。在开发环境下基于浏览器原生 *ES imports* 开发，在生产环境下基于 *Rollup* 打包。



它主要具有以下特点：

- 快速的冷启动
- 即时的模块热更新
- 真正的按需编译



用作者在微博上的原话：

>*Vite*，一个基于浏览器原生 *ES imports* 的开发服务器。利用浏览器去解析 *imports*，在服务器端按需编译返回，完全跳过了打包这个概念，服务器随起随用。
>
>同时不仅有 *Vue* 文件支持，还搞定了热更新，而且热更新的速度不会随着模块增多而变慢。针对生产环境则可以把同一份代码用 *rollup* 打包。虽然现在还比较粗糙，但我觉得是有潜力的，做得好可以彻底解决改一行代码等半天热更新的问题。

可以看到 *Vite* 主要特色是基于浏览器原生的 *ES Module* 来开发，从而实现按需编译，也就没有打包这个概念。因为需要什么资源直接在浏览器里引入即可。

不过基于浏览器原生 *ES module* 来开发 *Web* 应用也不是什么新鲜事，*Snowpack* 也是做这个事情，而且它可以用在所有项目上。

不过目前此项目社区中没有流行的使用起来，好在 *Vue* 在 *Web* 开发领域有着极大的话语权，*Vite* 的出现可以说又会让利用 *ES module* 开发火一阵子。

有趣的是 *Vite* 算是革了 *webpack* 的命了（生产环境用 *rollup*），所以 *webpack* 的开发者直接喊大哥了...

<img src="https://xiejie-typora.oss-cn-chengdu.aliyuncs.com/2021-11-07-082222.png" alt="image-20211107162221760" style="zoom: 80%;" />



## 搭建 *Vite* 项目



接下来我们来搭建一个 *Vite* 应用。首先确保安装了新版本的 *vue-cli*，这里我安装的 *vue-cli* 版本为 *4.5.13*

<img src="https://xiejie-typora.oss-cn-chengdu.aliyuncs.com/2021-11-07-082435.png" alt="image-20211107162435435" style="zoom:50%;" />

接下来使用如下的命令创建 *Vite* 项目：

```js
// 初始化
npm init @vitejs/app <项目名>
cd <项目名>
npm install

// 调试
npm run dev

// 发布
npm run build
```

具体操作如下图所示：

<img src="https://xiejie-typora.oss-cn-chengdu.aliyuncs.com/2021-11-07-082704.png" alt="image-20211107162704187" style="zoom:50%;" />

搭建好的项目目录如下，非常的简洁：

<img src="https://xiejie-typora.oss-cn-chengdu.aliyuncs.com/2021-11-07-082749.png" alt="image-20211107162749330" style="zoom:50%;" />



之后使用 *npm i* 命令安装依赖包，然后 *npm run dev* 命令即可启动项目。

<img src="https://xiejie-typora.oss-cn-chengdu.aliyuncs.com/2021-11-07-122717.png" alt="image-20211107202716214" style="zoom:50%;" />

## *Vite* 项目简单分析



接下来我们透过 *Vite* 启动的这个项目来了解 *Vite* 的工作机制。

*Vite* 的基本实现原理，就是启动一个 *koa* 服务器拦截浏览器请求 *ES* 模块的请求。通过路径查找目录下对应文件的文件做一定的处理最终以 *ES* 模块格式返回给客户端。如下图所示：

<img src="https://xiejie-typora.oss-cn-chengdu.aliyuncs.com/2021-11-07-124403.png" alt="image-20211107204402787" style="zoom:50%;" />

在我们 *npm run dev* 启动项目后，*Vite* 让我们访问 *http://localhost:3000/*，这是一个 *koa* 服务器。当我们访问该地址时，浏览器首先请求的就是 *index.html*，然后根据 *index.html* 引入的文件依次发送请求。

<img src="https://xiejie-typora.oss-cn-chengdu.aliyuncs.com/2021-11-07-124803.png" alt="image-20211107204803038" style="zoom:50%;" />

注意 *index.html* 引入 *index.js* 时，书写了 *type="module"*，这里就用到了 *ES Module*，浏览器会依次发送请求以获取依赖的模块。

```html
<script type="module" src="/src/main.js"></script>
```

例如 *main.js* 中 *import* 了 *vue.js* 和 *App.vue*，所以之后又会发送请求去请求 *vue.js* 和 *App.vue* 文件。

<img src="https://xiejie-typora.oss-cn-chengdu.aliyuncs.com/2021-11-07-125229.png" alt="image-20211107205229068" style="zoom:50%;" />

在请求这些资源后，这些资源并非是直接返回的，因为有些资源直接返回浏览器也不认识，例如 *.vue* 文件。所以在我们请求这种类型的文件时，会被 *Vite* 服务器拦截，然后对请求的文件进行编译后才返回其内容，编译的结果必须要保证浏览器是认识的。

例如我们可以将项目中 *App.vue* 文件的源码与请求 *App.vue* 时返回到浏览器的代码进行一个对比。

项目中的 *App.vue*：

<img src="https://xiejie-typora.oss-cn-chengdu.aliyuncs.com/2021-11-07-130140.png" alt="image-20211107210139365" style="zoom:50%;" />

浏览器请求 *App.vue* 文件时返回给浏览器的代码：

<img src="https://xiejie-typora.oss-cn-chengdu.aliyuncs.com/2021-11-07-130234.png" alt="image-20211107210233549" style="zoom:50%;" />

并且在返回的 *App.vue* 中，还引入了一个 *App.vue?vue&type=style&index=0&lang.css* 的文件

```js
import "/src/App.vue?vue&type=style&index=0&lang.css"
```

这实际上是源码中 *App.vue* 文件中的 *CSS* 代码。

由于 *.vue* 文件的特殊性，当 *Vite* 遇到一个 *.vue* 后缀的文件时，会对其分割然后进行分别处理，最后发送多个请求获取该组件的内容。

有的人可能会有这样的疑问，这个开发服务器获取模块是通过发送网络请求来获取的，发送网络请求不是也挺慢的么？

但是你想想，这个服务器就在你本地呀，所以相当于是直接从本地获取 *JavaScript* 模块，速度当然也就比 *webpack* 要打包后才执行要快得多。



并且因为 *ES Module* 模块规范，模块与模块之间有相应的依赖关系，所以浏览器在发送请求时做的也是按需发送请求。

例如，我们将 *App.vue* 文件中的 *HelloWorld.vue* 的导入和使用注释掉，那么请求也就对应的没有对 *HelloWorld.vue* 文件的请求。



*Vite* 创建的服务器，还会和客户端之间创建一个 *websocket* 连接。

<img src="https://xiejie-typora.oss-cn-chengdu.aliyuncs.com/2021-11-07-143616.png" alt="image-20211107223615868" style="zoom:50%;" />

怎么会有 *websocket* 连接呢？

实际上，这是 *Vite* 实现 *HMR* 的手段。

*Vite* 通过使用 *websocket* 连接，当我们修改一个文件保存时，将这个修改的文件编译推送到浏览器，实现一个热更新。

那么到这里，我们就基本了解了 *Vite* 的使用和其整体的工作机制了。


-*EOF*-

