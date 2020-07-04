/*
模拟后台响应数据：
    Mock.mock( rurl?, rtype?, template|function( options ) )
    当拦截到匹配 rurl 和 rtype 请求方式的 Ajax 请求，将根据数据模板 template 生成模拟数据，并作为响应数据返回。
    Mock.setup({
        timeout: 400
    })
    指定被拦截的 Ajax 请求的响应时间
 */
import Mock from 'mockjs'
// // 虚拟后台数据
import data from './data.json'

// // 商品列表
Mock.mock('/api/foods', { code: 0, data: data.goods })
// 评论列表
Mock.mock('/api/comments', { code: 0, data: data.ratings })
// 商家信息
Mock.mock('/api/shopinfo', { code: 0, data: data.info })
