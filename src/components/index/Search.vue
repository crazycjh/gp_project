<script setup lang="ts">
import Title from '@/components/widget/Title.vue'
</script>
<template>
   <Title title="全台廟宇搜尋" />
   <div class="flex justify-center items-center">
      <div class="relative inline-block">
         <select class="appearance-none bg-transparent border border-transparent text-gray-700 pr-8 custom_select mr-2">
            <option>全台縣市</option>
         </select>
         <svg class="absolute right-0 top-0 mt-2 mr-4 pointer-events-none" xmlns="http://www.w3.org/2000/svg" width="13" height="12" viewBox="0 0 13 12" fill="none">
            <path d="M6.5 12L0.00480833 1.2235e-06L12.9952 8.78432e-08L6.5 12Z" fill="#333333"/>
         </svg>
      </div>
      <div class="relative inline-block">
         <select class="appearance-none bg-transparent border border-transparent text-gray-700 pr-8 custom_select mr-4">
            <option value="">主神</option>
         </select>
         <svg class="absolute right-0 top-0 mt-2 mr-6 pointer-events-none" xmlns="http://www.w3.org/2000/svg" width="13" height="12" viewBox="0 0 13 12" fill="none">
            <path d="M6.5 12L0.00480833 1.2235e-06L12.9952 8.78432e-08L6.5 12Z" fill="#333333"/>
         </svg>
      </div>
      <div class="flex">
         <input class="custom_input" type="text">
         <img src="../../assets/index/search.svg" alt="">
      </div>
   </div>
</template>
<style scoped>
.custom_select{
   display: flex;
   width: 155px;
   height: 30px;
   padding: 0px 10px;
   justify-content: space-between;
   align-items: center;
   flex-shrink: 0;
   background: #EEE;
   color:#333333;
}
.custom_input{
   width: 200px;
   height: 30px;
   flex-shrink: 0;
   background: #EEE;
   color:#EEEEEE;
}
</style>