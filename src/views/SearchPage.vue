<script setup lang="ts">
import { onMounted, ref, watch, computed } from "vue";
import { useRoute, useRouter } from "vue-router";
// import Search from '@/components/index/Search.vue'
import Breadcrumb from '@/components/widget/Breadcrumb.vue'
import TopCover from '@/components/widget/TopCover.vue'
import Pagination from '@/components/widget/Pagination.vue'
import Title from "../components/widget/Title.vue";
const backend = import.meta.env.VITE_BACKEND_PATH
import axios from "axios";


const route = useRoute()
const searchText = ref()
const s1Value = ref('');
const s2Value = ref('');
const s3Value = ref('');
onMounted(() => {
    searchText.value = route.params.content;
    const urlParams = new URLSearchParams(searchText.value);
    s1Value.value = urlParams.get('s1');
    s2Value.value = urlParams.get('s2');
    s3Value.value = urlParams.get('s3');

});

const temples = ref([])
const total = ref();

onMounted(async () => {
    fetchData()
});

const fetchData = async () => {
    try {
        const params = {
            limit: itemsPerPage.value,
            page: currentPage.value,
            city: s1Value.value,
            god: s2Value.value,
            text: s3Value.value,

        };
        const response = await axios.get(
            `${import.meta.env.VITE_BACKEND_PATH}/api/gc/temple/search`,
            {
                params: params,
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
const changePage = ((page) => {
    currentPage.value = page
})

const totalPages = computed(() => {
    return Math.ceil(total.value / itemsPerPage.value);
});

watch(currentPage, (newValue) => newValue && fetchData())

const router = useRouter()
const goSearch = (() => {
    //    if(s1Value.value === '全台縣市') s1Value.value = ''
    //    if(s2Value.value ==='主神') s2Value.value = ''
    router.push(`/search/s1=${s1Value.value}&s2=${s2Value.value}&s3=${s3Value.value}`);
    fetchData()
})
</script>
<template>
    <TopCover :image="`${backend}wp-content/uploads/2023/08/temple_banner.jpg`" title="搜尋頁面" />
    <Breadcrumb title="首頁/搜尋頁面" />
    <div class="mx-auto max-w-1200px">
        <div class="mx-auto max-w-1200px">
            <Title title="全台廟宇搜尋" />
            <div class="flex max-lg:flex-col justify-center items-center flex-wrap">
                <div>
                    <div class="relative inline-block">
                        <select v-model="s1Value"
                            class="appearance-none bg-transparent border border-transparent text-gray-700 pr-8 custom_select mr-2">
                            <option  selected value="">全台縣市</option>
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
                        <img class="absolute right-0 top-0 mt-2 mr-4 pointer-events-none"
                            src="../assets/index/arrow_down.svg" alt="">
                    </div>
                    <div class="relative inline-block">
                        <select v-model="s2Value"
                            class="appearance-none bg-transparent border border-transparent text-gray-700 pr-8 custom_select mr-20px">
                            <option  selected value="">主神</option>
                            <option>靈安尊王</option>
                            <option>媽祖</option>
                            <option>關聖帝君</option>
                            <option>月下老人</option>
                            <option>王母娘娘</option>
                            <option>文昌帝君</option>
                            <option>財神爺</option>
                            <option>註生娘娘</option>
                            <option>釋迦佛</option>
                            <option>溫府千歲</option>
                            <option>觀音菩薩</option>
                            <option>玄天上帝</option>
                        </select>
                        <img class="absolute right-0 top-0 mt-2 mr-6 pointer-events-none"
                            src="../assets/index/arrow_down.svg" alt="">
                    </div>
                </div>
                <div class="flex input_area">
                    <input v-model="s3Value" placeholder="請輸入關鍵字..." class="custom_input" type="text"
                        @keyup.enter="goSearch">
                    <div class="icon" alt="" @click="goSearch()"></div>
                </div>
            </div>
        </div>
        <div class="w-full flex gap-30px flex-wrap mt-40px">
            <div v-for="item in temples" :key="item.id" class="w-full flex flex-col gap-10px block max-lg:px-10px">
                <router-link class="flex flex-col gap-10px" :to="`/temple/${item.id}`">
                    <img class="photo" :src="item.image_url" alt="">
                    <h4>{{ item.name }}</h4>
                    <p>主神：{{ item.main_god }}</p>
                    <p>地址：{{ item.address }}</p>
                <p class="more">了解更多</p>
                </router-link>
            </div>
        </div>
        <div class="flex justify-center" v-if="temples.length === 0">
            <h4 >查無廟宇，請重新輸入篩選條件!</h4>
        </div>
        <div class="flex justify-center my-30px lg:my-50px">
            <Pagination :total-pages="totalPages" :current-page="currentPage" @page-changed="changePage" />
        </div>
    </div>
</template>
<style scoped>
h4,
p {
    color: #000000;
}

.title {
    position: absolute;
    font-family: Noto Serif TC;
    font-size: 36px;
    font-weight: 700;
    line-height: 52px;
    letter-spacing: 0.2em;
    text-align: left;
    color: #ffffff;
}

.photo {
    width: 100%;
}

@media(min-width: 800px) {
    .block {
        width: 380px;
    }

    .photo {
        width: 380px;
        height: 213.75px;
    }
}

h4 {
    font-family: Noto Serif TC;
    font-size: 24px;
    font-weight: 700;
    line-height: 34px;
    letter-spacing: 0em;
    text-align: left;
    color: #543118;
}

p {
    font-family: Noto Serif TC;
    font-size: 16px;
    font-weight: 500;
    line-height: 23px;
    letter-spacing: 0em;
    text-align: left;
    max-width: 350px;
}

.more {
    margin-top: -4px;
    color: #CEB96E;
}

.custom_select {
    display: flex;
    width: 155px;
    height: 30px;
    padding: 0px 10px;
    justify-content: space-between;
    align-items: center;
    flex-shrink: 0;
    background: #EEE;
    color: #333333;
}

.custom_input {
    color: #000000;
    width: 200px;
    height: 30px;
    flex-shrink: 0;
    background: #EEE;
}

.icon {
    width: 30px;
    background-image: url('../assets/index/search.svg');
}

.icon:hover {
    background-image: url('../assets/index/search2.svg');
}

@media (max-width: 1024px) {
    .input_area {
        margin-left: -16px;
        margin-top: 10px;
        width: 320px;
    }

    .custom_input {
        width: 287px;
    }
}

.custom_input {
    padding-left: 5px;
    padding-right: 5px;
}</style>