<script setup lang="ts">
import Title from '@/components/widget/Title.vue'
const backend = import.meta.env.VITE_BACKEND_PATH
</script>
<template>
   <div class="relative">
      <Title title="服務項目" />
      <div class="flex gap-40px justify-center mt-20px mb-20px max-lg:mb-50px lg:mt-80px lg:mb-100px flex-wrap mx-auto max-w-1200px max-lg:max-w-570px ">
         <div class="lg:transform lg:-translate-y-10 z-10">
            <img :src="`${backend}wp-content/uploads/2023/08/service_img1.png`" alt="">
            <h6 class="item">點燈</h6>
         </div>
         <div class="lg:transform lg:translate-y-10 z-10">
            <img :src="`${backend}wp-content/uploads/2023/08/service_img2.png`" alt="">
            <h6 class="item">法會</h6>
         </div>
         <div class="lg:transform lg:-translate-y-10 z-10">
            <img :src="`${backend}wp-content/uploads/2023/08/service_img3.png`" alt="">
            <h6 class="item">安太歲</h6>
         </div>
         <div class="lg:transform lg:translate-y-10 z-10">
            <img :src="`${backend}wp-content/uploads/2023/08/service_img4.png`" alt="">
            <h6 class="item">疏文</h6>
         </div>
      </div>
      <img class="tree_right" :src="`${backend}wp-content/uploads/2023/08/home_bg2.svg`" alt="">
      <img class="tree_left" :src="`${backend}wp-content/uploads/2023/08/home_bg3.svg`" alt="">
   </div>
</template>
<style scoped>
@media (max-width: 1440px) {
   img{
      width: 180px;
   }
}

h6{
   text-align: center;
   color: #333;
   font-family: Noto Serif TC;
   font-size: 20px;
   font-style: normal;
   font-weight: 700;
   line-height: normal;
   letter-spacing: 4px;
}
@media (max-width: 1440px) {
   .tree_right{
      display: none;
   }
}
.tree_right{
   position: absolute;
   top:10%;
   right:0;
}
@media (max-width: 1440px) {
   .tree_left{
      display: none;
   }
}
.tree_left{
   position: absolute;
   top:50%;
   left:0;
}
.item:hover{
   color:#ceb96e;
}
</style>
