<template>
    <loading :active="isLoading" :is-full-page="fullPage"></loading>
    <div class="max-w-1200px mx-auto my-50px px-10px">
        <div class="flex mb-40px justify-center">
            <h3 class="breadcrumb">購物車</h3>
            <h3 class="breadcrumb active">>結帳資訊</h3>
            <h3 class="breadcrumb">>訂單完成</h3>
        </div>
        <div class="flex flex-col md:flex-row gap-40px">
            <div class="max-w-690px w-full">
                <h4 class="title border_bottom">帳單資訊</h4>
                <div class="flex flex-col md:flex-row  gap-20px">
                    <div class="mt-20px w-full">
                        <h4>姓名<span class="required">*</span></h4>
                        <input class="custom_input" v-model="billData.name" type="text" placeholder="請輸入姓名">
                    </div>
                    <div class="mt-20px w-full">
                        <h4>公司名稱</h4>
                        <input class="custom_input" v-model="billData.company" type="text" placeholder="請輸入公司名稱">
                    </div>
                </div>
                <div class="flex flex-col md:flex-row gap-20px">
                    <div class="mt-20px w-full">
                        <h4>聯絡電話<span class="required">*</span></h4>
                        <input class="custom_input" v-model="billData.phone" type="text" placeholder="請輸入電話號碼">
                    </div>
                    <div class="mt-20px w-full">
                        <h4>電子郵件<span class="required">*</span></h4>
                        <input class="custom_input" v-model="billData.email" type="text" placeholder="請輸email">
                    </div>
                </div>
                <div class="flex flex-col md:flex-row gap-20px">
                    <div class="mt-20px w-full">
                        <h4>縣市<span class="required">*</span></h4>
                        <div class="relative">
                        <select class="custom_select appearance-none" v-model="billData.selectedCity" @change="updateAreas1(billData.selectedCity)">
                            <option value="">請選擇縣市</option>
                            <option v-for="item in cities" :key="item">{{ item }}</option>
                        </select>
                        <img class="arrow_down" src="../../assets/index/arrow_down.svg" alt="">
                    </div>
                    </div>
                    <div class="mt-20px w-full">
                        <h4>鄉鎮區<span class="required">*</span></h4>
                        <div class="relative">
                        <select class="custom_select appearance-none" v-model="billData.selectedArea" @change="updateZipCode1(billData.selectedArea)">
                            <option value="">請選擇鄉鎮</option>
                            <option v-for="area in areas1" :key="area">{{ area }}</option>
                        </select>
                        <img class="arrow_down" src="../../assets/index/arrow_down.svg" alt="">
                    </div>
                    </div>
                </div>
                <div class="flex flex-col md:flex-row gap-20px">
                    <div class="mt-20px w-full">
                        <h4>郵遞區號<span  class="required">*</span></h4>
                        <input v-model="billData.zipCode" class="custom_input" type="text" readonly>
                    </div>
                    <div class="mt-20px w-full">
                        <h4>街道地址<span class="required">*</span></h4>
                        <input v-model="billData.address" class="custom_input" type="text">
                    </div>
                </div>
                <div>
                    <p class="mb-10px">備註:</p>
                    <textarea v-model="billData.remark"  class="custom_textarea mb-10px"></textarea>
                </div>
                <input class="my-20px mr-5px" v-model="differentAddress" type="checkbox"><span>運送到不同的地址?</span>
                <div v-if="differentAddress">
                    <div class="flex flex-col md:flex-row gap-20px">
                        <div class="mt-20px w-full">
                            <h4>姓名<span class="required">*</span></h4>
                            <input class="custom_input" v-model="shippingData.name" type="text" placeholder="請輸入姓名">
                        </div>
                        <div class="mt-20px w-full">
                            <h4>公司名稱</h4>
                            <input class="custom_input" v-model="shippingData.company" type="text" placeholder="請輸入公司名稱">
                        </div>
                    </div>
                    <div class="flex gap-20px">
                        <div class="mt-20px w-full">
                            <h4>聯絡電話<span class="required">*</span></h4>
                            <input class="custom_input" v-model="shippingData.phone" type="text" placeholder="請輸入電話號碼">
                        </div>
                    </div>
                    <div class="flex flex-col md:flex-row gap-20px">
                        <div class="mt-20px w-full">
                            <h4>縣市<span class="required">*</span></h4>
                            <div class="relative">
                            <select class="custom_select appearance-none" v-model="shippingData.selectedCity" @change="updateAreas2(shippingData.selectedCity)">
                                <option value="">請選擇縣市</option>
                                <option v-for="item in cities" :key="item">{{ item }}</option>
                            </select>
                            <img class="arrow_down" src="../../assets/index/arrow_down.svg" alt="">
                        </div>
                        </div>
                        <div class="mt-20px w-full">
                            <h4>鄉鎮區<span class="required">*</span></h4>
                            <div class="relative">
                            <select class="custom_select appearance-none" v-model="shippingData.selectedArea" @change="updateZipCode2(shippingData.selectedArea)">
                                <option value="">請選擇鄉鎮</option>
                                <option v-for="area in areas2" :key="area">{{ area }}</option>
                            </select>
                            <img class="arrow_down" src="../../assets/index/arrow_down.svg" alt="">
                        </div>
                        </div>
                    </div>
                    <div class="flex flex-col md:flex-row gap-20px">
                        <div class="mt-20px w-full">
                            <h4>郵遞區號<span  class="required">*</span></h4>
                            <input v-model="shippingData.zipCode" class="custom_input" type="text" readonly>
                        </div>
                        <div class="mt-20px w-full">
                            <h4>街道地址<span class="required">*</span></h4>
                            <input v-model="shippingData.address" class="custom_input" type="text">
                        </div>
                    </div>
                </div>
            </div>
            <div class="w-full max-w-490px red_border">
                <h4 class="title border_bottom w-full">您的訂單</h4>
                <div class="line">
                    <span>商品</span>
                    <span>小計</span>
                </div>
                <div v-for="item in products" :key="item.product_id" class="line">
                    <span>{{ item.product_name }}X {{ item.quantity }}</span>
                    <span>NT${{ (item.price * item.quantity).toLocaleString() }}</span>
                </div>
                <div class="line">
                    <span>小計</span>
                    <span>NT${{ totalPrice.toLocaleString() }}</span>
                </div>
                <div class="line">
                    <span>運送方式</span>
                    <span>宅配:NT$1,000</span>
                </div>
                <div class="line">
                    <span>總計</span>
                    <span>NT${{ (totalPrice + 1000).toLocaleString() }}</span>
                </div>
                <div class="flex my-10px" >
                        <span class="mr-5px">綠界科技</span><img src="../../assets/products/light/ecpay_icon.png" alt="">
                </div>
                <h5>付款方式</h5>
                <div class="relative w-full mb-10px">
                    <select
                        class="appearance-none bg-transparent border border-transparent text-gray-700 custom_select" v-model="payment">
                        <option value="">請選擇付款方式</option>
                        <option value="WebATM">ATM虛擬帳戶匯款</option>
                        <option value="Credit">線上刷卡</option>
                        <option value="CVS">超商代碼繳費</option>
                    </select>
                    <img class="absolute right-0 top-0 max-md:mr-2 mt-2 mr-4 pointer-events-none"
                        src="../../assets/index/arrow_down.svg" alt="">
                </div>
                <div class="flex top_border pt-10px">
                    <input v-model="agree" class="mr-10px checkbox" type="checkbox">
                    <p>我已閱讀並同意網站的<router-link to="/terms" class="term">條款與條件</router-link></p>
                </div>
                <div class="container">
                    <h4 class="error">{{ errorMessage }}</h4>
                    <button class="visa" @click="checkOrder">下單購買</button>
                    <p class="mt-20px">您的個人數據將用於處理您的訂單，支持您在整個網站的體驗，以及我們的<router-link to="/privacy" class="term">隱私權政策</router-link>中描述的其他目的。</p>
                </div>
            </div>
        </div>
    </div>
    <div ref="contentRef" v-html="html" class="hidden"></div>
