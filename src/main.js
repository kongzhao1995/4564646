// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
// import echarts from '../src/utils/echarts'



Vue.use(ElementUI)
// Vue.use(echarts)
// Vue.prototype.$echarts = echarts
// console.log(this.$echarts)
Vue.config.productionTip = false

// var instance = axios.create({
//   withCredentials: true,
//   baseURL: '/api',
//   timeout: 50000,
//   headers: { 'Content-Type': 'multipart/form-data' }
// })
// Vue.prototype.instance = instance
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
