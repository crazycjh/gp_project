<script setup lang="ts">
import Title from '@/components/widget/Title.vue'
import { ref } from 'vue';
const backend = import.meta.env.VITE_BACKEND_PATH
const currentImageIndex = ref<number>();
const images = [
  `${backend}wp-content/uploads/2023/09/god_img13.svg`,
  `${backend}wp-content/uploads/2023/08/god_img1.svg`,
  `${backend}wp-content/uploads/2023/08/god_img2.svg`,
  `${backend}wp-content/uploads/2023/08/god_img3.svg`,
  `${backend}wp-content/uploads/2023/08/god_img4.svg`,
  `${backend}wp-content/uploads/2023/08/god_img5.svg`,
  `${backend}wp-content/uploads/2023/08/god_img6.svg`,
  `${backend}wp-content/uploads/2023/08/god_img7.svg`,
  `${backend}wp-content/uploads/2023/08/god_img8.svg`,
  `${backend}wp-content/uploads/2023/08/god_img9.svg`,
  `${backend}wp-content/uploads/2023/08/god_img11.svg`,
  `${backend}wp-content/uploads/2023/08/god_img12.svg`,
];
const hoverImage = [
  `${backend}wp-content/uploads/2023/09/god_img13_2.svg`,
  `${backend}wp-content/uploads/2023/09/god_img1_2.svg`,
  `${backend}wp-content/uploads/2023/09/god_img2_2.svg`,
  `${backend}wp-content/uploads/2023/09/god_img3_2.svg`,
  `${backend}wp-content/uploads/2023/09/god_img4_2.svg`,
  `${backend}wp-content/uploads/2023/09/god_img5_2.svg`,
  `${backend}wp-content/uploads/2023/09/god_img9_2.svg`,
  `${backend}wp-content/uploads/2023/09/god_img10_2.svg`,
  `${backend}wp-content/uploads/2023/09/god_img11_2.svg`,
  `${backend}wp-content/uploads/2023/09/god_img7_2.svg`,
  `${backend}wp-content/uploads/2023/09/god_img6_2.svg`,
  `${backend}wp-content/uploads/2023/09/god_img8_2.svg`,
];
const handleImageHover = (index: number) => {
  currentImageIndex.value = index;
};
</script>
<template>
    <div class="main pb-80px relative">
        <Title title="主祀神" />
        <div class="flex gap-10px flex-wrap justify-center mx-auto max-w-1250px relative z-10">
            <img
                v-for="(image, index) in images"
                :key="index"
                class="lg:w-15% md:w-23% max-md:45%"
                :src="index === currentImageIndex ? hoverImage[index] : image"
                alt=""
                @mouseover="handleImageHover(index)"
                @mouseout="handleImageHover(99)"
            />
            <!-- <img class="lg:w-15% md:w-23% max-md:45%" index="1" :src="`${backend}wp-content/uploads/2023/08/god_img1.svg`" alt="" @mouseover="handleImageHover(index)">
            <img class="lg:w-15% md:w-23% max-md:45%" :src="`${backend}wp-content/uploads/2023/08/god_img2.svg`" alt="">
            <img class="lg:w-15% md:w-23% max-md:45%" :src="`${backend}wp-content/uploads/2023/08/god_img3.svg`" alt="">
            <img class="lg:w-15% md:w-23% max-md:45%" :src="`${backend}wp-content/uploads/2023/08/god_img4.svg`" alt="">
            <img class="lg:w-15% md:w-23% max-md:45%" :src="`${backend}wp-content/uploads/2023/08/god_img5.svg`" alt="">
            <img class="lg:w-15% md:w-23% max-md:45%" :src="`${backend}wp-content/uploads/2023/08/god_img6.svg`" alt="">
            <img class="lg:w-15% md:w-23% max-md:45%" :src="`${backend}wp-content/uploads/2023/08/god_img7.svg`" alt="">
            <img class="lg:w-15% md:w-23% max-md:45%" :src="`${backend}wp-content/uploads/2023/08/god_img8.svg`" alt="">
            <img class="lg:w-15% md:w-23% max-md:45%" :src="`${backend}wp-content/uploads/2023/08/god_img9.svg`" alt="">
            <img class="lg:w-15% md:w-23% max-md:45%" :src="`${backend}wp-content/uploads/2023/08/god_img11.svg`" alt="">
            <img class="lg:w-15% md:w-23% max-md:45%" :src="`${backend}wp-content/uploads/2023/08/god_img12.svg`" alt="">
            <img class="lg:w-15% md:w-23% max-md:45%" :src="`${backend}wp-content/uploads/2023/09/god_img13.svg`" alt=""> -->
        </div>
        <img class="left" :src="`${backend}wp-content/uploads/2023/08/god_bg1.svg`" alt="">
        <img class="right" :src="`${backend}/wp-content/uploads/2023/08/god_bg2.svg`" alt="">
    </div>
</template>
<style scoped>
.main{
    background-color: #F4F1E4;
}
.left{
    position: absolute;
    bottom:0;
}
.right{
    position: absolute;
    top:0;
    right:0;
}
@media (max-width: 1440px) {
    .left,.right{
        display:none;
    }
}
</style>