<template>
    <div class="mx-auto max-w-1200px w-full relative">
        <div class="todo">
            <div class="flex justify-center w-full mb-30px">
                <Title class="btn " title="代辦項目"/>
            </div>
            <swiper 
                @init="translate"
                :centeredSlides = "true"
                :centeredSlidesBounds = "true"
                :slides-per-view="2"
                :style="{
                    '--swiper-pagination-color': '#CEB96E',
                    '--swiper-pagination-bottom':'-6px',
                    '--swiper-pagination-bullet-inactive-color':'#ffffff'
                }"
                :breakpoints="{
                '768': {
                    slidesPerView: 3,
                    },
                    '1024': {
                    slidesPerView: 3,
                    },
                }"
                :autoplay="{
                    delay: 2500,
                    disableOnInteraction: false,
                }"
                :spaceBetween="10"
                :modules="modules"
                :loop="true"
                :pagination="{
                    clickable: true,
                }"
                class="custom_swiper swiper-container w-full"
                >
                <swiper-slide class="w-full" v-for="(item, index) in sliders" :key="item.id">
                    <router-link :to="`/temple/${item.id}`">
                        <div
                            class="swiper_img w-full bg-cover bg-center"
                            :style="{ 'background-image': `url(${item.image})` }">
                        </div>
                    </router-link>
                    <div class="max-md:px-10px">
                        <h5 class="title mt-10px">{{ item.title }}</h5>
                    </div>
                </swiper-slide>
            </swiper>
            <div class="flex justify-center w-full mt-10px">
                <InnerLinkBtn  text="了解更多" link="/todo"/>
            </div>    
        </div>
    </div>
 </template>
 <script setup >
 //官方套件
import { onMounted,onUnmounted,ref } from "vue";
import axios from "axios";

//swiper
import { Swiper, SwiperSlide } from "swiper/vue";
import { Autoplay, Pagination, Navigation,EffectCreative } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
const activeSlide = ref()
const sliders = ref([]);
const modules = [Autoplay, Pagination, Navigation,EffectCreative];

 //自製元件
import InnerLinkBtn from '../widget/InnerLinkBtn.vue';
import Title from '../widget/Title.vue';
const backend = import.meta.env.VITE_BACKEND_PATH

//輪播取得資料
onMounted(async () => {
  try {
    const response = await axios.get(
      `${import.meta.env.VITE_BACKEND_PATH}/api/gc/todo/index`
    );
    sliders.value = response.data.todo;
  } catch (error) {
    console.error("API 請求失敗:", error);
  }
});

 </script>
 <style scoped>
 .swiper-wrapper{
    align-items:center !important;
 }

 .swiper_img{
    width:380px;
    height:213px;
 }
 .custom_swiper{
    display:flex;
    align-items:center;
    min-height:300px;
 }
.todo{
    width: 100%;
    min-height: 338px;
    margin-bottom: -150px;
    object-fit: cover;
}
@media(width < 1024px){
    .todo{
        flex-direction: column;
        margin-bottom: 0px;
        min-height: auto;
    }
}
.btn{
    margin-top: -70px;
    margin-bottom: 0;
}
 </style>