<template>
    <div>
        <span class="goback" @click="$router.go(-1)"><i class="iconfont icon-zuojiantou"></i>返回</span>
        <Header >
            <!-- 作用域插槽-->
            <span slot="center" class="title">购物车中心</span>
        </Header>

        <!-- 配送地址 -->

        <article class="carlist">
          <!-- 确认订单列表 -->
          <div v-if="shopCar.length">

            <van-card v-for="(item, index) in shopCar" :key="index"
              :num="item.acount"
              :desc="item.description"
              :title="item.name"
              :thumb="item.icon"
              >
                <template #price>
                  <span>￥{{item.price}}元/份</span>
                </template>
                <template #tags>
                  <AddCar :goods='item' class="addcar" />
                </template>
            </van-card>
            <div class="address">
                  <span>配送地址</span>
                  <van-address-list
                    v-model="chosenAddressId"
                    :list="addressList"
                    default-tag-text="默认"
                    @edit="onEdit"
                  >
                  </van-address-list>
                <van-submit-bar class="submit"
                  :disabled = 'total.differences.disable'
                  :price="total.money*100"
                  button-text="支付"
                  :tip="'Tip：满30元起送'+(total.differences.disable?'，还差 '+total.differences.number+' 元':'')"
                  tip-icon="info-o"
                  @submit="onSubmit"
                />
            </div>

          </div>
          <div v-else class="empty">
            你的购物车尚未添加任何商品
          </div>
        </article>

    </div>
</template>
<script>
import { mapState, mapMutations } from 'vuex'
import Header from '../../components/Header/Header'
import AddCar from '../../components/ShopCar/AddCar'
export default {
  data () {
    return {
      chosenAddressId: 0,
      carList: [],
      addressList: [
        {
          id: '1',
          name: '钱三',
          tel: '17612345678',
          address: '***路***小区 7 楼 501 室',
          isDefault: true
        }
      ]
    }
  },
  components: {
    Header,
    AddCar
  },
  computed: {
    ...mapState(['userData', 'shopCar']),

    total () {
      const total = { acount: 0, money: 0, differences: { disable: true, number: 0 } }
      this.shopCar.forEach(item => {
        total.money += item.acount * item.price
        total.acount += item.acount
      })
      if (total.money < 30) {
        total.differences.number = 30 - total.money
      } else {
        total.differences.disable = false
      }
      return total
    }
  },
  methods: {
    ...mapMutations(['initShopCar']),
    onEdit () {
      this.$toast('根据id，修改地址')
    },
    onSubmit () {
      if (!this.userData._id) {
        this.$toast('尚未登录，请前往登录后支付')
      }
      this.$toast('测试阶段')
    }
  }
}
</script>
<style lang="less" scoped>
.title {
    font-size: 18px;
    font-weight: bold;
    color: #02A774;
}
.carlist {
  margin: 38px 0 70px;
}
.addcar {
  width: 36%;
  float: right;
}
.empty {
  font-size: 18px;
  text-align: center;
  color: #ccc;
  margin-top: 130px;
}
.submit {
  margin-bottom: 60px;
}
.address {
  margin-top: 10px;
}
.van-address-item {
  padding: 0;
  background: #F7F8FA;
  border: 1px solid #ccc;
  border-radius: 0px;
}
</style>
