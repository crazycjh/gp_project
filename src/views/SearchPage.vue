<template>
    <loading :active="isLoading" :is-full-page="fullPage"></loading>
    <TopCover
        :image="`${backend}wp-content/uploads/2023/09/search_banner.jpg`"
        title="搜尋結果"
    />
    <Breadcrumb title="首頁/搜尋結果" />
    <div class="mx-auto max-w-1200px">
        <div>
            <Title title="全台廟宇搜尋" />
            <div class="flex justify-center gap-10px mb-12px">
                <button
                    class="tag"
                    :class="{ active: activeTag === 'city' }"
                    @click="tagToogle('city')"
                >
                    找縣市主神
                </button>
                <button
                    class="tag"
                    :class="{ active: activeTag === 'name' }"
                    @click="tagToogle('name')"
                >
                    搜廟宇名稱
                </button>
            </div>
            <div class="px-10px">
                <div class="search_wrapper flex justify-center items-center">
                    <div v-show="search1" class="flex w-full">
                        <div class="flex w-full mr-20px">
                            <h4 class="tag_name">縣市</h4>
                            <div class="relative w-full">
                                <select
                                    v-model="s1Value"
                                    class="appearance-none bg-transparent border border-transparent text-gray-700 custom_select"
                                >
                                    <option value="" selected>全台縣市</option>
                                    <option v-for="item in cities" :key="item">
                                        {{ item }}
                                    </option>
                                </select>
                                <img
                                    class="absolute right-0 top-0 mt-2 mr-4 pointer-events-none"
                                    src="../assets/index/arrow_down.svg"
                                    alt=""
                                />
                            </div>
                        </div>
                        <div class="flex w-full">
                            <h4 class="tag_name">主神</h4>
                            <div class="relative w-full">
                                <select
                                    v-model="s2Value"
                                    class="appearance-none bg-transparent border border-transparent text-gray-700 custom_select mr-2"
                                >
                                    <option value="" selected>主神</option>
                                    <option
                                        v-for="item in godsStore.originGodArray"
                                        :key="item"
                                    >
                                        {{ item }}
                                    </option>
                                </select>
                                <img
                                    class="absolute right-0 top-0 mt-2 mr-4 pointer-events-none"
                                    src="../assets/index/arrow_down.svg"
                                    alt=""
                                />
                            </div>
                        </div>
                        <div
                            class="icon w-full"
                            alt=""
                            @click="goSearch()"
                        ></div>
                    </div>
                    <div
                        v-show="search2"
                        class="flex input_area w-full justify-center"
                    >
                        <h4 class="tag_name">搜尋</h4>
                        <input
                            v-model="s3Value"
                            placeholder="請輸入關鍵字..."
                            class="custom_input mr-2"
                            type="text"
                            @keyup.enter="enterSearch"
                        />
                        <div class="icon" alt="" @click="goSearch()"></div>
                    </div>
                </div>
            </div>
        </div>
        <div class="px-10px">
            <div class="search_list">
                <h5 class="search_text">條件:</h5>
                <div class="flex justify-between">
                    <div class="flex gap-20px">
                        <span class="search_text" v-if="s1Value"
                            >{{ s1Value }}
                            <img
                                class="clear"
                                src="../assets/index/clear_icon.svg"
                                alt=""
                                @click="s1Value = ''"
                        /></span>
                        <span class="search_text" v-if="s2Value"
                            >{{ s2Value }}
                            <img
                                class="clear"
                                src="../assets/index/clear_icon.svg"
                                alt=""
                                @click="s2Value = ''"
                        /></span>
                        <span class="search_text" v-if="s3Value"
                            >{{ s3Value }}
                            <img
                                class="clear"
                                src="../assets/index/clear_icon.svg"
                                alt=""
                                @click="s3Value = ''"
                        /></span>
                    </div>
                    <button class="reset_btn" @click="resetSearch">
                        重設條件
                    </button>
                </div>
            </div>
        </div>

        <div
            class="w-full flex gap-30px flex-wrap mt-40px max-xl:justify-center"
        >
            <div
                v-for="item in temples"
                :key="item.id"
                class="w-full flex flex-col gap-10px block max-lg:px-10px"
            >
                <router-link
                    class="flex flex-col gap-10px"
                    :to="`/temple/${item.id}`"
                >
                    <img class="photo" :src="item.image_url" alt="" />
                    <h4>{{ item.name }}</h4>
                    <p>主神：{{ item.main_god }}</p>
                    <p>地址：{{ item.location }}{{ item.address }}</p>
                    <p class="more">了解更多</p>
                </router-link>
            </div>
        </div>
        <div
            class="flex justify-center"
            v-if="temples.length === 0 && isLoading === false"
        >
            <h4>查無廟宇，請重新輸入篩選條件!</h4>
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
import { onMounted, ref, watch, computed } from "vue";
import { useRoute, useRouter } from "vue-router";
import axios from "axios";
import Loading from "vue-loading-overlay";
import "vue-loading-overlay/dist/css/index.css";
const route = useRoute();

//自製元件
import Breadcrumb from "@/components/widget/Breadcrumb.vue";
import TopCover from "@/components/widget/TopCover.vue";
import Pagination from "@/components/widget/Pagination.vue";
import Title from "../components/widget/Title.vue";
const backend = import.meta.env.VITE_BACKEND_PATH;

//pinia
import { useGods } from "@/store/gods.js";
const godsStore = useGods();

