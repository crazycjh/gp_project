<script setup lang="ts">
import Title from '@/components/widget/Title.vue'
</script>
<template>
<div class="relative">
   <div class="px-10 mx-auto max-w-1200px">
      <Title title="廟宇直播" />
      <div class="flex w-full justify-center gap-40px lg:gap-2  max-lg:flex-col text-center">
         <div class="z-10 w-full">
            <!-- <img class="w-full" src="https://demo2.gcreate.com.tw/gc_godpray/wp-content/uploads/2023/08/video_demo2.jpg" alt=""> -->
            <iframe class="w-full" width="586" height="329" src="https://www.youtube.com/embed/4lOBPxcRt3I?autoplay=1&mute=1&si=NWr9xRZ_olmut_Mh" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            <h4 class="live text-left">直播活動標題直播活動標題直播活動標題直播活動標題活動標題...</h4>
         </div>
         <div class="z-10 w-full">
            <!-- <img class="w-full" src="https://demo2.gcreate.com.tw/gc_godpray/wp-content/uploads/2023/08/video_demo1.jpg" alt=""> -->
            <iframe class="w-full" width="586" height="329" src="https://www.youtube.com/embed/H2Hr2F486dg?autoplay=1&mute=1&si=9lLXwlY8IVq1UF22" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            <h4 class="live text-left">直播活動標題直播活動標題直播活動標題直播活動標題活動標題...</h4>
         </div>
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