<template>
  <div id="app">
    App组件
    <!-- 路由链接 -->
    <router-link to='/home'>111</router-link>
    <router-link to='/search'>222</router-link>
    <router-link to='/order'>333</router-link>
    <router-link to='/personal'>444</router-link>

    <!-- 路由占位符 -->
    <router-view></router-view>

    <!-- 底部导航栏 -->
    <FooterGuide/>
  </div>
</template>

<script>
import FooterGuide from './components/FooterGuide/FooterGuide.vue'
export default {
  components: {
    FooterGuide
  }
}
</script>

<style>

</style>
