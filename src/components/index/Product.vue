<template>
   <div class="mx-auto max-w-1200px md:mt-80px">
      <div class="md:px-50px md:pb-50px">
         <div class="lg:h-340px lg:mb-80px flex-column lg:flex mx-auto">
            <div class="w-full lg:w-400px bg-red-800 h-full flex flex-col items-center gap-5 max-lg:pb-50px">
               <Title title="文創商品" white="true" />
               <h5 class="mt-020px">內文內文內文內文內文內文內文內文內文內文內文內文內文內文</h5>
               <InnerLinkBtn class="mb-20px" text="更多商品" link="/product" />
            </div>
            <div>
               <img class="bg-repeat max-lg:w-full lg:h-340px"  :src="`${backend}wp-content/uploads/2023/08/home_product_img.jpg`" alt="">
            </div>
         </div>
      </div>
   </div>
</template>
<script setup >
//自製元件
import Title from '@/components/widget/Title.vue'
import InnerLinkBtn from '../widget/InnerLinkBtn.vue';
const backend = import.meta.env.VITE_BACKEND_PATH
</script>

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