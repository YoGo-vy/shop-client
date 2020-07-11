<template>
  <div id="app">

    <!-- 路由占位符 -->
    <keep-alive include="home">
      <router-view></router-view>
    </keep-alive>

    <!-- 底部导航栏 -->
    <FooterGuide/>

  </div>
</template>

<script>
import FooterGuide from './components/FooterGuide/FooterGuide.vue'
import { mapState, mapMutations } from 'vuex'
export default {
  computed: {
    ...mapState(['longitude', 'latitude'])
  },
  components: {
    FooterGuide
  },
  methods: {
    ...mapMutations(['setAddress', 'setcategorys', 'setshops', 'setUserData', 'initShopCar']),

    // 请求获取定位信息
    async getAddress () {
      const { data } = await this.$http.get('/position/' + [this.latitude, this.longitude].toString())
      if (data.code !== 0) {
        return this.$toast({ type: 'warning', message: '获取定位信息失败，请手动获取' })
      }
      this.setAddress(data.data)
    },

    // 获取分类列表
    async getCategoryList () {
      const { data } = await this.$http.get('/index_category')
      if (data.code !== 0) {
        return this.$toast({ type: 'waring', message: '获取分类数据失败，请下拉刷新页面' })
      }
      this.setcategorys(data.data)
    },

    // 根据位置信息获取商家列表
    async getshops () {
      const { data } = await this.$http.get('/shops?' + [this.latitude, this.longitude].join(','))
      if (data.code !== 0) {
        return this.$toast({ type: 'waring', message: '获取列表失败，请下拉刷新页面' })
      }
      this.setshops(data.data)
    },

    // 根据cookie信息自动请求登录（保存用户登录状态）
    async loginByCookie () {
      // 自动携带cookie信息
      const { data } = await this.$http.get('/userinfo')
      if (data.code !== 0) {
        return this.$toast('尚未登录，请前往登录')
      }
      this.setUserData(data.data)
    }

  },

  async created () {
    this.getAddress()
    this.getCategoryList()
    this.getshops()
    this.loginByCookie()

    // 本地获取购物车记录
    const { data } = await this.$http.get('/shopcar')
    if (data.code !== 0) {
      return this.$toast('获取购物车列表失败')
    }
    this.initShopCar(data.data)
  }
}
</script>

<style>

</style>
