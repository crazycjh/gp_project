<template>
    <loading :active="isLoading" :is-full-page="fullPage" ></loading>
   <div v-if="temple.live_iframe" class="banner" :style="{
    'background-image': temple.cover ? `url(${temple.cover})` : `url(${backend}wp-content/uploads/2023/09/temple_bannner_bg55.jpg)`,
    'background-position': 'center center',
    }">
        <div class="temple-banner container relative">
            <div v-if="temple.live_iframe">
                <div class="flex flex-col items-center mb-5">
                    <img class="wind" src="../../assets/widget/wind.svg" alt="">
                    <h3>{{temple.name}}</h3>
                </div>
            </div>
            <div v-if="temple.live_iframe" class="video-wrapper z-10 " v-html="temple.live_iframe">
            </div>
        </div>
    </div>
    <div v-if="!temple.live_iframe" class="banner" :style="{
    'background-image': temple.cover ? `url(${temple.cover})` : `url(${backend}wp-content/uploads/2023/09/temple_post_banner32-01.jpg)`,
    'background-position': 'center center',
    }">
        <div class="temple-banner container relative">
            <div v-if="temple.live_iframe">
                <div class="flex flex-col items-center mb-5">
                    <img class="wind" src="../../assets/widget/wind.svg" alt="">
                    <h3>廟宇直播</h3>
                </div>
            </div>
            <div v-if="temple.live_iframe" class="video-wrapper z-10 " v-html="temple.live_iframe">
            </div>
        </div>
    </div>
    <Breadcrumb v-if="temple.name" :title="`首頁/${temple.name}`" />
    <div class="px-10px mx-auto max-w-1200px mt-40px mb-50px md:mb-100px">
        <div class="mt-50px py-1">
            <h4 class="border_title custom_border">廟宇介紹</h4>
        </div>
        <div class="">
            <div class="flex flex-col lg:flex-row items-center pt-30px">
                <div class="w-full">
                    <img class="w-full" :src="`${temple.image_url}`" alt="">
                </div>
                <div class="flex flex-col ml-20px w-full">
                    <h4 class="title mt-20px mb-20px">{{ temple.name }}</h4>
                    <div v-if="main_god" class="flex mb-10px">
                        <img class="icon mr-10px" :src="`${backend}wp-content/uploads/2023/08/incense_burner_icon.svg`"
                            alt="">
                        <p>{{ main_god }}</p>
                    </div>
                    <div v-if="temple.address && temple.location" class="flex mb-10px">
                        <img class="icon mr-10px" :src="`${backend}wp-content/uploads/2023/08/map_icon.svg`" alt="">
                        <p>{{ temple.location }}{{ temple.address }}</p>
                    </div>
                    <div v-if="temple.phone" class="flex mb-20px">
                        <img class="icon mr-10px" :src="`${backend}wp-content/uploads/2023/08/phone_icon.svg`" alt="">
                        <p>{{ temple.phone }}</p>
                    </div>
                    <div>
                        <p class="max-w-570px">{{ temple.info }}</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="mt-50px py-1px">
            <h4 class="border_title custom_border">廟宇服務</h4>
        </div>
        <div v-if="temple.light_content && light.length !== 0" class="py-20px service_border">
            <h6 class="service mb-10px px-10px">|點燈|</h6>
            <div class="flex max-md:flex-col flex-row justify-between mb-25px px-10px">
                <p class="md:w-60%">{{ temple.light_content }}</p>
                <router-link to="/service">
                    <button class="btn btn6">
                        廟宇服務介紹
                    </button>
                </router-link>
           
            </div>
            <div class="flex flex-wrap gap-10px  max-md:justify-between">
                <div v-for="item in light" :key="item.id" class="flex flex-col lg:w-15% md:w-18% max-md:w-45% ">
                    <img class="light" :src="item.image_url" alt="" @click="shopping(item.id)">
                    <h5 class="service_active">{{ item.name }}</h5>
                    <span class="service_price">NT.{{ item.price }}</span>
                </div>
            </div>
        </div>
        <div v-if="temple.shuwen_content && shuwen.length !== 0" class="py-20px service_border">
            <h6 class="service mb-2 px-10px">|疏文|</h6>
            <div class="flex max-md:flex-col flex-row justify-between mb-25px px-10px">
                <p class="md:w-60%">{{ temple.shuwen_content }}</p>
                <button class="btn btn6">
                    廟宇服務介紹
                </button>
            </div>
            <div class="flex flex-wrap gap-10px max-md:justify-between">
                <div v-for="item in shuwen" :key="item.id" class="flex flex-col lg:w-15% md:w-18% max-md:w-45%">
                    <img class="light" :src="item.image_url" alt="">
                    <h5 class="service_active">{{ item.name }}</h5>
                    <span class="service_price">NT.{{ item.price }}</span>
                </div>
            </div>
        </div>
    </div>
    <div v-if="temple.todo_title && temple.todo_content && temple.todo_image">
        <div class="cover"></div>
        <div class="relative todo_section">
            <div class="todo max-w-1200px mx-auto px-10px reative z-10">
                <h4 class="todo_title">代辦項目</h4>
                <div class="todo_container">
                    <img class="todo_img" :src="temple.todo_image">
                    <div class="mb-30px">
                        <h5 class="event_title">{{ temple.todo_title }}</h5>
                        <p>{{ temple.todo_content }}</p>
                    </div>
                    <div class="flex max-md:flex-col flex-wrap">
                        <div v-for="item in todo" :key="item.id" class="flex w-100% md:w-50% mb-30px">
                            <img class="todo_product" :src="item.image_url" @click="goTodo(item.id)">
                            <div class="flex flex-col justify-center">
                                <h5 class="service_active">{{ item.name }}</h5>
                                <span class="service_price">NT.{{ item.price }}</span>
                                <span>{{ item.content }}</span>
                            </div>
                        </div>    
                    </div>
                </div>
            </div>
            <img class="tree_right hidden xl:block" src="../../assets/index/tree_right.svg" alt="">
            <img class="tree_left hidden xl:block" src="../../assets/index/tree_left.svg" alt="">    
        </div>
    </div>
  
