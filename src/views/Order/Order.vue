<template>
    <div>
        <div class="login">
            <div class="bg"></div>
            <button>点击登录查看</button>
        </div>
    </div>
</template>
<script>
export default {

}
</script>
<style lang="less" scoped>
.login {
    position: fixed;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%);
    text-align: center;
    & .bg {
        width: 300px;
        height: 300px;
        background: url(/imgs/order/person.png) no-repeat center;
    }
    & button {
        height: 40px;
        font-size: 18px;
        border-radius: 10px;
        background-color: #58D493;
        color: #fff;
    }
}
</style>
