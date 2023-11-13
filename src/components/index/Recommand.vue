<script setup>
//官方套件
import { onMounted, onUnmounted, ref, watch } from "vue";
import axios from "axios";

//swiper
import { Swiper, SwiperSlide } from "swiper/vue";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
const sliders = ref([]);
const modules = [Autoplay, Pagination, Navigation];

//自製元件
import InnerLinkBtn from "@/components/widget/InnerLinkBtn.vue";
import Title from "@/components/widget/Title.vue";
const backend = import.meta.env.VITE_BACKEND_PATH;

//js控制navigators rwd
const slidesPerView = ref(2);
const adjustSlides = () => {
    if (window.innerWidth >= 768 && window.innerWidth < 1024) {
        slidesPerView.value = 3;
    } else if (window.innerWidth >= 1024) {
        slidesPerView.value = 4;
    } else if (window.innerWidth < 768) {
        slidesPerView.value = 2;
    }
};
onMounted(() => {
    adjustSlides();
    window.addEventListener("resize", adjustSlides);
});
onUnmounted(() => {
    window.removeEventListener("resize", adjustSlides);
});
//輪播取得資料
onMounted(async () => {
    try {
        const response = await axios.get(
            `${import.meta.env.VITE_BACKEND_PATH}api/gc/recommand`
        );
        sliders.value = response.data.recommand;
        //修復swiper 輪播loop問題
        if (slidesPerView.value * 2 > sliders.value.length)
            sliders.value = sliders.value.concat(sliders.value);
    } catch (error) {
        console.error("API 請求失敗:", error);
    }
});
</script>
<template>
    <div class="px-10px mx-auto max-w-1200px">
        <Title title="推薦廟宇" />
        <swiper
            :slides-per-view="slidesPerView"
            :style="{
                '--swiper-pagination-color': '#CEB96E',
                '--swiper-pagination-bottom': '-6px',
                '--swiper-pagination-bullet-inactive-color': '#ffffff',
            }"
            :autoplay="{
                delay: 2500,
                disableOnInteraction: false,
            }"
            :spaceBetween="10"
            :loop="true"
            :modules="modules"
            :pagination="{
                clickable: true,
            }"
            class="h-260px swiper-container"
        >
            <swiper-slide v-for="item in sliders" :key="item.id">
                <router-link :to="`/temple/${item.id}`">
                    <div
                        class="h-70% w-full bg-cover bg-center"
                        :style="{ 'background-image': `url(${item.image})` }"
                    ></div>
                </router-link>
                <div class="max-md:px-10px">
                    <h5 class="title mt-10px">{{ item.title }}</h5>
                    <h6 class="area">{{ item.area }}</h6>
                </div>
            </swiper-slide>
        </swiper>
        <div class="flex justify-center mt-6">
            <InnerLinkBtn text="更多廟宇" link="/allTemple" />
        </div>
    </div>
</template>
<style scoped>
.title {
    letter-spacing: 2.4px;
    color: #ffffff;
    font-family: Noto Serif TC;
    font-size: 20px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
}
.area {
    color: #ffffff;
    font-family: Noto Serif TC;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
}
</style>
