<template>
    <div>
         <!-- 评分 -->
        <div class="grade">
            <div class="score">
                <span>{{shopInfo.score}}</span>
                <span>综合评分</span>
                <span>高于周边商家99%</span>
            </div>
            <div class="star">
                <div>
                    <span>服务态度：</span>
                    <Star class="Star" :score='shopInfo.serviceScore' :size='36' />
                </div>
                <div>
                    <span>商品评分：</span>
                    <Star class="Star" :score='shopInfo.foodScore' :size='36' />
                </div>
            </div>
        </div>
        <div class="shopDetail">
            <ul>
                <li>
                    <span class="msg">公告</span>
                </li>
                <li class="desc">
                    <p>{{shopInfo.bulletin}}</p>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
import Star from '../../../components/Star/Star'
import { mapState, mapMutations } from 'vuex'
export default {
  components: {
    Star
  },
  computed: {
    ...mapState(['shopInfo'])
  },
  methods: {
    ...mapMutations([''])
  }

}
</script>

<style lang="less" scoped>
.grade {
    border-top: 1px solid #eee;
    margin-top: 6px;
    display: flex;
    font-size: 13px;
    padding: 10px 0;
    & .score {
        height: 70px;
        width: 40%;
        border-right: 1px solid #eee;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-around;
        & span:first-child {
            font-size: 20px;
            color: orange;
        }
         & span:nth-child(3) {
            font-size: 10px;
            color: #ccc;
        }
    }
    & .star {
        padding-left: 15px;
        height: 70px;
        flex: 1;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: space-around;
        & .Star {
            margin-left: 30px;
            margin: 2px 30px;
        }
    }
}
.shopDetail {
  & ul {
    width: 96%;
    margin: 10px auto;
    text-align: center;
      & li {
       margin: 3px;
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
</style>
