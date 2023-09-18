<template>
    <TopCover :image="`${backend}wp-content/uploads/2023/08/god_banner.jpg`" title="主神" />
    <Breadcrumb title="首頁/主神" />
    <div class="mx-auto max-w-1200px ">
        <div class="filter_section mt-70px mb-10px px-10px">
            <div class="god_section mb-20px">
                <h2>找主神</h2>
                <span class="tag mr-10px" :class="{active: activeGod === ''}" @click="activeGod = ''">所有主神</span>
                <span class="tag mr-10px" :class="{active: activeGod === item}" v-for="item in godArray" :key="item" @click="changeGod(item)">{{ item }}</span>
            </div>
            <div class="city_section mb-20px">
                <h2>找縣市</h2>
                <span class="tag mr-10px" :class="{active: activeCity === ''}" @click="activeCity = ''">全台縣市</span>
                <span class="tag mr-10px" :class="{active: activeCity === item}" v-for="item in cities" :key="item" @click="activeCity = item">{{ item }}</span>
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
        <div v-else>
            <h4 class="noData px-10px">查無資料，請重新選擇篩選條件!</h4>
        </div>
        <div class="flex justify-center my-30px lg:my-50px">
            <Pagination :total-pages="totalPages" :current-page="currentPage" @page-changed="changePage"/>
        </div>
    </div>
</template>
<script setup >
import { onMounted, ref,computed,watch } from "vue";
import { useRoute, useRouter } from "vue-router";
import Breadcrumb from '@/components/widget/Breadcrumb.vue'
import TopCover from '@/components/widget/TopCover.vue'
import Pagination from '@/components/widget/Pagination.vue'
const backend = import.meta.env.VITE_BACKEND_PATH
import axios from "axios";
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
    // router.push(`/mainGod/${activeGod.value}`)
}

//頁面生成時觸發
onMounted(async () => {
    if(route.params.god === 'all'){
        activeGod.value =''
    }else{
        activeGod.value = route.params.god;
    }
    fetchData()
    fetchGod()
});

//取得廟宇資料
const fetchData = async () => {
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
  }
}
//取得主神資料
const fetchGod = async () => {
 try {
    const response = await axios.get(
      `${import.meta.env.VITE_BACKEND_PATH}/api/gc/god`
    );
    godArray.value = response.data.split(',')
  } catch (error) {
    console.error("API 請求失敗:", error);
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
    color:#CEB96E !important;
}
.tag{
    cursor: pointer;
    white-space:nowrap;
    font-family: Noto Serif TC;
    font-size: 16px;
    font-weight: 550;
    line-height: 23px;
    letter-spacing: 0.2em;
    text-align: left;
    color:#AAA;
}
.tag:hover{
    border-bottom: 1px solid #AAA;
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