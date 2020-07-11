<template>
    <div>
        <span class="goback" @click="$router.go(-1)"><i class="iconfont icon-zuojiantou"></i>返回</span>
        <header>
            积分商城
        </header>
        <div class="integral">
            <div class="bg"></div>
            <button @click="$router.push('/login/1')" v-show="!userData._id">点击登录查看</button>
        </div>
        <div v-show="userData._id">
            敬请期待...
        </div>
    </div>
</template>
<script>
import { mapState } from 'vuex'
export default {
  computed: {
    ...mapState(['userData'])
  }

}
</script>
<style lang="less" scoped>
.goback {
  height: 18px;
    position: fixed;
    top: 20px;
    left: 20px;
    line-height: 18px;
    color: #FFF;
    & i {
        font-size: 18px;
    }
}
header {
    height: 50px;
    background-color: #58D493;
    line-height: 50px;
    color: #fff;
    text-align: center;
}
.integral {
    position: fixed;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%);
    text-align: center;
    & .bg {
        width: 300px;
        height: 300px;
    }
    & button {
        height: 40px;
        font-size: 18px;
        border-radius: 10px;
        background-color: #58D493;
        color: #fff;
    }
}
</style>
