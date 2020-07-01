<template>
    <div>
        <Header title="搜索">
        </Header>
        <div class="search">
            <input v-focus type="text" placeholder="查找附近商家" class="searche-input">
            <button>提交</button>
        </div>
    </div>
</template>

<script>
import Header from '../../components/Header/Header'
export default {
  components: {
    Header
  },

  // 自定义指令
  directives: {
    focus: {
      inserted: function (el) {
        el.focus()
      }
    }
  }

}
</script>

<style lang="less" scoped>
.search {
    display: flex;
    height: 50px;
    margin: 10px;
    padding: 0 20px;
    & input {
        flex: 1;
        margin-right: 5px;
        border: 1px #F1F1F1 solid;
        border-radius: 25px;
        padding-left: 20px;
    }
    & button {
        width: 60px;
        border-radius: 10px;
        background-color: #58D493;
        color: #fff;
    }
}
</style>
