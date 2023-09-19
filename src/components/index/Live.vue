<template>
   <div class="relative">
      <div class="px-10px mx-auto max-w-1200px">
         <Title title="廟宇直播" />
         <div class="flex w-full justify-center gap-40px max-lg:flex-col text-center custom">
            <div v-for="item in live" :key="item.id" class="z-10 w-full">
               <div class="iframe_container" v-html="item.link">
               </div>
               <h4 class="live text-left">{{ item.title }}</h4>
            </div>
         </div>
      </div>
      <img class="tree_right" src="../../assets/index/tree_right.svg" alt="">
   </div>
   </template>
<script setup>
//官方套件
import { onMounted, ref, reactive } from "vue";
import axios from "axios";

//自製元件
import Title from '@/components/widget/Title.vue'
import LinkBtn from "../widget/LinkBtn.vue";
const backend = import.meta.env.VITE_BACKEND_PATH

//取得直播資料
const live = reactive([]);
onMounted(async () => {
  try {
    const response = await axios.get(
      `${import.meta.env.VITE_BACKEND_PATH}/api/gc/live`
    );
   live.push(...response.data.live)
  } catch (error) {
    console.error("API 請求失敗:", error);
  }
});
</script>

<style scoped>
.live{
   margin-top:12px;
   color: #000;
   font-family: Noto Serif TC;
   font-size: 20px;
   font-style: normal;
   font-weight: 400;
   line-height: normal;
   letter-spacing: 2.4px;
}
@media (max-width: 1024px) {
   .tree_right{
      display: none;
   }
}
.tree_right{
   position: absolute;
   top:30%;
   right:0;
}

</style>