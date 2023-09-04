<script setup lang="ts">
import Title from '@/components/widget/Title.vue'
import LinkBtn from '../widget/LinkBtn.vue';
const backend = import.meta.env.VITE_BACKEND_PATH
</script>
<template>
   <div class="mx-auto max-w-1200px">
      <div class=" lg:h-340px lg:my-80px flex-column lg:flex">
         <div class="w-full lg:w-400px bg-red-800 h-full flex flex-col items-center gap-5">
            <Title title="文創商品" white="true" />
            <h5 class="mt-020px">內文內文內文內文內文內文內文內文內文內文內文內文內文內文</h5>
            <LinkBtn class="mb-20px" text="更多商品" link="/more" />
         </div>
         <div>
            <img class="bg-repeat max-lg:w-full lg:h-340px"  :src="`${backend}wp-content/uploads/2023/08/home_product_img.jpg`" alt="">
         </div>
      </div>
   </div>
   
</template>
<style scoped>
h5{
   max-width:333px;
   color: #FFF;
   text-align: center;
   font-family: Noto Serif TC;
   font-size: 16px;
   font-style: normal;
   font-weight: 700;
   line-height: normal;
}
</style>