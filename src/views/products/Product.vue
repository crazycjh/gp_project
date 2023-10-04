<template>
    <loading :active="isLoading" :is-full-page="fullPage" @cancel="onCancel"></loading>
    <div class="max-w-1200px mx-auto max-xl:px-10px w-full">
        <div class="mt-50px mb-30px flex flex-col md:flex-row max-md:items-center justify-between max-md:gap-20px">
            <span>首頁/文創商品</span>
            <div class="flex items-center result">
                <span class="whitespace-nowrap">顯示所有 21 個結果</span>
                <div class="relative w-full">
                    <select class="appearance-none bg-transparent border border-transparent text-gray-700 custom_select ">
                        <option selected>預設選項</option>
                    </select>
                    <img class="absolute right-0 top-0 max-md:mr-2 mt-2 mr-4 pointer-events-none"
                        src="../../assets/index/arrow_down.svg" alt="">
                </div>
            </div>
            <div class="flex items-center gap-10px md:hidden">
                <img class="filter" src="../../assets/products/culture/filter_icon.svg" alt="">
                <span class="whitespace-nowrap" @click="isOpen = !isOpen">篩選</span>
            </div>
        </div>
        <div class="flex">
            <div class="left_tabs hidden md:block">
                <h4 class="type">商品分類</h4>
                <div class="mt-40px">
                    <div class="tab">
                        <span class="tag" :class="{active:activePage === 'all'}">全部</span>
                    </div>
                    <div v-for="item in types" :key="item.id">
                        <div class="flex justify-between tab">
                            <span class="tag" @click="activePage = item.slug" :class="{active:activePage === item.slug}">{{ item.name }}</span>
                            <img v-show="item.children.length > 0 && activePage !== item.slug" src="../../assets/products/culture/down_arrow_icon.svg" alt="">
                            <img v-show="item.children.length > 0 && activePage === item.slug" src="../../assets/products/culture/up_arrow_icon.svg" alt="">
                        </div>
                        <div v-show="item.children.length > 0 && activePage === item.slug" class="inner">
                            <div v-for="child in item.children" :key="child.id" class="child">
                                <span >{{ child.name }}</span>
                            </div>
                        </div>
                    </div>
                    <!-- <div>
                        <div class="flex justify-between tab">
                            <span>香品祭祀</span>
                            <img src="../../assets/products/culture/down_arrow_icon.svg" alt="">
                        </div>
                        <div class="inner">

                        </div>
                    </div>
                    <div>
                        <div class="flex justify-between tab">
                            <span>過爐開運</span>
                            <img src="../../assets/products/culture/down_arrow_icon.svg" alt="">
                        </div>
                        <div class="inner">
                            <span>開運吊飾</span>
                        </div>
                    </div> -->
                </div>
            </div>
            <div class="ml-30px mt-20px flex flex-wrap gap-10px w-full ">
                <div class="flex flex-col gap-5px mb-40px" v-for="item in products" :key="item.id">
                    <img class="photo" :src="item.image" alt="">
                    <span class="category">商品分類1</span>
                    <span class="name">{{ item.name }}</span>
                    <span class="price">NT${{ item.price }}</span>
                    <button class="cart_btn">加入購物車</button>
                </div>
            </div>
        </div>
    </div>
    <Transition name="slide-fade">
        <div class="mobileMenu" v-show="isOpen">
            <h4 class="type mt-50px ml-10px">商品分類</h4>
            <ul class="mobileUl">
                <li class="nav-item-mobile">
                    <router-link to="/allTemple/" class="nav-link-mobile" @click="isOpen = !isOpen">文創設計</router-link>
                </li>
                <li class="nav-item-mobile">
                    <router-link to="/mainGod/" class="nav-link-mobile" @click="isOpen = !isOpen">香品祭祀</router-link>
                </li>
                <li class="nav-item-mobile">
                    <router-link to="/latest/all" class="nav-link-mobile" @click="isOpen = !isOpen">過爐開運</router-link>
                    <div class="child"><router-link to="/latest/all" class="nav-link-mobile" @click="isOpen = !isOpen">開運吊飾</router-link></div>
                </li>
            </ul>
        </div>
    </Transition>
    <div class="mask" v-show="isOpen" @click="isOpen = !isOpen"></div>
    <img class="close" v-show="isOpen" @click="isOpen = !isOpen" src="../../assets/header/Union.svg" alt="">
    <div class="flex justify-center my-30px lg:my-50px">
        <Pagination :total-pages="totalPages" :current-page="currentPage" @page-changed="changePage"/>
    </div>
