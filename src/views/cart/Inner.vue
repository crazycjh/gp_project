<template>
    <loading :active="isLoading" :is-full-page="fullPage"></loading>
    <div class="max-w-1200px mx-auto my-50px px-10px">
        <div class="flex mb-40px justify-center">
            <h3 class="breadcrumb active">購物車</h3>
            <h3 class="breadcrumb">>結帳資訊</h3>
            <h3 class="breadcrumb">>訂單完成</h3>
        </div>
        <div>
            <table class="w-full">
                <thead>
                    <tr>
                        <th class="text-left">商品</th>
                        <th class="text-left hidden md:table-cell">價格</th>
                        <th class="text-left">數量</th>
                        <th class="hidden md:table-cell text-right" width="20%">小計</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="item in products" :key="item.product_id">
                        <td>
                            <div class="flex gap-10px items-center">
                                <img class="delete" src="../../assets/cart/cancel_icon1.svg" alt="" @click="deleteItem(item.product_id)">
                                <img class="product_img" :src="item.image_url" alt="">
                                <div class="flex flex-col">
                                    <span>{{ item.product_name }}</span>
                                    <span class="block md:hidden">{{ item.quantity }} X {{ item.price.toLocaleString() }}</span>
                                </div>
                            </div>
                        </td>
                        <td class="hidden md:table-cell">
                            <span>NT${{ parseInt(item.price).toLocaleString() }}</span>
                        </td>
                        <td>
                            <div class="count_container">
                                <span class="count_left" @click="updateCart(item.product_id,item.quantity,'-')">-</span>
                                <input class="product_count" v-model="item.quantity" @input="updateCart(item.product_id,item.quantity,'none')">
                                <span class="count_right" @click="updateCart(item.product_id,item.quantity,'+')">+</span>
                            </div>
                        </td>
                        <td class="text-right hidden md:table-cell">NT${{ (item.price*item.quantity).toLocaleString() }}</td>
                    </tr>
                </tbody>
            </table>
        </div>
        <div class="flex justify-between w-full py-15px">
            <span class="title">購物車總計</span>
            <span>共 <strong>{{totalQuantity}}</strong> 件 NT$ <strong>{{totalPrice.toLocaleString()}}</strong></span>
        </div>
        <div class="flex gap-10px">
            <router-link to="/product/all"><button class="btn">←繼續購物</button></router-link>
            <router-link :to="`/info/${auth.member.user_id}`"><button class="btn next">下一步</button></router-link>
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
import { useAuth } from '@/store/auth.js'
const auth = useAuth();

//總價與總數
const totalQuantity = computed(() =>{
    return products.value.reduce((total, item) => {
        return total + item.quantity
    }, 0);
})

const totalPrice = computed(() =>{
    return products.value.reduce((total, item) => total + (item.price * item.quantity), 0);
})


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
    } catch (error) {
        console.error("API 請求失敗:", error);
    } finally{
        isLoading.value = false;
    }
}

//更新商品數量
const updateCart = async(id,count,operator) =>{
    if(operator === '-' && count ===1){
        return
    }
    if(operator === '+'){
        count++
    }else if(operator === '-'){
        count --
    }
    isLoading.value = true;
    const requestData = {
        user_id:auth.member.user_id,
        product_id:id,
        quantity:count
    };
    try {
        const response = await axios.post(`${backend}api/gc/cart/update`,requestData
        );
        getCart()
    } catch (error) {
        console.error("API 請求失敗:", error);
    } finally{
        isLoading.value = false;
    }
}

//刪除商品
const deleteItem = async(id) =>{
    isLoading.value = true;
    const requestData = {
        user_id:auth.member.user_id,
        product_id:id
    };
    try {
        const response = await axios.post(`${backend}api/gc/cart/delete`,requestData
        );
        getCart()
    } catch (error) {
        console.error("API 請求失敗:", error);
    } finally{
        isLoading.value = false;
    }
}


</script>
<style scoped>
.count_container{
    position: relative;
    width: 57px;
}
.product_count {
    width: 57px;
    height: 30px;
    outline: none;
    text-align: center;
}

.count_left{
    top:0;
    left:0;
    height: 30px;
    width: 15px;
    background-color:#eeeeee;
    position:absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
}
.count_right{
    top:0;
    right:0;
    height: 30px;
    width: 15px;
    background-color:#eeeeee;
    position:absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
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

th,td{ 
    padding:  10px 0;
    border-bottom: 1px solid #EEEEEE;
}
.delete{
    width: 22px;
    height: 22px;
}
.product_img{
    width: 70px;
    height: 70px;
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