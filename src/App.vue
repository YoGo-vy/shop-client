<template>
  <div id="app">

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
