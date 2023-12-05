<template>
    <loading :active="isLoading"></loading>
    <Breadcrumb v-if="todo" :title="`首頁/${todo.data.title}`" />
    <div v-if="todo">
        <div class="relative todo_section">
            <div class="todo max-w-1200px mx-auto px-10px reative z-10">
                <h4 class="todo_title">代辦項目</h4>
                <div class="todo_container">
                    <div>
                        <img class="todo_img" :src="todo.data.thumbnail" />
                    </div>
                    <div class="mb-30px">
                        <h5 class="event_title">{{ todo.data.title }}</h5>
                        <p>{{ todo.data.content }}</p>
                    </div>
                    <div class="flex flex-wrap max-md:items-center">
                        <div
                            v-for="item in todo.products"
                            :key="item.id"
                            class="flex w-100% md:w-50% mb-30px max-md:gap-10px"
                        >
                            <img
                                class="todo_product"
                                :src="item.thumbnail"
                                @click="goTodo(item.id)"
                            />
                            <div class="flex flex-col justify-center ml-20px max-sm:ml-0px">
                                <h5 class="service_active">
                                    {{ item.name }}
                                </h5>
                                <span class="service_price"
                                    >NT.{{ item.price }}</span
                                >
                                <span class="mr-10px lg:mr-50px ssm:mr-20px">{{
                                    truncateText(item.excerpt)
                                }}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <img
                class="tree_right hidden xl:block"
                src="../../assets/index/tree_right.svg"
                alt=""
            />
            <img
                class="tree_left hidden xl:block"
                src="../../assets/index/tree_left.svg"
                alt=""
            />
        </div>
    </div>
</template>
<script setup>
//官方套件
import { onMounted, ref, computed } from "vue";
import { useRoute, useRouter } from "vue-router";
import axios from "axios";
import Loading from "vue-loading-overlay";
import "vue-loading-overlay/dist/css/index.css";
import { useModal } from "vue-final-modal";

//自製元件
import Breadcrumb from "@/components/widget/Breadcrumb.vue";
const backend = import.meta.env.VITE_BACKEND_PATH;
import { useAuth } from "@/store/auth.js";
import LoginModal from "@/components/modals/LoginModal.vue";
import AlertModal from "@/components/modals/AlertModal.vue";

//取id
const postID = ref();
onMounted(() => {
    scroll(0, 0);
    const route = useRoute();
    postID.value = Number(route.params.postID);
});

//取個別資料
const todo = ref();
const start = ref();
const end = ref();
const isLoading = ref(false);
const fullPage = ref(true);
onMounted(async () => {
    isLoading.value = true;
    try {
        const response = await axios.get(
            `${backend}api/gc/todo/${postID.value}`
        );
        todo.value = response.data;
        start.value = new Date(response.data.data.start).getTime();
        end.value = new Date(response.data.data.end).getTime();
    } catch (error) {
        console.error("API 請求失敗:", error);
    } finally {
        isLoading.value = false;
    }
});

const truncateText = (text) => {
    const maxLength = 25;
    return text.length > maxLength ? text.slice(0, maxLength) + "..." : text;
};

const auth = useAuth();
const router = useRouter();
const { open, close } = useModal({
    component: LoginModal,
    attrs: {
        onConfirm() {
            close();
        },
    },
});

const alert = useModal({
    component: AlertModal,
    attrs: {
        isAlert: true,
        content: "非無活動期間無法購買",
        onConfirm() {
            alert.close();
        },
    },
});

//判斷是否為活動期間內
const isWithinTimeRange = (startTime, endTime) => {
    const currentTime = new Date().getTime();
    return currentTime > startTime && currentTime < endTime;
};

//判斷活動期間內及登入與否繼續後續行為
const goTodo = (id) => {
    if (!isWithinTimeRange(start.value, end.value)) {
        alert.open();
        return;
    }

    if (auth.isLogin) {
        router.push(`/product/todo/${id}`);
    } else {
        open();
    }
};
</script>
<style scoped>
.roof {
    z-index: 20;
}
.video-wrapper {
    margin-top: -10px;
}
.top_bottom {
    height: 100%;
    z-index: 5;
    position: absolute;
    bottom: -435px;
    width: 100%;
}

@media (max-width: 1280px) {
    .top_bottom {
        bottom: -200px;
    }
}
.custom_banner {
    width: 1366px;
    height: 247px;
}
.temple_name {
    font-size: 24px;
    position: absolute;
    bottom: 50px;
    color: #ffffff;
}
@media (max-width: 1280px) {
    .temple_name {
        bottom: 40px;
    }
}

