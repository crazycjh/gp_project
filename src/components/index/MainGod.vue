<script setup lang="ts">
import Title from '@/components/widget/Title.vue'
</script>
<template>
    <div class="main pb-30 relative">
        <Title title="主祀神" />
        <div class="lg:px-350 flex gap-10px flex-wrap justify-center ">
                <img src="https://demo2.gcreate.com.tw/gc_godpray/wp-content/uploads/2023/08/god_img1.svg" alt="">
                <img src="https://demo2.gcreate.com.tw/gc_godpray/wp-content/uploads/2023/08/god_img2.svg" alt="">
                <img src="https://demo2.gcreate.com.tw/gc_godpray/wp-content/uploads/2023/08/god_img3.svg" alt="">
                <img src="https://demo2.gcreate.com.tw/gc_godpray/wp-content/uploads/2023/08/god_img4.svg" alt="">
                <img src="https://demo2.gcreate.com.tw/gc_godpray/wp-content/uploads/2023/08/god_img5.svg" alt="">
                <img src="https://demo2.gcreate.com.tw/gc_godpray/wp-content/uploads/2023/08/god_img6.svg" alt="">
                <img src="https://demo2.gcreate.com.tw/gc_godpray/wp-content/uploads/2023/08/god_img7.svg" alt="">
                <img src="https://demo2.gcreate.com.tw/gc_godpray/wp-content/uploads/2023/08/god_img8.svg" alt="">
                <img src="https://demo2.gcreate.com.tw/gc_godpray/wp-content/uploads/2023/08/god_img9.svg" alt="">
                <img src="https://demo2.gcreate.com.tw/gc_godpray/wp-content/uploads/2023/08/god_img10.svg" alt="">
                <img src="https://demo2.gcreate.com.tw/gc_godpray/wp-content/uploads/2023/08/god_img11.svg" alt="">
                <img src="https://demo2.gcreate.com.tw/gc_godpray/wp-content/uploads/2023/08/god_img12.svg" alt="">
        </div>
        <img class="left" src="https://demo2.gcreate.com.tw/gc_godpray/wp-content/uploads/2023/08/god_bg1.svg" alt="">
        <img class="right" src="https://demo2.gcreate.com.tw/gc_godpray/wp-content/uploads/2023/08/god_bg2.svg" alt="">
    </div>
</template>
<style scoped>
.main{
    background-color: #F4F1E4;
}
.left{
    position: absolute;
    top:0;
}
.right{
    position: absolute;
    top:0;
    right:0;
}
@media (max-width: 1440px) {
    .left,.right{
        display:none;
    }
}
</style>