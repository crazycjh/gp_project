<template>
    <div class="mx-auto max-w-1200px md:mt-80px wrapper">
        <div class="flex mb-40px justify-center">
            <h3 v-show="order_type === 'culture'" class="breadcrumb">購物車</h3>
            <h3 v-show="order_type === 'todo'" class="breadcrumb">代辦項目</h3>
            <h3 v-show="order_type === 'light'" class="breadcrumb">點燈表單</h3>
            <h3 class="breadcrumb">>結帳資訊</h3>
            <h3 class="breadcrumb active">>訂單完成</h3>
        </div>
        <div v-if="order_type === 'culture'" class="py-40px md:px-50px mx-10px">
            <h4 class="mb-20px">訂單編號 <span class="notice">#{{ data.order_id }}</span> 於<span class="notice">{{ data.date }}</span> 下單，目前狀態為
                <span class="notice">{{ data.status }}</span>。</h4>
            <div class="mb-30px">
                <div class="line">
                    <h5>商品</h5>
                    <h5>總計</h5>
                </div>
                <div class="line" v-for="item in data.item" :key="item.name">
                    <h5><span class="focus">{{ item.name }}</span> × {{ item.count }}</h5>
                    <h5>NT${{ item.price * item.count }}</h5>
                </div>
                <div class="line">
                    <h5>小計:</h5>
                    <h5>NT${{ productTotal }}</h5>
                </div>
                <div class="line">
                    <h5>折扣:</h5>
                    <h5>-NT$100</h5>
                </div>
                <div class="line">
                    <h5>運送方式:</h5>
                    <h5>NT$1,000</h5>
                </div>
                <div class="line">
                    <h5>付款方式:</h5>
                    <h5>{{ data.payment }}</h5>
                </div>
                <div class=" line">
                    <h6 class="">總計:</h6>
                    <p>NT${{ (productTotal + 900).toLocaleString()}}</p>
                </div>
            </div>
            <div  class="flex flex-col md:flex-row gap-20px md:gap-50px">
                <div>
                    <h4 class="title">帳單地址</h4>
                    <div class="flex flex-col gap-5px">
                        <p>姓名 :{{ info.first_name }}</p>
                        <p>地址 : {{ info.postcode }}{{ info.address_1}},{{ info.address_2 }}</p>
                        <p>詳細地址 :{{ info.city }}</p>
                        <p>聯絡電話 : {{ info.phone }}</p>
                        <p>{{ info.email }}</p>
                    </div>
                </div>
                <div>
                    <h4 class="title">運送地址</h4>
                    <div class="flex flex-col gap-5px">
                        <p>姓名 : {{ info2.first_name }}</p>
                        <p>地址 : {{ info2.postcode }}{{ info2.address_1}},{{ info2.address_2 }}</p>
                        <p>詳細地址 : {{ info2.city }}</p>
                        <p>聯絡電話 : {{ info2.phone }}</p>
                        <p>收件人手機：{{ info2.phone }}</p>
                    </div>
                </div>
            </div>
        </div>
        <div v-if="order_type === 'light' || order_type === 'todo'" class="py-40px md:px-50px">
            <h4 class="mb-20px">訂單編號 <span class="notice">#{{ data.order_id }}</span> 於<span class="notice">{{ data.date }}</span> 下單，目前狀態為
                <span class="notice">{{ data.status }}</span>。</h4>
            <div v-for="item in prayers" :key="item.name" class="w-full list">
                <button class="order_list_btn hidden md:block">第一位信眾</button>
                <div class="line">
                    <h5>信眾姓名:</h5>
                    <h5>{{ item.name }}</h5>
                </div>
                <div class="line">
                    <h5>性別:</h5>
                    <h5>{{ item.gender }}</h5>
                </div>
                <div class="line">
                    <h5>農曆生日:</h5>
                    <h5>{{ item.yValue }} 年 {{ item.mValue }} 月 {{ item.dValue }} 日 {{ item.tValue }} 時</h5>
                </div>
                <div class="line">
                    <h5>地址:</h5>
                    <h5>{{ item.zipCode }}{{ item.selectedCity }}，{{ item.selectedArea }}</h5>
                </div>
                <div class="line">
                    <h5>詳細地址:</h5>
                    <h5>{{ item.address }}</h5>
                </div>
            </div>
            <div>
                <h4 class="payment">付款資訊</h4>
                <div class="line">
                    <h5>燈別:</h5>
                    <h5><span class="notice">{{ order.name }}</span></h5>
                </div>
                <div class="line">
                    <h5>總計:</h5>
                    <h5>NT${{ order.total }}</h5>
                </div>
                <div class="line">
                    <h5>付款方式:</h5>
                    <h5>{{ order.payment }}</h5>
                </div>
                <div class="line">
                    <h5>付款狀態:</h5>
                    <h5 v-show="order.status === '等待付款中' || order.status === '取消'">未付款</h5>
                    <h5 v-show=" order.status === '處理中' || order.status === '已完成'">已付款</h5>
                </div>
                <div class="mt-10px">
                    <h6 class="mb-10px">備註:</h6>
                    <p>{{ order.note }}</p>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
