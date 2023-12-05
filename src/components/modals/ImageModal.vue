<template>
    <VueFinalModal
      class="flex justify-center items-center"
      content-class="flex flex-col  bg-white dark:bg-black rounded-lg border-gray-100 dark:border-gray-800 "
    >   
        <div>
            <div class="relative img_container">
              <img class="left_arrow" src="../../assets/products/culture/product_arrow_left_icon.svg" @click="emit('previous-swiper')">
              <img class="focus_img" :src="image" alt="">
              <img class="right_arrow" src="../../assets/products/culture/product_arrow_right_icon.svg" @click="emit('next-swiper')">
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
const emit = defineEmits(['confirm','previous-swiper','next-swiper']);
</script>


<style scoped>

.left_arrow{
  position:absolute;
  top:50%;
  left:-10%;
  cursor:pointer;
}
.right_arrow{
  position:absolute;
  top:50%;
  right:-10%;
  cursor:pointer;
}
@media (max-width: 1024px){
  .left_arrow{
    left:5%;
  }
  .right_arrow{
    right:5%;
  }
}
.focus_img{
  width:800px;
  height:800px;
}
@media(max-width: 768px){
  .focus_img {
    width: 100%;
    height: 100%;
  }
}

</style>