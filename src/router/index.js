// 引入Vue router
import Vue from 'vue'
import Router from 'vue-router'

import Search from '../views/Search/Search.vue'
import Order from '../views/Order/Order.vue'
import Acount from '../views/Personal/Acount'
import Integral from '../views/Integral/Integral'

// 路由懒加载（一级组件，复杂组件）
const Home = () => import('../views/Home/Home.vue')
const Login = () => import('../views/Login/Login')
const ShopCarCenter = () => import('../views/ShopCarCenter/ShopCarCenter')
const Personal = () => import('../views/Personal/Personal.vue')
const Details = () => import('../views/Details/Details')
const Goods = () => import('../views/Details/Details/Goods')
const Comments = () => import('../views/Details/Details/Comments')
const Shopinfo = () => import('../views/Details/Details/Shopinfo')

// 挂载Router
Vue.use(Router)

const router = new Router({
  routes: [
    { path: '/', redirect: '/home' },
    { path: '/home', component: Home, meta: { showFooter: true } },
    { path: '/shopcarcenter', component: ShopCarCenter, meta: { showFooter: true } },
    { path: '/personal', component: Personal, meta: { showFooter: true } },
    { path: '/search', component: resolve => (require(['../views/Search/Search.vue'], resolve)) },
    { path: '/search', component: Search },
    { path: '/order', component: Order, meta: { showFooter: true } },
    { path: '/integral', component: Integral, meta: { showFooter: true } },
    { path: '/login/:id', component: Login, props: true },
    { path: '/acount', component: Acount },
    {
      path: '/details',
      component: Details,
      redirect: 'goods',
      children: [
        // 动态设置keep-alive组件路由缓存
        { path: '/goods', component: Goods, name: 'goods', meta: { keepAlive: true } },
        { path: '/comments', component: Comments, name: 'comments', meta: { keepAlive: true } },
        { path: '/shopinfo', component: Shopinfo }
      ]
    }
  ]
})
export default router
