<template>
    <div>
        <loading :active="isLoading" :is-full-page="fullPage"></loading>
        <div class="py-40px md:px-50px">
            <table class="order_table hidden md:block">
                <tbody>
                    <tr>
                        <th class="pr-60px">訂單</th>
                        <th class="pr-120px">發佈日期</th>
                        <th class="pr-80px">狀態</th>
                        <th class="pr-180px">總計</th>
                        <th>動作</th>
                    </tr>
                    <tr v-for="item in orders" :key="item.order_id">
                        <td><span class="notice">#{{ item.order_id }}</span></td>
                        <td>{{ item.date }}</td>
                        <td>{{ item.status }}</td>
                        <td>NT${{ item.total }} (共 {{ item.count }} 件商品)</td>
                        <td>
                            <button v-show="item.status === '等待付款中'" class="order_button" @click="checkout(item.order_id)">付款</button>
                            <button class="order_button" @click="emit('set-order3-list',item)">查看</button>
                            <button v-show="item.status !== '取消'" class="order_button" @click="checkCancel(item.order_id)">取消</button>
                        </td>
                    </tr>
                </tbody>
            </table>
            <div class="mobile_order_list block md:hidden">
                <div v-for="item in orders" :key="item.order_id" class="mobile_order">
                    <div class="line">
                        <h5>訂單</h5>
                        <h5><span class="notice">#{{ item.order_id }}</span></h5>
                    </div>
                    <div class="line">
                        <h5>發佈日期</h5>
                        <h5>{{ item.date }}</h5>
                    </div>
                    <div class="line">
                        <h5>狀態</h5>
                        <h5>{{ item.status }}</h5>
                    </div>
                    <div class="line">
                        <h5>總計</h5>
                        <h5>NT${{ item.total }} (共 {{ item.count }} 件商品)</h5>
                    </div>
                    <div class="line">
                        <h5>動作</h5>
                        <div class="flex gap-20px">
                            <button class="order_mobile_button">付款</button>
                            <button class="order_mobile_button" @click="emit('set-order3-list',item)">查看</button>
                            <button class="order_mobile_button">取消</button>
                        </div>
                    </div>
                </div>
                <div ref="contentRef" v-html="html" class="hidden"></div>
            </div>
        </div>
    </div>
    
</template>
<script setup>
//官方套件
import { ref,onMounted } from 'vue';
import axios from "axios";
import Loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/css/index.css';
import { useModal } from 'vue-final-modal'

//自製套件
import ConfirmModal from '@/components/modals/ConfirmModal.vue'
import { useAuth } from '@/store/auth.js'
const auth = useAuth(); 


//控制modal
const active_order_id = ref('')
const { open, close } = useModal({
  component: ConfirmModal,
  attrs: {
    onConfirm() {
        close()
    },
    onDelete(){
        close()
        goCancel()
    }
  },
})

//打開modal
const checkCancel = (order_id) => {
    active_order_id.value = order_id
    open()
}

const goCancel = async() => {
    try {
        const requestData = {
          order_id:active_order_id.value
        };

        const response = await axios.post(
            `${import.meta.env.VITE_BACKEND_PATH}/api/gc/order/cancel`,
            requestData
        );
        if(response.data.success){
            get_orders()
        }
    } catch (error) {
        console.error("API 請求失敗:", error);
    }
}


//取得訂單
const orders = ref([])
onMounted(async () => {
    get_orders()
});

const get_orders = async() =>{
  const params = {
        user_id:auth.member.user_id
  };
  try {
    const response = await axios.get(
      `${import.meta.env.VITE_BACKEND_PATH}/api/gc/order/todo`,
      {params:params,}
    );
    orders.value = response.data;
  } catch (error) {
    console.error("API 請求失敗:", error);
  }
}

const html = ref('')
const contentRef = ref(null);
const isLoading = ref(false);
const fullPage = ref(true);
const checkout = async(order_id) =>{
    isLoading.value = true;
    try {
        const requestData = {
           order_id:order_id
        };

        const response = await axios.post(
            `${import.meta.env.VITE_BACKEND_PATH}/api/gc/order/checkout`,
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

const emit = defineEmits(['set-order3-list']);
</script>
<style scoped>
.line{
    display: flex;
    justify-content: space-between;
    border-bottom: 2px solid #EEEEEE;
    padding:10px 0;
}

.notice{
    color:#543118;
}
.order_table tbody tr {
    text-align: left;
    border-bottom: 2px solid #EEEEEE;
}
.order_table tbody td,.order_table tbody th {
    padding-top: 10px;
    padding-bottom: 10px;
}

.order_button {
    margin-right: 20px;
    width: 56px;
    height: 33px;
    background-color: #CEB96E;
    color: #ffffff;
    outline: none;
    border-radius: 0;
    border: none;
}
.order_button:hover{
    color:#CEB96E;
    background-color: #ffffff;
    border:1px solid #CEB96E;
}
.order_mobile_button{
    width: 56px;
    height: 33px;
    background-color: #CEB96E;
    color: #ffffff;
    outline: none;
    border-radius: 0;
    border: none;
}
.order_mobile_button:hover{
    color:#CEB96E;
    background-color: #ffffff;
}
.mobile_order{
    border:1px solid #D9D9D9;
    margin-bottom:30px;
    padding-left:8px;
    padding-right: 8px;
}
</style>