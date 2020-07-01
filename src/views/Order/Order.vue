<template>
    <div>
         <header>
            订单
        </header>
        <div class="login">
            <div class="bg"></div>
            <button @click="$router.push('/login')">点击登录查看</button>
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
