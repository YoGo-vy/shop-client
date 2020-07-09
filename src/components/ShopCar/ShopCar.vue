<template>
    <div>
        <ul class="shopcar">
            <li @click="showShopCarList()">
                <div class="car">
                    <div class="carIcon">
                        <i class="iconfont icon-tianchongxing-"></i>
                    </div>
                    <div class="acount">{{total.acount}}</div>
                </div>
            </li>
            <li @click="showShopCarList()">
                <span>共计 ￥{{total.money}}</span>
                <span>另需配送费用￥{{4}}元</span>
            </li>
            <li :class="['submit',total.money>=30?'on':'']" >
                <span v-if="total.money<30">还差{{Math.abs(total.money-30)}}元起送</span>
                <span class="pay" v-else @click="$router.push('/shopcarcenter')">结算</span>
                <span>满30元起送</span>
            </li>
        </ul>
        <!-- 购物车列表展示 -->
        <van-action-sheet v-model="showShopCar" title="购物车列表"
        class="shopCarlist">
            <div class="content">
                <span class="msg" v-if="!shopCar.length">当前购物车为空</span>
                <ul v-else>
                    <li class="carlist" v-for="(item,index) in shopCar" :key="index">
                        <span class="name">{{item.name}}</span>
                        <span class="price">￥{{item.price}}</span>
                        <AddCar class="operate" :goods='item'></AddCar>
                    </li>
                </ul>
            </div>
        </van-action-sheet>

    </div>
</template>

<script>
import { mapState } from 'vuex'
import AddCar from './AddCar'
export default {
  components: {
    AddCar
  },
  data () {
    return {
      showShopCar: false
    }
  },
  computed: {
    ...mapState(['shopCar']),

    total () {
      const total = { acount: 0, money: 0 }
      this.shopCar.forEach(item => {
        total.money += item.acount * item.price
        total.acount += item.acount
      })
      return total
    }
  },
  methods: {
    showShopCarList () {
      this.showShopCar = !this.showShopCar
    }
  }

}
</script>

<style lang="less" scoped>
.shopcar {
    height: 50px;
    background: #141D27;
    color: #fff;
    display: flex;
    font-size: 13px;
    position: fixed;
    bottom: 0;
    width: 100%;
    z-index: 9999;
    & li:first-child {
        width:30%;
        & .car {
            position: relative;
            width: 60px;
            height: 60px;
            margin: -10px auto 0;
            background: #141D27;
            border: 1px solid transparent;
            border-radius: 30px;
            & .carIcon {
                width: 46px;
                height: 46px;
                margin: 0 auto;
                margin-top: 7px;
                background: #02A774;
                border-radius: 23px;
                text-align: center;
                line-height: 46px;
                & i {
                    font-size: 26px;
                }
            }
            & .acount {
                position: absolute;
                height: 12px;
                padding: 3px;
                line-height: 12px;
                top: 0;
                right: 0;
                background: red;
                border-radius: 7px;
            }
        }
    }
    & li:nth-child(2),
    li:nth-child(3) {
        width: 40%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        font-weight: bold;
        & span:nth-child(2) {
            color: #62686F;
            margin-top: 5px;
            font-size: 12px;
            font-weight: normal;
        }

    }
    & .submit {
        width: 35%;
        background: #2B333B;
        align-items: center;
    }
    & .on {
        background: #00B43C;
        & .pay {
            font-size: 16px;
            font-weight: bold;
        }
    }
}
.shopCarlist {
    margin-bottom: 50px;
    .content {
        margin: 15px 0;
        width: 86%;
        margin: 10px auto 20px;
        font-size: 15px;
        color: #aaa;
        & .msg {
            display: block;
            text-align: center;
        }
        & .carlist {
            display: flex;
            width: 100%;
            justify-content: space-between;
            margin: 10px 0;
            & .name {
                width: 55%;
                color: #000;
            }
            & .price {
                width: 15%;
            }
            & .operate {
                width: 30%;
            }

        }
    }
}
</style>
