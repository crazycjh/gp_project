<template>
    <VueFinalModal
      class="flex justify-center items-center"
      content-class="flex flex-col p-4 bg-white dark:bg-black rounded-lg border border-gray-100 dark:border-gray-800 "
    >   <div class="flex justify-end">
          <img class="close" src="../../assets/modal/close.png" alt="" @click="emit('confirm')">
        </div>
        <div class=" px-10px ">
            <div class="flex mb-30px">
                <img class="check mr-5px" :src="image" alt="">
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
  image: String,
});
const emit = defineEmits(['confirm']);
</script>


<style scoped>
.check {
    width: 800px;
    height: 800px;
}
</style>