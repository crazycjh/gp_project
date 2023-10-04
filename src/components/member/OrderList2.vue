<template>
    <div class="py-40px md:px-50px">
        <h4 class="mb-20px">訂單編號 <span class="notice">#{{ order.order_id }}</span> 於<span class="notice">{{ order.date }}</span> 下單，目前狀態為
            <span class="notice">{{ order.status }}</span>。</h4>
        <div class="mb-30px">
            <div class="line">
                <h5>商品</h5>
                <h5>總計</h5>
            </div>
            <div class="line">
                <h5><span class="focus">大富大貴黃金檀手珠</span> × 5</h5>
                <h5>NT$5,000</h5>
            </div>
            <div class="line">
                <h5><span class="focus">【鎮瀾宮】宮徽香灰球吊飾｜擋煞｜保平安｜隨身庇佑｜過爐</span> × 1</h5>
                <h5>NT$239</h5>
            </div>
            <div class="line">
                <h5>小計:</h5>
                <h5>NT$239</h5>
            </div>
            <div class="line">
                <h5>折扣:</h5>
                <h5>-NT$100</h5>
            </div>
            <div class="line">
                <h5>運送方式:</h5>
                <h5>NT$80</h5>
            </div>
            <div class="line">
                <h5>付款方式:</h5>
                <h5>信用卡付款</h5>
            </div>
            <div class=" line">
                <h6 class="">總計:</h6>
                <p>NT$5,219</p>
            </div>
        </div>
        <div class="flex flex-col md:flex-row gap-20px md:gap-50px">
            <div>
                <h4 class="title">帳單地址</h4>
                <div class="flex flex-col gap-5px">
                    <p>姓名 : 林君豪</p>
                    <p>地址 : 330桃園市,桃園區</p>
                    <p>詳細地址 : 經國路246號</p>
                    <p>聯絡電話 : 0912345678</p>
                    <p>Emai:lia9021102@gmail.com</p>
                </div>
            </div>
            <div>
                <h4 class="title">運送地址</h4>
                <div class="flex flex-col gap-5px">
                    <p>姓名 : 林君豪</p>
                    <p>地址 : 330桃園市,桃園區</p>
                    <p>詳細地址 : 經國路246號</p>
                    <p>聯絡電話 : 0912345678</p>
                    <p>收件人手機：0912345678</p>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
//官方套件
import { ref,onMounted } from 'vue';
import axios from "axios";

const props = defineProps({
    order:Object
})
const prayers = ref([])
onMounted(async () => {
  const params = {
       order_id:props.order.order_id,
       count:props.order.count
  };
  try {
    const response = await axios.get(
     
      `${import.meta.env.VITE_BACKEND_PATH}/api/gc/order/light/detail`,
      {params:params,}
    );
    prayers.value = response.data;
  } catch (error) {
    console.error("API 請求失敗:", error);
  }
});


//自製組件

</script>
<style scoped>
.title{
    font-family: Noto Serif TC;
    font-size: 28px;
    font-weight: 600;
    line-height: 40px;
    letter-spacing: 0.2em;
    text-align: left;
    margin-bottom: 10px;
}
.focus{
    color:#543118;
}
.order_list_btn{
    width: 152px;
    height: 43px;
    background-color: #CEB96E;
    color:#ffffff;
    outline: none;
    border-radius: 0;
    border: none;
}
.order_list_btn:hover{
    color:#CEB96E;
    background-color: #ffffff;
}
.notice{
    color:#543118;
}
.mobile_order{
    border:1px solid #D9D9D9;
    margin-bottom:30px;
    padding-left:8px;
    padding-right: 8px;
}
.payment{
    margin-top: 30px;
    margin-bottom: 20px;
    font-family: Noto Serif TC;
    font-size: 24px;
    font-weight: 500;
    line-height: 34px;
    letter-spacing: 0.2em;
    text-align: left;
    color:#000000;

}
.list{
    padding: 40px 0;
    border-bottom:  2px dotted #AAAAAA;
}
.line{
    display: flex;
    justify-content: space-between;
    border-bottom: 2px solid #EEEEEE;
    padding:10px 0;
}
</style>