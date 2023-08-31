<script setup lang="ts">
const props = defineProps({
  link: String, 
  text:String
});
</script>
<template>
    <router-link v-if="props.link" :to="props.link.toString()" class="slider_button relative z-30">{{text}}</router-link>
</template>
<style scoped>
.slider_button {
  letter-spacing: 2px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 114px;
  height: 43px;
  padding: 10px, 20px, 10px, 20px;
  background-color: #ceb96e;
  color: #ffffff;
}
.slider_button:hover{
  border: 1px solid #CEB96E;
  background: #FFF;
  color: #CEB96E;
}
</style>
