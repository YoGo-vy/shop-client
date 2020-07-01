<template>
    <header>
        <span class="location">
            <i class="iconfont icon-dingwei"></i>
        </span>
        <!-- 组件插槽 -->
        <slot name="input"></slot>
        <!-- 组件传值 -->
        <span class="title">{{title}}</span>
        <span class="login" @click="login()">
            登录|注册
        </span>
    </header>
</template>

<script>
export default {
  // 通过props传值
  props: {
    title: String
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
    height: 50px;
    background-color: #58D493;
    display: flex;
    flex-wrap: nowrap;
    flex-direction: row;
    justify-content: space-around;
    line-height: 50px;
    & .location i{
        font-size: 32px;
        line-height: 50px;
        margin-left: 10px;
        color: #F1F1F1;
    }
    & .login{
        line-height: 50px;
        font: 18px;
        color: #F1F1F1;
        margin-right: 10px;
    }
    & .title {
        font-size: 18px;
        font-weight: bold;
        color: #02A774;
    }
}
.search {
    position: relative;
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
        left: 25px;
    }
}
</style>
