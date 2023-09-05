<script setup lang="ts">
// @ts-ignore
import Header from "@/components/global/header/Header.vue"
import Footer from "./components/global/Footer.vue";
</script>

<template>
   <div class="cover">
      <Header />
        <router-view />
      <Footer />
   </div>

</template>

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
    background-image: url(https://demo2.gcreate.com.tw/gc_godpray/wp-content/uploads/2023/09/home_bg1_2.svg);
    background-repeat: repeat;
    background-size: 282px auto;
    background-color: #ffffff;
}
</style>
