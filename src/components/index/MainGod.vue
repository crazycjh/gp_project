<template>
    <div class="main pb-80px relative">
        <Title title="主祀神" />
        <div class="flex gap-10px flex-wrap justify-center mx-auto max-w-1250px relative z-10">
            <img
                v-for="(image, index) in images"
                :key="index"
                class="lg:w-15% md:w-23% max-md:45% cursor-pointer"
                :src="index === currentImageIndex ? hoverImage[index] : image"
                alt=""
                @mouseover="handleImageHover(index)"
                @mouseout="handleImageHover(99)"
                @click="goSearch(index)"
            />
        </div>
        <img class="left" src="../../assets/index/god_bg1.svg" alt="">
        <img class="right" src="../../assets/index/god_bg2.svg" alt="">
    </div>
</template>
<script setup >
import Title from '@/components/widget/Title.vue'
import { ref } from 'vue';
import { useRouter } from "vue-router";
const backend = import.meta.env.VITE_BACKEND_PATH
const currentImageIndex = ref();
const images = [
  `${backend}wp-content/uploads/2023/09/god_img01.svg`,
  `${backend}wp-content/uploads/2023/09/god_img02.svg`,
  `${backend}wp-content/uploads/2023/09/god_img03.svg`,
  `${backend}wp-content/uploads/2023/09/god_img04.svg`,
  `${backend}wp-content/uploads/2023/09/god_img05.svg`,
  `${backend}wp-content/uploads/2023/09/god_img06.svg`,
  `${backend}wp-content/uploads/2023/09/god_img07.svg`,
  `${backend}wp-content/uploads/2023/09/god_img08.svg`,
  `${backend}wp-content/uploads/2023/09/god_img09.svg`,
  `${backend}wp-content/uploads/2023/09/god_img010.svg`,
  `${backend}wp-content/uploads/2023/09/god_img011.svg`,
  `${backend}wp-content/uploads/2023/09/god_img012.svg`,
];
const hoverImage = [
  `${backend}wp-content/uploads/2023/09/god_img01_2.svg`,
  `${backend}wp-content/uploads/2023/09/god_img02_2.svg`,
  `${backend}wp-content/uploads/2023/09/god_img03_2.svg`,
  `${backend}wp-content/uploads/2023/09/god_img04_2.svg`,
  `${backend}wp-content/uploads/2023/09/god_img05_2.svg`,
  `${backend}wp-content/uploads/2023/09/god_img06_2.svg`,
  `${backend}wp-content/uploads/2023/09/god_img07_2.svg`,
  `${backend}wp-content/uploads/2023/09/god_img08_2.svg`,
  `${backend}wp-content/uploads/2023/09/god_img09_2.svg`,
  `${backend}wp-content/uploads/2023/09/god_img010_2.svg`,
  `${backend}wp-content/uploads/2023/09/god_img011_2.svg`,
  `${backend}wp-content/uploads/2023/09/god_img012_2.svg`,
];
const Gods = [
    '靈安尊王','媽祖','關聖帝君','月下老人','王母娘娘','文昌帝君','財神爺','註生娘娘','釋迦佛','溫府千歲','觀音菩薩','玄天上帝'
]
const router = useRouter()
const goSearch = ((index)=>{
    router.push(`/search/s1=&s2=${Gods[index]}&s3=`);
})

const handleImageHover = (index) => {
  currentImageIndex.value = index;
};
</script>

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