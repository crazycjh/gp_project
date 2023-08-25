<script setup lang="ts">
import { onMounted, ref } from "vue";
import axios from "axios";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

interface Slider {
  image: String;
  id: String;
  title: String;
  subtitle: String;
  link: String;
}
const sliders = ref<Slider[]>([]);
const modules = [Autoplay, Pagination, Navigation];
onMounted(async () => {
  try {
    const response = await axios.get(
      "https://demo2.gcreate.com.tw/gc_godpray/api/gc/get-sliders"
    );
    sliders.value = response.data;
    console.log("API 請求結果:", response.data);
  } catch (error) {
    console.error("API 請求失敗:", error);
  }
});
</script>
<template>
  <div>
    <swiper
      :style="{
        '--swiper-navigation-color': '#fff',
        '--swiper-navigation-sides-offset': '70px',
        '--swiper-pagination-color':'#CEB96E',
      }"
      :slides-per-view="1"
      :loop="true"
      :autoplay="{
        delay: 2500,
        disableOnInteraction: false,
      }"
      :modules="modules"
      :pagination="{
        clickable: true,
      }"
      :navigation="true"
      class="h-600"
    >
      <swiper-slide
        class="w-full bg-cover bg-center"
        v-for="slider in sliders"
        :style="{ 'background-image': `url(${slider.image})` }"
      >
        <div class="flex flex-col justify-center items-center h-full"> <!-- 使用 text-center 来置中标题 -->
          <h2 class="text-3xl mb-2 text-white">{{ slider.title }}</h2>
          <h3 class="text-xl mb-4 text-white">{{ slider.subtitle }}</h3>
          <router-link :to="`${slider.link}`" class="slider_button">了解更多</router-link>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>
<style scoped>
.slider_button{
  cursor: pointer;
  display:flex;
  align-items: center;
  justify-content:center;
  width: 114px;
  height: 43px;
  padding:10px,20px,10px,20px;
  background-color: #CEB96E;
  color:#ffffff;
}
</style>
