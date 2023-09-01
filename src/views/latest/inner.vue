<script setup lang="ts">
import { Swiper, SwiperSlide } from "swiper/vue";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
const modules = [Autoplay, Pagination, Navigation];
const backend = import.meta.env.VITE_BACKEND_PATH
</script>
<template>
  <div class="border-b border-gray-300">
    <div class="mx-auto max-w-1200px">
      <h6 class="py-2">首頁/文章標題標題</h6>
    </div>
  </div>
  <div class="flex justify-center mt-20px lg:mt-40px">
    <div class="max-w-890px px-10 w-full">
      <h3 class="title mb-10px">DEMO12-活動標題活動標題活動標題活動標題活動</h3>
      <span class="date mb-10px">2023.9.18</span>
      <img class="mb-10px" src="../../assets/latest/social.png" alt="" />
      <img class="mb-10px w-full"
        src="https://demo2.gcreate.com.tw/gc_godpray/wp-content/uploads/2023/08/blog_demo_img2.jpg"
        alt=""
      />
      <p class="max-h-1036px mb-30px">
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
        :slides-per-view="3"
        :spaceBetween="10"
        :loop="true"
        :modules="modules"
        :pagination="{
          clickable: true,
        }"
        class="h-350 swiper-container"
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
    <div class="hidden lg:block max-w-275px px-10 ">
        <h5 class="subtitle mb-30px">最新活動</h5>
        <p class="event">DEMO9-標題標題標題標題標題標題標題標題標題標題標題標題</p>
        <p class="event">DEMO9-標題標題標題標題標題標題標題標題標題標題標題標題</p>
        <p class="event">DEMO9-標題標題標題標題標題標題標題標題標題標題標題標題</p>
        <p class="event">DEMO9-標題標題標題標題標題標題標題標題標題標題標題標題</p>
        <p class="event">DEMO9-標題標題標題標題標題標題標題標題標題標題標題標題</p>
        <h5 class="subtitle mb-15px">最新活動</h5>
        <p class="tag mb-10px">熱門活動</p>
        <p class="tag mb-10px">聖誕千秋</p>
        <p class="tag mb-10px">廟宇繞境</p>
    </div>
  </div>
</template>
<style scoped>
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
}
.title {
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