//官方套件
import { ref,onMounted,computed,watch } from 'vue';
import axios from "axios";
import { useRoute } from 'vue-router'
import Loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/css/index.css';

//自製元件
import { useAuth } from '@/store/auth.js'
const auth = useAuth()
const route = useRoute()
const backend = import.meta.env.VITE_BACKEND_PATH

const order_id = ref()
const order_type = ref('')
const data = ref([])
const info = ref([])
const info2 = ref([])
const prayers = ref([])
const order = ref([])

const isLoading = ref(false)
onMounted(() => {
    order_id.value = route.params.order_id;
    getOrderType()
});

const getOrderType = async() =>{
    isLoading.value = true;
    const requestData = {
        order_id:order_id.value
    };
    try {
        const response = await axios.post(`${backend}api/gc/thanks/info`,requestData
        );
       order_type.value = response.data.type
       if(order_type.value === 'culture'){
            data.value = response.data.data[0]
            info.value = response.data.info.billing_address
            info2.value = response.data.info.shipping_address
       }else if(order_type.value === 'light' || order_type === 'todo'){
            prayers.value = response.data.info
            order.value = response.data.data[0]
       }
    } catch (error) {
        console.error("API 請求失敗:", error);
    } finally{
        isLoading.value = false;
    }
}

const productTotal = computed (()=>{
    return data.value.item ? data.value.item.reduce((total,item) =>  total + (item.price * item.count), 0) : 0
})

</script>
<style scoped>
.wrapper{
    min-height: 66vh;
}
.success{
    color:#920000;
    font-size: 28px;
}
.prayer_btn{
    margin-top: 40px;
    margin-bottom: 20px;
    width: 195px;
    height: 43px;
    color: white;
    background-color:#CEB96E;
    border: none;
    outline: none;
    border-radius: 0;
}
.breadcrumb{
    font-family: Noto Serif TC;
    font-size: 24px;
    font-weight: 400;
    line-height: 34px;
    letter-spacing: 0.1em;
    text-align: left;
    color:#888888;
}
.breadcrumb.active{
    color:#000000;
}
.title{
    font-family: Noto Serif TC;
    font-size: 28px;
    font-weight: 600;
    line-height: 40px;
    letter-spacing: 0.2em;
    text-align: left;
    margin-bottom: 10px;
}
.focus{
    color:#543118;
}
.order_list_btn{
    width: 152px;
    height: 43px;
    background-color: #CEB96E;
    color:#ffffff;
    outline: none;
    border-radius: 0;
    border: none;
}
.order_list_btn:hover{
    color:#CEB96E;
    background-color: #ffffff;
}
.notice{
    color:#543118;
}
.mobile_order{
    border:1px solid #D9D9D9;
    margin-bottom:30px;
    padding-left:8px;
    padding-right: 8px;
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
</style>