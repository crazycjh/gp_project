<template>
    <div class="flex mx-auto max-w-1200px md:px-50px">
        <img class="hidden lg:block" src="../../assets/index/temple_bg02.svg" alt="">
        <div class="py-40px px-20px w-full">
            <h4 class="title mb-20px">| 代辦事項 |</h4>
            <div class="flex max-sm:flex-col max-sm:gap-20px sm:justify-between w-full sm:items-center">
                <p class="max-w-400px  max-ld:max-w-300px">內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文</p>
                <div class="flex max-md:justify-center">
                    <InnerLinkBtn text="了解更多" link="/latest/all" />
                </div>
            </div>
        </div>
    </div>
 </template>
 <script setup >
import InnerLinkBtn from '../widget/InnerLinkBtn.vue';
 </script>
 <style scoped>
 h5{
    max-width:333px;
    color: #FFF;
    text-align: center;
    font-family: Noto Serif TC;
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
 }
 .title{
    color:#920000;
    font-family: Noto Serif TC;
    font-size: 20px;
    font-weight: 700;
    line-height: 29px;
    letter-spacing: 0.2em;
    text-align: left;
 }
 </style>