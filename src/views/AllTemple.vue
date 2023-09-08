<script setup lang="ts">
import { onMounted, ref } from "vue";
import Search from '../components/index/Search.vue'
import Breadcrumb from '../components/widget/Breadcrumb.vue'
import TopCover from '../components/widget/TopCover.vue'
const backend = import.meta.env.VITE_BACKEND_PATH
import axios from "axios";
// interface Temple{
//     id:Number;
//     image_url:String;
//     name:String;
//     main_god:String;
//     address:String;
//     total:Number;
// }
const temples = ref([])
const total = ref();
onMounted(async () => {
  try {
    const response = await axios.get(
      `${import.meta.env.VITE_BACKEND_PATH}/api/gc/temple`
    );
    temples.value = response.data.data;
    total.value = response.data.total;
  } catch (error) {
    console.error("API 請求失敗:", error);
  }
});
</script>
<template>
    <TopCover :image="`${backend}wp-content/uploads/2023/08/temple_banner.jpg`" title="全台廟宇" />
    <Breadcrumb title="首頁/全台廟宇" />
    <div class="mx-auto max-w-1200px">
        <Search />
        <div class="w-full flex gap-30px flex-wrap mt-40px justify-center">
            <div v-for="item in temples" :key="item.id.toString()" class="w-full flex flex-col gap-10px block max-lg:px-10px">
                <router-link  :to="`/temple/${item.id}`"><img class="photo" :src="item.image_url.toString()" alt=""></router-link>
                <h4>{{ item.name }}</h4>
                <p>{{ item.main_god }}</p>
                <p>{{ item.address }}</p>
                <router-link class="more" :to="`/temple/${item.id}`">了解更多></router-link>
            </div>
        </div>
        <div class="flex justify-center my-30px lg:my-50px">
            <p>上一頁  1 2 3  下一頁</p>
        </div>
    </div>
</template>
<style scoped>
h4,p{
    color:#000000;
}
.title{
    position: absolute;
    font-family: Noto Serif TC;
    font-size: 36px;
    font-weight: 700;
    line-height: 52px;
    letter-spacing: 0.2em;
    text-align: left;
    color:#ffffff;
}
.photo{
    width: 100%;
}
@media(min-width: 800px){
     .block{
        width: 380px;
    } 
    .photo{
        width: 380px;
        height:213.75px;
    } 
}
h4{ 
    font-family: Noto Serif TC;
    font-size: 24px;
    font-weight: 700;
    line-height: 34px;
    letter-spacing: 0em;
    text-align: left;
    color:#543118;
}
p{  
    font-family: Noto Serif TC;
    font-size: 16px;
    font-weight: 500;
    line-height: 23px;
    letter-spacing: 0em;
    text-align: left;
    max-width: 350px;
}
.more{  
    margin-top: -4px;
    color:#CEB96E;
}
</style>