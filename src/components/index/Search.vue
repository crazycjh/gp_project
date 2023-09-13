<script setup>
import {ref,watch,onMounted} from "vue";
import axios from 'axios';
import Title from '@/components/widget/Title.vue'
import { useRouter } from "vue-router";


const godArray = ref([])
onMounted(async () => {
  try {
    const response = await axios.get(
      `${import.meta.env.VITE_BACKEND_PATH}/api/gc/god`
    );
    godArray.value = response.data.split(',')
  } catch (error) {
    console.error("API 請求失敗:", error);
  }
});



const city = ref('全台縣市');
const god = ref('主神');
const searchText = ref('');

const router = useRouter()
const goSearch = (()=>{
   if(city.value === '全台縣市') city.value = ''
   if(god.value ==='主神') god.value = ''
  router.push(`/search/s1=${city.value}&s2=${god.value}&s3=${searchText.value}`);
})
</script>
<template>
   <div class="mx-auto max-w-1200px">
      <Title title="全台廟宇搜尋" />
      <div class="flex max-lg:flex-col justify-center items-center flex-wrap">
         <div>
            <div class="relative inline-block">
               <select v-model="city" class="appearance-none bg-transparent border border-transparent text-gray-700 pr-8 custom_select mr-2">
                  <option selected>全台縣市</option>
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
                  <option selected>主神</option>
                  <option v-for="item in godArray" :key="item">{{ item }}</option>
               </select>
               <img class="absolute right-0 top-0 mt-2 mr-6 pointer-events-none" src="../../assets/index/arrow_down.svg" alt="">
            </div>
         </div>   
         <div class="flex input_area">
            <input v-model="searchText" placeholder="請輸入關鍵字..." class="custom_input" type="text" @keyup.enter="goSearch">
            <div class="icon"  alt="" @click="goSearch()"></div>
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
   color:#000000;
   width: 200px;
   height: 30px;
   flex-shrink: 0;
   background: #EEE;
}
.icon{
   width: 30px;
   background-image: url('../../assets/index/search.svg');
}
.icon:hover{
   background-image: url('../../assets/index/search2.svg');
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