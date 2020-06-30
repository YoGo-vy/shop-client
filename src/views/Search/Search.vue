<template>
    <div>
        <header>
            搜索
        </header>
        <div class="search">
            <input type="text" placeholder="查找附近商家" class="searche-input">
            <button>提交</button>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="less" scoped>
header {
    height: 50px;
    background-color: #58D493;
    line-height: 50px;
    color: #fff;
    text-align: center;
}
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
        padding-left: 10px;
    }
    & button {
        width: 60px;

        border-radius: 10px;
        background-color: #58D493;
        color: #fff;
    }
}
</style>
