<template>
    <div>
      <swiper
        :style="{
          '--swiper-navigation-color': '#fff',
          '--swiper-navigation-sides-offset': navigationSidesOffsetDesktop,
          '--swiper-pagination-color': '#CEB96E',
        }"
        :slides-per-view="1"
        :loop="true"
        :modules="modules"
        :pagination="{
          clickable: true,
        }"
        :autoplay="{
          delay: 2500,
          disableOnInteraction: false,
        }"
        :navigation="true"
        class="h-400px md:h-600px swiper-container"
      >
        <swiper-slide
          class="w-full bg-cover bg-center relative"
          v-for="slider in sliders"
          :key="slider.id"
        >
          <div
            class="h-full w-full z-10"
            :style="{
              'background-image': `url(${slider.image})`,
              filter: 'brightness(50%)',
              'background-position': 'center center',
              'background-size':'cover'
            }"
          >
          </div>
          <div class="flex flex-col justify-center items-center absolute inset-0">
            <h2 class="text-3xl mb-2 text-white relative z-50 title">
              {{ slider.title }}
            </h2>
            <h3 class="text-xl mb-4 text-white relative z-50 subtitle">
              {{ slider.subtitle }}
            </h3>
            <LinkBtn v-if="slider.is_live === '0'" :link="slider.link" text="了解更多" :blank="slider.is_blank" />
            <LinkBtn v-if="slider.is_live === '1'" :link="slider.link" text="觀看直播" red="true" icon="true" :blank="slider.is_blank"/>
          </div>
        </swiper-slide>
      </swiper>
    </div>
  </template>
<script setup >
import { onMounted, onUnmounted, ref } from "vue";
import axios from "axios";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import LinkBtn from "../widget/LinkBtn.vue";
const sliders = ref([]);
const modules = [Autoplay, Pagination, Navigation];

//js控制navigators rwd
const navigationSidesOffsetDesktop = ref("70px");
const adjustNavigationSidesOffset = () => {
  if (window.innerWidth <= 640) {
    navigationSidesOffsetDesktop.value = "20px";
  } else {
    navigationSidesOffsetDesktop.value = "70px";
  }
};
onMounted(() => {
  adjustNavigationSidesOffset();
  window.addEventListener("resize", adjustNavigationSidesOffset);
});
onUnmounted(() => {
  window.removeEventListener("resize", adjustNavigationSidesOffset);
});
//輪播取得資料
onMounted(async () => {
  try {
    const response = await axios.get(
      `${import.meta.env.VITE_BACKEND_PATH}/api/gc/get-sliders`
    );
    sliders.value = response.data.sliders;
  } catch (error) {
    console.error("API 請求失敗:", error);
  }
});
</script>

<style scoped>
.title {
  font-weight: 700;
  letter-spacing: 6px;
}

.subtitle {
  font-weight:500;
  letter-spacing: 3.6px;
}

@media (max-width: 1024px) {
  .title {
    letter-spacing: 3.6px;
  }

  .subtitle {
    letter-spacing: 2.4px;
  }
}
</style>
