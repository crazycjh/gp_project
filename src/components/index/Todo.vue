<template>
    <div class="mx-auto max-w-1200px w-full relative px-10px mb-50px pt-30px">
        <div class="todo">
            <div class="flex justify-center w-full">
                <Title class="btn" title="代辦項目" />
            </div>
            <swiper
                :slides-per-view="1"
                :style="{
                    '--swiper-pagination-color': '#CEB96E',
                    '--swiper-pagination-bottom': '0',
                    '--swiper-pagination-bullet-inactive-color': '#920000',
                }"
                :breakpoints="{
                    '768': {
                        slidesPerView: 2,
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
                <swiper-slide
                    class="w-full custom_slide"
                    v-for="(item, index) in sliders"
                    :key="item.post_id"
                >
                    <router-link :to="`/todo/${item.post_id}`">
                        <div
                            class="swiper_img w-full bg-cover bg-center"
                            :style="{
                                'background-image': `url(${item.image})`,
                                'background-position': 'center center',
                                'background-size': 'cover',
                            }"
                        ></div>
                    </router-link>
                    <div class="max-md:px-10px text-left">
                        <h5 class="title mt-20px">{{ item.title }}</h5>
                    </div>
                </swiper-slide>
            </swiper>
            <div class="flex justify-center w-full mt-10px">
                <InnerLinkBtn text="了解更多" link="/todo" />
            </div>
        </div>
    </div>
</template>
<script setup>
//官方套件
import { onMounted, onUnmounted, ref } from "vue";
import axios from "axios";

//swiper
import { Swiper, SwiperSlide } from "swiper/vue";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
const activeSlide = ref();
const sliders = ref([]);
const modules = [Autoplay, Pagination, Navigation];

//自製元件
import InnerLinkBtn from "@/components/widget/InnerLinkBtn.vue";
import Title from "@/components/widget/Title.vue";
const backend = import.meta.env.VITE_BACKEND_PATH;

//輪播取得資料
onMounted(async () => {
    try {
        const response = await axios.get(
            `${import.meta.env.VITE_BACKEND_PATH}api/gc/todo/list`
        );
        sliders.value = response.data.data;
        console.log(sliders.value);
    } catch (error) {
        console.error("API 請求失敗:", error);
    }
});
</script>
<style scoped>
.swiper_img {
    width: 100%;
    height: 213px;
    object-fit: cover;
}
.custom_swiper {
    margin-bottom: 10px;
    display: flex;
    align-items: center;
    min-height: 340px;
}
@media (width < 1024px) {
    .custom_swiper {
        min-height: 300px;
    }
}
.todo {
    width: 100%;
    min-height: 338px;
    margin-bottom: -150px;
    object-fit: cover;
}
@media (width < 1024px) {
    .todo {
        flex-direction: column;
        margin-bottom: 0px;
        min-height: auto;
    }
}
.btn {
    margin-bottom: 0;
}
.title {
    max-width: 380px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    font-size: 20px;
}
</style>
