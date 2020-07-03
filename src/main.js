import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/index'
import axios from 'axios'
import './plugins/vant'

// 配置axios
// axios.defaults.baseURL = 'http://localhost:4000'

// 开发模式反向代理
axios.defaults.baseURL = '/api'

// 注册全局指令
Vue.directive('focus', {
  inserted: function (el) {
    el.focus()
  }
})
// Vue.directive('focus', {
//   inserted: function (el) {
//     // 聚焦元素
//     el.focus()
//   }
// })

// 挂载axios当前Vue原型
Vue.prototype.$http = axios
// store.$http = axios
Vue.config.productionTip = false

new Vue({
  el: '#app',
  render: h => h(App),
  // 挂载router路由
  router,
  // 挂载store状态管理
  store
}).$mount('#app')
