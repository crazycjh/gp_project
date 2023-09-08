<script setup lang="ts">
import Title from '@/components/widget/Title.vue'
import axios from "axios";
import LinkBtn from "../widget/LinkBtn.vue";
import { onMounted, ref } from "vue";
const backend = import.meta.env.VITE_BACKEND_PATH
const live = ref([]);
onMounted(async () => {
  try {
    const response = await axios.get(
      `${import.meta.env.VITE_BACKEND_PATH}/api/gc/live`
    );
    live.value = response.data.live
  } catch (error) {
    console.error("API 請求失敗:", error);
  }
});
</script>
<template>
<div class="relative">
   <div class="px-10px mx-auto max-w-1200px">
      <Title title="廟宇直播" />
      <div class="flex w-full justify-center gap-40px lg:gap-2  max-lg:flex-col text-center">
         <div v-for="item in live" :key="item.id" class="z-10 w-full">
            <iframe class="w-full" width="586" height="329" :src="item.link" title="北港朝天宮正殿直播- 本服務由麥睿資訊人生地圖提供" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            <h4 class="live text-left">{{ item.title }}</h4>
         </div>
         <!-- <div class="z-10 w-full">
            <iframe class="w-full" width="586" height="300"  src="https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fwww.facebook.com%2Fluzhupapago%2Fvideos%2F1991149747826499%2F&show_text=false&width=560&t=0" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share" allowFullScreen="true"></iframe>
            <h4 class="live text-left">直播活動標題直播活動標題直播活動標題直播活動標題活動標題...</h4>
         </div> -->
      </div>
      <div class="flex justify-center py-30px">
         <LinkBtn text="更多直播" link="/more"/>
      </div>
   </div>
   <img class="tree_right" :src="`${backend}wp-content/uploads/2023/08/home_bg2.svg`" alt="">
</div>
</template>
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