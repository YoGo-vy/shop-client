<template>
    <div>
        <span class="goback" @click="$router.go(-1)"><i class="iconfont icon-zuojiantou"></i>返回</span>
        <header>
            订单
        </header>
        <div class="login">
            <div class="bg"></div>
            <button @click="$router.push('/login/1')" v-show="!userData._id">点击登录查看</button>
        </div>
        <div v-show="userData._id">
            <ul>
                <li v-for="(item,index) in 8" :key="index">
                    订单item {{item}}
                </li>
            </ul>
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
.login {
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
