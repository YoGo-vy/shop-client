// 引入Vue router
import Vue from 'vue'
import Router from 'vue-router'
import Home from '../views/Home/Home.vue'
import Search from '../views/Search/Search.vue'
import Order from '../views/Order/Order.vue'
import Personal from '../views/Personal/Personal.vue'
import Login from '../views/Login/Login'
import Acount from '../views/Personal/Acount'

// 挂载Router
Vue.use(Router)

const router = new Router({
  routes: [
    { path: '/', redirect: '/home' },
    { path: '/home', component: Home, meta: { showFooter: true } },
    { path: '/search', component: Search, meta: { showFooter: true } },
    { path: '/order', component: Order, meta: { showFooter: true } },
    { path: '/personal', component: Personal, meta: { showFooter: true } },
    { path: '/login', component: Login },
    { path: '/acount', component: Acount }
  ]
})
export default router