</template>
<script setup>
//官方套件
import { ref,onMounted,computed,watch } from 'vue';
import axios from "axios";
import Loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/css/index.css';

//自製元件
const backend = import.meta.env.VITE_BACKEND_PATH
import {cities,areasByCity,zipCodesByArea} from '@/store/city.js'
import { useAuth } from '@/store/auth.js'
const auth = useAuth();

onMounted(()=>{
    getCart()
})

//取得購物車資料
const isLoading = ref(false);
const products = ref([])
const total = ref()
const getCart = async(id) =>{
    isLoading.value = true;
    const requestData = {
        user_id:auth.member.user_id
    };
    try {
        const response = await axios.post(`${backend}api/gc/get/cart`,requestData
        );
       products.value = response.data.product_info
       total.value = response.data.total
       console.log(products.value);
    } catch (error) {
        console.error("API 請求失敗:", error);
    } finally{
        isLoading.value = false;
    }
}

//計算總價
const totalPrice = computed(() =>{
    return products.value.reduce((total, item) => total + (item.price * item.quantity), 0);
})


//定義帳單及運送資料
const differentAddress = ref(false)
const billData = ref({
    name:'',
    company:'',
    phone:'',
    email:'',
    zipCode:'',
    selectedCity:'',
    selectedArea:'',
    address:'',
    remark:'',
})

