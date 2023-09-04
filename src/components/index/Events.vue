<script setup lang="ts">
import Title from '@/components/widget/Title.vue'
import LinkBtn from "../widget/LinkBtn.vue";
const backend = import.meta.env.VITE_BACKEND_PATH
</script>
<template>
   <div class="relative">
      <Title title="最新活動" />
      <div class="flex justify-center flex-wrap gap-5 px-10px mx-auto max-w-1200px">
         <div class="flex z-10">
            <div>
               <img class="event_img" :src="`${backend}wp-content/uploads/2023/08/events1.svg`">
            </div>
            <div class="ml-10px flex flex-col justify-center">
               <p class="mb-10px date">2023.11.06</p>
               <h6 class="title max-w-xs">DEMO4-活動標題活動標題活動標題活動標題活動標題...</h6>
            </div>
         </div>
         <div class="flex z-10">
            <div>
               <img class="event_img" :src="`${backend}wp-content/uploads/2023/08/events2.svg`" alt="">
            </div>
            <div class="ml-10px flex flex-col justify-center">
               <p class="mb-10px date">2023.11.06</p>
               <h6 class="title max-w-xs">DEMO4-活動標題活動標題活動標題活動標題活動標題...</h6>
            </div>
         </div>
         <div class="flex z-10">
            <div>
               <img class="event_img" :src="`${backend}wp-content/uploads/2023/08/events3.svg`" alt="">
            </div>
            <div class="ml-10px flex flex-col justify-center">
               <p class="mb-10px date">2023.11.06</p>
               <h6 class="title max-w-xs">DEMO4-活動標題活動標題活動標題活動標題活動標題...</h6>
            </div>
         </div>
         <div class="flex z-10">
            <div>
               <img class="event_img" :src="`${backend}wp-content/uploads/2023/08/events4.png`" alt="">
            </div>
            <div class="ml-10px flex flex-col justify-center">
               <p class="mb-10px date">2023.11.06</p>
               <h6 class="title max-w-xs">DEMO4-活動標題活動標題活動標題活動標題活動標題...</h6>
            </div>
         </div>
      </div>
      <div class="flex justify-center py-30px">
         <LinkBtn text="更多活動" link="/latest"/>
      </div>
      <img class="tree_left" :src="`${backend}/wp-content/uploads/2023/08/home_bg3.svg`" alt="">
   </div>
  
</template>
<style scoped>
@media (max-width: 480px) {
   .event_img{
      object-fit: cover;
      width: 136px !important;
      height: 136px !important;
   } 
}

.date{
   color: #920000;
   font-family: Noto Serif TC;
   font-size: 16px;
   font-style: normal;
   font-weight: 400;
   line-height: normal;
}
.title{
   letter-spacing: 2.4px;
   color: #000;
   font-family: Noto Serif TC;
   font-size: 20px;
   font-style: normal;
   font-weight: 400;
   line-height: normal;
}
@media (max-width: 1024px) {
   .tree_left{
      display: none;
   }
}
.tree_left{
   position: absolute;
   top:30%;
   left:0;
}
</style>