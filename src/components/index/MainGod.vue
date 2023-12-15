<template>
    <div class="main pb-80px relative">
        <Title title="主祀神" />
        <!-- 設定特定寬度範圍為[386px-xssm]兩排 -->
        <div class="flex gap-10px flex-wrap justify-center mx-auto max-[386px]:xssm:gap-0px md:px-80px lg:px-160px xl:px-0px max-w-1250px relative z-10">
            <div v-for="(god, index) in godsStore.godArray" :key="index" :name="index+1" class="relative god_container" @mouseenter="handleImageHover(index)" @mouseleave="handleImageHover(99)" @click="goSearch(index)">
                <h5 class="god_name cursor-pointer" :style="{ color: isHovered(index) ? 'white' : 'black' }">{{ god }}</h5>
                <div class="god_image cursor-pointer" 
                     :style="{
                        'background-image': `url(${getGodImageUrl(index)})`,
                        'width': '187.5px', 
                        'height':'51px',
                    }">
                </div>
            </div>
            <!-- <img v-for="(image, index) in images" :key="index" class="lg:w-15% md:w-23% max-md:45% cursor-pointer"
                :src="index === currentImageIndex ? hoverImage[index] : image" alt="" @mouseover="handleImageHover(index)"
                @mouseout="handleImageHover(99)" @click="goSearch(index)" /> -->
        </div>
        <img class="left" src="../../assets/index/god_bg1.svg" alt="">
        <img class="right" src="../../assets/index/god_bg2_3.svg" alt="">
    </div>
</template>
<script setup>
//官方套件
import { ref,onMounted } from 'vue';
import { useRouter } from "vue-router";
import axios from 'axios';

//自製元件
import godBg01 from '@/assets/index/god_item_bg01.svg';
import godBg02 from '@/assets/index/god_item_bg02.svg';
import Title from '@/components/widget/Title.vue'
const backend = import.meta.env.VITE_BACKEND_PATH

//pinia
import { useGods } from '@/store/gods.js'
const godsStore = useGods(); 
//hover換圖
const currentImageIndex = ref();
const getGodImageUrl = (index) =>{
    return index === currentImageIndex.value ? godBg02 : godBg01;
}
const handleImageHover = (index) => {
    currentImageIndex.value = index;
};

const isHovered = (index) =>{
    return currentImageIndex.value === index
}


//跳頁預選
const router = useRouter()
const goSearch = ((index) => {
    localStorage.setItem('god',godsStore.godArray[index])
    router.push('/mainGod')
})


</script>

<style scoped>
.god_container {
    display: flex;
    justify-content: center;
    align-items: center;
}

.god_name {
    position: absolute;
    font-size: 20px;
    font-weight: bold;
    letter-spacing: 3px;
}

.main {
    background-color: #F4F1E4;
}

.left {
    position: absolute;
    bottom: 0;
}

.right {
    width: 350px;
    height: 400px;
    position: absolute;
    top: 0;
    right: 0;
}

@media (max-width: 1440px) {

    .left,
    .right {
        display: none;
    }
}
</style>