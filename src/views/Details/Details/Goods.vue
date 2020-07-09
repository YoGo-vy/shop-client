<template>
    <div>
      <div class="goods" ref="goods">
        <aside class="aside">
          <ul>
            <li v-for="(item,index) in goods" :key="index"
            :class="currentIndex==index?'current-li':''" @click="changeCurrent(index)">
              {{item.name}}
            </li>
          </ul>
        </aside>

        <article class="wrapper">
          <!-- 商品分类 -->
          <ul class="content" ref="wrapper_content">
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
                      <span class="addcar" >
                        <AddCar :goods='item2'>+</AddCar>
                      </span>
                    </li>
                  </ul>
                </li>
              </ul>

            </li>
          </ul>

        </article>
      </div>

      <!-- 购物车组件 -->
      <ShopCar></ShopCar>
    </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
import AddCar from '../../../components/ShopCar/AddCar'
import ShopCar from '../../../components/ShopCar/ShopCar'

export default {
  data () {
    return {
      // 保存右侧商品列表每项li的top值
      tops: [],
      // 保存当前的滑动Y轴位移
      scrollY: 0
    }
  },
  components: {
    AddCar,
    ShopCar
  },
  computed: {
    ...mapState(['goods']),

    // 计算当前滑动位置li的currentIndex
    currentIndex () {
      const current = this.tops.findIndex((item, index, arr) => {
        if (index === arr.length - 1) {
          return this.scrollY >= item
        }
        return this.scrollY >= item && this.scrollY < arr[index + 1]
      })
      return current
    }
  },

  methods: {
    ...mapMutations(['setGoods', 'initShopCar']),

    async getGoods () {
      const { data } = await this.$http.get('/goods')
      if (data.code !== 0) return this.$toast('获取商品列表失败')
      this.setGoods(data.data)
    },

    // 1.使用BScroll插件
    initBscoll () {
      // 添加到当前组件
      if (this.wrapper) return
      this.wrapper = new this.$bscroll('.wrapper', {
        scrollY: true,
        // 默认false：阻止浏览器的原生 click 事件
        click: true,
        // 派发scroll事件
        probeType: 3
      })
      this.asideWrapper = new this.$bscroll('.aside', {
        scrollY: true,
        click: true
      })

      // 绑定scorll事件，对象结构实际参数x,y值
      this.wrapper.on('scroll', ({ x, y }) => {
        this.scrollY = Math.abs(y)
      })

      // probeType: 3 --性能消耗大
      // this.wrapper.on('scrollEnd', ({ x, y }) => {
      //   this.scrollY = Math.abs(y)
      // })
    },

    // 2.动态设置Bscoll区域的高度,屏幕大小发生改变自适应
    setBscoll () {
      const goods = this.$refs.goods
      goods.style.height = window.innerHeight - goods.offsetTop - 50 + 'px'
      // 防止多次为window绑定同一个事件
      window.removeEventListener('resize', () => {})
      window.addEventListener('resize', () => {
        goods.style.height = window.innerHeight - goods.offsetTop - 50 + 'px'
      })
    },

    //  3.初始化右侧滑动区域的所有li的顶点坐标数组:(只初始化执行一次设置tops)
    initTops () {
      this.tops = []
      const lis = this.$refs.wrapper_content.children
      Array.from(lis).forEach((item) => {
        this.tops.push(item.offsetTop)
      })
    },

    // 左侧aside点击改变current
    changeCurrent (index) {
      const y = -this.tops[index]
      this.scrollY = y
      this.wrapper.scrollTo(0, y, 500)
    }
  },
  watch: {
    // 滑动组件使用前提：1.当依赖的store数据初始化完成；2.页面Dom结构加载完成
    goods (value) {
      this.$nextTick(() => {
        this.setBscoll()
        this.initTops()
      })
    }
  },
  created () {
    // 获取商品列表
    this.getGoods()
    // 本地获取购物车记录
    this.initShopCar()
  },
  mounted () {
    this.initBscoll()
  }
}
</script>

<style lang="less" scoped>
.goods {
  font-size: 13px;
  margin-top: 6px;
  display: flex;
  border-top: 1px solid #eee;
  & aside {
    width: 25%;
    padding-top: 33px;
    background: #F3F5F7;
    & ul {
      margin: 3px auto;
      & li {
        height: 55px;
        line-height: 55px;
        text-align: center;
        border-bottom: 2px solid #eee;
        color: #93999F;
      }
      & .current-li {
          background: #fff;
          color: #02A774;
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
        border-left: 2px solid #ccc;
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
      margin-right: 10px;
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
.content {
  // 使用offsetTop获取lis的tops值
  position: relative;
}

</style>
