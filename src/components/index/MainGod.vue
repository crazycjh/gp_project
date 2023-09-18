<template>
    <div class="main pb-80px relative">
        <Title title="主祀神" />
        <div class="flex gap-10px flex-wrap justify-center mx-auto md:px-80px lg:px-160px xl:px-0px max-w-1250px relative z-10">
            <div v-for="(god, index) in godArray" :key="index" class="relative god_container" @mouseenter="handleImageHover(index)" @mouseleave="handleImageHover(99)">
                <h5 class="god_name cursor-pointer" :style="{ color: isHovered(index) ? 'white' : 'black' }">{{ god }}</h5>
                <div class="god_image cursor-pointer" 
                    @click="goSearch(index)" :style="{
                        'background-image': `url(${getGodImageUrl(index)})`,
                        'width': '187.5px', 
                        'height':'51px',
                    }">
                </div>
            </div>
            <!-- <img v-for="(image, index) in images" :key="index" class="lg:w-15% md:w-23% max-md:45% cursor-pointer"
                :src="index === currentImageIndex ? hoverImage[index] : image" alt="" @mouseover="handleImageHover(index)"
                @mouseout="handleImageHover(99)" @click="goSearch(index)" /> -->
        </div>
        <img class="left" src="../../assets/index/god_bg1.svg" alt="">
        <img class="right" src="../../assets/index/god_bg2.svg" alt="">
    </div>
</template>
<script setup>
import Title from '@/components/widget/Title.vue'
import axios from 'axios';
import { ref,onMounted } from 'vue';
import { useRouter } from "vue-router";
import godBg01 from '@/assets/index/god_item_bg01.svg';
import godBg02 from '@/assets/index/god_item_bg02.svg';
const backend = import.meta.env.VITE_BACKEND_PATH
const currentImageIndex = ref();
const getGodImageUrl = (index) =>{
    return index === currentImageIndex.value ? godBg02 : godBg01;
}
onMounted(()=>{
    fetchGod()
})
//取得主神資料
const godArray = ref([])
const fetchGod = async () => {
 try {
    const response = await axios.get(
      `${import.meta.env.VITE_BACKEND_PATH}/api/gc/god`
    );
    godArray.value = response.data.split(',').slice(0, 12);
  } catch (error) {
    console.error("API 請求失敗:", error);
  }
}
// const images = [
//     `${backend}wp-content/uploads/2023/09/god_img01.svg`,
//     `${backend}wp-content/uploads/2023/09/god_img02.svg`,
//     `${backend}wp-content/uploads/2023/09/god_img03.svg`,
//     `${backend}wp-content/uploads/2023/09/god_img04.svg`,
//     `${backend}wp-content/uploads/2023/09/god_img05.svg`,
//     `${backend}wp-content/uploads/2023/09/god_img06.svg`,
//     `${backend}wp-content/uploads/2023/09/god_img07.svg`,
//     `${backend}wp-content/uploads/2023/09/god_img08.svg`,
//     `${backend}wp-content/uploads/2023/09/god_img09.svg`,
//     `${backend}wp-content/uploads/2023/09/god_img010.svg`,
//     `${backend}wp-content/uploads/2023/09/god_img011.svg`,
//     `${backend}wp-content/uploads/2023/09/god_img012.svg`,
// ];
// const hoverImage = [
//     `${backend}wp-content/uploads/2023/09/god_img01_2.svg`,
//     `${backend}wp-content/uploads/2023/09/god_img02_2.svg`,
//     `${backend}wp-content/uploads/2023/09/god_img03_2.svg`,
//     `${backend}wp-content/uploads/2023/09/god_img04_2.svg`,
//     `${backend}wp-content/uploads/2023/09/god_img05_2.svg`,
//     `${backend}wp-content/uploads/2023/09/god_img06_2.svg`,
//     `${backend}wp-content/uploads/2023/09/god_img07_2.svg`,
//     `${backend}wp-content/uploads/2023/09/god_img08_2.svg`,
//     `${backend}wp-content/uploads/2023/09/god_img09_2.svg`,
//     `${backend}wp-content/uploads/2023/09/god_img010_2.svg`,
//     `${backend}wp-content/uploads/2023/09/god_img011_2.svg`,
//     `${backend}wp-content/uploads/2023/09/god_img012_2.svg`,
// ];
// const Gods = [
//     '靈安尊王', '媽祖', '關聖帝君', '月下老人', '王母娘娘', '文昌帝君', '財神爺', '註生娘娘', '釋迦佛', '溫府千歲', '觀音菩薩', '玄天上帝'
// ]
const router = useRouter()
const goSearch = ((index) => {
    router.push(`/mainGod/${godArray.value[index]}`);
    // router.push('/mainGod/all')
    // localStorage.setItem()
})

const handleImageHover = (index) => {
    currentImageIndex.value = index;
};

const isHovered = (index) =>{
    return currentImageIndex.value === index
}
</script>

<style scoped>
.god_container {
    display: flex;
    justify-content: center;
    align-items: center;
}

.god_name {
    position: absolute;
    font-size: 20px;
    font-weight: bold;
    letter-spacing: 3px;
}

.main {
    background-color: #F4F1E4;
}

.left {
    position: absolute;
    bottom: 0;
}

.right {
    position: absolute;
    top: 0;
    right: 0;
}

@media (max-width: 1440px) {

    .left,
    .right {
        display: none;
    }
}
</style>