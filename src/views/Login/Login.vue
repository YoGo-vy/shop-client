<template>
    <div>
        <span class="goback" @click="goBack()"><i class="iconfont icon-zuojiantou"></i></span>
        <div class="logon">
            <h2>超市外卖</h2>
            <ul class="login-way" @click="changeLoginWay($event)">
                <li :class="loginWay?'li-current':''">短信登录</li>
                <li :class="!loginWay?'li-current':''">密码登录</li>

            </ul>
            <form action="" class="login-form" v-show="loginWay">
                <section>
                    <input v-focus v-model="phoneNumber" type="text" placeholder="请输入手机号">
                    <span :class="['sendcode',sendCodeStatus?'hadsend':'']" @click="sendCode()" ref="sendCode">
                        {{sendCodeStatus?'已发送('+timer+'s)':'点击发送验证码'}}
                    </span>
                </section>
                <input v-model="phoneMsg" type="text" placeholder="手机验证码">
                <p>提示：未绑定的手机号，登录时将自动注册，代表已同意<a href="javascript:;">《用户服务协议》</a></p>
            </form>
            <form action="" class="login-form" v-show="!loginWay">
                <section>
                    <input v-model="usename" type="text" placeholder="请输入用户名">
                </section>
                <section>
                    <input v-model="password" :type="showPassword?'password':'text'" placeholder="用户密码">
                    <div class="switch" @click="changeShowPassword()">
                        <i :class="['iconfont','icon-ai-eye',showPassword ? 'show' : '']" ></i>
                    </div>
                </section>
                <section>
                    <input v-model="checkcode" type="text" placeholder="验证码">
                    <img src="/imgs/checkcode.svg" alt="" class="checkcode">
                </section>
            </form>
            <div>
                <button class="login-btn" @click="login()">登录</button>
                <p class="about">关于我们</p>
            </div>
        </div>
    </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'

export default {
  data () {
    return {
      loginWay: true,
      showPassword: true,
      sendCodeStatus: false,
      timer: 0,
      usename: '',
      password: '',
      checkcode: '',
      phoneNumber: '',
      phoneMsg: ''
    }
  },
  computed: {
    ...mapState(['userData'])
  },

  methods: {
    ...mapMutations(['setUserData']),

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
    },

    // 验证手机号码输入
    checkPhone () {
      const Reg = /^1\d{10}$/
      return Reg.test(this.phoneNumber)
    },

    // 发送验证码
    async  sendCode () {
      if (!this.checkPhone()) {
        this.$toast('请输入正确11位手机号码')
        return
      }
      // 开启定时器
      this.sendCodeStatus = true
      if (this.timer) {
        //  time不为初始0时，停止执行，防止重复开启定时器
        return
      }
      this.timer = 30
      const time = setInterval(() => {
        this.timer -= 1
        if (this.timer === -1) {
          this.timer = 0
          clearInterval(time)
          this.sendCodeStatus = false
        }
      }, 1000)

      // 发送请求获取手机验证码
      const { data } = await this.$http.get('/sendcode?phone=' + this.phoneNumber)
      if (data.code !== 0) {
        this.timer = 0
        clearInterval(time)
        this.sendCodeStatus = false
        this.$toast('验证码发送失败')
      }
    },

    async login () {
      // 短信登录
      if (this.loginWay) {
        if (!this.checkPhone()) {
          return this.$toast('请输入正确11位手机号码')
        }
        if (!this.phoneMsg) {
          return this.$toast('请输入手机验证码')
        }
        // 登录
        const { data } = await this.$http.post('/login_sms', { phone: this.phoneNumber, code: this.phoneMsg })
        if (data.code !== 0) {
          return this.$toast('手机号或验证码不正确')
        }
        console.log('2')
        this.setUserData(data.data)
        // 路由跳转
        this.$router.push('/personal')
      } else {
        // 密码登录
      }
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
    height:360px;
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
        & .li-current {
            font-weight: bold;
            color:#02A774;
        }
    }
    & .login-form {
        & input {
        width: 100%;
        margin: 8px 0;
        border: 1px #58D493 solid;
        border-radius: 8px;
        padding-left: 10px;
        height: 45px;
        box-sizing: border-box;
        font-size: 13px;
        }
        & section {
            position: relative;
            & .sendcode {
                position:absolute;
                font-size: 12px;
                right: 5%;
                top: 50%;
                transform: translateY(-50%);
            }
            & .hadsend {
                color: #666;
            }
            & .checkcode {
                position: absolute;
                bottom: 8px;
                right: 5px;
            }

            & .switch {
                position: absolute;
                right: 8%;
                top: 50%;
                transform: translateY(-50%);
                & i {
                    font-size: 26px;
                    color: #eee;
                }
                & .show {
                    color: #666;
                }
            }
        }
        & p {
            width: 80%;
            margin: 10px auto;
            color: #666;
            font-size: 13px;
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