@media (max-width: 1024px) {
    .temple_name {
        bottom: 30px;
    }
}
@media (max-width: 768px) {
    .temple_name {
        bottom: 20px;
    }
}
@media (max-width: 576px) {
    .temple_name {
        font-size: 20px;
        bottom: 10px;
    }
}
@media (max-width: 430px) {
    .temple_name {
        font-size: 18px;
        bottom: 5px;
    }
}
@media (max-width: 1366px) {
    .custom_banner {
        width: 100%;
        height: auto;
    }
}
.tree_right {
    position: absolute;
    top: 300px;
    right: 0;
}
.tree_left {
    position: absolute;
    top: 600px;
    left: 0;
}
.todo_section {
    margin-bottom: 60px;
}
.todo_product {
    cursor: pointer;
    width: 145px;
    height: 145px;
}
.event_title {
    letter-spacing: 3px;
    line-height: 1.5em;
    font-size: 28px;
    font-weight: 700;
}
.todo_container {
    border: 1px solid #ceb96e;
    padding: 20px;
    background-color: #ffffff;
}
@media (max-width: 1024px) {
    .todo_container {
        padding: 10px;
    }
}

.todo_img {
    width: 100%;
    height: 650px;
    object-fit: cover;
    margin-bottom: 30px;
}
@media (max-width: 1024px) {
    .todo_img {
        height: auto;
    }
}
.todo {
    position: relative;
    /* top:-360px; */
}
.todo_title {
    font-weight: 700;
    font-size: 24px;
    color: #ffffff;
    margin-bottom: 60px;
}
@media (max-width: 1024px) {
    .todo_title {
        margin-bottom: 20px;
    }
}
.cover {
    width: 100%;
    height: 452px;
    background-color: #920000;
    position: relative;
}
.service_border {
    border-bottom: 1px solid #eeeeee;
}
.banner {
    width: 100%;
    min-height: 600px;
    display: flex;
    margin: 0;
    padding: 0;
    /* background-image: url('https://demo2.gcreate.com.tw/gc_godpray/wp-content/uploads/2023/09/temple_post_banner1.jpg'); */
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
}

.temple-banner.container {
    max-width: 1200px;
    margin: 0 auto;
    width: 100%;
    justify-content: center;
    padding: 60px 0 150px 0;
}
h2 {
    font-size: 24px;
    text-align: center;
}

@media screen and (max-width: 768px) {
    .banner {
        min-height: 260px;
        background-image: url("https://demo2.gcreate.com.tw/gc_godpray/wp-content/uploads/2023/09/temple_post_banner1.jpg");
    }
    .temple-banner.container {
        padding: 30px;
    }
}

p,
h3,
h4,
h5,
h6 {
    color: #000000;
}

.btn6 {
    max-height: 50px;
    width: 200px;
    position: relative;
    border: none;
    border-bottom: 1px solid #ceb96e;
    color: #ceb96e;
    font-size: 16px;
    letter-spacing: 2.4px;
    padding: 10px 50px 10px 20px;
    background: #ffffff00;
    border-radius: 0px !important;
    outline: none;
}

.btn6::before {
    content: "";
    display: block;
    width: 30px;
    height: 1px;
    background: #ceb96e;
    rotate: 40deg;
    position: absolute;
    right: -3px;
    bottom: 9px;
}

.btn6 {
    text-decoration: none;
    color: black;
}

.btn6:hover {
    color: #ceb96e;
}

.btn6:hover {
    padding: 10px 40px 10px 30px;
}

.custom_bottom {
    border-bottom: 1px solid #eeeeee;
}

.service_active {
    color: #ceb96e;
}

.service_price {
    color: #920000;
}

.light {
    cursor: pointer;
    object-fit: cover;
    margin-bottom: 10px;
    /* width: 191px;
    height: 191px; */
}

.service {
    font-family: Noto Serif TC;
    font-size: 20px;
    font-weight: 700;
    line-height: 29px;
    letter-spacing: 0.1em;
    text-align: left;
    color: #920000;
}

.custom_border {
    padding-bottom: 10px;
    border-bottom: 1px solid #ceb96e;
}

.inner_title {
    font-family: Noto Serif TC;
    font-size: 28px;
    font-weight: 700;
    line-height: 40px;
    letter-spacing: 0.1em;
    text-align: left;
    color: #333333;
    margin-bottom: 16px;
}

.border_title {
    font-family: Noto Serif TC;
    font-size: 24px;
    font-weight: 700;
    line-height: 34px;
    letter-spacing: 0.1em;
    text-align: left;
    color: #333333;
}

.icon {
    width: 20px;
    height: 20px;
}

.title {
    font-family: Noto Serif TC;
    font-size: 36px;
    font-weight: 700;
    line-height: 52px;
    letter-spacing: 0.2em;
    text-align: left;
    color: #543118;
}

@media (min-width: 1024px) {
    .temple1 {
        width: 600px;
        height: 337px;
    }
}

.temple1 {
    width: 410px;
    height: 230px;
}

h3 {
    color: #000000;
    font-family: Noto Serif TC;
    font-size: 24px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    letter-spacing: 4.8px;
}

.temple-bannner .wind {
    margin-top: 0;
}

.temple-banner.container {
    padding: 0 30px 80px 30px;
}

@media (max-width: 768px) {
    .temple-banner.container {
        padding: 0 30px 70px 30px;
    }
}
</style>
