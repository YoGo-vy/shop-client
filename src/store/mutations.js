/* 更新store状态 */
import Vue from 'vue'

export default {
  // 存储定位信息
  setAddress (state, address) {
    state.address = address
  },

  //  存储商品分类信息
  setcategorys (state, categorys) {
    state.categorys = categorys
  },

  // 存储商家列表
  setshops (state, shops) {
    state.shops = shops
  },

  // 存储用户信息
  setUserData (state, userData) {
    state.userData = userData
  },

  // 存储当前商家信息
  setShopinfo (state, shopInfo) {
    state.shopInfo = shopInfo
  },

  // 存储商品列表数据
  setGoods (state, goods) {
    state.goods = goods
  },

  // 保存商家评论列表
  setComments (state, comments) {
    state.comments = comments
  },

  /*
    商品购物车（store模拟后台数据保存）
        params:{
          type:1,
          goods：goods
        }
      type=1 :添加；type=0：减少
      goods当前商品信息
   */
  setShopCar (state, params) {
    // 查询购物车
    const res = state.shopCar.findIndex((item) => {
      return item.name === params.goods.name
    })
    // 购物车含有该商品
    if (res !== -1) {
      // 添加type=1
      if (params.type) {
        state.shopCar[res].acount += 1
      } else {
        state.shopCar[res].acount -= 1
        if (state.shopCar[res].acount <= 0) {
          // 从数组删除acount为0的元素
          state.shopCar.splice(res, 1)
        }
      }
      // 购物车不含有该商品
    } else {
      if (params.type) {
        // 新增属性添数据响应式效果
        Vue.set(params.goods, 'acount', 1)
        // params.goods.acount = 1
        state.shopCar.push(params.goods)
      }
    }
    // sessionStory本地存储用户购物车数据
    // const data = JSON.stringify(state.shopCar)
    // window.sessionStorage.setItem('shopCar', data)
  },

  // 本地sessionStory恢复购物车记录
  /* initShopCar (state) {
    const data = window.sessionStorage.getItem('shopCar')
    //  如果为空，保证state.shopCar为数组形式
    if (!data) return
    state.shopCar = JSON.parse(data)
  } */

  // 初始化购物车列表
  initShopCar (state, carList) {
    state.shopCar = carList
  }
}
