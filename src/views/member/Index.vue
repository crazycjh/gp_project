<template>
    <div class="flex justify-center top_cover">
        <h2 class="title py-24px">會員中心</h2>
    </div>
    <div class="flex flex-col md:flex-row max-w-1200px mx-auto py-30px px-10px">
        <div class="py-40px left ">
            <div class="info mb-45px">
                <p class="mb-5px">{{ auth.member.email}}</p>
                <p>您的身份：一般會員</p>
            </div>
            <div class="tabs">
                <span class="tab" :class="{ active: activeTab === 'index' }" @click="activeTab = 'index'">控制台</span>
                <span class="tab" :class="{ active: activeTab === 'orderLight' || activeTab === 'orderLightList' }"
                    @click="activeTab = 'orderLight'">點燈訂單</span>
                <span class="tab" :class="{ active: activeTab === 'orderCulture' || activeTab === 'orderCultureList' }"
                    @click="activeTab = 'orderCulture'">文創商品訂單</span>
                <span class="tab" :class="{ active: activeTab === 'orderTodo' || activeTab === 'orderTodoList' }"
                    @click="activeTab = 'orderTodo'">代辦項目訂單</span>
                <span class="tab account" :class="{ active: activeTab === 'detail' }" @click="activeTab = 'detail'">帳戶詳細資料</span>
                <span class="tab" :class="{ active: activeTab === 'logout' }" @click="logout">登出</span>
            </div>
        </div>
        <div class="w-full">
            <div v-show="activeTab === 'index'">
                <div class="py-40px md:px-50px">
                    <p class="mb-5px">您好 (不是 {{ auth.member.email }} 嗎？ <span class="notice cursor-pointer" @click="logout">請登出</span>)</p>
                    <p>在您的帳號控制台裡，您可以檢視 <span class="notice cursor-pointer" @click="activeTab = 'order'">近期的訂單</span>，管理您的 <span class="notice cursor-pointer" @click="activeTab = 'detail'">收貨地址</span> 和 <span class="notice cursor-pointer" @click="activeTab = 'detail'">更改密碼或修改帳號資料</span>。</p>
                    <div class="flex flex-col md:flex-row mt-15px gap-10px">
                        <button class="index_btn" @click="activeTab = 'orderLight'">點燈訂單</button>
                        <button class="index_btn" @click="activeTab = 'orderCulture'">文創商品訂單</button>
                        <button class="index_btn" @click="activeTab = 'orderTodo'">代辦項目訂單</button>
                        <button class="index_btn" @click="activeTab = 'detail'">帳戶詳細資料</button>
                    </div>
                </div>
            </div>
            <OrderLight v-show="activeTab === 'orderLight'" @set-order-list="openOrderList"/>
            <OrderCulture v-show="activeTab === 'orderCulture'" @set-order2-list="openOrder2List"/>
            <OrderTodo v-show="activeTab === 'orderTodo'" @set-order3-list="openOrder3List"/>
            <OrderLightList :order="order" v-if="activeTab === 'orderLightList'" />
            <OrderCultureList :order="order2" v-if="activeTab === 'orderCultureList'" />
            <OrderTodoList :order="order3" v-if="activeTab === 'orderTodoList'" />
            <Detail v-show="activeTab === 'detail'" />
        </div>
    </div>
</template>
<script setup>
//官方套件
import { ref } from 'vue';
import { useRouter } from 'vue-router';
//自製套件
import OrderLight from '../../components/member/OrderLight.vue';
import OrderCulture from '../../components/member/OrderCulture.vue';
import OrderTodo from '../../components/member/OrderTodo.vue';
import OrderLightList from '../../components/member/OrderLightList.vue'
import OrderCultureList from '../../components/member/OrderCultureList.vue'
import OrderTodoList from '../../components/member/OrderTodoList.vue'
import Detail from '../../components/member/Detail.vue'
import { useAuth } from '@/store/auth.js'
const auth = useAuth(); 
//登出
const router = useRouter()
const logout = () => {
   auth.logout()
   router.push('/')
}
// const order_id = ref('')
// const order_date = ref('')
// const order_status = ref('')
const order = ref([])
const order2 = ref([])
const order3 = ref([])
const activeTab = ref('index')
const openOrderList = (item) =>{
    order.value = item
    activeTab.value = 'orderLightList'
}
const openOrder2List = (item) =>{
    order2.value = item
    activeTab.value = 'orderCultureList'
}
const openOrder3List = (item) =>{
    order3.value = item
    activeTab.value = 'orderTodoList'
}
</script>
<style scoped>
.account:hover{
    border:1px solid #CEB96E;
}

.payment{
    margin-top: 30px;
    margin-bottom: 20px;
    font-family: Noto Serif TC;
    font-size: 24px;
    font-weight: 500;
    line-height: 34px;
    letter-spacing: 0.2em;
    text-align: left;
    color:#000000;

}
.list{
    padding: 40px 0;
    border-bottom:  2px dotted #AAAAAA;
}
.line{
    display: flex;
    justify-content: space-between;
    border-bottom: 2px solid #EEEEEE;
    padding:10px 0;
}


.index_btn {
    color:#000000;
    width: 175px;
    height: 40px;
    background-color: #ffffff;
    border: 2px solid #EEEEEE;
    outline: none;
    border-radius: 0;
}
.index_btn:hover{
    background-color: #eeeeee;
}
@media(width < 768px){
    .index_btn{
        width:100%;
    }
}

.active {
    border-right: 4px solid #920000;
}

.left {
    min-width: 233px;
    border-right: 2px solid #EEEEEE;
}
@media(width < 768px){
    .left{
        border-right:none;
    }
}

.tabs {
    display: flex;
    flex-direction: column;
}

.tab {
    width: 100%;
    padding: 10px 0;
    border-bottom: 2px solid #EEEEEE;
    cursor: pointer;
}

.top_cover {
    background-color: #EEEEEE;
}

.title {
    font-family: Noto Serif TC;
    font-size: 36px;
    font-weight: 700;
    line-height: 52px;
    letter-spacing: 0.2em;
    text-align: left;
    color: #333333;
}
.notice{
    color:#920000;
}
</style>