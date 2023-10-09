<template>
    <VueFinalModal hide-overlay="false"
      class="custom_position"
      content-class="flex flex-col p-4 bg-white dark:bg-black rounded-lg border border-gray-100 dark:border-gray-800 "
    >   
        <loading :active="isLoading" :is-full-page="fullPage"></loading>
        <div class="flex justify-end">
          <img class="close" src="../../assets/modal/close.png" alt="" @click="emit('confirm')">
        </div>
        <div class="w-240px px-10px pt-30px">
            <div class="flex mb-30px">
               
            </div>
            <div class="flex-col gap-20px">
                <button class="know_btn" @click="emit('confirm')">回頁面</button>
                <button class="know_btn delete" @click="emit('delete')">結帳</button>
            </div>
        </div>
    </VueFinalModal>
  </template>
<script setup>
//官方套件
import { ref,onMounted } from 'vue';
import { VueFinalModal } from 'vue-final-modal'
import axios from "axios";
import Loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/css/index.css';

//自製元件
const backend = import.meta.env.VITE_BACKEND_PATH
import { useAuth } from '@/store/auth.js'
const auth = useAuth();
onMounted(() =>{
    getCart(auth.member.user_id)
})

const isLoading = ref(false);
const getCart = async(id) =>{
    isLoading.value = true;
    const requestData = {
        user_id:auth.member.user_id
    };
    try {
        const response = await axios.post(`${backend}api/gc/get/cart`,requestData
        );
        console.log(response);
    } catch (error) {
        console.error("API 請求失敗:", error);
    } finally{
        isLoading.value = false;
    }
}

const emit = defineEmits(['confirm','delete']);
</script>


<style scoped>

.know_btn {
    width: 100%;
    height: 40px;
    color: #ffffff;
    background-color: #CEB96E;
    border: none;
    outline: none;
    border-radius: 0;
}
.delete{
    background-color: #920000 !important;
}

.know_btn:hover {
    color: #CEB96E;
    background-color: #ffffff;
    border: 1px solid #CEB96E;
}
.msg {
    color: #920000;
}
.check {
    width: 18px;
    height: 18px;
}
</style>