<template>
    <header>
      <!-- 定位 -->
        <span class="location" @click="showLocationDialog()">
            <i class="iconfont icon-dingwei"></i>
            <span>{{address.city}}</span>
        </span>

      <!-- search ,组件插槽-->
        <slot name="center" class="input"></slot>

      <!-- 登录注册 -->
        <span v-show="userData._id" class="personal" @click="$router.push('/personal')">
             <i class="iconfont icon-huiyuan"></i>
        </span>
        <span v-show="!userData._id" class="login" @click="showLoginDialog()">
            登录|注册
        </span>

        <!-- 定位选择弹窗 -->
        <van-dialog v-model="showLocation" title="选择你的定位信息" show-cancel-button>
            <van-area
            visible-item-count=3
            :area-list="areaList"
            />
        </van-dialog>
        <!-- 登录弹窗 -->
        <van-dialog v-model="showLoginWay"
        title="选择登录方式" :show-confirm-button='false'
        :close-on-click-overlay='true'
        show-cancel-button>
            <div class="login_btns">
                <button @click="$router.push('/login/1')">短信登录</button>
                <button @click="$router.push('/login/0')">账号登录</button>
            </div>
        </van-dialog>
    </header>
</template>

<script>
import { mapState } from 'vuex'

export default {
  data: function () {
    return {
      showLocation: false,
      showLoginWay: false,
      areaList: {
        province_list: {
          110000: '北京市',
          120000: '天津市'
        },
        city_list: {
          110100: '北京市',
          110200: '县',
          120100: '天津市',
          120200: '县'
        },
        county_list: {
          110101: '东城区',
          110102: '西城区',
          110105: '朝阳区',
          110106: '丰台区',
          120101: '和平区',
          120102: '河东区',
          120103: '河西区',
          120104: '南开区',
          120105: '河北区'
          // ....
        }
      }
    }
  },
  // 通过props传值
  computed: {
    ...mapState(['address', 'userData'])
  },
  methods: {
    showLoginDialog () {
      this.showLoginWay = true
    },
    showLocationDialog () {
      this.showLocation = true
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
}
.login_btns {
    margin-top: 15px;
    margin: 18px auto;
    width: 36%;
    & button {
        width: 100%;
        height: 40px;
        font-size: 13px;
        border-radius: 10px;
        background-color: #f5f5f5;
        color: #58D493;
        line-height: 40px;
    }
}
</style>
