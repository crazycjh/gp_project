<template>
    <img class="back-to-top" @click="scrollToTop" :src="`${backend}wp-content/uploads/2023/12/top_icon.svg`" alt="">
</template>

<script setup>
const backend = import.meta.env.VITE_BACKEND_PATH

const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth'});
}

</script>
<style scoped>
.back-to-top {
    position:fixed;
    bottom:20px;
    right:20px;
    z-index: 999;
    cursor: pointer;
    width:60px;
    height:60px;
}
</style>