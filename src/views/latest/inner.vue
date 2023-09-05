<script setup lang="ts">
import { Swiper, SwiperSlide } from "swiper/vue";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Breadcrumb from "../../components/widget/Breadcrumb.vue";
const modules = [Autoplay, Pagination, Navigation]
const backend = import.meta.env.VITE_BACKEND_PATH
</script>
<template>
  <Breadcrumb title="首頁/文章標題標題" />
  <div class="max-lg:px-10px flex justify-center mt-20px lg:mt-40px">
    <div class="max-w-915px pr-10px w-full">
      <h3 class="title mb-10px">DEMO12-活動標題活動標題活動標題活動標題活動</h3>
      <span class="date mb-10px">2023.9.18</span>
      <img class="mb-10px" src="../../assets/latest/social.png" alt="" />
      <img class="mb-10px w-full"
        :src="`${backend}wp-content/uploads/2023/08/blog_demo_img2.jpg`"
        alt=""
      />
      <p class="max-h-1036px overflow-y-auto mb-30px w-full">
        內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文
      </p>
      <swiper
        :style="{
          '--swiper-pagination-color': '#CEB96E',
          '--swiper-pagination-bottom': '6px',
          '--swiper-pagination-bullet-inactive-color': '#333333',
        }"
        :breakpoints="{
          '640': {
            slidesPerView: 3,
          },
        }"
        :slides-per-view="1"
        :spaceBetween="10"
        :loop="true"
        :modules="modules"
        :pagination="{
          clickable: true,
        }"
        class="h-350px swiper-container"
      >
        <swiper-slide>
          <div
            class="h-70% w-full bg-cover bg-center"
            :style="{
              'background-image': `url(${backend}wp-content/uploads/2023/08/recommand2.png)`,
            }"
          ></div>
          <div class="max-md:px-10px">
            <h5 class="title mt-10px">DEMO6-標題標題標題標題標題標題標題標題標題標題標題標題</h5>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div
            class="h-70% w-full bg-cover bg-center"
            :style="{
              'background-image': `url(${backend}wp-content/uploads/2023/08/recommand3.png)`,
            }"
          ></div>
          <div class="max-md:px-10px">
            <h5 class="title mt-10px">DEMO8-標題標題標題標題標題標題標題標題標題標題標題標題</h5>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div
            class="h-70% w-full bg-cover bg-center"
            :style="{
              'background-image': `url(${backend}wp-content/uploads/2023/08/recommand4.png)`,
            }"
          ></div>
          <div class="max-md:px-10px">
            <h5 class="title mt-10px">DEMO7-標題標題標題標題標題標題標題標題標題標題標題標題</h5>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div
            class="h-70% w-full bg-cover bg-center"
            :style="{
              'background-image': `url(${backend}wp-content/uploads/2023/08/recommand4.png)`,
            }"
          ></div>
          <div class="max-md:px-10px">
            <h5 class="title mt-10px">DEMO7-標題標題標題標題標題標題標題標題標題標題標題標題</h5>
          </div>
        </swiper-slide>
      </swiper>
    </div>
    <div class="hidden lg:block max-w-275px px-10px">
        <h5 class="subtitle mb-30px">最新活動</h5>
        <p class="event">DEMO9-標題標題標題標題標題標題標題標題標題標題標題標題</p>
        <p class="event">DEMO9-標題標題標題標題標題標題標題標題標題標題標題標題</p>
        <p class="event">DEMO9-標題標題標題標題標題標題標題標題標題標題標題標題</p>
        <p class="event">DEMO9-標題標題標題標題標題標題標題標題標題標題標題標題</p>
        <p class="event">DEMO9-標題標題標題標題標題標題標題標題標題標題標題標題</p>
        <h5 class="subtitle mb-30px">活動分類</h5>
        <p class="tag mb-10px">熱門活動</p>
        <p class="tag mb-10px">聖誕千秋</p>
        <p class="tag mb-10px">廟宇繞境</p>
    </div>
  </div>
</template>
<style scoped>
h3,h4,h5,p{
    color:#000000;
}
.tag{
    font-family: Noto Serif TC;
    font-size: 20px;
    font-weight: 500;
    line-height: 29px;
    letter-spacing: 0em;
    text-align: left;
    color:#333333;
}
.event{
    font-family: Noto Serif TC;
    font-size: 20px;
    font-weight: 500;
    line-height: 29px;
    letter-spacing: 0em;
    text-align: left;
    color:#333333;
    padding-bottom: 10px;
    border-bottom:1px solid #EEEEEE;
}
.event:hover,.tag:hover{
    color:#CEB96E;
}
.subtitle{
    font-family: Noto Serif TC;
    font-size: 24px;
    font-weight: 500;
    line-height: 34px;
    letter-spacing: 0.1em;
    text-align: left;
    color:#333333;
    position: relative;
}
.subtitle::after{
    content:'';
    position:absolute;
    bottom:-8px;
    left:0;
    width: 24%; 
    height: 100%;
    border-bottom: 2px solid #920000; 
    box-sizing: border-box;
}
.title {
  color:#000000;
  font-family: Noto Serif TC;
  font-size: 20px;
  font-weight: 500;
  line-height: 29px;
  letter-spacing: 0em;
  text-align: left;
}
.date {
  font-family: Noto Serif TC;
  font-size: 16px;
  font-weight: 500;
  line-height: 23px;
  letter-spacing: 0.1em;
  text-align: left;
  color: #333333;
}
</style>