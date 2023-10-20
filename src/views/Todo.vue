<template>
    <loading :active="isLoading" :is-full-page="fullPage" ></loading>
    <TopCover :image="`${backend}wp-content/uploads/2023/09/blog_banner2.jpg`" title="代辦項目" />
    <Breadcrumb title="首頁/代辦項目" />
    <div class="mx-auto max-w-1200px">
        <div class="w-full flex flex-col md:flex-row gap-20px flex-wrap mt-40px">
            <div v-for="item in posts" :key="item.term_id" class="w-full  flex flex-col  w-full  lg:w-48%   max-lg:px-10px mt-40px">
                <router-link class="flex flex-col  w-full" :to="`/temple/${item.term_id}`">
                    <img class="photo" :src="item.image" alt="">
                    <p class="title">{{item.title}}</p>
                    <p class="mb-10px">{{ item.content }}</p>
                    <p class="more">了解更多...</p>
                </router-link>
            </div>
        </div>
        <div class="flex justify-center my-30px lg:my-50px">
            <Pagination :total-pages="totalPages" :current-page="currentPage" @page-changed="changePage"/>
        </div>
    </div>
</template>
<script setup >
//官方套件
import { onMounted,ref,computed,watch } from "vue";
import { useRoute,useRouter } from 'vue-router';
import axios from "axios";
import Loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/css/index.css';

//自製元件
const backend = import.meta.env.VITE_BACKEND_PATH
import Breadcrumb from '@/components/widget/Breadcrumb.vue'
import TopCover from '@/components/widget/TopCover.vue'
import Pagination from '@/components/widget/Pagination.vue'



//資料初始化
const posts = ref([]);
const total = ref();

//取資料和種類
onMounted(async () => {
    fetchData()
});

//根據種類取資料
const isLoading = ref(false);
const fullPage = ref(true);
const fetchData = async (type) => {
  isLoading.value = true;
  const params = {
        limit:itemsPerPage.value, 
        page:currentPage.value,
  };
  try {
    const response = await axios.get(`${backend}api/gc/todo/list`,{params:params});
    posts.value = response.data.data
    total.value = response.data.count

  } catch (error) {
    console.error("API 請求失敗:", error);
  } finally {
    isLoading.value = false; 
  }
};


//分頁系統
const currentPage = ref(1)
const itemsPerPage = ref(12)
const changePage =((page)=>{
    currentPage.value = page
})
const totalPages = computed(() => {
    return Math.ceil(total.value / itemsPerPage.value);
});

//監聽頁數
watch(currentPage,(newValue) => newValue && fetchData())

</script>

<style scoped>
.active{
    background-color: #CEB96E !important;
    color:#ffffff !important;
    border:none;
}
.title{
    font-family: Noto Serif TC;
    font-size: 24px;
    font-weight: 700;
    line-height: 52px;
    letter-spacing: 0.2em;
    text-align: left;
    color:#543118;

}
.btn{
    width:132px;
    height:50px;
    padding: 10px 20px 10px 20px;
    background-color: #EEEEEE;
    color:#777777;
    border:none;
}
.btn:hover{
    background-color: #CEB96E;
    color:#ffffff;
    border:none;
}
.photo{
    width: 100%;
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
    font-size: 20px;
    font-weight: 500;
    line-height: 29px;
    letter-spacing: 0em;
    text-align: left;
}
.more{  
    margin-top: -4px;
    color:#CEB96E;
    font-size:16px;
}
.btn:focus{
    outline:none;
}
</style>