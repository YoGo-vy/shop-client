<template>
    <div>
        <span class="goback" @click="$router.go(-1)"><i class="iconfont icon-zuojiantou"></i>返回</span>
        <Header >
            <!-- 作用域插槽-->
            <span slot="center" class="title">购物车中心</span>
        </Header>
    </div>
</template>
<script>
import { mapState } from 'vuex'
import Header from '../../components/Header/Header'
export default {
  components: {
    Header
  },
  computed: {
    ...mapState(['userData'])
  }

}
</script>
<style lang="less" scoped>
.title {
    font-size: 18px;
    font-weight: bold;
    color: #02A774;
}
</style>
