<template>
    <section>
        <!-- 头部 -->
        <Header>
            <span class="search" slot='input' @click="search()">
                <i class="iconfont icon-search"></i>
                <input type="text" placeholder="查找附近商家" class="searche-input">
            </span>
        </Header>
        <!-- 导航 -->
        <nav class="swiper-container">
            <div class="swiper-wrapper" v-if="categorys.length">
                <ul class="nav swiper-slide" v-for="(item,index) in cate_ul" :key="index">
                    <li class="nav-item" v-for="(item2,index2) in item" :key="index2">
                        <img :src="baseUrl+item2.image_url" alt="">
                        <span>{{item2.title}}</span>
                    </li>
                </ul>
            </div>
            <img v-else src="/imgs/nav/nav_back.svg" alt="">
            <!-- 分页器 -->
            <div class="swiper-pagination"></div>
            <!-- 滚动条 -->
            <div class="swiper-scrollbar"></div>

        </nav>

        <!-- 主体内容区域 -->
        <article>
            <div class="artical-header">
                <span>
                    <i class="iconfont icon-chengshifuwu"></i>
                </span>
                <span>附近商家</span>
            </div>
            <div class="list" v-if="shops.length" >
                <div class="list-item" v-for="(item) in shops" :key="item.id" >
                    <div class="item-img">
                        <img src="/imgs/nav/1.jpg" alt="">
                    </div>
                    <ul class="item-msg">
                        <li>
                            <span class="pingpai">品牌</span>
                            <span>{{item.name}}</span>
                        </li>
                        <li class="tag">
                            <span v-for="(item2,index) in item.supports" :key="index" :style="'color:icon_color'">
                                {{item2.icon_name}}
                            </span>
                        </li>
                        <li class="about">
                            <section class="star">***</section>
                            <span class="pingfen">{{item.rating}}</span>
                            <span>月销<span>{{item.rating_count}}</span>单</span>
                            <span class="waimai">外卖专送</span>
                        </li>
                        <li class="peisong">
                            <span>￥<span>{{item.float_minimum_order_amount}}</span>元起送/配送费约￥<span>{{item.float_delivery_fee}}</span></span>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="list" v-else >
                <ul class="list-item">
                    <li v-for="(item,index) in 6" :key="index">
                        <img src="/imgs/shops/shop_back.svg" alt="" />
                    </li>
                </ul>
            </div>
        </article>
    </section>
</template>

<script>
import Header from '../../components/Header/Header'
import Swiper from 'swiper'
import '../../../node_modules/swiper/css/swiper.min.css'
import { mapState } from 'vuex'
export default {
  data () {
    return {
      baseUrl: 'https://fuss10.elemecdn.com'
    }
  },
  components: {
    Header
  },

  computed: {
    ...mapState(['categorys', 'shops']),

    // nav导航轮播效果
    cate_ul () {
      const arr = []
      let arrSmall = []
      if (this.categorys.length <= 8) {
        arr.push(this.categorys)
        return arr
      }
      //   拆分数组
      this.categorys.forEach((item, index) => {
        arrSmall.push(item)
        if (arrSmall.length === 8) {
          arr.push(arrSmall)
          arrSmall = []
        }
        if (index === this.categorys - 1) {
          arr.push(arrSmall)
          return arr
        }
      })
      console.log(arr)
      return arr
    }
  },
  methods: {
    search () {
      this.$router.push('/search')
    },

    // swiper轮播
    initSwiper () {
      this.$nextTick(() => {
        // 在下一次Dom更新后，创建swiper实例(swiper依赖于绑定Dom节点)
        return new Swiper('.swiper-container', {
        // 分页器
          pagination: {
            el: '.swiper-pagination'
          },
          // 滚动条
          scrollbar: {
            el: '.swiper-scrollbar'
          }
        })
      })
    }
  },

  //  侦听器
  watch: {
    // 侦听依赖的store数据初始化后创建swiper
    categorys () {
      this.initSwiper()
    }
  },

  mounted () {
    // 页面加载完成创建swiper实例
    this.initSwiper()
  }
}
</script>
<style lang="less" scoped>
nav {
    margin-top: 50px;
}
.nav {
    display: flex;
    flex-wrap: wrap;
    text-align: center;
    border-bottom: 1px #F1F1F1 solid;
    padding: 10px 5px 25px;
    & .nav-item {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 25%;
        font-size: 15px;
        & img {
            width: 65%;
        }
    }
}
article {
    border-top: 1px #eee solid;
    margin: 10px 0 50px;
    .artical-header {
    font-size: 16px;
    margin-top: 10px;
        & span {
            margin: 5px;
            & i{
                font-size: 18px;
            }
        }
    }
}

.list-item {
    overflow: hidden;
    margin: 10px;
    padding-bottom: 5px;
    border-bottom: 1px #F1F1F1 solid;
    .item-img {
        float: left;
        width: 25%;
        border: 1px #F1F1F1 solid;
        margin-right: 10px;
        & img {
            width: 100%;
        }
    }
    .item-msg {
        float: left;
        width: 70%;
        & .pingpai {
            background-color: orange;
            font-size: 12px;
        }
        & .tag {
            float: right;
            font-size: 6px;
            & span{
                border: 1px #ddd solid;
                color: #7E8C8D;
                margin-right: 1px;
            }
        }
        & .about {
            margin-top: 18px;
            font-size: 8px;
            & .star {
                display: inline-block;
            }
            & .pingfen {
                color:orange
            }
            & .waimai {
                float: right;
                border: 1px #ddd solid;
                color: #7E8C8D;
            }
        }
        & .peisong {
            margin-top: 10px;
            font-size: 13px;
        }
    }
}

</style>
