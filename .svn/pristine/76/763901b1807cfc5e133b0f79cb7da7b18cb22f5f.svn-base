// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import './assets/css/reset.css';
import './assets/css/public.css';
import './assets/iconFont/iconfont.css';



import Highcharts from 'highcharts';
Vue.prototype.$HighCharts =Highcharts;




Vue.config.productionTip = false

//全局后置钩子
router.afterEach((to, from) => {
  // to and from are both route objects.
  window.scrollTo(0,0)
})


//路由跳转显示出对应的标题,全局前置守卫
router.beforeEach((to, from, next) => {
  // to and from are both route objects. must call `next`.
// if(to.meta.title){
//   document.title=to.meta.title
// }
next()
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