</template>
<script setup >
//官方套件
import { onMounted, ref, computed } from "vue";
import { useRoute,useRouter } from 'vue-router';
import axios from "axios";
import Loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/css/index.css';
import { useModal } from 'vue-final-modal'

//自製元件
const backend = import.meta.env.VITE_BACKEND_PATH
import Breadcrumb from '../../components/widget/Breadcrumb.vue';
import Title from "../../components/widget/Title.vue";
import TopCover from '../../components/widget/TopCover.vue';
import { useAuth } from '@/store/auth.js'
import LoginModal from '@/components/modals/LoginModal.vue';


//初始化資料
const templeID = ref();
const main_god = ref();
const temple = ref([]);
const light = ref([]);
const shuwen = ref([]);
const todo = ref([])

//取id
onMounted(() => {
    scroll(0,0)
    const route = useRoute();
    templeID.value = Number(route.params.templeID);
});

const auth = useAuth();
const router = useRouter(); 
const { open, close } = useModal({
  component: LoginModal,
  attrs: {
    onConfirm() {
        close()
    },
  },
})
//跳轉點燈內頁
const shopping = (id) =>{
    if(auth.isLogin){
        router.push(`/product/light/${id}`)
    }else{
        open()
    }
}

const goTodo = (id) =>{
    if(auth.isLogin){
        router.push(`/product/todo/${id}`)
    }else{
        open()
    }
}

//取個別資料
const isLoading = ref(false);
const fullPage = ref(true);
onMounted(async () => {
    isLoading.value = true;
    try {
        const response = await axios.get(
            `${backend}/api/gc/temple/${templeID.value}`
        );
        temple.value = response.data.data;
        light.value = response.data.light;
        shuwen.value = response.data.shuwen;
        todo.value = response.data.todo;
        main_god.value = temple.value.main_god.split(',').join('、')
    } catch (error) {
        console.error("API 請求失敗:", error);
    } finally {
        isLoading.value = false; 
    }
});
</script>

<style scoped>
.tree_right{
    position:absolute;
    top:400px;
    right:0;
}
.tree_left{
    position:absolute;
    top:600px;
    left:0;
}
.todo_section{
    margin-bottom:60px;
}
.todo_product{
    cursor:pointer;
    width:145px;
    height:145px;
}
.event_title{
    letter-spacing:3px;
    line-height: 1.5em;
    font-size:28px;
    font-weight:700;
}
.todo_container{
    border:1px solid #CEB96E;
    padding:20px;
    background-color:#ffffff;
}
.todo_img{
    width:100%;
    height:650px;
    object-fit:cover;
    margin-bottom:30px;
}
@media (width < 1024px){
    .todo_img{
        height:auto;
    }
}
.todo{
    position:relative;
   /* top:-360px; */
   margin-top:-360px;
}
.todo_title{
    font-weight:700;
    font-size:24px;
    color:#ffffff;
    padding-bottom:20px;
    border-bottom:1px solid #CEB96E;
    margin-bottom:20px;
}
.cover{
    width:100%;
    height:452px;
    background-color:#920000;
    position:relative;
}
.service_border{
    border-bottom: 1px solid #EEEEEE;
}
.banner {
    min-height: 500px;
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

    /* .banner {
   background-image: url('https://demo2.gcreate.com.tw/gc_godpray/wp-content/uploads/2023/09/temple_post_banner1.jpg');
} */
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
    width:200px;
    position: relative;
    border: none;
    border-bottom: 1px solid #CEB96E;
    color: #CEB96E;
    font-size: 16px;
    letter-spacing: 2.4px;
    padding: 10px 50px 10px 20px;
    background: #ffffff00;
    border-radius: 0px !important;
}

.btn6::before {
    content: "";
    display: block;
    width: 30px;
    height: 1px;
    background: #CEB96E;
    rotate: 40deg;
    position: absolute;
    right: -3px;
    bottom: 9px;
}

.btn6 {
    text-decoration: none;
    color: black;
}

.btn6:hover  {
    color: #CEB96E;
}

.btn6:hover {
    padding: 10px 40px 10px 30px;
}

.custom_bottom {
    border-bottom: 1px solid #EEEEEE;
}

.service_active {
    color: #CEB96E;
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
    border-bottom: 1px solid #CEB96E;
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

@media(min-width:1024px) {
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
    padding: 20px 0 80px 0;
}

@media(max-width:768px) {
    .temple-banner.container {
        padding: 20px 30px 70px 30px;
    }
}</style>