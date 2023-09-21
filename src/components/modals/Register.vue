<template>
    <div class="login">
        <h4 class="title">註冊會員</h4>
        <div class="w-full flex flex-col mt-20px gap-20px input_section">
            <div v-if="errorMessage" class="flex justify-center">
                <h5 class="error">{{ errorMessage }}</h5>
            </div>
            <div>
                <h5 class="mb-5px sub_title">電子郵件</h5>
                <input v-model="email" class="member_input" type="text" placeholder="請輸入電子郵件">
            </div>
            <div>
                <h5 class="mb-5px sub_title">密碼</h5>
                <div class="relative">
                    <input v-model="password" class="member_input" :type="isPswViewed ? 'text' : 'password'"
                        placeholder="請輸入密碼">
                    <img v-show="!isPswViewed" class="eye" src="../../assets/modal/eyes_icon_2.svg" alt=""
                        @click="isPswViewed = !isPswViewed">
                    <img v-show="isPswViewed" class="eye" src="../../assets/modal/eyes_icon.svg" alt=""
                        @click="isPswViewed = !isPswViewed">
                </div>
            </div>
        </div>
        <textarea class="w-full mb-10px" cols="30" rows="5" readonly>第 1 條 定義 服務條款 
            神介祈福平台為XXXXXXX有限公司(以下簡稱「本公司」)依據本服務條款所提供之售票服務及其他相繼開發之服務(實際項目，以本公司公告為準，以下簡稱「本服務」)。
        </textarea>
        <div class="flex items-start mb-20px">
            <input v-model="accept" type="checkbox" class="mr-5px mt-5px">
            <p>勾選即表示您已閱讀並同意我們的 隱私權政策及 會員服務條款</p>
        </div>
        <button class="register_btn" @click="sendRegister">註冊</button>
    </div>
</template>
<script setup>
//官方套件
import { ref } from 'vue';
import axios from "axios";

//自製元件
import {useAuth} from '@/store/auth.js'

//格式驗證
const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
};

const validatePassword = (password) => {
    return password.length >= 8;
};

//執行註冊
const email = ref('');
const password = ref('');
const accept = ref(false)
const errorMessage = ref('');
const emit = defineEmits(['redirect-register-success']);
const sendRegister = async () => {
    if (!validateEmail(email.value)) {
        errorMessage.value = '請輸入有效電子郵件';
        return;
    }

    if (!validatePassword(password.value)) {
        errorMessage.value = '密碼至長度至少八位';
        return;
    }

    if(accept.value === false){
        errorMessage.value = '請先勾選同意條款'
    }

    try {
        const requestData = {
            email: email.value,
            password: password.value
        };

        const response = await axios.post(
            `${import.meta.env.VITE_BACKEND_PATH}/api/gc/register`,
            requestData
        );
        if(response.data.success === false){
            errorMessage.value = response.data.data
        }else{
            const jwt = response.data.data.jwt
            const auth = useAuth()
            auth.setJWT(jwt)
            auth.setMember(response.data.data.user_id,response.data.data.email)
            emit('redirect-register-success')
        }
    } catch (error) {
        console.error("API 请求失败:", error);
    }
}

const isPswViewed = ref(false)
</script>
<style scoped>
.error{
    color:red;
}
.sub_title {
    font-size: 16px;
}

.eye {
    position: absolute;
    right: 7px;
    top: 7px;
    width: 29px;
    height: 16px;
}

.register_btn {
    width: 100%;
    height: 40px;
    color: #ffffff;
    background-color: #CEB96E;
    border: none;
    outline: none;
    border-radius: 0;
}

.register_btn:hover {
    color: #CEB96E;
    background-color: #ffffff;
    border: 1px solid #CEB96E;
}

.close {
    width: 10px;
    height: 10px;
}

.input_section {
    border-bottom: 1px solid #D9D9D9;
    padding-bottom: 20px;
}

.member_input {
    padding: 0 10px;
    height: 30px;
    width: 100%;
    background-color: #EEEEEE;
}

.title {
    font-family: Noto Serif TC;
    font-size: 20px;
    font-weight: 700;
    line-height: 29px;
    letter-spacing: 0.2em;
    text-align: center;
    color: #000000;
    border-bottom: 1px solid #D9D9D9;
    padding-bottom: 10px;
}</style>