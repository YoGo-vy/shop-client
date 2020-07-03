<template>
    <div>
        <header>
            用户中心
        </header>
        <!-- 用户信息 -->
        <router-link :to="userData._id?'/acount':'/login'" class="personal">
            <div class="personal-pic">
            <i class="iconfont icon-personal"></i>
            </div>
            <div class="personal-msg">
                <strong>{{userData._id?'用户：'+userData.phone:'登录/注册'}}</strong>
                <span><i class="iconfont icon-shouji"></i>{{userData._id? '绑定手机号'+userData.phone:'暂无绑定手机'}} </span>
            </div>
            <span class="login-icon"><i class="iconfont icon-jiantou"></i></span>
        </router-link>

        <!-- 用户账户余额 -->
        <ul class="personal-acount">
            <li class="acount-item">
                <div><strong class="account">0.00</strong>元</div>
                <span>我的余额</span>
            </li>
            <li>
                <div><strong class="account">0</strong>分</div>
                <span>我的优惠</span>
            </li>
            <li class="last">
                <div><strong class="account">0</strong>个</div>
                <span>我的积分</span>
            </li>
        </ul>
        <!-- 服务列表 -->
        <ul class="user">
            <li>
                <span><i class="iconfont icon-dingdan"></i>我的订单</span>
            </li>
            <li>
                <span><i class="iconfont icon-jifen"></i>积分商城</span>
            </li>
            <li>
                <span><i class="iconfont icon-huiyuanquanyi"></i>会员卡</span>
            </li>
        </ul>
        <div class="service">
             <span><i class="iconfont icon-wuyefuwu"></i>用户服务中心</span>
        </div>
        <div class="logout" v-show="userData._id">
             <button @click="logout()">退出登录</button>
        </div>
    </div>
</template>
<script>
import { mapState, mapMutations } from 'vuex'
export default {
  computed: {
    ...mapState(['userData'])
  },
  methods: {
    ...mapMutations(['setUserData']),

    async logout () {
      const { data } = await this.$http.get('/userinfo')
      if (data.code !== 0) {
        return this.$toast('退出错误，请重试')
      }
      this.setUserData({})
      console.log(this.userData)
      this.$toast('退出成功')
    }
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
.personal {
    display: flex;

    background-color: #F5F5F5;
    & .personal-pic {
        overflow: hidden;
        width: 90px;
        height: 90px;
        margin: 15px 10px;
        border-radius: 45px;
        & .iconfont {
            font-size: 86px;
            color: #EFADAB;
        }
    }
    & .personal-msg {
        display: flex;
        flex-direction: column;
        flex-wrap: nowrap;
        justify-content: center;
        font-size: 22px;
        color: #7E8C8D;
        & span {
            font-size: 13px;
            margin-top: 15px;
        }
    }
    & .login-icon {
        flex: 1;
        position: relative;
        & i {
            position: absolute;
            right: 5px;
            top: 50%;
            transform: translateX(-50%);
        }
    }
}
.personal-acount {
    display: flex;
    width: 100%;
    color: #666666;
    border-bottom: 1px #f1f1f1 solid;
    & li{
        flex: 1;
        width: 33%;
        border-right: 1px #f1f1f1 solid;
        text-align: center;
        padding: 15px;
    }
    & .account {
        font-size: 22px;
        color: #FF9900;
    }
    & .last {
        border-right: none;
    }
}
.user {
    margin-top: 10px;
    padding: 5px 20px;
    & li {
        border-bottom: 1px #f1f1f1 solid;
        padding: 10px 0;
        color: #666;
        & .iconfont {
            color: #02A774;
            font-size: 32px;
            vertical-align: middle;
            margin-right: 10px;
        }
    }
}
.service {
    border-top: 1px #f1f1f1 solid;
    border-bottom: 1px #f1f1f1 solid;
    padding: 15px;
    margin-top: 15px;
    color: #666;
    & .iconfont {
        color: #02A774;
        font-size: 32px;
        vertical-align: middle;
        margin-right: 10px;
    }
}
.logout {
    margin-top: 15px;
    margin: 18px auto;
    width: 36%;
    & button {
        width: 100%;
        height: 40px;
        font-size: 18px;
        border-radius: 10px;
        background-color: #f5f5f5;
        color: #02A774;
    }
}
</style>
