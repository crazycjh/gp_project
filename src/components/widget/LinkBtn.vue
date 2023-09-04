<script setup lang="ts">
const backend = import.meta.env.VITE_BACKEND_PATH
const props = defineProps({
  link: String, 
  text:String,
  red: [String, Boolean], 
  icon: [String, Boolean], 
});
</script>
<template>
    <router-link v-if="props.link" :to="props.link.toString()" :class="{'red':red}" class="slider_button relative z-30">
      <img v-if="icon" class="mr-1" :src="`${backend}wp-content/uploads/2023/09/live-icon-01.svg`" alt="" >
       {{text}}
    </router-link>
</template>
<style scoped>
img{
  width: 20px;
}
.red{
  width: 150px !important;
  background-color:#920000 !important;
}
.red:hover{
  background-color: #ffffff !important;
  color:#920000 !important;
  border:none !important;
}
.red:hover img{
  color:#920000;
}
.slider_button {
  letter-spacing: 2px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 114px;
  height: 43px;
  padding: 10px 20px;
  background-color: #ceb96e;
  color: #ffffff;
}
.slider_button:hover{
  border: 1px solid #CEB96E;
  background: #FFF;
  color: #CEB96E;
}
</style>
