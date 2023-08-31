<script setup lang="ts">
import Title from '@/components/widget/Title.vue'
</script>
<template>
   <div class="px-10 md:px-270 lg:px-360 relative">
      <Title title="廟宇直播" />
      <div class="flex w-full justify-center gap-40px lg:gap-2  max-lg:flex-col text-center">
         <div class="z-10 w-full">
            <img src="https://demo2.gcreate.com.tw/gc_godpray/wp-content/uploads/2023/08/video_demo2.jpg" alt="">
            <h4 class="live text-left">直播活動標題直播活動標題直播活動標題直播活動標題活動標題...</h4>
         </div>
         <div class="z-10 w-full">
            <img src="https://demo2.gcreate.com.tw/gc_godpray/wp-content/uploads/2023/08/video_demo1.jpg" alt="">
            <h4 class="live text-left">直播活動標題直播活動標題直播活動標題直播活動標題活動標題...</h4>
         </div>
      </div>
      <img class="tree_right" src="https://demo2.gcreate.com.tw/gc_godpray/wp-content/uploads/2023/08/home_bg2.svg" alt="">
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