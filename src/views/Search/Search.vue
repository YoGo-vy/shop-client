<template>
    <div>
        <span class="goback" @click="$router.push('/home')"><i class="iconfont icon-zuojiantou"></i>返回</span>
        <header>
            搜索
        </header>
        <div class="search">
            <input v-focus type="text" placeholder="查找附近商家" class="searche-input">
            <button>提交</button>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="less" scoped>
.goback {
  height: 18px;
    position: fixed;
    top: 20px;
    left: 20px;
    line-height: 18px;
    color: #FFF;
    & i {
        font-size: 18px;
    }
}
header {
    height: 50px;
    background-color: #58D493;
    line-height: 50px;
    color: #fff;
    text-align: center;
}
.search {
    display: flex;
    height: 40px;
    margin: 15px 10px 0;
    padding: 0 20px;
    & input {
        flex: 1;
        margin-right: 5px;
        border: 1px #ccc solid;
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
