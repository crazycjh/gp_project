<script setup lang="ts">
import Title from '@/components/widget/Title.vue'
</script>
<template>
   <Title title="服務項目" />
   <div class="md:px-350 flex gap-40px justify-center mt-20 lg:mb-60 flex-wrap relative">
      <div class="md:transform md:-translate-y-10 z-10">
         <img src="https://demo2.gcreate.com.tw/gc_godpray/wp-content/uploads/2023/08/service_img1.png" alt="">
         <h6 class="item">點燈</h6>
      </div>
      <div class="md:transform md:translate-y-10 z-10">
         <img src="https://demo2.gcreate.com.tw/gc_godpray/wp-content/uploads/2023/08/service_img2.png" alt="">
         <h6 class="item">法會</h6>
      </div>
      <div class="md:transform md:-translate-y-10 z-10">
         <img src="https://demo2.gcreate.com.tw/gc_godpray/wp-content/uploads/2023/08/service_img3.png" alt="">
         <h6 class="item">安太歲</h6>
      </div>
      <div class="md:transform md:translate-y-10 z-10">
         <img src="https://demo2.gcreate.com.tw/gc_godpray/wp-content/uploads/2023/08/service_img4.png" alt="">
         <h6 class="item">疏文</h6>
      </div>
      <img class="tree_right" src="https://demo2.gcreate.com.tw/gc_godpray/wp-content/uploads/2023/08/home_bg2.svg" alt="">
      <img class="tree_left" src="https://demo2.gcreate.com.tw/gc_godpray/wp-content/uploads/2023/08/home_bg3.svg" alt="">
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
   top:-50%;
   right:0;
}
@media (max-width: 1440px) {
   .tree_left{
      display: none;
   }
}
.tree_left{
   position: absolute;
   top:20%;
   left:0;
}
.item:hover{
   color:#ceb96e;
}
</style>
