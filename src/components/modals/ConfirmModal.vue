<template>
    <VueFinalModal
      class="flex justify-center items-center"
      content-class="flex flex-col p-4 bg-white dark:bg-black rounded-lg border border-gray-100 dark:border-gray-800 "
    >   <div class="flex justify-end">
          <img class="close" src="../../assets/modal/close.png" alt="" @click="emit('confirm')">
        </div>
        <div class="w-360px px-10px pt-30px">
            <div class="flex mb-30px">
                <!-- <img class="check mr-5px" src="../../assets/modal/check_mark_icon.svg" alt=""> -->
                <p class="msg">確認要取消此訂單嗎</p>
            </div>
            <div class="flex gap-20px">
                <button class="know_btn" @click="emit('confirm')">回頁面</button>
                <button class="know_btn delete" @click="emit('delete')">取消訂單</button>
            </div>
        </div>
    </VueFinalModal>
  </template>
<script setup>
//官方套件
import { ref } from 'vue';
import { VueFinalModal } from 'vue-final-modal'
import axios from "axios";

//自製元件
const props = defineProps({
  order_id: Number,
});

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