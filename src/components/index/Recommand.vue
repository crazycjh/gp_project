<script setup lang="ts">
import { onMounted,onUnmounted,ref } from "vue";
import axios from "axios";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import LinkBtn from "../widget/LinkBtn.vue";
import Title from '@/components/widget/Title.vue'
const backend = import.meta.env.VITE_BACKEND_PATH
interface Slider {
  image: String;
  id: String;
  title: String;
  subtitle: String;
  link: String;
}
const sliders = ref<Slider[]>([]);
const modules = [Autoplay, Pagination, Navigation];

//js控制navigators rwd
const navigationSidesOffsetDesktop = ref('70px');
const adjustNavigationSidesOffset = () => {
  if (window.innerWidth <= 640) {
    navigationSidesOffsetDesktop.value = '20px';
  } else {
    navigationSidesOffsetDesktop.value = '70px';
  }
};
onMounted(() => {
  adjustNavigationSidesOffset();
  window.addEventListener('resize', adjustNavigationSidesOffset);
});
onUnmounted(() => {
  window.removeEventListener('resize', adjustNavigationSidesOffset);
});
//輪播取得資料
onMounted(async () => {
  try {
    const response = await axios.get(
      `${import.meta.env.VITE_BACKEND_PATH}/api/gc/get-sliders`
    );
    sliders.value = response.data;
  } catch (error) {
    console.error("API 請求失敗:", error);
  }
});
</script>
<template>
  <div class="px-10 mx-auto max-w-1200px">
   <Title title="推薦廟宇" />
    <swiper
      :style="{
        '--swiper-pagination-color': '#CEB96E',
        '--swiper-pagination-bottom':'-6px',
        '--swiper-pagination-bullet-inactive-color':'#ffffff'
      }"
       :breakpoints="{
        '640': {
          slidesPerView: 4,
        },
      }"
      :slides-per-view="2"
      :spaceBetween="10"
      :loop="true"
      :modules="modules"
      :pagination="{
        clickable: true,
      }"
      class="h-260px swiper-container"
    >
      <!-- <swiper-slide v-for="slider in sliders" :key="slider.id">
        <div class="h-70% w-full object-fill" :style="{ 'background-image': `url(${slider.image})` }"></div>
        <div>
            <h5 class="title mt-10px">廟宇全名</h5>
            <h6 class="area">台北市萬華區</h6>
        </div>
      </swiper-slide> -->
      <swiper-slide>
        <div class="h-70% w-full bg-cover bg-center" :style="{ 'background-image': `url(${backend}wp-content/uploads/2023/08/recommand1.png)` }"></div>
        <div class="max-md:px-10px">
            <h5 class="title mt-10px">廟宇全名1</h5>
            <h6 class="area">台北市萬華區</h6>
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="h-70% w-full bg-cover bg-center" :style="{ 'background-image': `url(${backend}wp-content/uploads/2023/08/recommand2.png)` }"></div>
        <div class="max-md:px-10px">
            <h5 class="title mt-10px">廟宇全名2</h5>
            <h6 class="area">新北市三重區</h6>
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="h-70% w-full bg-cover bg-center" :style="{ 'background-image': `url(${backend}wp-content/uploads/2023/08/recommand3.png)` }"></div>
        <div class="max-md:px-10px">
            <h5 class="title mt-10px">廟宇全名3</h5>
            <h6 class="area">桃園市龍潭區</h6>
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="h-70% w-full bg-cover bg-center" :style="{ 'background-image': `url(${backend}wp-content/uploads/2023/08/recommand4.png)` }"></div>
        <div class="max-md:px-10px">
            <h5 class="title mt-10px">廟宇全名4</h5>
            <h6 class="area">新竹縣湖口區</h6>
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="h-70% w-full bg-cover bg-center" :style="{ 'background-image': `url(${backend}wp-content/uploads/2023/08/recommand4.png)` }"></div>
        <div class="max-md:px-10px">
            <h5 class="title mt-10px">廟宇全名4</h5>
            <h6 class="area">新竹縣湖口區</h6>
        </div>
      </swiper-slide>
    </swiper>
    <div class="flex justify-center mt-6">
      <LinkBtn text="更多廟宇" link="/more"/>
    </div>
  </div>
</template>
<style scoped>
.title{
    letter-spacing: 2.4px;
    color: #ffffff;
    font-family: Noto Serif TC;
    font-size: 20px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
}
.area{
    color: #ffffff;
    font-family: Noto Serif TC;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
}
</style>