<template>
    <loading :active="isLoading" :is-full-page="fullPage"></loading>
    <div class="max-w-1200px mx-auto max-xl:px-10px w-full">
        <div class="mt-50px mb-30px flex flex-col xl:flex-row max-xl:items-center justify-between max-xl:gap-20px">
            <span>首頁/文創商品</span>
            <div class="flex items-center result">
                <span class="whitespace-nowrap">顯示所有 {{ count }} 個結果</span>
                <div class="relative w-full">
                    <select v-model="order" class="appearance-none bg-transparent border border-transparent text-gray-700 custom_select ">
                        <option value="default">預設選項</option>
                        <option value="priceDESC">價格由高到低</option>
                        <option value="priceASC">價格由低到高</option>
                        <option value="lastet">發布日期</option>
                    </select>
                    <img class="absolute right-0 top-0 max-md:mr-2 mt-2 mr-4 pointer-events-none"
                        src="../../assets/index/arrow_down.svg" alt="">
                </div>
            </div>
            <div class="flex items-center gap-10px xl:hidden">
                <img class="filter" src="../../assets/products/culture/filter_icon.svg" alt="">
                <span class="whitespace-nowrap" @click="isOpen = !isOpen">篩選</span>
            </div>
        </div>
        <div class="flex">
            <div class="left_tabs hidden xl:block">
                <h4 class="type">商品分類</h4>
                <div class="mt-40px">
                    <div class="tab">
                        <span class="tag" @click="router.push('all')" :class="{active:activePage === 'all'}">全部</span>
                    </div>
                    <div v-for="item in types" :key="item.id">
                        <div class="flex justify-between tab">
                            <span class="tag" @click="router.push(`${item.slug}`)" :class="{active:activePage === item.slug}">{{ item.name }}</span>
                            <img v-show="item.children.length > 0 && activePage !== item.slug" src="../../assets/products/culture/down_arrow_icon.svg" alt=""
                            @click="activePage = item.slug">
                            <img v-show="item.children.length > 0 && activePage === item.slug" src="../../assets/products/culture/up_arrow_icon.svg" alt="" 
                            @click="activePage = 'all'">
                        </div>
                        <div v-show="item.children.length > 0" class="inner">
                            <div v-show="activePage === child.slug || activePage === item.slug"  v-for="child in item.children" :key="child.id" class="child">
                                <span class="tag" @click="router.push(`${child.slug}`)" :class="{active:activePage === child.slug}">{{ child.name }}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="ml-30px mt-20px flex flex-wrap gap-10px w-full ">
                <div class="flex flex-col gap-5px mb-40px product" v-for="item in products" :key="item.id">
                    <router-link :to="`/product/culture/${item.id}`"><img class="photo" :src="item.image" alt=""></router-link>
                    <span class="category">{{ item.category }}</span>
                    <span class="name">{{ item.name }}</span>
                    <div class="flex gap-10px">
                        <span v-if="!item.sale" class="price">NT${{ item.price? parseInt(item.price).toLocaleString() : '' }}</span>
                        <span v-if="item.sale" class="price sale">NT${{ item.price? parseInt(item.price).toLocaleString() : '' }}</span>
                        <span v-if="item.sale" class="price">NT${{item.sale ? parseInt(item.sale).toLocaleString() : ''}}</span>
                    </div>
                    
                    <button class="cart_btn" @click="addToCart(item.id)">加入購物車</button>
                </div>
            </div>
        </div>
    </div>
    <Transition name="slide-fade">
        <div class="mobileMenu" v-show="isOpen">
            <h4 class="type mt-50px ml-10px">商品分類</h4>
            <ul class="mobileUl">
                <li class="nav-item-mobile">
                    <span   @click="router.push('all')" :class="{active:activePage === 'all'}">全部</span>
                </li>
                <li v-for="item in types" :key="item.id" class="nav-item-mobile">
                    <span  @click="router.push(`${item.slug}`)" :class="{active:activePage === item.slug}">{{ item.name }}</span>
                    <div v-show="item.children.length > 0" class="inner">
                        <div v-for="child in item.children" :key="child.id" class="child">
                            <span class="tag" @click="router.push(`${child.slug}`)" :class="{active:activePage === child.slug}">{{ child.name }}</span>
                        </div>
                    </div>
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
import { useRoute,useRouter } from "vue-router";
import { useModal } from 'vue-final-modal'
import { useMeta } from 'vue-meta'
// useMeta({ title: '文創商品',description:'文創des' })

