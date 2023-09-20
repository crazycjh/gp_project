<template>
  <div class="cover">
     <Header />
       <router-view  :key="$route.path"/>
     <Footer />
     <ModalsContainer />
  </div>

</template>
<script setup>
//官方套件
import { ModalsContainer } from 'vue-final-modal'

//自製元件
import Header from "@/components/global/header/Header.vue"
import Footer from "./components/global/Footer.vue";

//pinia
import { uselatest } from '@/store/latest.js'
const latest = uselatest(); 
import { useGods } from '@/store/gods.js'
const godsStore = useGods(); 
</script>



<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
.cover{
    background-image: url('../src/assets/index/home_bg1_2.svg');
    background-repeat: repeat;
    background-size: 282px auto;
    background-color: #ffffff;
}
</style>
