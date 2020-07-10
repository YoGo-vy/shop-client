<template>
    <div class="container">
        <div class="shopheader">
          <!-- 头部背景，logo -->
          <header class="bg" :style="'background:url('+shopInfo.bgImg+')'">
            <span class="goback" @click="$router.push('/')"><i class="iconfont icon-zuojiantou"></i>返回</span>
            <div class="logo">
              <img :src="shopInfo.avatar" alt="">
            </div>
          </header>

          <!-- 商家信息 -->
          <article class="shop-msg">
            <ul @click="shopDetails()">
              <li>
                  <span class="pingpai">品牌</span>
                  <h3>{{shopInfo.name}}</h3>
                  <span><i class="iconfont icon-jiantou"></i></span>
              </li>
              <li>
                <section class="about">
                  <Star class="star" :size="36" :score="4.7"></Star>
                  <span>月销 <span>{{shopInfo.sellCount}}</span> 单</span>
                </section>
              </li>
              <li class="about">
                  <span class="waimai">{{shopInfo.description}}</span>
                  <span class="waimai">约{{shopInfo.deliveryTime}}分钟送达</span>
                  <span class="waimai">距离{{shopInfo.distance}}m</span>
              </li>
            </ul>
            <div class="youhui" @click="showSaleDetails = true">
                  <span class="tag">{{shopInfo.supports[0].name}}</span>
                  <span class="item omit">{{shopInfo.supports[0].content}}</span>
                  <span class="tips">展开详细</span>
            </div>
          </article>

          <!-- 路由导航 -->
          <div class="router_link">
            <router-link :to="item.path" v-for="(item,index) in link" :key="index"
            :class="['link',currentIndex==index? 'current':'']" @click.native="changeLink(index)">
              {{item.desc}}
            </router-link>
          </div>

          <!-- 商家详细信息弹窗展示 -->
          <van-dialog v-model="showShopDetails"
          title="商家" :show-confirm-button='false'
          :close-on-click-overlay='true'
          show-cancel-button>
              <div class="shopDetail">
                <ul>
                  <li>
                      <span class="pingpai">品牌</span>
                      <span class="shopname">{{shopInfo.name}}</span>
                  </li>
                  <li>
                    <ul class="items">
                      <li>
                        <span>{{shopInfo.score}}</span>
                        <span>评分</span>
                      </li>
                      <li>
                        <span>{{shopInfo.sellCount}}单</span>
                        <span>月售</span>
                      </li>
                      <li>
                        <span>约{{shopInfo.deliveryTime}}分钟</span>
                        <span>外卖</span>
                      </li>
                      <li>
                        <span>{{shopInfo.deliveryPrice}}元</span>
                        <span>配送费</span>
                      </li>
                      <li>
                        <span>{{shopInfo.distance}}</span>
                        <span>距离</span>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <span class="msg">公告</span>
                  </li>
                  <li class="desc">
                    <p>{{shopInfo.bulletin}}</p>
                  </li>
                </ul>
              </div>
          </van-dialog>

          <!-- 优惠信息展示 -->
          <van-dialog v-model="showSaleDetails"
          title="特惠" :show-confirm-button='false'
          :close-on-click-overlay='true'>
              <div class="saleDetail">
                <ul>
                  <li>
                      <span class="pingpai">品牌</span>
                      <span class="shopname">{{shopInfo.name}}</span>
                  </li>
                  <li class="sale" v-for="(item,index) in shopInfo.supports"
                  :key="index">
                    <span class="tag">{{item.name}}</span>
                    <span class="item omit">{{item.content}}</span>
                  </li>
                </ul>
              </div>
          </van-dialog>
        </div>

        <!-- 路由占位+缓存商品，评论组件 -->
        <keep-alive :include=include>
          <router-view></router-view>
        </keep-alive>

    </div>
</template>

