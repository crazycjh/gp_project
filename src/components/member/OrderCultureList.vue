<template>
    <loading :active="isLoading" :is-full-page="fullPage"></loading>
    <div class="py-40px md:px-50px">
        <h4 class="mb-20px">
            訂單編號 <span class="notice">#{{ order.order_id }}</span> 於<span
                class="notice"
                >{{ order.date }}</span
            >
            下單，目前狀態為 <span class="notice">{{ order.status }}</span
            >。
        </h4>
        <div class="mb-30px">
            <div class="line">
                <h5>商品</h5>
                <h5>總計</h5>
            </div>
            <div class="line" v-for="item in order.item" :key="item.name">
                <h5>
                    <span class="focus">{{ item.name }}</span> ×
                    {{ item.count }}
                </h5>
                <h5>NT${{ item.price * item.count }}</h5>
            </div>
            <!-- <div class="line">
                <h5><span class="focus">【鎮瀾宮】宮徽香灰球吊飾｜擋煞｜保平安｜隨身庇佑｜過爐</span> × 1</h5>
                <h5>NT$239</h5>
            </div> -->
            <div class="line">
                <h5>小計:</h5>
                <h5>NT${{ productTotal.toLocaleString() }}</h5>
            </div>
            <div class="line">
                <h5>折扣:</h5>
                <h5></h5>
            </div>
            <div class="line">
                <h5>運送方式:</h5>
                <h5>NT$1,000</h5>
            </div>
            <div class="line">
                <h5>付款方式:</h5>
                <h5>{{ order.payment }}</h5>
            </div>
            <div class="line">
                <h6 class="">總計:</h6>
                <p>NT${{ (productTotal + 1000).toLocaleString() }}</p>
            </div>
        </div>
        <div class="flex flex-col md:flex-row gap-20px md:gap-50px">
            <div>
                <h4 class="title">帳單地址</h4>
                <div class="flex flex-col gap-5px">
                    <p>姓名 :{{ billing.first_name }}</p>
                    <p>
                        地址 : {{ billing.postcode }}{{ billing.address_1 }},{{
                            billing.address_2
                        }}
                    </p>
                    <p>詳細地址 :{{ billing.city }}</p>
                    <p>聯絡電話 : {{ billing.phone }}</p>
                    <p>{{ billing.email }}</p>
                </div>
            </div>
            <div>
                <h4 class="title">運送地址</h4>
                <div class="flex flex-col gap-5px">
                    <p>姓名 : {{ shipping.first_name }}</p>
                    <p>
                        地址 : {{ shipping.postcode
                        }}{{ shipping.address_1 }},{{ shipping.address_2 }}
                    </p>
                    <p>詳細地址 : {{ shipping.city }}</p>
                    <p>聯絡電話 : {{ shipping.phone }}</p>
                    <p>收件人手機：{{ shipping.phone }}</p>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
//官方套件
import { ref, onMounted, computed } from "vue";
import axios from "axios";
import Loading from "vue-loading-overlay";
import "vue-loading-overlay/dist/css/index.css";

const props = defineProps({
    order: Object,
});

const billing = ref([]);
const shipping = ref([]);
const isLoading = ref(false);
const fullPage = ref(true);
onMounted(async () => {
    const params = {
        order_id: props.order.order_id,
        count: props.order.count,
    };
    try {
        isLoading.value = true;
        const response = await axios.get(
            `${import.meta.env.VITE_BACKEND_PATH}api/gc/order/culture/detail`,
            { params: params }
        );
        billing.value = response.data.billing_address;
        shipping.value = response.data.shipping_address;
    } catch (error) {
        console.error("API 請求失敗:", error);
    } finally {
        isLoading.value = false;
    }
});

//小計
const productTotal = computed(() => {
    
    if(props.order.item) {
        return props.order.item.reduce(
        (total, item) => total + item.price * item.count,
        0
     );    
    }
    return null;
});

//自製組件
</script>
<style scoped>
.title {
    font-family: Noto Serif TC;
    font-size: 28px;
    font-weight: 600;
    line-height: 40px;
    letter-spacing: 0.2em;
    text-align: left;
    margin-bottom: 10px;
}
.focus {
    color: #543118;
}
.order_list_btn {
    width: 152px;
    height: 43px;
    background-color: #ceb96e;
    color: #ffffff;
    outline: none;
    border-radius: 0;
    border: none;
}
.order_list_btn:hover {
    color: #ceb96e;
    background-color: #ffffff;
}
.notice {
    color: #543118;
}
.mobile_order {
    border: 1px solid #d9d9d9;
    margin-bottom: 30px;
    padding-left: 8px;
    padding-right: 8px;
}
.payment {
    margin-top: 30px;
    margin-bottom: 20px;
    font-family: Noto Serif TC;
    font-size: 24px;
    font-weight: 500;
    line-height: 34px;
    letter-spacing: 0.2em;
    text-align: left;
    color: #000000;
}
.list {
    padding: 40px 0;
    border-bottom: 2px dotted #aaaaaa;
}
.line {
    display: flex;
    justify-content: space-between;
    border-bottom: 2px solid #eeeeee;
    padding: 10px 0;
}
</style>
