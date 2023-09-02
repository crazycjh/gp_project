<script setup lang="ts">
const backend = import.meta.env.VITE_BACKEND_PATH
</script>
<template>
    <div class="relative flex justify-center items-center">
        <img class="h-300 object-cover" :src="`${backend}wp-content/uploads/2023/08/god_banner.jpg`" alt="">
        <h2 class="title z-10">最新活動</h2>
    </div>
    <div class="border-b border-gray-300">
        <div class="mx-auto max-w-1200px">
            <h6 class="py-2">首頁/最新活動</h6>
        </div>
    </div>
    <div class="tags flex justify-center gap-10px my-50px max-lg:flex-wrap">
        <button class="btn rounded-none">最新消息</button>
        <button class="btn rounded-none">熱門活動</button>
        <button class="btn rounded-none">聖誕千秋</button>
        <button class="btn rounded-none">廟宇繞境</button>
    </div>
    <div class="mx-auto max-w-1200px">
        <div class="w-full flex gap-10px flex-wrap mt-40px justify-center">
            <div class="w-full flex flex-col gap-10px block max-lg:px-10px">
                <img class="photo" :src="`${backend}wp-content/uploads/2023/08/temple_demo_img1.jpg`" alt="">
                <p>DEMO12-活動標題活動標題活動標題活動標題活動</p>
                <router-link to="/latest/inner">了解更多...</router-link>
            </div>
            <div class="w-full flex flex-col gap-10px block max-lg:px-10px">
                <img class="photo" :src="`${backend}wp-content/uploads/2023/08/temple_demo_img1.jpg`" alt="">
                <p>DEMO12-活動標題活動標題活動標題活動標題活動</p>
                <router-link to="/">了解更多...</router-link>
            </div>
            <div class="w-full flex flex-col gap-10px block max-lg:px-10px">
                <img class="photo" :src="`${backend}wp-content/uploads/2023/08/temple_demo_img1.jpg`" alt="">
                <p>DEMO12-活動標題活動標題活動標題活動標題活動</p>
                <router-link to="/">了解更多...</router-link>
            </div>
            <div class="w-full flex flex-col gap-10px block max-lg:px-10px">
                <img class="photo" :src="`${backend}wp-content/uploads/2023/08/temple_demo_img1.jpg`" alt="">
                <p>DEMO12-活動標題活動標題活動標題活動標題活動</p>
                <router-link to="/">了解更多...</router-link>
            </div>
            <div class="w-full flex flex-col gap-10px block max-lg:px-10px">
                <img class="photo" :src="`${backend}wp-content/uploads/2023/08/temple_demo_img1.jpg`" alt="">
                <p>DEMO12-活動標題活動標題活動標題活動標題活動</p>
                <router-link to="/">了解更多...</router-link>
            </div>
            <div class="w-full flex flex-col gap-10px block max-lg:px-10px">
                <img class="photo" :src="`${backend}wp-content/uploads/2023/08/temple_demo_img1.jpg`" alt="">
                <p>DEMO12-活動標題活動標題活動標題活動標題活動</p>
                <router-link to="/">了解更多...</router-link>
            </div>
            <div class="w-full flex flex-col gap-10px block max-lg:px-10px">
                <img class="photo" :src="`${backend}wp-content/uploads/2023/08/temple_demo_img1.jpg`" alt="">
                <p>DEMO12-活動標題活動標題活動標題活動標題活動</p>
                <router-link to="/">了解更多...</router-link>
            </div>
            <div class="w-full flex flex-col gap-10px block max-lg:px-10px">
                <img class="photo" :src="`${backend}wp-content/uploads/2023/08/temple_demo_img1.jpg`" alt="">
                <p>DEMO12-活動標題活動標題活動標題活動標題活動</p>
                <router-link to="/">了解更多...</router-link>
            </div>
            <div class="w-full flex flex-col gap-10px block max-lg:px-10px">
                <img class="photo" :src="`${backend}wp-content/uploads/2023/08/temple_demo_img1.jpg`" alt="">
                <p>DEMO12-活動標題活動標題活動標題活動標題活動</p>
                <router-link to="/">了解更多...</router-link>
            </div>
            <div class="w-full flex flex-col gap-10px block max-lg:px-10px">
                <img class="photo" :src="`${backend}wp-content/uploads/2023/08/temple_demo_img1.jpg`" alt="">
                <p>DEMO12-活動標題活動標題活動標題活動標題活動</p>
                <router-link to="/">了解更多...</router-link>
            </div>
            <div class="w-full flex flex-col gap-10px block max-lg:px-10px">
                <img class="photo" :src="`${backend}wp-content/uploads/2023/08/temple_demo_img1.jpg`" alt="">
                <p>DEMO12-活動標題活動標題活動標題活動標題活動</p>
                <router-link to="/">了解更多...</router-link>
            </div>
            <div class="w-full flex flex-col gap-10px block max-lg:px-10px">
                <img class="photo" :src="`${backend}wp-content/uploads/2023/08/temple_demo_img1.jpg`" alt="">
                <p>DEMO12-活動標題活動標題活動標題活動標題活動</p>
                <router-link to="/">了解更多...</router-link>
            </div>
        </div>
        <div class="flex justify-center my-30px lg:my-50px">
            <p>上一頁  1 2 3  下一頁</p>
        </div>
    </div>
</template>
<style scoped>
.title{
    position: absolute;
    font-family: Noto Serif TC;
    font-size: 36px;
    font-weight: 700;
    line-height: 52px;
    letter-spacing: 0.2em;
    text-align: left;
    color:#ffffff;

}
.btn{
    width:132px;
    height:50px;
    padding: 10px 20px 10px 20px;
    background-color: #EEEEEE;
    color:#777777;
}
.btn:hover{
    background-color: #CEB96E;
    color:#ffffff;
    border:none;
}
.photo{
    width: 100%;
}
@media(min-width: 1024px){
    .block{
        width:280px;
    }
}
h4{ 
    font-family: Noto Serif TC;
    font-size: 24px;
    font-weight: 700;
    line-height: 34px;
    letter-spacing: 0em;
    text-align: left;
    color:#543118;
}
p{  
    font-family: Noto Serif TC;
    font-size: 20px;
    font-weight: 500;
    line-height: 29px;
    letter-spacing: 0em;
    text-align: left;
}
a{  
    margin-top: -4px;
    color:#CEB96E;
}
</style>