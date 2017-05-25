# <%= project_name %> MVVM前端项目

这个是使用`vuejs` 构建的<%= project_name %>前端项目

## 项目依赖

项目尝试根据`AMD规范`布局代码结构，整个项目所有的代码都是`RequireJS`控制下进行封装。`VueJS`部分的依赖如下：

- [vuejs](http://v1-cn.vuejs.org/) [参考文档](http://v1-cn.vuejs.org/guide/)

- [vue-router](https://github.com/vuejs/vue-router) [参考文档](http://demo2.mixmedia.com/mvctools/public/docs/vue-router-1.0/)

- [vue-resource](https://github.com/vuejs/vue-resource) [参考文档](http://www.cnblogs.com/keepfool/p/5657065.html)

- [lodash](https://lodash.com) [参考文档](http://www.css88.com/doc/lodash/)

- [vue-validator](https://github.com/vuejs/vue-validator)  [参考文档](http://demo2.mixmedia.com/mvctools/public/docs/vue-validator-2.1.7)

- [promise](https://www.promisejs.org/) [参考文档](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise)
整个架构中大量使用`Promise`模式，这个是现代`Ajax`的工业标准，请一定要弄清楚。

- [vue-lazyload](https://github.com/hilongjw/vue-lazyload) 懒加载图片

- [vue-swipe](https://github.com/ElemeFE/vue-swipe) 基于vue的HTML5 slider组件

- [vue-material-components](https://github.com/MMHK/material-components) 使用Vue实现的Material 样式库 MM fork 修改版本 [参考文档](https://mmhk.github.io/material-components/#!/)


## JS文件规范

所有的JS引用都应该符合requireJS规范，即所有自定义JS模块（不包含第三方）都应该包裹在define结构里面。

```JS
define("模块完整名称[包含命名路径]", ["模块依赖包"], function([依赖包的局部引用]){

    //具体的JS代码及逻辑
});

## Example:

define("page/index",["jquery"],function($){
	$(...).xxx(..)
	...
})
```

## 文件布局/分布

- 只有一个`HTML`文件入口。其他`css` / `js` / `html` 都是使用`AMD`方式载入，

- `index.html` 相当于`layout`容器，所有的其他页面都是按需加载进这个容器里面。

- `page/` 文件夹，存放所有的页面模板，包括页面使用到的`css` / `js`，所有的页面都是使用vuejs封装成vm对象引入容器中。
> 注意：该目录目录下不能存放任何非页面的组件及`js`。

- `component` 文件夹，存放所有片段模板组件，自定义组件（包含逻辑组件）。

- `css` 文件夹，存放公共css组件。

- `lib` 文件夹，存放所有第三方类库，第三方类库引入是使用`bower`。引入命令如下：
```
bower install [第三方类库名] --save --production
```

- `config` 文件夹，存放 `requireJS` 依赖定义及页面路由配置。

- `service` 文件夹，存放所有ajax交互服务的封装。注意， 由于在 `vue 2.0` 已经全面移除了组件的事件广播；
所以组件间的通信，我们建议使用引入所以组件间的通信，
我们建议使用引入 `EventBus` --  使用一个统一的全局事件通道。

## 引用路由

请参考 `config/router.js` 文件。 

在新增页面后，请一定要修改此文件增加新页面的路由。

## 初始化编译环境

- 确保你本地机器已经安装最新版的[NodeJS](https://nodejs.org/zh-cn/)
- 然后执行 `初始化编译环境.cmd`, 非window 用户请使用如下命令：
```
npm install gulp-cli vue-amd-cli -g & npm install
```

## 项目编译

- 首先，准备好 `nodejs` 环境，没有的自己去安装去。
- 进入 `.build` 目录， 运行 `npm install`
- 运行 `gulp default` 或者直接运行 `run.cmd`
- 运行好了之后，会在 `dist` 目录生成相关的编译文件。

## 项目辅助工具

- 执行 `脚手架.cmd`，非 window 用户请使用如下命令：
```
vue-amd-cli
```
