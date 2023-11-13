<template>
    <loading :active="isLoading" :is-full-page="fullPage"></loading>
    <TopCover
        :image="`${backend}wp-content/uploads/2023/10/list_banner.jpg`"
        title="代辦項目"
    />
    <Breadcrumb title="首頁/代辦項目" />
    <div class="mx-auto max-w-1200px">
        <div
            class="w-full flex flex-col md:flex-row gap-20px flex-wrap mt-40px"
        >
            <div
                v-for="item in posts"
                :key="item.post_id"
                class="w-full flex flex-col w-full lg:w-48% max-lg:px-10px mt-40px"
            >
                <router-link
                    class="flex flex-col w-full"
                    :to="`/todo/${item.post_id}`"
                >
                    <img class="photo mb-10px" :src="item.image" alt="" />
                    <p class="title mb-10px">{{ item.title }}</p>
                    <p class="mb-10px date">{{ item.start }}~{{ item.end }}</p>
                    <p class="mb-10px ellipsis">
                        {{ truncateText(item.content) }}
                    </p>
                    <p class="more">了解更多...</p>
                </router-link>
            </div>
        </div>
        <div class="flex justify-center my-30px lg:my-50px">
            <Pagination
                :total-pages="totalPages"
                :current-page="currentPage"
                @page-changed="changePage"
            />
        </div>
    </div>
</template>
<script setup>
//官方套件
import { onMounted, ref, computed, watch } from "vue";
import { useRoute, useRouter } from "vue-router";
import axios from "axios";
import Loading from "vue-loading-overlay";
import "vue-loading-overlay/dist/css/index.css";

//自製元件
const backend = import.meta.env.VITE_BACKEND_PATH;
import Breadcrumb from "@/components/widget/Breadcrumb.vue";
import TopCover from "@/components/widget/TopCover.vue";
import Pagination from "@/components/widget/Pagination.vue";

//資料初始化
const posts = ref([]);
const total = ref();

//取資料和種類
onMounted(async () => {
    fetchData();
});

//根據種類取資料
const currentPage = ref(1);
const itemsPerPage = ref(8);
const isLoading = ref(false);
const fullPage = ref(true);
const fetchData = async (type) => {
    isLoading.value = true;
    const params = {
        limit: itemsPerPage.value,
        page: currentPage.value,
    };
    try {
        const response = await axios.get(`${backend}api/gc/todo/list`, {
            params: params,
        });
        posts.value = response.data.data;
        total.value = response.data.count;
        console.log(posts.value);
    } catch (error) {
        console.error("API 請求失敗:", error);
    } finally {
        isLoading.value = false;
    }
};

const truncateText = (text) => {
    const maxLength = 33;
    return text.length > maxLength ? text.slice(0, maxLength) + "..." : text;
};

//分頁系統

const changePage = (page) => {
    currentPage.value = page;
};
const totalPages = computed(() => {
    return Math.ceil(total.value / itemsPerPage.value);
});

//監聽頁數
watch(currentPage, (newValue) => newValue && fetchData());
</script>

<style scoped>
/* .ellipsis {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
} */
.date {
    color: #ceb96e;
}
.active {
    background-color: #ceb96e !important;
    color: #ffffff !important;
    border: none;
}
.title {
    font-family: Noto Serif TC;
    font-size: 24px;
    font-weight: 700;
    line-height: 1.5;
    letter-spacing: 0.2em;
    text-align: left;
    color: #543118;
}
.btn {
    width: 132px;
    height: 50px;
    padding: 10px 20px 10px 20px;
    background-color: #eeeeee;
    color: #777777;
    border: none;
}
.btn:hover {
    background-color: #ceb96e;
    color: #ffffff;
    border: none;
}
.photo {
    width: 100%;
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
    font-size: 20px;
    font-weight: 500;
    line-height: 29px;
    letter-spacing: 0em;
    text-align: left;
}
.more {
    margin-top: -4px;
    color: #ceb96e;
    font-size: 16px;
}
.btn:focus {
    outline: none;
}
</style>
