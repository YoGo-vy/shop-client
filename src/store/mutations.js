/* 更新store状态 */

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
  }
}
