// 引入Vue router
import Vue from 'vue'
import Router from 'vue-router'
import Home from '../views/Home/Home.vue'
import Search from '../views/Search/Search.vue'
import Order from '../views/Order/Order.vue'
import Personal from '../views/Personal/Personal.vue'

// 挂载Router
Vue.use(Router)

const router = new Router({
  routes: [
    { path: '/home', component: Home },
    { path: '/search', component: Search },
    { path: '/order', component: Order },
    { path: '/personal', component: Personal }
  ]
})
export default router
