<template>
    <div class="footer-guide">
        <!-- 路由链接 -->
        <ul class="footer">
            <li v-for='(item,index) in list' :key='index'>
                <div :class="['guide-item',item.path===$route.path?'current-item':'']"  @click="goTo(item.path)">
                    <i :class="['iconfont' ,item.icon]"></i>
                    <span>{{item.desc}}</span>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
  data () {
    return {
      list: [{ path: '/home', icon: 'icon-U', desc: '外卖' },
        { path: '/search', icon: 'icon-sousuo-', desc: '搜索' },
        { path: '/order', icon: 'icon-dingdan', desc: '订单' },
        { path: '/personal', icon: 'icon-personal', desc: '我的' }
      ]
    }
  },
  methods: {
    goTo (path) {
      // 当前路由地址不跳转
      if (path === this.$route.path) return
      this.$router.push(path)
    }
  }
}
</script>

<style lang="less">
.footer-guide {
    position: fixed;
    bottom: 0;
    width: 100%;
}

.footer {
    background-color: #f5f5f5;
    height: 50px;
    padding: 5px 0;

    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;

}
.guide-item{
    flex: 1;
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    justify-content: space-around;
    & span{
        font-size: 12px;
        line-height: 100%;
    }
    & i{
         font-size:22px;
         text-align: center;
    }
}
.current-item {
    color: #02a774;
}
</style>