//自製元件
const backend = import.meta.env.VITE_BACKEND_PATH
import Pagination from '@/components/widget/Pagination.vue'
import LoginModal from '@/components/modals/LoginModal.vue';
import CartModal from '@/components/modals/CartModal.vue'
import { useAuth } from '@/store/auth.js'

 

//資料定義
const order = ref('default')
const activePage = ref('all')
const products = ref([]);
const types = ref([])
const count = ref(0);
const isLoading = ref(false);
const fullPage = ref(true);
const router = useRouter()
const route = useRoute()

//取得現在類別
onMounted(async () => {
   activePage.value = route.params.type
   fetchData(activePage.value)
});

//登入modal
const auth = useAuth();
const { open, close } = useModal({
  component: LoginModal,
  attrs: {
    onConfirm() {
        close()
    },
  },
})

//購物車modal 第二個modal所以不能用解構來處理
const cart = useModal({
  component: CartModal,
  attrs: {
    onConfirm() {
      router.push(`/cart/${auth.member.user_id}`)  
      cart.close();
    },
    onClose() {
      cart.close();
    },
    onInfo(){
      cart.close()
      router.push(`/info/${auth.member.user_id}`)
    }
  },
});


//加入購物車流程
const addToCart = (id) =>{
    cart.close();
    if(auth.isLogin){
       addWCsession(id)
       //避免購物車已打開未觸發
    }else{
      open()
    }
}

//加入wcSession
const isAddFinished = ref(false)
const addWCsession = async(id) =>{
    isLoading.value = true;
    const requestData = {
        product_id:id,
        user_id:auth.member.user_id
    };
    try {
        const response = await axios.post(`${backend}api/gc/add/cart`,requestData
        );
    } catch (error) {
        console.error("API 請求失敗:", error);
    } finally{
        isLoading.value = false;
        cart.close()
        cart.open()
    }
}



//取資料
const fetchData = async(type) =>{
    isLoading.value = true;
    if(type !== activePage.value ){
    //切換類別回第一頁
        currentPage.value = 1
    }
    //換類別頁
    router.push(`${type}`)
    const params = {
        order:order.value,
        limit:itemsPerPage.value, 
        page:currentPage.value,
    };
    let apiUrl = `${backend}api/gc/culture`;
    
    if (type !== 'all') {
        apiUrl += `?type=${type}`;
    }
    try {
        const response = await axios.get(apiUrl,{params:params}
        );
        products.value = response.data.products
        count.value = response.data.count
        types.value = response.data.type
       
    } catch (error) {
        console.error("API 請求失敗:", error);
    } finally {
        isLoading.value = false;
    }
}

//分頁系統
const currentPage = ref(1)
const itemsPerPage = ref(12)
const changePage =((page)=>{
    currentPage.value = page
})

const totalPages = computed(() => {
    return Math.ceil(count.value / itemsPerPage.value);
});


watch(currentPage,(newValue) => newValue && fetchData(activePage.value))
watch(order,(newValue) => newValue && fetchData(activePage.value))

//控制手機板選單
const isOpen = ref(false)
watch(isOpen,(newValue)=>{
    newValue ? document.body.style.overflowY = 'hidden' : document.body.style.overflowY = 'auto';
})
</script>
<style scoped>
.sale{
    color:#888888;
    text-decoration: line-through;
}
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
    .product{
        width: 30%;
    }
    .photo{
        width: 100%;
        height: auto;
    }
}
@media(width < 768px){
    .product{
        width: 46%;
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
