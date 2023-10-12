<template>
    <loading :active="isLoading" :is-full-page="fullPage"></loading>
    <TopCover :image="`${backend}wp-content/uploads/2023/10/faq_banner.jpg`" title="常見問題" />
    <Breadcrumb title="首頁/常見問題" />
    <div class="my-80px max-w-1200px mx-auto px-10px w-full">
        <div class="wrapper" v-for="(item,index) in question" :key="item.id">
            <div class="flex justify-between tab px-20px">
                <span class="text-white">{{ item.title }} - {{ item.question }}</span>
                <img v-show="activeQuestion === index + 1" src="../assets/QA/reduce_icon_1.png" alt="" @click="activeQuestion = 0" >
                <img v-show="activeQuestion !== index + 1" src="../assets/QA/show.png" alt="" @click="activeQuestion = index + 1">
            </div>
            <div v-show="activeQuestion === index + 1" class="inner">
                <div class="flex flex-col gap-20px" v-html="item.answer"></div>
            </div>
        </div>
    </div>
</template>
<script setup>
//官方套件
import { onMounted, ref, reactive } from "vue";
import axios from "axios";
import Loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/css/index.css';

//自製元件
import Breadcrumb from '@/components/widget/Breadcrumb.vue'
import TopCover from '@/components/widget/TopCover.vue'
const backend = import.meta.env.VITE_BACKEND_PATH

//取得問題
const question = reactive([]);
const activeQuestion = ref(1);
const isLoading = ref(false);
const fullPage = ref(true);
onMounted(async () => {
  isLoading.value = true;
  try {
    const response = await axios.get(
      `${import.meta.env.VITE_BACKEND_PATH}api/gc/question`
    );
    question.push(...response.data)
    isLoading.value = false; 
  } catch (error) {
    console.error("API 請求失敗:", error);
  }
});
</script>
<style scoped>
.inner{
    width: 100%;
    padding: 15px 20px;
}
.wrapper{
    width: 100%;
    border:1px solid #920000;
    margin-bottom: 20px;
}
.tab{
    width: 100%;
    background-color: #920000;
    height: 50px;
    align-items: center;
}
</style>