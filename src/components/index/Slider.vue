<script setup lang="ts">
import { onMounted, ref } from "vue";
import axios from "axios";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import 'swiper/css/pagination';
import 'swiper/css/navigation';
const sliders = ref([]);
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
        v-for="slide in sliders"
        :style="{ 'background-image': `url(${slide.image})` }"
      >
        123
      </swiper-slide>
    </swiper>
  </div>
</template>
