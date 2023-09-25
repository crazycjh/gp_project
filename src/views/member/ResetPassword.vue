<template>
    <div class="flex justify-center top_cover">
        <h2 class="title py-24px">會員中心</h2>
    </div>
    <div class="w-360px px-10px my-80px mx-auto">
        <div v-if="errorMessage" class="flex justify-center mb-20px">
            <h5 class="error">{{ errorMessage }}</h5>
        </div>
        <div v-if="successMessage" class="flex justify-center mb-20px">
            <h5 class="success">{{ successMessage }}</h5>
        </div>
        <div v-show="activePage === 'resetPsw'">
            <h4 class="sub_title">在下面輸入新密碼。</h4>
            <div>
                <h4 class="mt-20px mb-10px">新密碼</h4>
                <div class="relative">
                    <input v-model="password" class="member_input" :type="isPswViewed ? 'text' : 'password'"
                        placeholder="請輸入密碼" @keyup.enter="sendLogin">
                    <img v-show="!isPswViewed" class="eye" src="../../assets/modal/eyes_icon_2.svg" alt=""
                        @click="isPswViewed = !isPswViewed">
                    <img v-show="isPswViewed" class="eye" src="../../assets/modal/eyes_icon.svg" alt=""
                        @click="isPswViewed = !isPswViewed">
                </div>
            </div>
            <div>
                <h4 class="mb-10px">再一次輸入新密碼</h4>
                <div class="relative">
                    <input v-model="password2" class="member_input" :type="isPswViewed2 ? 'text' : 'password'"
                        placeholder="請輸入密碼" @keyup.enter="sendLogin">
                    <img v-show="!isPswViewed2" class="eye" src="../../assets/modal/eyes_icon_2.svg" alt=""
                        @click="isPswViewed2 = !isPswViewed2">
                    <img v-show="isPswViewed2" class="eye" src="../../assets/modal/eyes_icon.svg" alt=""
                        @click="isPswViewed2 = !isPswViewed2">
                </div>
            </div>
            <button class="reset_btn" @click="resetPassWord">儲存密碼</button>
        </div>
        <div v-show="activePage === 'login'">
            <div>
                <h5 class="mb-5px">電子郵件</h5>
                <input v-model="email" class="member_input" type="text" placeholder="請輸入電子郵件">
            </div>
            <div class="relative">
                <h5 class="mb-5px">密碼</h5>
                <div class="relative">
                    <input v-model="password3" class="member_input" :type="isPswViewed ? 'text' : 'password'"
                        placeholder="請輸入密碼" @keyup.enter="sendLogin">
                    <img v-show="!isPswViewed3" class="eye" src="../../assets/modal/eyes_icon_2.svg" alt=""
                        @click="isPswViewed3 = !isPswViewed3">
                    <img v-show="isPswViewed3" class="eye" src="../../assets/modal/eyes_icon.svg" alt=""
                        @click="isPswViewed3 = !isPswViewed3">
                </div>
            </div>
            <button class="login_btn" @click="sendLogin">登入</button>
        </div>
    </div>
</template>
<script setup>
//官方套件
import { ref,onMounted } from 'vue';
import { useRoute,useRouter } from 'vue-router';
import axios from "axios";

//自製元件
import { useAuth } from '@/store/auth.js'

//初始化參數
const user_id = ref('')
const expiration_time = ref('');
const isPswViewed = ref(false)
const isPswViewed2 = ref(false)
const isPswViewed3 = ref(false)
const activePage = ref('resetPsw')
const password = ref('')
const password2 = ref('')
const password3 = ref('')
const errorMessage = ref('')
const successMessage = ref('')
const email = ref('')

//取得會員ID
const route = useRoute()
const router = useRouter()
onMounted(() => {
    user_id.value = atob(route.params.memberID);
    console.log(user_id.value);
    expiration_time.value = route.params.expiration_time;
    //超過有效期限導向首頁
    const currentTime = Math.floor(Date.now() / 1000); 
        if (currentTime > expiration_time.value) {
         router.push('/')
        }
});

//重設密碼
const validatePassword = (password) => {
    return password.length >= 8;
};
const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
};

const resetPassWord = async() =>{
    if (!validatePassword(password.value)) {
        errorMessage.value = '密碼至長度至少八位';
        return;
    }
    if (!validatePassword(password2.value)) {
        errorMessage.value = '密碼至長度至少八位';
        return;
    }
    if(password2.value !== password.value){
        errorMessage.value = '兩次輸入的密碼不相同'
        return;
    }

    try {
        const requestData = {
            user_id: user_id.value,
            password: password.value
        };

        const response = await axios.post(
            `${import.meta.env.VITE_BACKEND_PATH}/api/gc/sendReset`,
            requestData
        );
        if (response.data.success === false) {
            errorMessage.value = response.data.data
        } else {
           activePage.value = 'login'
           errorMessage.value = ''
           successMessage.value = response.data.data
        }
    } catch (error) {
        console.error("API 請求失敗:", error);
    }
}

//執行登入
const sendLogin = async () => {
    if (!validateEmail(email.value)) {
        successMessage.value = ''
        errorMessage.value = '請輸入有效電子郵件';
        return;
    }

    if (!validatePassword(password3.value)) {
        successMessage.value = ''
        errorMessage.value = '密碼至長度至少八位';
        return;
    }

    try {
        const requestData = {
            email: email.value,
            password: password3.value
        };

        const response = await axios.post(
            `${import.meta.env.VITE_BACKEND_PATH}/api/gc/login`,
            requestData
        );
        if (response.data.success === false) {
            successMessage.value = ''
            errorMessage.value = response.data.data
        } else {
            const jwt = response.data.data.jwt
            const auth = useAuth()
            auth.setJWT(jwt)
            auth.setMember(response.data.data.user_id, response.data.data.email)
            //導向會員中心
            router.push(`/member/${response.data.data.user_id}`)
        }
    } catch (error) {
        console.error("API 請求失敗:", error);
    }
}

</script>
<style scoped>
.error {
    color: red;
}

.success {
    color: green;
}

.member_input {
    padding: 0 10px;
    height: 30px;
    width: 100%;
    background-color: #EEEEEE;
    margin-bottom: 20px;
}

.eye {
    position: absolute;
    right: 7px;
    top: 7px;
    width: 29px;
    height: 16px;
}

.reset_btn {
    height: 43px;
    width: 100%;
    color: #ffffff;
    background-color: #CEB96E;
    border: none;
    outline: none;
    border-radius: 0;
}

.sub_title {
    padding-bottom: 7px;
    border-bottom: 1px solid #D9D9D9;
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
.login_btn {
    width: 100%;
    height: 40px;
    color: #ffffff;
    background-color: #CEB96E;
    border: none;
    outline: none;
    border-radius: 0;
}
</style>