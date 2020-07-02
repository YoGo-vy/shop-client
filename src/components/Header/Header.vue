<template>
    <header>
        <span class="location">
            <i class="iconfont icon-dingwei"></i>
            <span>{{address.city}}</span>
        </span>
        <!-- 组件插槽 -->
        <slot name="input" class="input"></slot>
        <!-- 组件传值 -->
        <span class="title">{{title}}</span>
        <span v-show="userData._id" class="personal" @click="$router.push('/personal')">
             <i class="iconfont icon-huiyuan"></i>
        </span>
        <span v-show="!userData._id" class="login" @click="login()">
            登录|注册
        </span>
    </header>
</template>

<script>
import { mapState } from 'vuex'
export default {
  // 通过props传值
  props: {
    title: String
  },
  computed: {
    ...mapState(['address', 'userData'])
  },
  methods: {
    login () {
      this.$router.push('/login')
    }
  }
}
</script>

<style lang="less" scoped>
header {
    position: fixed;
    z-index: 999;
    width: 100%;
    top: 0;
    height: 50px;
    background-color: #58D493;
    display: flex;
    flex-wrap: nowrap;
    flex-direction: row;
    justify-content: space-around;
    line-height: 50px;
    & .location {
        font-size: 12px;
        color: #F1F1F1;
        text-align: center;
        width: 80px;
        & i{
            font-size: 32px;
            line-height: 50px;
            margin-left: 10px;
            color: #F1F1F1;
        }
    }
    & .login , .personal{
        line-height: 50px;
        width: 80px;
        font: 18px;
        color: #F1F1F1;
        margin-right: 10px;
        text-align: center;
        & i{
            font-size: 30px;
        }
    }
    & .title {
        font-size: 18px;
        font-weight: bold;
        color: #02A774;
    }
}
.search {
    position: relative;
    flex: 1;
    width: 60%;
    height: 30px;
    line-height: 50px;
    font-size: 12px;
    text-align: center;
    & input {
        height: 100%;
        width: 70%;
        border-radius: 15px;
        background-color: #fff;
        padding-left: 35px;
    }
    & .iconfont {
        position: absolute;
        left: 15%;
    }
}
</style>
