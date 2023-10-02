<template>
    <div class="mx-auto max-w-1200px md:mt-80px wrapper">
        <h4 class="success">已完成付款</h4>
        <p>已收到您的訂單，請您檢視訂單。</p>
        <div class="flex">
            <router-link :to="`/member/${auth.member.user_id}`" ><button class="prayer_btn mr-20px">前往會員中心</button></router-link>
            <router-link :to="'/'" ><button class="prayer_btn">前往首頁</button></router-link>
        </div>
    </div>
</template>
<script setup>
import { useAuth } from '@/store/auth.js'
const auth = useAuth();
</script>
<style scoped>
.wrapper{
    min-height: 66vh;
}
.success{
    color:#920000;
    font-size: 28px;
}
.prayer_btn{
    margin-top: 40px;
    margin-bottom: 20px;
    width: 195px;
    height: 43px;
    color: white;
    background-color:#CEB96E;
    border: none;
    outline: none;
    border-radius: 0;
}
</style>