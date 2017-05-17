import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import routes from './router.config.js'
import store from './store'
import axios from 'axios'

import flexible from 'lib-flexible'
/*重置浏览器基础样式*/
require('./assets/style/Reset.css');
/*ico图标*/
require('./assets/icomoon/style.css');
/*网站基本css样式*/
require('./assets/style/App.css');
/*滑动组件的css*/
require('../node_modules/swiper/dist/css/swiper.min.css');

Vue.use(VueRouter)

/* 加载公共自定义组件 */
// 加载暂无数据组件
import NoData from './components/NoData'
Vue.use(NoData);
import Error from './components/Error'
Vue.use(Error);
import Loading from './components/Loading'
Vue.use(Loading);


// Add a request interceptor
axios.interceptors.request.use(function (config) {
    // 开始请求后需要处理的事情
    return config;
  }, function (error) {
    // 请求失败需要处理的事情
    return Promise.reject(error);
  });

// Add a response interceptor
axios.interceptors.response.use(function (response) {
    // 请求成功返回数据需要处理的事情
    return response;
  }, function (error) {
    // 做一些错误反应
    return Promise.reject(error);
  });

/*axios.defaults.baseURL = (process.env.NODE_ENV !=='production' ? config.dev.httpUrl:config.build.httpUrl);
  axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';*/
//axios.defaults.baseURL='http://localhost:8080/';

Vue.prototype.$http = axios  //其他页面在使用axios的时候直接  this.$http就可以了

const scrollBehavior = (to, from, savedPosition) => {
  if (savedPosition) {
    // savedPosition仅适用于popstate导航。
    return savedPosition
  } else {
    const position = {}
    // 新建导航
    // 通过返回选择器滚动到锚点
    if (to.hash) {
      position.selector = to.hash
    }
    // 检查匹配的路由配置是否具有需要滚动到顶部的元数据
    if (to.matched.some(m => m.meta.scrollToTop)) {
      position.x = 0
      position.y = 0
    }
    // 如果返回的位置是虚假的或空的对象，
    // 将保留当前滚动位置
    return { x: 0, y: 0 }
  }
}

const router = new VueRouter({
  mode: 'history',
  scrollBehavior,
  routes
});

new Vue({
  router,
  store,
  el: '#app',
  render: h => h(App)
})
