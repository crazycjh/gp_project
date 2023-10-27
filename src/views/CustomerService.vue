<template>
    <loading :active="isLoading"></loading>
    <TopCover :image="`${backend}wp-content/uploads/2023/10/contact_banner.jpg`" title="線上客服" />
    <Breadcrumb title="首頁/線上客服" />
    <div class="max-w-1200px mx-auto px-10px">
       <div class="flex flex-col md:flex-row mt-60px gap-40px">
            <div class="md:w-40%">
                <h5 class="mb-30px hint">若您有任何相關需求，請詳細填寫下列表單，我們收到留言後將會儘快與您聯繫，再次感謝您！</h5>
                <h6 class="line">客服電話 : 0912-345-678</h6>
                <h6 class="line">LINE @ : XXXXXXX</h6>
                <h6 class="line">服務信箱 : service@XXXX.com.tw </h6>
                <h6 class="line">服務時間 : 星期一至五 09:00〜18:00</h6>
            </div>
            <div class="md:w-60%">
                <div class=" w-full">
                    <h4>姓名<span class="required">*</span></h4>
                    <input class="custom_input" v-model="data.name"  type="text" placeholder="請輸入姓名">
                </div>
                <div class="mt-20px w-full">
                    <h4>聯絡電話<span class="required">*</span></h4>
                    <input class="custom_input" v-model="data.phone" type="text" placeholder="請輸入電話號碼">
                </div>
                <div class="mt-20px w-full">
                    <h4>E-mail<span class="required">*</span></h4>
                    <input class="custom_input" v-model="data.email" type="text" placeholder="請輸入電子信箱">
                </div>
                <div class="mt-20px w-full">
                    <h4>廟宇名稱<span class="required">*</span></h4>
                    <input class="custom_input" v-model="data.temple" type="text" placeholder="請輸入廟宇名稱">
                </div>
                <div class="mt-20px w-full">
                    <h4>諮詢項目<span class="required">*</span></h4>
                    <input class="custom_input" v-model="data.subject" type="text" placeholder="請輸入諮詢項目">
                </div>
                <div class="mt-20px w-full">
                    <h4 class="mb-10px">諮詢內容<span class="required">*</span></h4>
                    <textarea v-model="data.content" class="custom_textarea mb-10px"></textarea>
                </div>
                <h4 class="error" v-if="errorMessage">{{ errorMessage }}</h4>
                <button class="btn" @click="checkData">送出</button>
            </div>
       </div>
    </div>
</template>
<script setup>
//官方套件
import { ref } from 'vue'
import axios from "axios";
import Loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/css/index.css';
import { useModal } from 'vue-final-modal'

//自製元件
import Breadcrumb from '@/components/widget/Breadcrumb.vue'
import TopCover from '@/components/widget/TopCover.vue'
const backend = import.meta.env.VITE_BACKEND_PATH
import AlertModal from '@/components/modals/AlertModal.vue';

//控制modal
const { open, close } = useModal({
  component: AlertModal,
  attrs: {
    content:'送出表單成功',
    onConfirm() {
        close()
    },
   
  },
})

const isLoading = ref(false);
const errorMessage = ref('')
const data = ref({
    name:'',
    phone:'',
    email:'',
    temple:'',
    subject:'',
    content:''
})

const checkData = () => {
    for (const key in data.value) {
        if (!data.value[key]) {
            errorMessage.value = '請填寫完整資訊'
            return;
        }
    }
    sendData()
}

const sendData = async() =>{
    isLoading.value = true;
    try {
        const requestData = {
           data:data.value,
        };
        const response = await axios.post(
            `${import.meta.env.VITE_BACKEND_PATH}api/gc/online/service`,
            requestData
        );
        if(response.data.success){
            errorMessage.value = ''
            open()
        }
    } catch (error) {
        console.error("API 請求失敗:", error);
    } finally{
        isLoading.value = false;
    }
}

</script>
<style scoped>
.btn{
    margin-bottom: 30px;
    width: 76px;
    height: 43px;
    border:1px solid #CEB96E;
    background-color: #CEB96E;
    color:#ffffff;
    border-radius: 0;
    outline: none;
}
.hint{
    color:#333333;
}
.line{
    padding-top: 6px;
    padding-bottom: 6px;
    border-bottom: 1px solid #D9D9D9;
    font-weight: 500;
    color:#000000;
}
.custom_input{
    margin-top: 10px;
    padding-left: 10px;
    border: 1px solid #D9D9D9;
    background-color: #ffffff;
    width: 100%;
    height: 30px;
}
.required{
    color:#920000;
    margin-left: 5px;
}
.error{
    color:#920000;
    margin-bottom: 10px;
}
.custom_textarea {
    padding-left: 10px;
    border: 1px solid #D9D9D9;
    background-color: #ffffff;
    width: 100%;
    height: 174px;
    outline: none;
}


</style>