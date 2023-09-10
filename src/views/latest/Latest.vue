<script setup lang="ts">
import { onMounted,ref,computed,watch } from "vue";
import { useRoute,useRouter } from 'vue-router';
import axios from "axios";
const backend = import.meta.env.VITE_BACKEND_PATH
import Breadcrumb from '@/components/widget/Breadcrumb.vue'
import TopCover from '@/components/widget/TopCover.vue'
import Pagination from '@/components/widget/Pagination.vue'
const posts = ref([]);
const total = ref();
const currentActive = ref();

const route = useRoute();
const router = useRouter()
onMounted(() => {
  currentActive.value = route.params.type;
});

onMounted(async () => {
    fetchData(currentActive.value)
});

const currentPage = ref(1)
const itemsPerPage = ref(2)
const changePage =((page)=>{
    currentPage.value = page
})

const totalPages = computed(() => {
    return Math.ceil(total.value / itemsPerPage.value);
});

const fetchData = async (type) => {
  if(type !== currentActive.value ){
    currentPage.value = 1
  }
  router.push(`${type}`)
  currentActive.value = type;
  const params = {
        limit:itemsPerPage.value, 
        page:currentPage.value,
  };
  let apiUrl = `${backend}api/gc/latest`;
  
  if (type !== 'all') {
    apiUrl += `?latest_type=${type}`;
  }

  try {
    const response = await axios.get(apiUrl,{
       params:params,
    });
    posts.value = response.data.latest;
    total.value = response.data.total;
  } catch (error) {
    console.error("API 請求失敗:", error);
  }
};
watch(currentPage,(newValue) => newValue && fetchData(currentActive.value))


</script>
<template>
    <TopCover :image="`${backend}wp-content/uploads/2023/09/blog_banner2.jpg`" title="最新活動" />
    <Breadcrumb title="首頁/最新活動" />
    <div class="tags flex justify-center max-md:px-100px gap-10px my-50px flex-wrap">
        <div class="flex gap-10px">
            <button class="btn rounded-none" :class="{ active: currentActive === 'all' }" @click="fetchData('all')">全部</button>
            <button class="btn rounded-none" :class="{ active: currentActive === 'hot' }" @click="fetchData('hot')">熱門活動</button>
        </div>
        <div class="flex gap-10px">
            <button class="btn rounded-none" :class="{ active: currentActive === 'xmas' }" @click="fetchData('xmas')">聖誕千秋</button>
            <button class="btn rounded-none"  :class="{ active: currentActive === 'temple' }"  @click="fetchData('temple')">廟宇繞境</button>
        </div>
    </div>
    <div class="mx-auto max-w-960px">
        <div class="w-full flex gap-30px flex-wrap mt-40px justify-start">
            <div v-for="item in posts" :key="item.id" class="w-full  flex flex-col sm:w-45% lg:w-full gap-10px block max-lg:px-10px">
                <router-link :to="`/latest/inner/${item.id}`">
                    <img class="photo" :src="item.image" alt="">
                </router-link>
                <p>{{item.link}}</p>
                <router-link class="more" :to="`/latest/${item.id}`">了解更多...</router-link>
            </div>
        </div>
        <div class="flex justify-center my-30px lg:my-50px">
            <Pagination :total-pages="totalPages" :current-page="currentPage" @page-changed="changePage"/>
        </div>
    </div>
</template>
<style scoped>
.active{
    background-color: #CEB96E !important;
    color:#ffffff !important;
    border:none;
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
@media(min-width: 1024px){
    .block{
        width:280px;
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
    font-size: 20px;
    font-weight: 500;
    line-height: 29px;
    letter-spacing: 0em;
    text-align: left;
}
.more{  
    margin-top: -4px;
    color:#CEB96E;
}
.btn:focus{
    outline:none;
}
</style>