<script setup lang="ts">
import Member from './Member.vue';
import Cart from './Cart.vue';
</script>
<template>
    <div class="flex justify-between">
        <router-link to="/">
            <div class="flex">
                <img src="../../../assets/header/logo.svg" alt="">
                <img src="../../../assets/header/logo_title.svg" alt="">
            </div>
        </router-link>
        <ul class="flex gap-5 items-center hidden lg:flex">
            <li class="nav-item">
                <router-link to="/allTemple/" class="nav-link">全台廟宇</router-link>
            </li>
            <li class="nav-item">
                <router-link to="/mainGod/" class="nav-link">主神</router-link>
            </li>
            <li class="nav-item">
                <router-link to="/latest/" class="nav-link">最新活動</router-link>
            </li>
            <li class="nav-item">
                <router-link to="/service/" class="nav-link">服務</router-link>
            </li>
            <li class="nav-item">
                <router-link to="/product/" class="nav-link">商城</router-link>
            </li>
            <li class="nav-item">
                <router-link to="/qa/" class="nav-link">Q&A</router-link>
            </li>
            <li class="nav-item">
            </li>
            <li class="nav-item">
                <Member />
            </li>
            <li class="nav-item">
                <Cart />
            </li>
        </ul>
        <img class="block lg:hidden" src="../../../assets/header/Group 67.svg" alt="">
    </div>
</template>
<style scoped>
.nav-item a{
    font-family: "Noto Sans TC", sans-serif;
}
.nav-link{
    color:#FFFFFF;
}
</style>