<script>
import Star from '../../components/Star/Star'
import { mapState, mapMutations } from 'vuex'
export default {
  props: {
    id: String
  },
  data () {
    return {

      // KeepAlive按需缓存路由组件'comments', 'goods'
      include: [],

      // 路由链接
      link: [{ desc: '点餐', path: '/goods' },
        { desc: '评价', path: '/comments' },
        { desc: '商家', path: '/shopinfo' }
      ],
      // 路由链接切换
      currentIndex: 0,
      // 展示商家详细信息
      showShopDetails: false,
      // 展示优惠信息
      showSaleDetails: false
    }
  },
  watch: {
    // 监听路由对象，动态设置include匹配，按需缓存路由组件
    $route (to, from) {
      if (this.$route.meta.keepAlive) {
        const index = this.include.findIndex((item) => {
          return item === this.$route.name
        })
        if (index !== -1) return
        this.include.push(this.$route.name)
      }
    }
  },
  components: {
    Star
  },
  computed: {
    ...mapState(['shopInfo'])
  },
  methods: {
    ...mapMutations(['setShopinfo']),

    changeLink (index) {
      this.currentIndex = index
    },
    shopDetails () {
      this.showShopDetails = true
    }
  },
  async created () {
    // 获取当前商家信息
    const { data } = await this.$http.get('/shopinfo')
    if (data.code !== 0) {
      return this.$toast('获取商家信息失败')
    }
    this.setShopinfo(data.data)
  }
}
</script>

<style lang="less" scoped>

.bg {
  position: relative;
  height: 60px;
  background: pink;
  & .goback {
    position: absolute;
    top:  30%;
    left: 3%;
    height: 18px;
    line-height: 18px;
    color: #ddd;
    & i {
        font-size: 18px;
    }
  }
  & .logo {
    width: 60px;
    height: 60px;
    position: absolute;
    top: 30%;
    left: 50%;
    border: 1px solid #58D493;
    transform: translateX(-50%);
    background-size: 20px;
    & img {
      width: 100%;
    }
  }
}
.shop-msg ul {
  width: 70%;
  margin: 16px auto 10px;
  & li {
    text-align: center;
  }
  & .pingpai {
    background-color: orange;
    font-size: 12px;
  }
  & h3 {
    display: inline-block;
    margin: 5px;
  }
  & .icon-jiantou {
    font-size: 18px;
    color: #58D493;
  }
  & .star {
    display: inline-block;
    margin: 0 auto;
  }
  & .about {
      margin-top: 8px;
      font-size: 8px;
      & .waimai {
          margin: 0 2px;
          border: 1px #ddd solid;
          color: #7E8C8D;
      }
  }
}
.youhui {
    font-size: 6px;
    text-align: center;
  & .tag {
    border: 1px solid #eee;
    background: red;
    color: #fff;
    margin-right: 3px;
  }
  & .item {
    display: inline-block;
    width: 180px;
  }
  & .tips {
    display: inline-block;
    border: 1px solid #eee;
    background: orange;
    font-weight: bold;
    font-size: 13px;
  }
}
.router_link {
  display: flex;
  justify-content: space-around;
  width: 80%;
  font-size: 15px;
  margin: 10px auto 5px;
  border-bottom: 1px solid #eee;
  & .link {
    // flex: 1;
    width: 25%;
    padding-bottom: 5px;
    text-align: center;
    color: #7E8C8D;
  }
  & .current {
    color:#02A774;
    font-weight: bold;
    border-bottom:2px solid #02a774;
  }
}
// 超出部分省略号显示
.omit {
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.shopDetail {
  & ul {
    width: 96%;
    margin: 10px auto;
    text-align: center;
      & li {
       margin: 3px;
      & .pingpai {
        background-color: orange;
        font-size: 12px;
      }
      & .shopname {
        font-weight: bold;
        font-size: 18px;
        margin: 0 5px;
      }
      & .msg {
        font-weight: bold;
        font-size: 15px;
      }
      & p {
        font-size: 12px;
        color: #7E8C8D;
      }
    }
  }
}
.items {
  display: flex;
  justify-content: space-around;
  & li {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-items: center;
    font-weight: bold;
    & span:first-child {
      font-size: 12px;
    }
    & span:nth-child(2) {
      font-weight: normal;
      font-size: 13px;
      color:#7E8C8D;
    }
  }
}
.saleDetail ul li {
  margin: 20px;
  font-size: 13px;
  text-align: center;
  & .pingpai {
    background-color: orange;
    font-size: 12px;
  }
  & .shopname {
    font-weight: bold;
    font-size: 18px;
    margin: 0 5px;
  }
}
</style>
