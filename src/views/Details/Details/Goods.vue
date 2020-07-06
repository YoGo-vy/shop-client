<template>
    <div class="goods" ref="goods">
      <aside class="aside">
        <ul>
          <li v-for="(item,index) in goods" :key="index">
            {{item.name}}
          </li>
        </ul>
      </aside>

      <article class="wrapper">
        <!-- 商品分类 -->
        <ul class="content">
          <li v-for="(item, index) in goods" :key="index">
            <div class="goods-msg">{{item.name}}</div>

            <!-- 当前分类下的商品列表 -->
            <ul class="goods-group">
              <li class="detail" v-for="(item2,index2) in item.foods" :key="index2">
                <!-- 商品图片 -->
                <div class="good-img">
                  <img :src="item2.icon" alt="">
                </div>
                <!-- 商品描述 -->
                <ul class="decs">
                  <li>{{item2.name}}</li>
                  <li>{{item2.description}}</li>
                  <li>月销 {{item2.sellCount}} 份 <span class="haoping">好评率 {{item2.rating}}</span></li>
                  <li>
                    <span>￥{{item2.price}}</span>
                    <span class="addcar">+</span>
                  </li>
                </ul>
              </li>
            </ul>

          </li>
        </ul>

      </article>
    </div>
</template>

<script>
import BScroll from 'better-scroll'
import { mapState, mapMutations } from 'vuex'

export default {
  computed: {
    ...mapState(['goods'])

  },
  methods: {
    ...mapMutations(['setGoods']),

    async getGoods () {
      const { data } = await this.$http.get('/goods')
      if (data.code !== 0) return this.$toast('获取商品列表失败')
      this.setGoods(data.data)
    },

    // 使用bscoll插件
    initBscoll () {
      const wrapper = new BScroll('.wrapper')
      const aside = new BScroll('.aside')
      return { aside, wrapper }
    },

    // 态设置Bscoll区域的高度,屏幕大小发生改变自适应
    setBscoll () {
      const goods = this.$refs.goods
      goods.style.height = window.innerHeight - goods.offsetTop - 50 + 'px'
      window.addEventListener('resize', () => {
        goods.style.height = window.innerHeight - goods.offsetTop - 50 + 'px'
      })
    }

  },
  watch: {
    // 滑动组件使用前提：1.当依赖的store数据初始化完成；2.页面Dom结构加载完成
    goods (value) {
      this.$nextTick(() => {
        this.initBscoll()
      })
    }
  },
  created () {
    // 获取商品列表
    this.getGoods()

    // created()时Dom尚未生成
    // this.initBscoll()
    // this.setBscoll()
  },
  mounted () {
    this.setBscoll()
    this.initBscoll()
  }
}
</script>

<style lang="less" scoped>
.goods {
  font-size: 13px;
  margin-top: 6px;
  display: flex;
  & aside {
    width: 25%;
    background: #F3F5F7;
    & ul {
      width: 70%;
      margin: 3px auto;
      & li {
        height: 55px;
        line-height: 55px;
        text-align: center;
        border-bottom: 2px solid #eee;
        & .current-li {
          border-bottom: none;
          background: #000;
          color: #93999F;
        }
      }

    }
  }
  & article {
    width: 75%;
    & ul {
      & li {
        & .goods-msg{
        height: 35px;
        line-height: 40px;
        text-align: center;
        background: #F3F5F7;
        color: #93999F;
        }
        & .current-li {
         border-left: 2px solid #eee;
        }
      }
    }
  }
}
.goods-group {
  width: 96%;
  margin: 5px auto;
  & .detail {
    display: flex;
    align-items: center;
    height: 80px;
    margin: 5px 0;
  }
  & .good-img {
    width: 70px;
    height: 70px;
    margin-right: 10px;
    background: pink;
    & img {
      width: 100%;
      height: 100%;
    }
  }
  & .decs {
    flex: 1;
    color: #93999F;
    font-size: 12px;
    & li {
      margin: 5px 0;
    }
    & li:first-child{
      font-size: 13px;
      color:  #000;
    }
    & .haoping {
      margin-left: 15px;
    }
    & .addcar {
      float: right;
      margin-right: 20px;
    }
  }
}
.goods {
  overflow: hidden;
}
.wrapper {
  height: 100%;
}
.aside {
  height: 100%;
}
// 实现商品列表滑动
</style>
