<template>
   <VueFinalModal
      content-transition="vfm-fade"
      overlay-transition="vfm-fade"
      content-class="flex justify-center "
      @update:model-value="(val) => emit('update:modelValue', val)"
    >   
        <div class="container max-w-1200px  px-10px pt-60px pb-30px absolute inset-0 overflow-auto">
            <loading :active="isLoading" :is-full-page="fullPage"></loading>
            <div class="flex justify-end">
                <img class="close pr-20px" src="../../assets/modal/close.png" alt="" @click="emit('confirm')">
            </div>
            <div v-if="successMessage">
                <h4 class="success">{{ successMessage }}</h4>
                <p>已收到您的訂單，請您檢視訂單，確認付款狀態。</p>
                <router-link :to="`/member/${auth.member.user_id}`" ><button class="prayer_btn">前往會員中心</button></router-link>
            </div>
            <div class="w-full">
                <button class="customer_btn">聯絡人資料</button>
                <div class="line">
                    <span>姓名:</span>
                    <span>{{ customer.name }}</span>
                </div>
                <div class="line">
                    <span>聯絡電話:</span>
                    <span>{{ customer.phone }}</span>
                </div>
                <div class="line">
                    <span>電子郵件:</span>
                    <span>{{ customer.email }}</span>
                </div>
                <div class="line">
                    <span>地址:</span>
                    <span>{{ customer.zipCode }},{{ customer.selectedCity }}{{ customer.selectedArea }}</span>
                </div>
                <div class="line">
                    <span>詳細地址:</span>
                    <span>{{ customer.address }}</span>
                </div>
            </div>
            <div class="w-full prayer_section" v-for="(item,index) in prayer" :key="item.name">
                <button class="prayer_btn">第{{index+1}}位信眾資料</button>
                <div class="line">
                    <span>姓名:</span>
                    <span>{{ item.name }}</span>
                </div>
                <div class="line">
                    <span>性別:</span>
                    <span>{{ item.gender }}</span>
                </div>
                <div class="line">
                    <span>農曆生日:</span>
                    <span>西元{{ item.yValue }} 年 {{ item.mValue }} 月 {{ item.dValue }} {{ item.tValue }}時</span>
                </div>
                <div class="line">
                    <span>地址:</span>
                    <span>{{ item.zipCode }},{{ item.selectedCity }}{{ item.selectedArea }}</span>
                </div>
                <div class="line">
                    <span>詳細地址:</span>
                    <span>{{ item.address }}</span>
                </div>
                <div  class="line">
                    <div>燈別</div>
                    <div class="flex gap-3">
                        <div v-for="light in item.lights" class="">
                            <div v-if="light.isChecked">
                                {{ light.name }}
                            </div>
                            
                        </div>

                    </div>
                    
                </div>
                <!-- 放入點燈的紀錄 -->
            </div>
            <div class="w-full">
                <h4 class="title">付款資訊</h4>
                <!-- 拿掉燈別 -->
                <!-- <div class="line">
                    <span>燈別:</span>
                    <span>{{ productName }} x {{ count }}</span>
                </div> -->
                <div class="line">
                    <span>總計:</span>
                    <span>{{ productPrice*count }} </span>
                </div>
                <div class="line">
                    <span>付款方式:</span>
                    <span>{{ cPayment }}</span>
                </div>
                <div class="mark">
                    <h4 class="mb-10px">備註:</h4>
                    <span>{{ remark }}</span>
                </div>
            </div>
            <div v-show="!successMessage" class="flex gap-20px">
                <button class="send_btn" @click="sendOrder">確認送出</button>
                <button class="back_btn" @click="emit('confirm')">修正資料</button>
            </div>
            <div ref="contentRef" v-html="html" class="hidden"></div>
        </div>
    </VueFinalModal>
  </template>
<script setup>
//官方套件
import { ref,computed,onMounted,watch } from 'vue';
import { VueFinalModal } from 'vue-final-modal'
import axios from "axios";
import Loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/css/index.css';

//自製元件
import { useAuth } from '@/store/auth.js'
const auth = useAuth();
const props = defineProps({
  productName: String,
  productPrice:String,
  customer:Object,
  prayer:Object,
  payment:String,
  remark:String,
  count:Number,
//   productID:String,
  productID:Number,
  total:Number,
});

const html = ref('')


const cPayment = computed(()=>{
    switch (props.payment) {
        case 'CVS':
            return '超商代碼繳費'
        case 'WebATM':
            return 'ATM虛擬帳戶匯款'
        case 'Credit':
            return '線上刷卡'
        default:
            break;
    }
})

const emit = defineEmits(['confirm']);
const isLoading = ref(false);
const fullPage = ref(true);
const successMessage = ref('')
const errorMessage = ref('')
const order_id = ref('')
const contentRef = ref(null);
//送出訂單
const sendOrder = async() =>{
    const detail = ref({
        user_id:auth.member.user_id,
        productID:props.productID,
        count:props.count,
        payment:props.payment,
        remark:props.remark,
        total:props.total
    })
    isLoading.value = true;
    try {
        const requestData = {
            customer: props.customer,
            prayer: props.prayer,
            detail:detail.value
        };
        const response = await axios.post(
            `${import.meta.env.VITE_BACKEND_PATH}api/gc/light/order`,
            requestData
        );
        html.value = response.data
        setTimeout(()=>{
            const contentElement = contentRef.value;
            const script = document.createElement('script')
            contentRef.value.append(script)
            script.innerHTML = 'document.getElementById("__ecpayForm").submit();'
            isLoading.value = false; 
        },2000)
    } catch (error) {
        console.error("API 請求失敗:", error);
    }
}

// watch(html,(newValue)=>{
//     if(newValue){
//         document.getElementById("__ecpayForm").submit();
//     }
// })

const getCurrentDateTime = () =>{
    const now = new Date();
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const day = String(now.getDate()).padStart(2, '0');
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');

    const formattedDateTime = `${year}/${month}/${day} ${hours}:${minutes}:${seconds}`;
    return formattedDateTime;
}

const total = () => {
    return props.productPrice * props.count
}
</script>


<style scoped>

.success{
    color:#920000;
    font-size: 28px;
}
.mark{
    padding:10px 0;
}
.send_btn{
    margin-top: 40px;
    margin-bottom: 20px;
    width: 112px;
    height: 43px;
    color: white;
    background-color: #CEB96E;
    border: none;
    outline: none;
    border-radius: 0;
}
.back_btn{
    margin-top: 40px;
    margin-bottom: 20px;
    width: 112px;
    height: 43px;
    color: white;
    background-color: #9B9B9B;
    border: none;
    outline: none;
    border-radius: 0;
}
.title{
    margin-bottom: 20px;
    font-family: Noto Serif TC;
    font-size: 24px;
    font-weight: 500;
    line-height: 34px;
    letter-spacing: 0.2em;
    text-align: left;
}
.prayer_section{
    padding-bottom: 40px;
    border-bottom: 2px dashed #AAAAAA;
    margin-bottom: 20px;
}
.container{
    background-color: #ffffff;
    margin:auto;
    height: 80%;
    border-radius:1%;
    width: calc( 100% - 20px );
}
.line{
    display: flex;
    justify-content: space-between;
    padding-bottom: 10px;
    padding-top: 10px;
    border-bottom: 2px solid #EEEEEE;
}
.customer_btn {
    margin-top: 40px;
    margin-bottom: 20px;
    width: 112px;
    height: 43px;
    color: white;
    background-color: #920000;
    border: none;
    outline: none;
    border-radius: 0;
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
.check {
    width: 18px;
    height: 18px;
}

</style>