const shippingData = ref({
    name:'',
    company:'',
    phone:'',
    zipCode:'',
    selectedCity:'',
    selectedArea:'',
    address:'',
})

//驗證格式
const errorMessage = ref('');
const agree = ref(false)
const payment = ref('')
const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
};

//查看訂單
const checkOrder = () =>{
    //帳單資訊驗證
    for (const key in billData.value) {
        if (key !== 'remark' && key !== 'company' && !billData.value[key]) {
            errorMessage.value = '請填寫完整的帳單資訊'
            return;
        }
    }
    if(!validateEmail(billData.value.email)){
        errorMessage.value = '帳單資訊信箱格式不正確'
        return
    }
    //運送資訊驗證
    if(differentAddress.value){
        for (const key in shippingData.value) {
            if (key !== 'company' && !billData.value[key]) {
                errorMessage.value = '請填寫完整的帳單資訊'
                return;
            }
        }
    }

    if(agree.value === false){
        errorMessage.value = '請勾選同意網站的條款與條件'
        return
    }
    if(payment.value === ''){
        errorMessage.value = '請選擇付款方式'
        return
    }
    sendOrder()
}

//送出訂單
const html = ref('')
const contentRef = ref(null);
const sendOrder = async() =>{
    const detail = ref({
        user_id:auth.member.user_id,
        payment:payment.value,
        total:totalPrice
    })
    isLoading.value = true;
    try {
        const requestData = {
           billing:billData.value,
           order:detail.value
        };
        if(differentAddress.value){
            requestData.shipping = shippingData.value
        }
        const response = await axios.post(
            `${import.meta.env.VITE_BACKEND_PATH}api/gc/culture/order`,
            requestData
        );
        html.value = response.data
        setTimeout(()=>{
            const script = document.createElement('script')
            contentRef.value.append(script)
            script.innerHTML = 'document.getElementById("__ecpayForm").submit();'
            isLoading.value = false; 
        },2000)
    } catch (error) {
        console.error("API 請求失敗:", error);
    }
}

//獨立縣市選擇器

const areas1 = ref([]);
const areas2 = ref([]);

const updateAreas1 = (city) => {
    const selectCityAreas = areasByCity.value[city];
    areas1.value = selectCityAreas;
};

const updateAreas2 = (city) => {
    const selectCityAreas = areasByCity.value[city];
    areas2.value = selectCityAreas;
};

const updateZipCode1 = (area) => {
    const code = zipCodesByArea[area];
    billData.value.zipCode = code;
};

const updateZipCode2 = (area) => {
    const code = zipCodesByArea[area];
    shippingData.value.zipCode = code;
};
</script>
<style scoped>
.error{
    color:red;
    margin-bottom: -20px;
    margin-top: 10px;
}
.custom_textarea {
    border: 1px solid #D9D9D9;
    background-color: #ffffff;
    width: 100%;
    height: 174px;
}
.term {
    color: #920000;
}
.visa {
    margin-top: 20px;
    width: 114px;
    height: 43px;
    border: none;
    outline: none;
    border-radius: 0;
    color: #ffffff;
    background-color: #CEB96E;
}
.line{
    font-weight: 600;
    padding:10px 0;
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid #EEEEEE;
}
.red_border{
    height: fit-content;
    padding: 10px;
    border:2px solid #920000;
}
.custom_select {
    display: flex;
    width: 100%;
    height: 30px;
    padding: 0px 10px;
    justify-content: space-between;
    align-items: center;
    flex-shrink: 0;
    background-color: #ffffff;
    border:1px solid #D9D9D9;
}
.arrow_down{
    position: absolute;
    top:10px;
    right:7px
}
.required{
    color:#920000;
    margin-left: 5px;
}
.custom_input{
    margin-top: 10px;
    padding-left: 10px;
    border: 1px solid #D9D9D9;
    background-color: #ffffff;
    width: 100%;
    height: 30px;
}
.border_bottom{
    padding-bottom: 10px;
    border-bottom: 3px solid #EEEEEE;
}
.btn{
    width: 100px;
    height: 30px;
    border:1px solid #920000;
    background-color: #ffffff;
    color:#920000;
    border-radius: 0;
    padding: 5px 10px;
    font-size: 14px;
}
.next{
    background-color: #920000;
    color:#ffffff;
}
.title{
    font-family: Noto Serif TC;
    font-size: 16px;
    font-weight: 600;
    line-height: 23px;
    letter-spacing: 0.1em;
    text-align: left;
}
strong{
    font-size: 20px;
    color:#920000;
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
</style>