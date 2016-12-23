---
title: Merry Christmas
publishDate: 2016-12-23

---

Markdown 是一种简单的、轻量级的「标记语言」。写作中添加简单符号即完成排版，所见即所得。让你专注于文字而不是排版。
除了最熟悉的github，还有这么多支持Markdown的编辑器  http://sspai.com/25137; Mac上可以安装Mou,知乎用的就是Mou，第一次安装使用无法正确渲染。
还有一款是  MacDown, http://www.jianshu.com/p/6c157af09e84; Markdown妥妥的好用。

---


 Merry Christmas！

 使用bisheng搭建了一个简单的blog，目标是从简单处入手学习使用bisheng，直到搭建出自己的reactboot文档系统。

### 开始之前先来了解几个工具：

 ___dora___，bisheng的webserver是基于dora搭建的，底层使用了koa + koa-webpack-dev-middleware, 编译后的bundle存储在内存中，更新速度较好。
 如果需要输出物理文件 需要对bisheng改造一下，增加 physcisFileSystem， 此处最好把bisheng的源码fark一下进行修改，以免被npm i覆盖。
bisheng.config.js.



```js

module.exports = {
    port: 8099,
    hot: false,
    lazyLoad: true,
    source: ['./posts', './blogs'],
    root: '/bisheng-theme-one/',
    plugins: ['bisheng-plugin-description'],
    doraConfig: {
        verbose: true,
        physcisFileSystem: false
    },
    pick: {
            posts(markdownData)
            {
                return {
                    meta: markdownData.meta,
                    description: markdownData.description,
                };
            }
        }
};

```
增加一个路由目录 index.js

```js
module.exports = {
  home: '/',
  sitename: 'ReactBoot Update Log',
  // tagline: 'The one theme for bisheng',
  // navigation: [{
  //   title: 'BiSheng',
  //   link: 'https://github.com/benjycui/bisheng',
  // }],
  // footer: 'Copyright and so on...',
  // hideBisheng: true,
  github: '',
  routes: [{
    path: '/',
    component: './template/Archive',
  }, {
    path: '/posts/:post',
    component: './template/Post',
  }, {
    path: '/blogs/:post',
    component: './template/Post',
  }, {
    path: '/tags',
    component: './template/TagCloud',
    dataPath: '/',
  }],
};
```

### webpack-dev-middleware

对于 webpack-dev-middleware，最直观简单的理解就是一个运行于内存中的文件系统。你定义了 webpack.config，webpack 就能据此梳理出所有模块的关系脉络，而 webpack-dev-middleware 就在此基础上形成一个微型的文件映射系统，每当应用程序请求一个文件——比如说你定义的某个 entry ，它匹配到了就把内存中缓存的对应结果作为文件内容返回给你，反之则进入到下一个中间件。

因为是内存型的文件系统，所以 rebuilding 的速度非常快，因此特别适合于开发阶段用作静态资源服务器；又因为 webpack 可以把任何一种资源都当作是模块来处理，因此它完全可以取代其他的 HTTP 服务器。事实上，大多数 webpack 用户用过的 webpack-dev-server 就是一个 express＋webpack-dev-middleware 的实现。二者的区别仅在于 webpack-dev-server 是封装好的，除了 webpack.config 和命令行参数之外，你很难去做定制型开发，所以它是适合纯前端项目的辅助工具。而 webpack-dev-middleware 是中间件，你可以编写自己的后端服务然后把它整合进来，相对而言就自由得多了。我们做的是一个前后同构的应用，因此 webpack-dev-server 就不予考虑了。


### 相关目录

dist 目标输出目录

_site 站点目录

