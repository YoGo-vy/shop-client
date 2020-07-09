// 引入Vue router
import Vue from 'vue'
import Router from 'vue-router'
import Home from '../views/Home/Home.vue'
import Search from '../views/Search/Search.vue'
import Order from '../views/Order/Order.vue'
import Personal from '../views/Personal/Personal.vue'
import Login from '../views/Login/Login'
import Acount from '../views/Personal/Acount'
import Details from '../views/Details/Details'
import Goods from '../views/Details/Details/Goods'
import Comments from '../views/Details/Details/Comments'
import Shopinfo from '../views/Details/Details/Shopinfo'
import Integral from '../views/Integral/Integral'
import ShopCarCenter from '../views/ShopCarCenter/ShopCarCenter'

// 挂载Router
Vue.use(Router)

const router = new Router({
  routes: [
    { path: '/', redirect: '/home' },
    { path: '/home', component: Home, meta: { showFooter: true } },
    { path: '/shopcarcenter', component: ShopCarCenter, meta: { showFooter: true } },
    { path: '/personal', component: Personal, meta: { showFooter: true } },
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
        { path: '/goods', component: Goods },
        { path: '/comments', component: Comments },
        { path: '/shopinfo', component: Shopinfo }
      ]
    }
  ]
})
export default router
