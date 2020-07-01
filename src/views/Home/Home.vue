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
        <nav>
            <ul class="nav">
                <li class="nav-item">
                    <img src="/imgs/nav/1.jpg" alt="">
                    <span>甜点</span>
                </li>
                <li class="nav-item">
                    <img src="/imgs/nav/2.jpg" alt="">
                    <span>甜点</span>
                </li>
                <li class="nav-item">
                    <img src="/imgs/nav/3.jpg" alt="">
                    <span>甜点</span>
                </li>
                <li class="nav-item">
                    <img src="/imgs/nav/4.jpg" alt="">
                    <span>甜点</span>
                </li>
                <li class="nav-item">
                    <img src="/imgs/nav/5.jpg" alt="">
                    <span>甜点</span>
                </li>
                <li class="nav-item">
                    <img src="/imgs/nav/6.jpg" alt="">
                    <span>甜点</span>
                </li>
                <li class="nav-item">
                    <img src="/imgs/nav/7.jpg" alt="">
                    <span>甜点</span>
                </li>
                <li class="nav-item">
                    <img src="/imgs/nav/8.jpg" alt="">
                    <span>甜点</span>
                </li>
            </ul>
        </nav>
        <!-- 主体内容区域 -->
        <article>
            <div class="artical-header">
                <span>
                    <i class="iconfont icon-chengshifuwu"></i>
                </span>
                <span>附近商家</span>
            </div>
            <div class="list">
                <div class="list-item">
                    <div class="item-img">
                        <img src="/imgs/nav/1.jpg" alt="">
                    </div>
                    <ul class="item-msg">
                        <li>
                            <span class="pingpai">品牌</span>
                            <span>店铺名</span>
                        </li>
                        <li class="tag">
                            <span>保</span>
                            <span>准</span>
                            <span>票</span>
                        </li>
                        <li class="about">
                            <section class="star">***</section>
                            <span class="pingfen">4.7</span>
                            <span>月销<span>106</span>单</span>
                            <span class="waimai">外卖专送</span>
                        </li>
                        <li class="peisong">
                            <span>￥<span>20</span>元起送/配送费约￥<span>5</span></span>
                        </li>
                    </ul>

                </div>
                <div class="list-item">
                    <div class="item-img">
                        <img src="/imgs/nav/1.jpg" alt="">
                    </div>
                    <ul class="item-msg">
                        <li>
                            <span class="pingpai">品牌</span>
                            <span>店铺名</span>
                        </li>
                        <li class="tag">
                            <span>保</span>
                            <span>准</span>
                            <span>票</span>
                        </li>
                        <li class="about">
                            <section class="star">***</section>
                            <span class="pingfen">4.7</span>
                            <span>月销<span>106</span>单</span>
                            <span class="waimai">外卖专送</span>
                        </li>
                        <li class="peisong">
                            <span>￥<span>20</span>元起送/配送费约￥<span>5</span></span>
                        </li>
                    </ul>

                </div>
                <div class="list-item">
                    <div class="item-img">
                        <img src="/imgs/nav/1.jpg" alt="">
                    </div>
                    <ul class="item-msg">
                        <li>
                            <span class="pingpai">品牌</span>
                            <span>店铺名</span>
                        </li>
                        <li class="tag">
                            <span>保</span>
                            <span>准</span>
                            <span>票</span>
                        </li>
                        <li class="about">
                            <section class="star">***</section>
                            <span class="pingfen">4.7</span>
                            <span>月销<span>106</span>单</span>
                            <span class="waimai">外卖专送</span>
                        </li>
                        <li class="peisong">
                            <span>￥<span>20</span>元起送/配送费约￥<span>5</span></span>
                        </li>
                    </ul>

                </div>
                <div class="list-item">
                    <div class="item-img">
                        <img src="/imgs/nav/1.jpg" alt="">
                    </div>
                    <ul class="item-msg">
                        <li>
                            <span class="pingpai">品牌</span>
                            <span>店铺名</span>
                        </li>
                        <li class="tag">
                            <span>保</span>
                            <span>准</span>
                            <span>票</span>
                        </li>
                        <li class="about">
                            <section class="star">***</section>
                            <span class="pingfen">4.7</span>
                            <span>月销<span>106</span>单</span>
                            <span class="waimai">外卖专送</span>
                        </li>
                        <li class="peisong">
                            <span>￥<span>20</span>元起送/配送费约￥<span>5</span></span>
                        </li>
                    </ul>

                </div>
                <div class="list-item">
                    <div class="item-img">
                        <img src="/imgs/nav/1.jpg" alt="">
                    </div>
                    <ul class="item-msg">
                        <li>
                            <span class="pingpai">品牌</span>
                            <span>店铺名</span>
                        </li>
                        <li class="tag">
                            <span>保</span>
                            <span>准</span>
                            <span>票</span>
                        </li>
                        <li class="about">
                            <section class="star">***</section>
                            <span class="pingfen">4.7</span>
                            <span>月销<span>106</span>单</span>
                            <span class="waimai">外卖专送</span>
                        </li>
                        <li class="peisong">
                            <span>￥<span>20</span>元起送/配送费约￥<span>5</span></span>
                        </li>
                    </ul>

                </div>
                <div class="list-item">
                    <div class="item-img">
                        <img src="/imgs/nav/1.jpg" alt="">
                    </div>
                    <ul class="item-msg">
                        <li>
                            <span class="pingpai">品牌</span>
                            <span>店铺名</span>
                        </li>
                        <li class="tag">
                            <span>保</span>
                            <span>准</span>
                            <span>票</span>
                        </li>
                        <li class="about">
                            <section class="star">***</section>
                            <span class="pingfen">4.7</span>
                            <span>月销<span>106</span>单</span>
                            <span class="waimai">外卖专送</span>
                        </li>
                        <li class="peisong">
                            <span>￥<span>20</span>元起送/配送费约￥<span>5</span></span>
                        </li>
                    </ul>

                </div>
            </div>
        </article>
    </section>
</template>

<script>
import Header from '../../components/Header/Header'
export default {
  components: {
    Header
  },
  data () {
    return {

    }
  },
  methods: {
    search () {
      this.$router.push('/search')
    }
  }
}
</script>
<style lang="less" scoped>
Header {
    position: fixed;
    width: 100%;
    top: 0;
}
nav {
    margin-top: 50px;
}
.nav {
    display: flex;
    flex-wrap: wrap;
    text-align: center;
    border-bottom: 1px #F1F1F1 solid;
    padding: 10px 5px;
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
    margin-top: 10px;
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
