<template>
    <TopCover :image="`${backend}wp-content/uploads/2023/08/temple_banner.jpg`" title="全台廟宇" />
    <Breadcrumb title="首頁/全台廟宇" />
    <div class="mx-auto max-w-1200px">
        <Search />
        <div class="w-full flex gap-30px flex-wrap mt-40px max-xl:justify-center">
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
        <div class="flex justify-center my-30px lg:my-50px">
            <Pagination :total-pages="totalPages" :current-page="currentPage" @page-changed="changePage"/>
        </div>
    </div>
</template>
<script setup >
import { onMounted, ref,computed,watch } from "vue";
import Search from '@/components/index/Search.vue'
import Breadcrumb from '@/components/widget/Breadcrumb.vue'
import TopCover from '@/components/widget/TopCover.vue'
import Pagination from '@/components/widget/Pagination.vue'
const backend = import.meta.env.VITE_BACKEND_PATH
import axios from "axios";
const temples = ref([])
const total = ref();
onMounted(async () => {
    fetchData()
});
const fetchData = async () => {
  try {
    const params = {
        limit:itemsPerPage.value, 
        page:currentPage.value,
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
const currentPage = ref(1)
const itemsPerPage = ref(12)
const changePage =((page)=>{
    currentPage.value = page
})

const totalPages = computed(() => {
    return Math.ceil(total.value / itemsPerPage.value);
});

watch(currentPage,(newValue) => newValue && fetchData())
</script>

<style scoped>
h4,p{
    color:#000000;
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
@media(min-width: 800px){
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