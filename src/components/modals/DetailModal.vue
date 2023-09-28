<template>
   <VueFinalModal
      content-transition="vfm-fade"
      overlay-transition="vfm-fade"
      content-class="absolute inset-0"
      @update:model-value="(val) => emit('update:modelValue', val)"
    >   
        <div class="max-w-1200px mx-auto px-10px pt-60px pb-30px absolute inset-0 h-full overflow-auto">
            <div class="flex justify-end">
                <img class="close" src="../../assets/modal/close.png" alt="" @click="emit('confirm')">
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
            </div>
            <div class="w-full">
                <h4 class="title">付款資訊</h4>
                <div class="line">
                    <span>燈別:</span>
                    <span>{{ productName }} x {{ count }}</span>
                </div>
                <div class="line">
                    <span>總計:</span>
                    <span>{{ productPrice*count }} </span>
                </div>
                <div class="line">
                    <span>付款方式:</span>
                    <span>{{ payment }}</span>
                </div>
                <div class="mark">
                    <h4 class="mb-10px">備註:</h4>
                    <span>{{ remark }}</span>
                </div>
            </div>
            <div class="flex gap-20px">
                <button class="send_btn">確認送出</button>
                <button class="back_btn">修正資料</button>
            </div>
        </div>
    </VueFinalModal>
  </template>
<script setup>
//官方套件
import { ref,computed } from 'vue';
import { VueFinalModal } from 'vue-final-modal'
import axios from "axios";

//自製元件
defineProps({
  productName: String,
  productPrice:String,
  customer:Object,
  prayer:Object,
  payment:String,
  remark:String,
  count:Number,
  productID:String,
});
const emit = defineEmits(['confirm']);


</script>


<style scoped>
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
    height: 100%;
    overflow: scroll;
    width: 1200px;
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