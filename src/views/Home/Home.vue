<template>
    <section>
        <!-- 头部 -->
        <header>
            <span class="location">
                <i class="iconfont icon-dingwei"></i>
            </span>
            <span class="search">
                <i class="iconfont icon-search"></i>
                <input type="text" placeholder="查找附近商家" class="searche-input">
             </span>
            <span class="login">
                登录|注册
            </span>
        </header>

        <!-- 导航 -->
        <nav>
            <ul class="nav">
                <li class="nav-item">
                    <img src="/imgs/nav/1.jpg" alt="">
                    <span>甜点</span>
                </li>
                <li class="nav-item">
                    <img src="/imgs/nav/1.jpg" alt="">
                    <span>甜点</span>
                </li>
                <li class="nav-item">
                    <img src="/imgs/nav/1.jpg" alt="">
                    <span>甜点</span>
                </li>
                <li class="nav-item">
                    <img src="/imgs/nav/1.jpg" alt="">
                    <span>甜点</span>
                </li>
                <li class="nav-item">
                    <img src="/imgs/nav/1.jpg" alt="">
                    <span>甜点</span>
                </li>
                <li class="nav-item">
                    <img src="/imgs/nav/1.jpg" alt="">
                    <span>甜点</span>
                </li>
                <li class="nav-item">
                    <img src="/imgs/nav/1.jpg" alt="">
                    <span>甜点</span>
                </li>
                <li class="nav-item">
                    <img src="/imgs/nav/1.jpg" alt="">
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
            </div>
        </article>
    </section>
</template>
<script>
export default {
  data () {
    return {

    }
  }

}
</script>
<style lang="less" scope>
header {
    height: 50px;
    background-color: #02A774;
    display: flex;
    flex-wrap: nowrap;
    flex-direction: row;
    justify-content: space-around;
    & .location i{
        font-size: 32px;
        line-height: 50px;
    }
    & .login{
        line-height: 50px;
        font: 18px;
    }
    & .search {
        position: relative;
        width: 50%;
        height: 20px;
        line-height: 50px;
        font-size: 12px;
        text-align: center;
        & input {
            height: 100%;
            border-radius: 15px;
            background-color: #F5F5F5;
            padding-left: 35px;
        }
        & .iconfont {
            position: absolute;
            left: 15px;
        }
    }
}
.nav {
    display: flex;
    flex-wrap: wrap;
    text-align: center;
    border-bottom: 1px #F1F1F1 solid;
    padding: 10px 5px;
    & .nav-item {
        width: 25%;
        & img {
            width: 100%;
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
        }
    }
}
.list-item {
    overflow: hidden;
    margin: 10px;
    padding-bottom: 10px;
    border-bottom: 1px #F1F1F1 solid;
    .item-img {
        float: left;
        width: 30%;
    }
    .item-msg {
        float: left;
        width: 60%;
        & .pingpai {
            background-color: orange;
            font-size: 12px;
        }
        & .tag {
            float: right;
            font-size: 10px;
            & span{
                border: 1px #ddd solid;
                color: #ddd;
                padding: 1px;
                margin-right: 1px;
            }
        }
        & .about {
            margin-top: 25px;
            font-size: 13px;
            & .star {
                display: inline-block;
            }
            & .pingfen {
                color:orange
            }
            & .waimai {
                float: right;
                border: 1px #ddd solid;
                color: #ddd;
            }
        }
        & .peisong {
            margin-top: 10px;
            font-size: 13px;
        }
    }
}

</style>
