<template>
    <Slider />
    <Search />
    <!-- 農民曆 lunar calendar -->
    <LunarCalendar/>
    <Live />
    <Events />
    <Recommand />
    <div class="relative">
        <div class="w-full h-260px bg-red-800 -mt-14rem"></div>
    </div>
    <MainGod />
    <Service />
    <Todo />
    <div class="relative cover top">
        <div class="w-full h-300px hidden lg:block top"></div>
    </div>
    <Product />
</template>
<script setup>
//自製元件
import Slider from "@/components/index/Slider.vue";
import Search from "@/components/index/Search.vue";
import Live from "@/components/index/Live.vue";
import Events from "@/components/index/Events.vue";
import Recommand from "@/components/index/Recommand.vue";
import MainGod from "@/components/index/MainGod.vue";
import Service from "@/components/index/Service.vue";
import Product from "@/components/index/Product.vue";
import Todo from "../components/index/Todo.vue";
import LunarCalendar from "../components/index/LunarCalendar.vue";
</script>
<style scoped>
.cover {
    background-color: #f4f1e4;
}
.top {
    transform: translateY(-130px);
}
</style>
