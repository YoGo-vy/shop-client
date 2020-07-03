<template>
    <div>
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
        background: url(/imgs/order/person.png) no-repeat center;
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
