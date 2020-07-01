<template>
    <div>
        <span class="goback" @click="goBack()"><i class="iconfont icon-zuojiantou"></i></span>
        <div class="logon">
            <h2>超市外卖</h2>
            <ul class="login-way" @click="changeLoginWay($event)">
                <li :class="loginWay?'li-current':''">短信登录</li>
                <li :class="!loginWay?'li-current':''">密码登录</li>
            </ul>
            <form action="" class="login-form" v-if="loginWay">
                <input type="text" placeholder="请输入手机号">
                <input type="text" placeholder="手机验证码">
                <p>提示：未绑定的手机号，登录时将自动注册，代表已同意<a href="javascript:;">《用户服务协议》</a></p>
            </form>
            <form action="" class="login-form" v-else>
                <section>
                    <input type="text" placeholder="请输入手机/邮箱/用户名">
                </section>
                <section>
                    <input :type="showPassword?'password':'text'" placeholder="用户密码">
                    <div class="switch" @click="changeShowPassword()"><i class="iconfont icon-ai-eye"></i></div>
                </section>
                <section>
                    <input type="text" placeholder="验证码">
                    <img src="/imgs/checkcode.svg" alt="" class="checkcode">
                </section>
            </form>
            <div>
                <button class="login-btn">登录</button>
                <p class="about">关于我们</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  data () {
    return {
      loginWay: true,
      showPassword: false
    }
  },
  methods: {
    // 事件代理，切换登录方式
    changeLoginWay (e) {
      if (e.target.innerHTML === '密码登录') {
        this.loginWay = false
      } else {
        this.loginWay = true
      }
    },
    changeShowPassword () {
      this.showPassword = !this.showPassword
    },
    goBack () {
      this.$router.go(-1)
    }
  }
}
</script>

<style lang="less" scoped>
.goback {
    position: fixed;
    top: 10px;
    left: 10px;
    & i {
        font-size: 22px;
    }
}
.logon {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-60%);
    padding-top: 20px;
    width: 80%;
    text-align: center;
    & h2 {
        color: #02A774;
    }
    & .login-way {
        display: flex;
        width: 80%;
        margin: 5px auto;
        justify-content: space-around;
        font-size: 13px;
        color: #58D493;
        & li {
            margin: 0 20px;
        }
    }
    & .login-form {
        position: relative;
        input {
        width: 100%;
        margin: 8px 0;
        border: 1px #58D493 solid;
        border-radius: 8px;
        padding-left: 10px;
        height: 45px;
        box-sizing: border-box;
        font-size: 13px;
    }
        & p {
            width: 80%;
            margin: 10px auto;
            color: #666;
            font-size: 13px;
        }
        & .checkcode {
            position: absolute;
            bottom: 8px;
            right: 5px;
        }
        & .li-current {
            font-weight: bold;
        }
        & .switch {
            position: absolute;
            right: 8%;
            top: 50%;
            transform: translateY(-50%);
            & i {
                font-size: 26px;
                color: #58D493;
            }
        }
    }
    .login-btn {
    width: 100%;
    height: 40px;
    margin-top: 15px;
    border-radius: 10px;
    background-color: #58D493;
    color: #fff;
    }
    & .about {
        margin-top: 20px;
        color: #02A774;
    }
}

</style>
