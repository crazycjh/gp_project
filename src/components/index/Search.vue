<script setup lang="ts">
import {ref,watch} from "vue";
// import axios from "axios";
import Title from '@/components/widget/Title.vue'
import router from "../../router";

const city = ref<string>('全台縣市');
const god = ref<string>('主神');
const searchText = ref<string>('');
//原版
// watch(city,(newValue) => {
//    if(newValue){
//       goSearch()
//    }
// })
//chatGTP建議 沒用過 其原理為由左至右前面成立才執行第二個
watch(city,(newValue) => newValue && goSearch())
watch(god,(newValue) => newValue && goSearch())
const goSearch = (()=>{
  router.push('/searchPage');
})
</script>
<template>
   <div class="mx-auto max-w-1200px">
      <Title title="全台廟宇搜尋" />
      <div class="flex max-lg:flex-col justify-center items-center flex-wrap">
         <div>
            <div class="relative inline-block">
               <select v-model="city" class="appearance-none bg-transparent border border-transparent text-gray-700 pr-8 custom_select mr-2">
                  <option disabled selected>全台縣市</option>
                  <option>台北市</option>
                  <option>新北市</option>
                  <option>桃園市</option>
                  <option>台中市</option>
                  <option>台南市</option>
                  <option>高雄市</option>
                  <option>基隆市</option>
                  <option>新竹市</option>
                  <option>嘉義市</option>
                  <option>新竹縣</option>
                  <option>苗栗縣</option>
                  <option>彰化縣</option>
                  <option>南投縣</option>
                  <option>雲林縣</option>
                  <option>嘉義縣</option>
                  <option>屏東縣</option>
                  <option>宜蘭縣</option>
                  <option>花蓮縣</option>
                  <option>台東縣</option>
                  <option>澎湖縣</option>
                  <option>金門縣</option>
                  <option>連江縣</option>
               </select>
               <img class="absolute right-0 top-0 mt-2 mr-4 pointer-events-none" src="../../assets/index/arrow_down.svg" alt="">
            </div>
            <div class="relative inline-block">
               <select v-model="god" class="appearance-none bg-transparent border border-transparent text-gray-700 pr-8 custom_select mr-20px">
                  <option disabled selected>主神</option>
                  <option>媽祖</option>
                  <option>觀世音菩薩</option>
                  <option>關公</option>
               </select>
               <img class="absolute right-0 top-0 mt-2 mr-6 pointer-events-none" src="../../assets/index/arrow_down.svg" alt="">
            </div>
         </div>   
         <div class="flex input_area">
            <input v-model="searchText" placeholder="請輸入關鍵字..." class="custom_input" type="text" @keyup.enter="goSearch">
            <img class="icon" src="../../assets/index/search.svg" alt="" @click="goSearch">
         </div>
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
}
.icon:hover{
   background-color: #543118;
}
@media (max-width: 1024px) {
   .input_area{
      margin-left:-16px;
      margin-top:10px;
      width: 320px;
   }
   .custom_input{
      width: 287px;
   }
}
.custom_input{
  padding-left: 5px; 
  padding-right: 5px; 
}
</style>