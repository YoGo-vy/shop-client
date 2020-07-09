<template>
    <div class="addcar">
        <div class="reduce" v-show="goodsInfo.acount" @click="updataShopCar(0)">-</div>
        <div class="acount" v-show="goodsInfo.acount">{{goodsInfo.acount}}</div>
        <div class="add" @click="updataShopCar(1)">+</div>
    </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
export default {
  props: {
    goods: Object
  },
  computed: {
    ...mapState(['shopCar']),

    goodsInfo () {
      let info = {}
      const index = this.shopCar.findIndex((item) => {
        return item.name === this.goods.name
      })
      // 如果该商品购物车存在
      if (index !== -1) {
        info = this.shopCar[index]
      }
      return info
    }
  },
  methods: {
    ...mapActions(['asyncAddcar']),

    // 添加、减少购物车
    updataShopCar (type) {
      this.asyncAddcar({ type, goods: this.goods })
    }
  }
}
</script>

<style lang="less" scoped>
.addcar {
    display: inline-block;
    // 行内块元素宽度为内容的宽度
    // width: 100px;
    display: flex;
    justify-content: space-around;
    & .reduce,
      .add {
          width: 20px;
          height: 20px;
          border-radius: 10px;
          background: #58D493;
          color: #fff;
          text-align: center;
          line-height: 16px;
          font-size: 26px;
      }
    & .acount {
        height: 20px;
        color: #000;
        text-align: center;
        line-height: 20px;
        margin: 0 8px;
        font-weight: bold;
    }
}
</style>
