<template>
    <div>
        <div class="shopheader">
            shopheader
            <router-link :to="item.path" v-for="(item,index) in link" :key="index" class="index">{{item.desc}}</router-link>
        </div>
        <router-view></router-view>

    </div>
</template>

<script>

export default {
  props: {
    id: String
  },
  data () {
    return {
      link: [{ desc: '点餐', path: '/foods' },
        { desc: '评价', path: '/comments' },
        { desc: '商家', path: '/shopinfo' }],

      currentIndex: 0
    }
  }
}
</script>

<style lang="less" scoped>

</style>
