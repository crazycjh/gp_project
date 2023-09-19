<template>
   <div class="mx-auto max-w-1200px">
      <Title title="全台廟宇搜尋" />
      <div class="flex justify-center gap-10px mb-12px">
            <button class="tag" :class="{active:activeTag === 'city'}" @click="tagToogle('city')">找縣市主神</button>
            <button class="tag" :class="{active:activeTag === 'name'}" @click="tagToogle('name')">搜廟宇名稱</button>
      </div>
      <div class="px-10px">
         <div class="search_wrapper flex justify-center items-center">
            <div v-show="search1" class="flex w-full">
               <div class="flex w-full mr-20px">
                  <h4 class="tag_name">縣市</h4>
                  <div class="relative w-full">
                     <select v-model="city" class="appearance-none bg-transparent border border-transparent text-gray-700 custom_select ">
                        <option selected>全台縣市</option>
                        <option v-for="item in cities" :key="item">{{ item }}</option>
                     </select>
                     <img class="absolute right-0 top-0 max-md:mr-2 mt-2 mr-4 pointer-events-none" src="../../assets/index/arrow_down.svg" alt="">
                  </div>
               </div>
               <div class="w-full flex">
                  <h4 class="tag_name">主神</h4>
                  <div class="relative w-full">
                     <select v-model="god" class="appearance-none bg-transparent border border-transparent text-gray-700 custom_select mr-2">
                        <option selected>主神</option>
                        <option v-for="item in godsStore.originGodArray" :key="item">{{ item }}</option>
                     </select>
                     <img class="absolute right-0 top-0 mt-2 max-md:mr-3  mr-4 pointer-events-none" src="../../assets/index/arrow_down.svg" alt="">
                  </div>   
               </div>
               <div class="icon w-full"  alt="" @click="goSearch()"></div>
            </div>   
            <div v-show="search2" class="flex input_area w-full justify-center">
               <h4 class="tag_name">搜尋</h4>
               <input v-model="searchText" placeholder="請輸入關鍵字..." class="custom_input mr-2" type="text" @keyup.enter="enterSearch">
               <div class="icon"  alt="" @click="goSearch()"></div>
            </div>
         </div>
      </div>
   </div>
</template>
<script setup>
//官方套件
import {ref,watch,onMounted} from "vue";
import axios from 'axios';
import { useRouter } from "vue-router";

//自製元件
import Title from '@/components/widget/Title.vue'

//pinia
import { useGods } from '@/store/gods.js'
const godsStore = useGods(); 


//地區主神，關鍵字
const search1 = ref(true)
const search2 = ref(false)
const activeTag = ref('city')
const city = ref('全台縣市');
const god = ref('主神');
const searchText = ref('');
const cities = ref([
  '台北市',
  '新北市',
  '桃園市',
  '台中市',
  '台南市',
  '高雄市',
  '基隆市',
  '新竹市',
  '嘉義市',
  '新竹縣',
  '苗栗縣',
  '彰化縣',
  '南投縣',
  '雲林縣',
  '嘉義縣',
  '屏東縣',
  '宜蘭縣',
  '花蓮縣',
  '台東縣',
  '金門縣',
  '澎湖縣',
  '連江縣'
]);

//標籤區分
const tagToogle = ((target) => {
    search1.value = target === 'city';
    search2.value = target === 'name';
    activeTag.value = target;
})
//跳轉搜尋頁
const router = useRouter()
const goSearch = ()=>{
   if(city.value === '全台縣市') city.value = ''
   if(god.value ==='主神') god.value = ''
  router.push(`/search/s1=${city.value}&s2=${god.value}&s3=${searchText.value}`);
}

//enter觸發
const enterSearch = () => {
   if (city.value !== '' || god.value !== '' || searchText.value !== '') {
      goSearch();
    }
}
</script>

<style scoped>
.tag_name{
   font-family: Noto Serif TC;
   font-size: 16px;
   font-weight: 700;
   line-height: 23px;
   letter-spacing: 0.1em;
   text-align: left;
   color:#000000;
   display: flex;
   align-items: center;
   margin-right: 12px;
   min-width: 36px;
}
@media (max-width:768px){
   .tag_name{
      margin-right: 0;
   }
}
.search_wrapper{
   height: 60px;
   max-width: 700px;
   margin:0 auto;
   background-color: #ffffff;
   box-shadow: 4px 4px 10px 0px #00000040;
   display:flex;
   align-items: center;
   padding-left:12px;
   padding-right: 12px;
}
.tag{
   width: 111px;
   height: 30px;
   top: 77px;
   left: 220px;
   background-color: #AAAAAA;
   color:white;
   border-radius:0;
   border:none;
   outline:none;
}
.tag.active{
   background-color: #CEB96E;
}
.custom_select{
   display: flex;
   width:100%;
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
   width:85%;
   height: 30px;
   flex-shrink: 0;
   background: #EEE;
}
.icon{
   margin-left: 10px;
   background-repeat: no-repeat;
   width: 68px;
   height: 30px;
   background-image: url('../../assets/index/search4.svg');
}
.icon:hover{
   background-image: url('../../assets/index/search2.svg');
}
@media (max-width: 768px) {
  .custom_input{
   width: 80%;
  }
}
.custom_input{
  padding-left: 5px; 
  padding-right: 5px; 
}
</style>