//初始化參數
const searchText = ref();
const s1Value = ref("");
const s2Value = ref("");
const s3Value = ref("");
const godArray = ref([]);

//地區主神 關鍵字
const search1 = ref(true);
const search2 = ref(false);
const activeTag = ref("city");
const cities = ref([
    "台北市",
    "新北市",
    "桃園市",
    "台中市",
    "台南市",
    "高雄市",
    "基隆市",
    "新竹市",
    "嘉義市",
    "新竹縣",
    "苗栗縣",
    "彰化縣",
    "南投縣",
    "雲林縣",
    "嘉義縣",
    "屏東縣",
    "宜蘭縣",
    "花蓮縣",
    "台東縣",
    "金門縣",
    "澎湖縣",
    "連江縣",
]);

//控制標籤
const tagToogle = (target) => {
    search1.value = target === "city";
    search2.value = target === "name";
    activeTag.value = target;
};

//取得搜尋資料
onMounted(() => {
    searchText.value = route.params.content;
    const urlParams = new URLSearchParams(searchText.value);
    s1Value.value = urlParams.get("s1");
    s2Value.value = urlParams.get("s2");
    s3Value.value = urlParams.get("s3");
});

//取資料
const temples = ref([]);
const total = ref();
const isLoading = ref(false);
const fullPage = ref(true);
onMounted(async () => {
    fetchData();
});
const fetchData = async () => {
    isLoading.value = true;
    try {
        const params = {
            limit: itemsPerPage.value,
            page: currentPage.value,
            city: s1Value.value,
            god: s2Value.value,
            text: s3Value.value,
        };
        const response = await axios.get(
            `${import.meta.env.VITE_BACKEND_PATH}api/gc/temple/search`,
            {
                params: params,
            }
        );
        temples.value = response.data.data;
        total.value = response.data.total;
        console.log(response.data);
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

//監聽觸發
watch(currentPage, (newValue) => newValue && fetchData());
watch(s1Value, (newValue) => newValue !== undefined && fetchData());
watch(s2Value, (newValue) => newValue !== undefined && fetchData());
watch(s3Value, (newValue) => newValue !== undefined && fetchData());

//跳頁
const router = useRouter();
const goSearch = () => {
    router.push(
        `/search/s1=${s1Value.value}&s2=${s2Value.value}&s3=${s3Value.value}`
    );
    fetchData();
};

//清空搜尋條件
const resetSearch = () => {
    s1Value.value = "";
    s2Value.value = "";
    s3Value.value = "";
};

//enter觸發
const enterSearch = () => {
    if (s1Value.value !== "" || s2Value.value !== "" || s3Value.value !== "") {
        goSearch();
    }
};
</script>

<style scoped>
.clear {
    width: 10px;
    height: 10px;
}

.reset_btn {
    width: 93px;
    height: 30px;
    font-family: Noto Serif TC;
    font-size: 16px;
    font-weight: 700;
    line-height: 23px;
    letter-spacing: 0.1em;
    text-align: center;
    background-color: #ffffff;
    color: #333333;
    border-radius: 0;
    border: none;
    outline: none;
}

.search_list {
    padding: 8px 16px;
    height: 80px;
    max-width: 670px;
    margin: 0 auto;
    background-color: #f1f1f1;
}

.search_text {
    color: #000000;
    font-family: Noto Serif TC;
    font-size: 16px;
    font-weight: 700;
    line-height: 23px;
    letter-spacing: 0.1em;
    text-align: left;
    display: flex;
    align-items: center;
    gap: 3px;
}

.tag_name {
    font-family: Noto Serif TC;
    font-size: 16px;
    font-weight: 700;
    line-height: 23px;
    letter-spacing: 0.1em;
    text-align: left;
    color: #000000;
    display: flex;
    align-items: center;
    margin-right: 12px;
    min-width: 36px;
}

@media (max-width: 768px) {
    .tag_name {
        margin-right: 0;
    }
}

.search_wrapper {
    height: 60px;
    max-width: 670px;
    margin: 0 auto;
    background-color: #ffffff;
    box-shadow: 4px 4px 10px 0px #00000040;
    display: flex;
    align-items: center;
    padding-left: 12px;
    padding-right: 12px;
    margin-bottom: 25px;
}

.tag {
    width: 111px;
    height: 30px;
    top: 77px;
    left: 220px;
    background-color: #aaaaaa;
    color: white;
    border-radius: 0;
    border: none;
    outline: none;
}

.tag.active {
    background-color: #ceb96e;
}

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

@media (min-width: 800px) {
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
    color: #ceb96e;
}

.custom_select {
    display: flex;
    width: 100%;
    height: 30px;
    padding: 0px 10px;
    justify-content: space-between;
    align-items: center;
    flex-shrink: 0;
    background: #eee;
    color: #333333;
}

.custom_input {
    color: #000000;
    width: 85%;
    height: 30px;
    flex-shrink: 0;
    background: #eee;
}

.icon {
    margin-left: 10px;
    background-repeat: no-repeat;
    width: 68px;
    height: 30px;
    background-image: url("../assets/index/search4.svg");
}

.icon:hover {
    background-image: url("../assets/index/search2.svg");
}

@media (max-width: 1024px) {
    .custom_input {
        width: 80%;
    }
}

.custom_input {
    padding-left: 5px;
    padding-right: 5px;
}
</style>
