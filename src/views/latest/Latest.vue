<template>
    <loading :active="isLoading" :is-full-page="fullPage"></loading>
    <TopCover
        :image="`${backend}wp-content/uploads/2023/09/blog_banner2.jpg`"
        title="最新活動"
    />
    <Breadcrumb title="首頁/最新活動" />
    <div
        class="tags flex justify-center max-md:px-20px gap-10px my-50px flex-wrap"
    >
        <div
            class="flex gap-10px max-md:gap-20px max-md:max-w-570px max-w-1200px flex-wrap justify-center"
        >
            <button
                class="btn rounded-none"
                :class="{ active: currentActive === 'all' }"
                @click="router.push('all')"
            >
                全部
            </button>
            <button
                v-for="item in latest.types"
                :key="item.term_id"
                class="btn rounded-none"
                :class="{ active: currentActive === item.slug }"
                @click="router.push(`${item.slug}`)"
            >
                {{ item.name }}
            </button>
        </div>
    </div>
    <div class="mx-auto max-w-1200px">
        <div
            class="w-full flex gap-20px flex-wrap mt-40px max-xl:justify-center"
        >
            <div
                v-for="item in posts"
                :key="item.id"
                class="w-full flex flex-col sm:w-45% lg:w-full gap-10px block max-lg:px-10px mt-40px"
            >
                <router-link
                    class="flex flex-col gap-10px"
                    :to="`/latest/inner/${item.id}`"
                >
                    <img class="photo" :src="item.image" alt="" />
                    <p>{{ item.title }}</p>
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

//pinia
import { uselatest } from "@/store/latest.js";
const latest = uselatest();

//資料初始化
const posts = ref([]);
const total = ref();
const type = ref([]);
const currentActive = ref();
const route = useRoute();
const router = useRouter();

//取id
onMounted(() => {
    currentActive.value = route.params.type;
});

//取資料和種類
onMounted(async () => {
    fetchData(currentActive.value);
});

//根據種類取資料
const isLoading = ref(false);
const fullPage = ref(true);
const fetchData = async (type) => {
    if (type !== currentActive.value) {
        //切換類別回第一頁
        currentPage.value = 1;
    }
    //換類別頁
    router.push(`${type}`);
    //   currentActive.value = type;
    const params = {
        limit: itemsPerPage.value,
        page: currentPage.value,
    };
    let apiUrl = `${backend}api/gc/latest`;

    if (type !== "all") {
        apiUrl += `?latest_type=${type}`;
    }
    isLoading.value = true;
    try {
        const response = await axios.get(apiUrl, {
            params: params,
        });
        posts.value = response.data.latest;
        total.value = response.data.total;
    } catch (error) {
        console.error("API 請求失敗:", error);
    } finally {
        isLoading.value = false;
    }
};

//分頁系統
const currentPage = ref(1);
const itemsPerPage = ref(12);
const changePage = (page) => {
    currentPage.value = page;
};
const totalPages = computed(() => {
    return Math.ceil(total.value / itemsPerPage.value);
});

//監聽頁數
watch(currentPage, (newValue) => newValue && fetchData(currentActive.value));
</script>

<style scoped>
.active {
    background-color: #ceb96e !important;
    color: #ffffff !important;
    border: none;
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
@media (min-width: 1024px) {
    .block {
        width: 280px;
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
