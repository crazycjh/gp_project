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
                <InnerLinkBtn  text="了解更多" link="/latest/all"/>
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
const sliders = ref([
    { id:1,image:'https://demo2.gcreate.com.tw/gc_godpray/wp-content/uploads/2023/10/list_img1.jpg',title:'代辦項目3-標題標題標題標題標題標題標題標'},
    { id:2,image:'https://demo2.gcreate.com.tw/gc_godpray/wp-content/uploads/2023/10/list_img2.jpg',title:'代辦項目3-標題標題標題標題標題標題標題標'},
    { id:3,image:'https://demo2.gcreate.com.tw/gc_godpray/wp-content/uploads/2023/10/list_img3.jpg',title:'代辦項目3-標題標題標題標題標題標題標題標'},
    { id:4,image:'https://demo2.gcreate.com.tw/gc_godpray/wp-content/uploads/2023/10/list_img1.jpg',title:'代辦項目3-標題標題標題標題標題標題標題標'},
    { id:5,image:'https://demo2.gcreate.com.tw/gc_godpray/wp-content/uploads/2023/10/list_img2.jpg',title:'代辦項目3-標題標題標題標題標題標題標題標'},
]);
const modules = [Autoplay, Pagination, Navigation,EffectCreative];

 //自製元件
import InnerLinkBtn from '../widget/InnerLinkBtn.vue';
import Title from '../widget/Title.vue';
const backend = import.meta.env.VITE_BACKEND_PATH

const translate = (swiper) =>{
    swiper.setTranslate([300,0,0])
}

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
    min-height:230px;
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
    .todo_right{
        padding-top: 100px;
        padding-bottom: 100px;
    }
}
@media(width <768px){
    .todo_right{
        padding-top: 80px;
        padding-bottom: 80px;
        padding-left: 60px;
        padding-right: 60px;
    }
}
.todo_right{
    background-color: #ffffff;
    border:1px solid #CEB96E;
    padding-left: 120px;
    padding-right: 120px;
    display: flex;
    flex-direction: column;
    gap:20px;
    align-items: center;
    justify-content: center;
}
.btn{
    margin-top: -70px;
    margin-bottom: 0;
}
 </style>