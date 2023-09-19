<template>
    <TopCover :image="`${backend}wp-content/uploads/2023/09/about_shutter_banner.jpg`" title="關於我們" />
    <Breadcrumb title="首頁/關於我們" />
    <div class="mx-auto max-w-1200px px-10px">
        <div class="my-60px">
            <h2 class="title">大標題大標題大標題大標題大標題大標題大標題大標題大標題</h2>
            <h3 class="subtitle">副標題副標題副標題副標題副標題</h3>
        </div>
        <div class="flex max-md:flex-col gap-40px justify-center mb-80px max-md:mb-40px">
            <div class="w-full">
                <img class="mb-20px w-full" :src="`${backend}wp-content/uploads/2023/09/about_shutter_img2.jpg`" alt="">
                <p class="text">內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文</p>
            </div>
            <div class="w-full">
                <img class="lg:mt-60px mb-20px w-full" :src="`${backend}wp-content/uploads/2023/09/about_shutter_img1.jpg`" alt="">
                <p class="text">內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文</p>
            </div>
        </div>
    </div>
</template>
<script setup>
//自製元件
import Breadcrumb from '@/components/widget/Breadcrumb.vue'
import TopCover from '@/components/widget/TopCover.vue'
const backend = import.meta.env.VITE_BACKEND_PATH
</script>
<style scoped>


.title{
    font-family: Noto Serif TC;
    font-size: 36px;
    font-weight: 700;
    line-height: 52px;
    letter-spacing: 0em;
    text-align: center;
    color:#333333;
    margin-bottom: 20px;
}
.subtitle{
    font-family: Noto Serif TC;
    font-size: 28px;
    font-weight: 500;
    line-height: 40px;
    letter-spacing: 0em;
    text-align: center;
    color:#333333;
}

</style>