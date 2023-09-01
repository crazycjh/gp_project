<script setup lang="ts">
import Slider from '@/components/index/Slider.vue'
import Search from '@/components/index/Search.vue'
import Live from '@/components/index/Live.vue'
import Events from '@/components/index/Events.vue'
import Recommand from '@/components/index/Recommand.vue'
import MainGod from '@/components/index/MainGod.vue'
import Service from '@/components/index/Service.vue'
import Product from '@/components/index/Product.vue'
</script>
<template>
        <Slider />
        <Search />
        <Live />
        <Events />
        <Recommand />
        <div class="relative">
            <div class="w-full h-260 bg-red-800 z-[-1] -mt-14rem" ></div>
        </div>
        <MainGod />
        <Service />
        <Product />
</template>