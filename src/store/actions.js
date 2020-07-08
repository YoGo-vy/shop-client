/* store状态异步操作 */
// import axios from 'axios'
export default {
//   // 获取商品列表
//   async getFoods (context) {
//     const { data } = await axios.get('/foods')
//     if (data.code !== 0) return '获取商品列表失败'
//     context.commit('setFoods', data.data)
//   }

  // store存储用户购物车，添加购物车商品数量
  asyncAddcar (context, params) {
    context.commit('setShopCar', params)
  }

}
