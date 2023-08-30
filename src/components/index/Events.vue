<script setup lang="ts">
import Title from '@/components/widget/Title.vue'
import LinkBtn from "../widget/LinkBtn.vue";
</script>
<template>
   <Title title="最新活動" />
   <div class="flex justify-center flex-wrap gap-5 px-360">
      <div class="flex">
         <div>
            <img src="https://demo2.gcreate.com.tw/gc_godpray/wp-content/uploads/2023/08/events1.svg" alt="">
         </div>
         <div class="ml-10px flex flex-col justify-center">
            <p class="mb-10px date">2023.11.06</p>
            <h6 class="title max-w-xs">DEMO4-活動標題活動標題活動標題活動標題活動標題...</h6>
         </div>
      </div>
      <div class="flex">
         <div>
            <img src="https://demo2.gcreate.com.tw/gc_godpray/wp-content/uploads/2023/08/events2.svg" alt="">
         </div>
         <div class="ml-10px flex flex-col justify-center">
            <p class="mb-10px date">2023.11.06</p>
            <h6 class="title max-w-xs">DEMO4-活動標題活動標題活動標題活動標題活動標題...</h6>
         </div>
      </div>
      <div class="flex">
         <div>
            <img src="https://demo2.gcreate.com.tw/gc_godpray/wp-content/uploads/2023/08/events3.svg" alt="">
         </div>
         <div class="ml-10px flex flex-col justify-center">
            <p class="mb-10px date">2023.11.06</p>
            <h6 class="title max-w-xs">DEMO4-活動標題活動標題活動標題活動標題活動標題...</h6>
         </div>
      </div>
      <div class="flex">
         <div>
            <img src="https://demo2.gcreate.com.tw/gc_godpray/wp-content/uploads/2023/08/events4.png" alt="">
         </div>
         <div class="ml-10px flex flex-col justify-center">
            <p class="mb-10px date">2023.11.06</p>
            <h6 class="title max-w-xs">DEMO4-活動標題活動標題活動標題活動標題活動標題...</h6>
         </div>
      </div>
      <LinkBtn text="更多活動" link="/more"/>
   </div>
</template>
<style scoped>
.date{
   color: #920000;
   font-family: Noto Serif TC;
   font-size: 16px;
   font-style: normal;
   font-weight: 400;
   line-height: normal;
}
.title{
   color: #000;
   font-family: Noto Serif TC;
   font-size: 20px;
   font-style: normal;
   font-weight: 400;
   line-height: normal;
}
</style>