<script setup lang="ts">

const props = defineProps({
  link: String 
});
</script>
<template>
    <router-link :to="link" class="slider_button relative z-50">了解更多</router-link>
</template>
<style scoped>
.slider_button {
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
</style>
