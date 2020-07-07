<template>
    <div class="container">
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

        <!-- 评价 -->
        <div class="comment">
            <div class="group">
                <button @click="showComment(0)" :class="currentIndex==0?'btn-current':''">全部{{commentlist.length}}</button>
                <button @click="showComment(1)" :class="currentIndex==1?'btn-current':''">满意{{goodComments.length}}</button>
                <button @click="showComment(2)" :class="currentIndex==2?'btn-current':''">差评{{badComments.length}}</button>
            </div>
            <div>
                <van-checkbox icon-size="16px" class="checkbox"
                checked-color="#07c160"
                v-model="showCommentsWithText">
                只看有内容的评价</van-checkbox>

            </div>
            <ul class="context">
                <li class="comment-item" v-for="(item, index) in commentsType" :key="index">
                    <!-- 每一条评论内容 -->
                    <img :src="item.avatar" alt="" class="icon">
                    <ul class="comment-detail">
                        <li>
                            <div class="user">
                                <span>{{item.username}}</span>
                                <Star class="Star" :score='item.score' :size='36' />
                            </div>
                            <span>时间过滤器</span>
                        </li>
                        <li>
                            <p>{{item.text}}</p>
                        </li>
                         <li>
                            <span><i class="iconfont icon-tuijian"></i></span>
                            <span v-for="(item2,index2) in item.recommend" :key="index2">{{item2}}</span>
                        </li>
                    </ul>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
import Star from '../../../components/Star/Star'
import { mapState, mapMutations } from 'vuex'
export default {
  data () {
    return {
      currentIndex: 0,
      showCommentsWithText: false,
      //  当前显示评论（是否包含内容）
      commentlist: []
    }
  },
  components: {
    Star
  },

  methods: {
    ...mapMutations(['setComments']),

    // 改变展示评论类别
    showComment (index) {
      this.currentIndex = index
    },

    // init初始化commentlist：默认为显示所有评论
    initcommentlist () {
      this.commentlist = this.comments
      this.currentIndex = 0
      this.showCommentsWithText = false
    },

    // 创建commentBscroll
    initCommentBscroll () {
      this.commentBscroll = new this.$bscroll('.container', {
        click: true
      })
    },
    // 动态设置commentBscroll高度
    setHeight () {
    //   const container = document.querySelector('.container')
    //   container.height
    }
  },

  computed: {
    ...mapState(['shopInfo', 'comments']),

    // 差评
    badComments () {
      return this.commentlist.filter((item) => {
        return item.rateType === 1
      })
    },

    // 好评
    goodComments () {
      return this.commentlist.filter((item) => {
        return item.rateType === 0
      })
    },

    // 展示评论类型
    commentsType () {
      switch (this.currentIndex) {
        case 1:
          return this.goodComments
        case 2:
          return this.badComments
        default:
          return this.commentlist
      }
    }
  },

  watch: {
    //  store的comments数据初始化，或数发生改变时，初始化/重置commentlist
    comments () {
      this.initcommentlist()
    },

    // 侦听：显示评论是否带内容
    showCommentsWithText () {
      if (!this.showCommentsWithText) {
        this.commentlist = this.comments
      } else {
        this.commentlist = this.comments.filter((item) => {
          return item.text !== '' && item.text.length > 0
        })
        console.log(this.commentlist.length)
      }
    }
  },

  async created () {
    const { data } = await this.$http.get('/comments')
    if (data.code !== 0) return this.$taost('获取评论列表失败')
    this.setComments(data.data)
  }

}
</script>

<style lang="less" scoped>
.containe {
    background: #eee;
}
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
.comment {
    border-top: 1px solid #ccc;
    padding: 10px 30px;
    font-size: 13px;
    & .group {
        display: flex;
        justify-content: flex-start;
        & button {
            margin: 5px;
            color: #fff;
            font-size: 10px;
            padding: 5px;
            border-radius: 5px;
            background: #ccc;
        }
        & .btn-current {
            background: #58D493;
        }
    }
    & .checkbox {
        font-size: 10px;
    }
    & .context {
        margin-top: 5px;
    }
    & .comment-item {
        overflow: hidden;
        display: flex;
        font-size: 12px;
        justify-content: flex-start;
        padding: 8px;
        border-bottom: 1px solid #ccc;
        & .icon {
            width: 36px;
            height: 36px;
            border-radius: 18px;
            overflow: hidden;
            background: orange;
        }
        & .comment-detail {
            flex:1;
            padding: 0 10px;
            color: #7E8C8D;
            & li:first-child {
                display: flex;
                justify-content: space-between;
                & .user {

                    display: flex;
                    flex-direction: column;
                    justify-content: flex-start;
                    & span {
                        margin-bottom: 3px;
                    }
                }
            }
            & li:nth-child(2) {
                color: #000;
            }
            & li:nth-child(3) {
                & span {
                    display: inline-block;
                    padding: 1px 3px;
                    border: 1px solid #ccc;
                    margin: 1px 4px;
                }
                & span:first-child {
                    border:none;
                    margin-right: 15px;
                    color: orange;
                    & i {
                        font-size: 22px;
                    }
                }
            }
        }
    }
}
</style>
