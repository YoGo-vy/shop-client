<template>
    <div>
        <div :class="['star','star'+size]">
            <div class="item" :class="item" v-for="(item,index) in classes" :key="index"></div>
            <span class="pingfen">{{score}} </span>
        </div>

    </div>
</template>

<script>
export default {
  props: {
    //   评分
    score: Number,
    size: Number
  },
  computed: {
    classes () {
      const starCla = []
      const onNum = Math.floor(this.score)
      for (let index = 0; index < onNum; index++) {
        starCla.push('on')
      }
      if ((this.score * 10 - onNum * 10) > 5) {
        starCla.push('half')
      }
      //   其余全用off填充
      while (starCla.length < 5) {
        starCla.push('off')
      }
      return starCla
    }
  }

}
</script>

<style lang="less" scoped>
.star {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: space-around;
}

.pingfen {
    font-size: 16px;
    color:orange
}
.star24 {
    & .item{
        width: 10px;
        height: 10px;
    }
    & .on {
        background: url(/imgs/star/star24_on@2x.png) no-repeat;
        background-size: 100%;
    }& .half {
        background: url(/imgs/star/star24_half@2x.png) no-repeat;
        background-size: 100%;
    }& .off {
        background: url(/imgs/star/star24_off@2x.png) no-repeat;
        background-size: 100%;
    }

}
.star36 {
    & .item{
        width: 15px;
        height: 15px;
    }
    & .on {
        background: url(/imgs/star/star36_on@2x.png) no-repeat;
        background-size: 100%;
    }& .half {
        background: url(/imgs/star/star36_half@2x.png) no-repeat;
        background-size: 100%;
    }& .off {
        background: url(/imgs/star/star36_off@2x.png) no-repeat;
        background-size: 100%;
    }
}
.star48 {
    & .item{
        width: 20px;
        height: 20px;
    }
    & .on {
        background: url(/imgs/star/star48_on@2x.png) no-repeat;
        background-size: 100%;
    }& .half {
        background: url(/imgs/star/star48_half@2x.png) no-repeat;
        background-size: 100%;
    }& .off {
        background: url(/imgs/star/star48_off@2x.png) no-repeat;
        background-size: 100%;
    }
}

</style>
