<script setup lang="ts">
import Title from '@/components/widget/Title.vue'
</script>
<template>
   <Title title="服務項目" />
   <div class="px-350 flex gap-40px justify-center mt-20">
      <div class="transform -translate-y-10">
         <img src="https://demo2.gcreate.com.tw/gc_godpray/wp-content/uploads/2023/08/service_img1.png" alt="">
         <h6>點燈</h6>
      </div>
      <div class="transform translate-y-10">
         <img src="https://demo2.gcreate.com.tw/gc_godpray/wp-content/uploads/2023/08/service_img2.png" alt="">
         <h6>法會</h6>
      </div>
      <div class="transform -translate-y-10">
         <img src="https://demo2.gcreate.com.tw/gc_godpray/wp-content/uploads/2023/08/service_img3.png" alt="">
         <h6>安太歲</h6>
      </div>
      <div class="transform translate-y-10">
         <img src="https://demo2.gcreate.com.tw/gc_godpray/wp-content/uploads/2023/08/service_img4.png" alt="">
         <h6>疏文</h6>
      </div>
   </div>
</template>
<style scoped>
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
</style>
