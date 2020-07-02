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
  }
}
