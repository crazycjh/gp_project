<template>
    <loading :active="isLoading" :is-full-page="fullPage" @cancel="onCancel"></loading>
    <TopCover :image="`${backend}wp-content/uploads/2023/08/god_banner.jpg`" title="主神" />
    <Breadcrumb title="首頁/主神" />
    <div class="mx-auto max-w-1200px ">
        <div class="filter_section mt-70px mb-10px px-10px hidden md:block">
            <div class="god_section mb-20px">
                <h2>找主神</h2>
                <button class="tag mr-10px mb-20px" :class="{active: activeGod === ''}" @click="activeGod = ''">所有主神</button>
                <button class="tag mr-10px mb-20px" :class="{active: activeGod === item}" v-for="item in godsStore.originGodArray" :key="item" @click="changeGod(item)">{{ item }}</button>
            </div>
            <div class="city_section mb-20px">
                <h2>找縣市</h2>
                <button class="tag mr-10px mb-20px" :class="{active: activeCity === ''}" @click="activeCity = ''">全台縣市</button>
                <button class="tag mr-10px mb-20px" :class="{active: activeCity === item}" v-for="item in cities" :key="item" @click="activeCity = item">{{ item }}</button>
            </div>
        </div>
        <div class="filter_section mt-70px mb-50px px-10px flex md:hidden">
            <div class="w-full flex flex-col mr-20px">
                <h2>找主神</h2>
                <div class="relative w-full ">
                    <select v-model="activeGod" class="appearance-none bg-transparent border border-transparent text-gray-700 custom_select mr-2">
                        <option selected value="">主神</option>
                        <option v-for="item in godsStore.originGodArray" :key="item">{{ item }}</option>
                    </select>
                    <img class="absolute right-0 top-0 mt-2 max-md:mr-3  mr-4 pointer-events-none" src="../../assets/index/arrow_down.svg" alt="">
                </div>   
            </div>
            <div class="flex w-full  flex-col">
                <h2>找縣市</h2>
                <div class="relative w-full">
                    <select v-model="activeCity" class="appearance-none bg-transparent border border-transparent text-gray-700 custom_select ">
                        <option selected value="">全台縣市</option>
                        <option v-for="item in cities" :key="item">{{ item }}</option>
                    </select>
                    <img class="absolute right-0 top-0 max-md:mr-2 mt-2 mr-4 pointer-events-none" src="../../assets/index/arrow_down.svg" alt="">
                </div>
            </div>
        </div>
        <div v-if="temples.length !== 0" class="w-full flex gap-30px flex-wrap mt-40px max-xl:justify-center">
            <div v-for="item in temples" :key="item.id" class="w-full flex flex-col gap-10px block max-lg:px-10px">
                <router-link class="flex flex-col gap-10px" :to="`/temple/${item.id}`">
                    <img class="photo" :src="item.image_url" alt="">
                    <h4>{{ item.name }}</h4>
                    <p>主神：{{ item.main_god }}</p>
                    <p>地址：{{item.location}}{{ item.address }}</p>
                <p class="more">了解更多</p>
                </router-link>
            </div>
        </div>
        <div v-if="temples.length === 0 && isLoading === false">
            <h4 class="noData px-10px">查無資料，請重新選擇篩選條件!</h4>
        </div>
        <div class="flex justify-center my-30px lg:my-50px">
            <Pagination :total-pages="totalPages" :current-page="currentPage" @page-changed="changePage"/>
        </div>
    </div>
</template>
<script setup >
//官方套件
import { onMounted, ref,computed,watch } from "vue";
import { useRoute, useRouter } from "vue-router";
import axios from "axios";
import Loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/css/index.css';

//自製元件
import Breadcrumb from '@/components/widget/Breadcrumb.vue'
import TopCover from '@/components/widget/TopCover.vue'
import Pagination from '@/components/widget/Pagination.vue'
const backend = import.meta.env.VITE_BACKEND_PATH

//pinia
import { useGods } from '@/store/gods.js'
const godsStore = useGods(); 

//初始化路由
const route = useRoute()
const router = useRouter()


//初始化資料
const defaultGod = ref('')
const temples = ref([])
const total = ref()
const godArray = ref([])
const activeCity = ref('')
const activeGod = ref('')
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

const changeGod = (god) =>{
    activeGod.value = god
}

//頁面生成時觸發
onMounted(async () => {
    const godDefault = localStorage.getItem('god')
    if(godDefault){
        activeGod.value = godDefault
        localStorage.removeItem('god')
    }
    fetchData()
    // fetchGod()
});

//取得廟宇資料
const isLoading = ref(false);
const fullPage = ref(true);
const fetchData = async () => {
  isLoading.value = true;
  try {
    const params = {
        limit:itemsPerPage.value, 
        page:currentPage.value,
        city:activeCity.value,
        god:activeGod.value
    };
    const response = await axios.get(
      `${import.meta.env.VITE_BACKEND_PATH}/api/gc/temple`,
      {
       params:params,
      }
    );
    temples.value = response.data.data;
    total.value = response.data.total;
  } catch (error) {
    console.error("API 請求失敗:", error);
  }  finally {
    isLoading.value = false; 
  }
}

//分頁操作
const currentPage = ref(1)
const itemsPerPage = ref(12)
const changePage =((page)=>{
    currentPage.value = page
})

const totalPages = computed(() => {
    return Math.ceil(total.value / itemsPerPage.value);
});

//監聽縣市，主神，頁數
watch(currentPage,(newValue) => newValue && fetchData())
//空字串也要監聽
watch(activeCity,(newValue) =>  {
  if (newValue !== undefined) {
    fetchData();
  }
})
watch(activeGod,(newValue) => {
  if (newValue !== undefined) {
    fetchData();
  }
})
</script>

<style scoped>
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
.noData{
    font-family: Noto Serif TC;
    font-size: 24px;
    font-weight: 700;
    line-height: 34px;
    letter-spacing: 0em;
    text-align: left;
    color: #543118;
}
.active{
    color:#ffffff !important;
    background-color: #CEB96E !important;
}
.tag{
    cursor: pointer;
    font-weight: 700;
    text-align: center;
    color:#9B9B9B;
    width: 110px;
    height: 35px;
    background-color: #EEEEEE;
    border-radius: 0;
    border: none;
    outline: none;
}
.tag:hover{
    color:#000;
}
.filter_section h2{
    font-family: Noto Serif TC;
    font-size: 20px;
    font-weight: 700;
    line-height: 29px;
    letter-spacing: 0.2em;
    text-align: left;
    color:#000000;
    margin-bottom: 5px;
}
.title{
    position: absolute;
    font-family: Noto Serif TC;
    font-size: 36px;
    font-weight: 700;
    line-height: 52px;
    letter-spacing: 0.2em;
    text-align: left;
    color:#ffffff;

}
.photo{
    width: 100%;
}
@media(min-width: 1024px){
    .block{
        width: 380px;
    }
    .photo{
        width: 380px;
        height:213.75px;
    }
}
h4{ 
    font-family: Noto Serif TC;
    font-size: 24px;
    font-weight: 700;
    line-height: 34px;
    letter-spacing: 0em;
    text-align: left;
    color:#543118;
}
p{  
    font-family: Noto Serif TC;
    font-size: 16px;
    font-weight: 500;
    line-height: 23px;
    letter-spacing: 0em;
    text-align: left;
    max-width: 350px;
}
.more{  
    margin-top: -4px;
    color:#CEB96E;
}
</style>