</template>
<script setup>
//官方套件
import { onMounted, ref, reactive,watch,computed } from "vue";
import axios from "axios";
import Loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/css/index.css';
import { useRoute } from "vue-router";
const route = useRoute()
//自製元件
const backend = import.meta.env.VITE_BACKEND_PATH
import Pagination from '@/components/widget/Pagination.vue'

//取得問題
const activePage = ref('all')
const products = reactive([]);
const types = reactive([])
const count = ref(0);
const activeQuestion = ref(1);
const isLoading = ref(false);
const fullPage = ref(true);
onMounted(async () => {
activePage.value = route.params.type
   fetchData()
});
const fetchData = async() =>{
    isLoading.value = true;
    try {
        const response = await axios.get(
            `${import.meta.env.VITE_BACKEND_PATH}api/gc/culture`
        );
        products.push(...response.data.products)
        count.value = response.data.count
        types.push(...response.data.type)
        console.log(types);
        isLoading.value = false;
    } catch (error) {
        console.error("API 請求失敗:", error);
    }
}

//控制手機板選單
const isOpen = ref(false)
watch(isOpen,(newValue)=>{
    newValue ? document.body.style.overflowY = 'hidden' : document.body.style.overflowY = 'auto';
})

//分頁系統
const currentPage = ref(1)
const itemsPerPage = ref(12)
const changePage =((page)=>{
    currentPage.value = page
})

const totalPages = computed(() => {
    return Math.ceil(count.value / itemsPerPage.value);
});


watch(currentPage,(newValue) => newValue && fetchData())


</script>
<style scoped>
.tag{
    cursor: pointer;
}

.active{
    color:#ceb96e;
}
.child{
    padding-left: 10px;
    padding-top: 10px;
    padding-bottom: 10px;
    border-left:1px solid #EEEEEE ;
}
.slide-fade-enter-active {
  transition: all 0.5s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.5s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(-20px);
  opacity: 0;
}
.close{
    z-index:100;
    top:15px;
    right:15px;
    position: absolute;
}
.mask{
    z-index:50;
    top:0;
    left:0;
    position: absolute;
    background-color:#00000080;
    width: 100%;
    height: 100vh;
}
.mobileUl{
    margin-top: 34px;
}
.mobileMenu{
    z-index:60;
    position: absolute;
    top:0;
    left:0;
    background-color: #ffffff;
    height: 100vh;
    width:65vw;
}
.nav-link{
    color:#FFFFFF;
}
.nav-link-mobile{
    color:#000000;
    font-family: Noto Serif TC;
    font-size: 16px;
    font-weight: 400;
    line-height: 23px;
    letter-spacing: 0.1em;
    text-align: left;
}
.nav-link-mobile:hover{
    color:#ceb96e;
}
.nav-item-mobile{
    padding-top: 15px;
    padding-bottom: 7px;
    padding-left: 22px;
    border-bottom: 1px solid #EEEEEE;
}
.filter{
    height: 24px;
    width: 24px;
}
.category{
    font-size: 14px;
    color:#888888;
}
.name{
    font-size: 16px;
    color:#920000;
}
.price{
    font-size: 16px;
    font-weight: 700;
    line-height: 23px;
    letter-spacing: 0.1em;
    text-align: left;
    color:#333333;
}
.cart_btn{
    width: 96px;
    height: 30px;
    color:#920000;
    padding: 5px 10px;
    border: 1px solid #920000;
    outline: none;
    border-radius: 0;
    font-size: 14px;
}
.cart_btn:hover{
    background-color: #920000;
    color:#ffffff;
}
.photo{
    width: 290px;
    height: 290px;
}
@media(width < 1024px){
    .photo{
        width: 200px;
        height: 200px;
    }
}
@media(width <512px){
    .photo{
        width: 160px;
        height: 160px;
    }
}
.tab{
    padding:10px 0;
    border-bottom: 1px solid #EEEEEE;
}
.type{
    font-family: Noto Serif TC;
    font-size: 24px;
    font-weight: 500;
    line-height: 34px;
    letter-spacing: 0.1em;
    text-align: left;
    color:#333333;
    padding-bottom:13px;
    position: relative;
}
.type::after{
    content: '';
    position: absolute;
    bottom: 0px;
    left: 0;
    width: 20%;
    height: 100%;
    border-bottom: 2px solid #920000;
    box-sizing: border-box;
}
.left_tabs {
   min-width: 272px;
}
/* .result {
    min-width: 350px;
    gap: 20px;
}
@media (width < 768px){
    .result{
        min-width: auto;
    }
} */

.custom_select {
    margin-left: 10px;
    display: flex;
    width: 200px;
    height: 30px;
    padding: 0px 10px;
    justify-content: space-between;
    align-items: center;
    flex-shrink: 0;
    background: #EEE;
    color: #333333;
}
</style>
