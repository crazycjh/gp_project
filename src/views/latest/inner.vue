<template>
    <loading :active="isLoading" :is-full-page="fullPage"></loading>
    <Breadcrumb v-if="post.title" :title="`首頁/${post.title}`" />
    <div
        class="max-lg:px-10px flex justify-center mt-20px lg:mt-40px mb:30px lg:mb-80px"
    >
        <div class="max-w-915px pr-10px w-full">
            <h1 class="title mb-10px">{{ post.title }}</h1>
            <span class="date mb-10px">{{ post.date }}</span>
            <a
                :href="`https://social-plugins.line.me/lineit/share?url=${currentUrl}`"
            ></a>
            <div class="flex gap-10px mt-10px">
                <img
                    class="mb-10px"
                    src="../../assets/latest/fb.svg"
                    alt=""
                    @click="fbShare"
                />
                <img
                    class="mb-10px"
                    src="../../assets/latest/line.svg"
                    alt=""
                    @click="lineShare"
                />
            </div>
            <img class="mb-10px w-full" :src="post.image" alt="" />
            <p class="max-h-1036px overflow-y-auto mb-30px w-full">
                {{ post.content }}
            </p>
            <h5 class="subtitle mb-30px left">相關文章</h5>
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
                :autoplay="{
                    delay: 2500,
                    disableOnInteraction: false,
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
                <swiper-slide v-for="item in right_post" :key="item.id">
                    <router-link :to="`/latest/inner/${item.id}`">
                        <div
                            class="w-full bg-cover bg-center image"
                            :style="{
                                'background-image': `url(${item.image})`,
                            }"
                        ></div>
                    </router-link>
                    <div class="max-md:px-10px">
                        <h3 class="slider_title mt-10px">{{ item.title }}</h3>
                    </div>
                </swiper-slide>
            </swiper>
        </div>
        <div class="hidden lg:block max-w-275px px-10px left_border">
            <h5 class="subtitle mb-30px">最新活動</h5>
            <p v-for="item in bottom_post" :key="item.id" class="event">
                <router-link :to="`/latest/inner/${item.id}`">{{
                    item.title
                }}</router-link>
            </p>
            <h5 class="subtitle mb-30px">活動分類</h5>
            <p class="tag mb-10px" @click="goLatest('hot')">熱門活動</p>
            <p class="tag mb-10px" @click="goLatest('xmas')">聖誕千秋</p>
            <p class="tag mb-10px" @click="goLatest('temple')">廟宇繞境</p>
        </div>
    </div>
</template>
<script setup>
//官方套件
import { onMounted, ref, watch } from "vue";
import { useRoute, useRouter } from "vue-router";
import axios from "axios";
import Loading from "vue-loading-overlay";
import "vue-loading-overlay/dist/css/index.css";

//swiper
import { Swiper, SwiperSlide } from "swiper/vue";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
const modules = [Autoplay, Pagination, Navigation];

//自製元件
import Breadcrumb from "@/components/widget/Breadcrumb.vue";
const backend = import.meta.env.VITE_BACKEND_PATH;

//取的id
const latestID = ref("");
const currentUrl = ref("");
onMounted(() => {
    const route = useRoute();
    latestID.value = route.params.latestID;
    currentUrl.value = window.location.href;
});

//取得頁面資訊
const post = ref([]);
const bottom_post = ref([]);
const right_post = ref([]);
const isLoading = ref(false);
const fullPage = ref(true);
onMounted(async () => {
    isLoading.value = true;
    try {
        const response = await axios.get(
            `${backend}/api/gc/latest/${latestID.value}`
        );
        post.value = response.data.latest;
        bottom_post.value = response.data.relate;
        right_post.value = response.data.new;
    } catch (error) {
        console.error("API 請求失敗:", error);
    } finally {
        isLoading.value = false;
    }
});

//點擊換頁
const router = useRouter();
const goLatest = (type) => {
    router.push(`/latest/${type}`);
};

//line.fb分享
const lineShare = () => {
    const shareUrl = `https://social-plugins.line.me/lineit/share?url=${currentUrl.value}`;
    openWindow(shareUrl);
};
const fbShare = () => {
    const shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${currentUrl.value}`;
    openWindow(shareUrl);
};
const openWindow = (shareUrl) => {
    const windowWidth = 500;
    const windowHeight = 550;
    const windowLeft = window.screen.width - windowWidth;
    const windowTop = window.screen.height / 2 - windowHeight / 2;
    const windowFeatures = `width=${windowWidth},height=${windowHeight},left=${windowLeft},top=${windowTop}`;
    window.open(shareUrl, "_blank", windowFeatures);
};
</script>

<style scoped>
.slider_title {
    font-size: 20px;
}
.left_border {
    padding-left: 20px;
    border-left: 1px solid #eeeeee;
}
.image {
    aspect-ratio: 16/9;
}
h3,
h4,
h5,
p {
    color: #000000;
}
.tag {
    font-family: Noto Serif TC;
    font-size: 20px;
    font-weight: 500;
    line-height: 29px;
    letter-spacing: 0em;
    text-align: left;
    color: #333333;
}
.event {
    margin-top: 10px;
    font-family: Noto Serif TC;
    font-size: 20px;
    font-weight: 500;
    line-height: 29px;
    letter-spacing: 0em;
    text-align: left;
    color: #333333;
    padding-bottom: 10px;
    border-bottom: 1px solid #eeeeee;
}
.event:hover,
.tag:hover,
.event a:hover {
    color: #ceb96e;
}
.subtitle {
    margin-top: 40px;
    font-family: Noto Serif TC;
    font-size: 24px;
    font-weight: 500;
    line-height: 34px;
    letter-spacing: 0.1em;
    text-align: left;
    color: #333333;
    position: relative;
}
.subtitle::after {
    content: "";
    position: absolute;
    bottom: -8px;
    left: 0;
    width: 24%;
    height: 100%;
    border-bottom: 2px solid #920000;
    box-sizing: border-box;
}
.left::after {
    content: "";
    position: absolute;
    bottom: -8px;
    left: 0;
    width: 8%;
    height: 100%;
    border-bottom: 2px solid #920000;
    box-sizing: border-box;
}
.title {
    color: #000000;
    font-family: Noto Serif TC;
    font-size: 28px;
    font-weight: 500;
    line-height: 1.3em;
    letter-spacing: 3px;
    text-align: left;
}
@media (max-width: 768px) {
    .title {
        font-size: 20px;
    }
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
