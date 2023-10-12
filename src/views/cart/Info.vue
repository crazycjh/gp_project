<template>
    <loading :active="isLoading" :is-full-page="fullPage"></loading>
    <div class="max-w-1200px mx-auto my-50px px-10px">
        <div class="flex mb-40px justify-center">
            <h3 class="breadcrumb">購物車</h3>
            <h3 class="breadcrumb active">>結帳資訊</h3>
            <h3 class="breadcrumb">>訂單完成</h3>
        </div>
        <div class="max-w-690px">
            <h4 class="title border_bottom">帳單資訊</h4>
            <div class="flex gap-20px">
                <div class="mt-20px w-full">
                    <h4>姓名<span class="required">*</span></h4>
                    <input class="custom_input" type="text" placeholder="請輸入姓名">
                </div>
                <div class="mt-20px w-full">
                    <h4>公司名稱</h4>
                    <input class="custom_input" type="text" placeholder="請輸入公司名稱">
                </div>
            </div>
            <div class="flex gap-20px">
                <div class="mt-20px w-full">
                    <h4>聯絡電話<span class="required">*</span></h4>
                    <input class="custom_input" type="text" placeholder="請輸入電話號碼">
                </div>
                <div class="mt-20px w-full">
                    <h4>電子郵件<span class="required">*</span></h4>
                    <input class="custom_input" type="text" placeholder="請輸email">
                </div>
            </div>
            <div class="flex gap-20px">
                <div class="mt-20px w-full">
                    <h4>縣市<span class="required">*</span></h4>
                    <div class="relative">
                    <select class="custom_select appearance-none" v-model="selectedCity1" @change="updateAreas1(selectedCity1)">
                        <option value="">請選擇縣市</option>
                        <option v-for="item in cities" :key="item">{{ item }}</option>
                    </select>
                    <img class="arrow_down" src="../../assets/index/arrow_down.svg" alt="">
                </div>
                </div>
                <div class="mt-20px w-full">
                    <h4>鄉鎮區<span class="required">*</span></h4>
                    <div class="relative">
                    <select class="custom_select appearance-none" v-model="selectedArea1" @change="updateZipCode1(selectedArea1)">
                        <option value="">請選擇鄉鎮</option>
                        <option v-for="area in areas1" :key="area">{{ area }}</option>
                    </select>
                    <img class="arrow_down" src="../../assets/index/arrow_down.svg" alt="">
                </div>
                </div>
            </div>
            <div class="flex gap-20px">
                <div class="mt-20px w-full">
                    <h4>郵遞區號<span  class="required">*</span></h4>
                    <input v-model="zipCode1" class="custom_input" type="text" readonly>
                </div>
                <div class="mt-20px w-full">
                    <h4>街道地址<span class="required">*</span></h4>
                    <input class="custom_input" type="text">
                </div>
            </div>
            <input class="my-20px mr-5px" v-model="differentAddress" type="checkbox"><span>運送到不同的地址?</span>
            <div v-if="differentAddress">
                <div class="flex gap-20px">
                    <div class="mt-20px w-full">
                        <h4>姓名<span class="required">*</span></h4>
                        <input class="custom_input" type="text" placeholder="請輸入姓名">
                    </div>
                    <div class="mt-20px w-full">
                        <h4>公司名稱</h4>
                        <input class="custom_input" type="text" placeholder="請輸入公司名稱">
                    </div>
                </div>
                <div class="flex gap-20px">
                    <div class="mt-20px w-full">
                        <h4>聯絡電話<span class="required">*</span></h4>
                        <input class="custom_input" type="text" placeholder="請輸入電話號碼">
                    </div>
                </div>
                <div class="flex gap-20px">
                    <div class="mt-20px w-full">
                        <h4>縣市<span class="required">*</span></h4>
                        <div class="relative">
                        <select class="custom_select appearance-none" v-model="selectedCity2" @change="updateAreas2(selectedCity2)">
                            <option value="">請選擇縣市</option>
                            <option v-for="item in cities" :key="item">{{ item }}</option>
                        </select>
                        <img class="arrow_down" src="../../assets/index/arrow_down.svg" alt="">
                    </div>
                    </div>
                    <div class="mt-20px w-full">
                        <h4>鄉鎮區<span class="required">*</span></h4>
                        <div class="relative">
                        <select class="custom_select appearance-none" v-model="selectedArea2" @change="updateZipCode2(selectedArea2)">
                            <option value="">請選擇鄉鎮</option>
                            <option v-for="area in areas2" :key="area">{{ area }}</option>
                        </select>
                        <img class="arrow_down" src="../../assets/index/arrow_down.svg" alt="">
                    </div>
                    </div>
                </div>
                <div class="flex gap-20px">
                    <div class="mt-20px w-full">
                        <h4>郵遞區號<span  class="required">*</span></h4>
                        <input v-model="zipCode2" class="custom_input" type="text" readonly>
                    </div>
                    <div class="mt-20px w-full">
                        <h4>街道地址<span class="required">*</span></h4>
                        <input class="custom_input" type="text">
                    </div>
                </div>
            </div>
        </div>
    </div>
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

//取得資料
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

const differentAddress = ref(false)

const selectedCity1 = ref('');
const selectedArea1 = ref('');
const zipCode1 = ref('');

const selectedCity2 = ref('');
const selectedArea2 = ref('');
const zipCode2 = ref('');

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
    zipCode1.value = code;
};

const updateZipCode2 = (area) => {
    const code = zipCodesByArea[area];
    zipCode2.value = code;
};


</script>
<style scoped>
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