# 美食论坛商城系统
>一直对vue很感兴趣，最近使用vue2.0开发了美食论坛商城系统系统来练练手，不得不说vue真是一个很不错的框架，但是也遇到过一些坑，在这里和大家分享一下。

## 在线演示
>[在线演示戳我](http://vue.zjlsp.cn)
>（请使用chrome开发者手机演示模式预览，项目使用HTML5 History 模式，并未对此进行配置，导致在页面刷新或者直接访问非首页链接情况下，就会返回 404
>相关问题可以参考官方文档 -> HTML5 History 模式）

## 开发
>vue非常好的融合了react的组件化思想和angular的指令思想。 一个vue的组件将HTML、CSS、JS代码写在一个文件里面，这样既方便编写，也方便管理和修改

### axios

 在vue1.x的时候，vue的官方推荐HTTP请求工具是vue-resource，但是在vue2.0的时候将推荐工具改成了axios。
 
使用方式都差不多，但需要注意的是：接口返回的res并不直接是返回的数据，而是经过axios本身处理过的json对象。真正的数据在res.data里

### Vuex
vue提供了一个数据管理工具vuex，有点类似于angular中factory和service，可以进行数据上的通信。 比如存储一些公共变量或者是不同组件间的数据处理等。

### Vue-Router
vue-router是vue的路由系统，可以用来创建单页应用。基本思想是在主页面中引入标签，然后定义路由，把router挂在到app上，然后把各个子页面渲染到view里面。

### lib-flexible
lib-flexible是淘宝移动端自适应方案，lib-flexible的这种适配方式在适配的时候会修改viewport的initial-scale，导致viewport的width不等于device width，使得那些根据width编写的media query不一定与预期的一致，还有移动web经典的retina屏图片问题和1px边框问题在lib-flexible下也会与通常的做法有所差异

### swiper
swiper是一款免费以及轻量级的移动设备触控滑块的js框架，在这里就不过多介绍，只是本人的一个使用习惯，实在太懒拿来即用

## 安装步骤
``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build
```
国内的朋友建议使用 cnpm 命令行工具代替默认的 npm，避免安装过程中下载不完整导致插件错误，国家防火墙大家或多或少知道一些	╯△╰
附上cnpm的全局安装代码，够贴心吧
``` bash
$ npm install -g cnpm
```

## Donation
----------
你以为我会说：“ 如果你觉得这个项目有用，你可以给我买杯咖啡 ”？

不，我不太喜欢喝咖啡，谢谢你们的好意！如果这个项目对你有用的话，我倍感荣幸
