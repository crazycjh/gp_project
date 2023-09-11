<script setup lang="ts">
import Title from '@/components/widget/Title.vue'
import axios from "axios";
import LinkBtn from "../widget/LinkBtn.vue";
import { onMounted, ref, reactive } from "vue";
const backend = import.meta.env.VITE_BACKEND_PATH
const live = reactive([]);
const test = ref('<iframe width="560" height="315" src="https://www.youtube.com/embed/U3Y-0i3bbjk?si=Ac6FFvn2avV3np0l" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>')
onMounted(async () => {
  try {
    const response = await axios.get(
      `${import.meta.env.VITE_BACKEND_PATH}/api/gc/live`
    );
   //  live= response.data.live
   live.push(...response.data.live)
    console.log(live);
  } catch (error) {
    console.error("API 請求失敗:", error);
  }
});
</script>
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