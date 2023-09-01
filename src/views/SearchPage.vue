<script setup lang="ts">
import Search from '../components/index/Search.vue'
const backend = import.meta.env.VITE_BACKEND_PATH
</script>
<template>
    <div class="relative flex justify-center items-center">
        <img class="h-300 object-cover" :src="`${backend}wp-content/uploads/2023/08/temple_banner.jpg`" alt="">
        <h2 class="title z-10">全台廟宇</h2>
    </div>
    <div class="border-b border-gray-300">
        <div class="mx-auto max-w-1200px">
            <h6 class="py-2">首頁/全台廟宇</h6>
        </div>
    </div>
    <div class="mx-auto max-w-1200px">
        <Search />
        <div class="w-full flex gap-30px flex-wrap mt-40px">
            <div class="w-full flex flex-col gap-10px block max-lg:px-10px">
                <img class="photo" :src="`${backend}wp-content/uploads/2023/08/temple_demo_img1.jpg`" alt="">
                <h4>廟宇全名1</h4>
                <p>主神 : 媽祖、月下老人</p>
                <p>地址 : 宜蘭縣頭城鎮竹安里頭濱路二段426號鎮竹       
                安里頭濱路二段426號</p>
                <router-link to="/temple">了解更多></router-link>
            </div>
            <div class="w-full flex flex-col gap-10px block max-lg:px-10px">
                <img class="photo" :src="`${backend}wp-content/uploads/2023/08/temple_demo_img1.jpg`" alt="">
                <h4>廟宇全名1</h4>
                <p>主神 : 媽祖、月下老人</p>
                <p>地址 : 宜蘭縣頭城鎮竹安里頭濱路二段426號鎮竹       
                安里頭濱路二段426號</p>
                <router-link to="/">了解更多></router-link>
            </div>
            <div class="w-full flex flex-col gap-10px block max-lg:px-10px">
                <img class="photo" :src="`${backend}wp-content/uploads/2023/08/temple_demo_img1.jpg`" alt="">
                <h4>廟宇全名1</h4>
                <p>主神 : 媽祖、月下老人</p>
                <p>地址 : 宜蘭縣頭城鎮竹安里頭濱路二段426號鎮竹       
                安里頭濱路二段426號</p>
                <router-link to="/">了解更多></router-link>
            </div>
            <div class="w-full flex flex-col gap-10px block max-lg:px-10px">
                <img class="photo" :src="`${backend}wp-content/uploads/2023/08/temple_demo_img1.jpg`" alt="">
                <h4>廟宇全名1</h4>
                <p>主神 : 媽祖、月下老人</p>
                <p>地址 : 宜蘭縣頭城鎮竹安里頭濱路二段426號鎮竹       
                安里頭濱路二段426號</p>
                <router-link to="/">了解更多></router-link>
            </div>
            <div class="w-full flex flex-col gap-10px block max-lg:px-10px">
                <img class="photo" :src="`${backend}wp-content/uploads/2023/08/temple_demo_img1.jpg`" alt="">
                <h4>廟宇全名1</h4>
                <p>主神 : 媽祖、月下老人</p>
                <p>地址 : 宜蘭縣頭城鎮竹安里頭濱路二段426號鎮竹       
                安里頭濱路二段426號</p>
                <router-link to="/">了解更多></router-link>
            </div>
            <div class="w-full flex flex-col gap-10px block max-lg:px-10px">
                <img class="photo" :src="`${backend}wp-content/uploads/2023/08/temple_demo_img1.jpg`" alt="">
                <h4>廟宇全名1</h4>
                <p>主神 : 媽祖、月下老人</p>
                <p>地址 : 宜蘭縣頭城鎮竹安里頭濱路二段426號鎮竹       
                安里頭濱路二段426號</p>
                <router-link to="/">了解更多></router-link>
            </div>
            <div class="w-full flex flex-col gap-10px block max-lg:px-10px">
                <img class="photo" :src="`${backend}wp-content/uploads/2023/08/temple_demo_img1.jpg`" alt="">
                <h4>廟宇全名1</h4>
                <p>主神 : 媽祖、月下老人</p>
                <p>地址 : 宜蘭縣頭城鎮竹安里頭濱路二段426號鎮竹       
                安里頭濱路二段426號</p>
                <router-link to="/">了解更多></router-link>
            </div>
            <div class="w-full flex flex-col gap-10px block max-lg:px-10px">
                <img class="photo" :src="`${backend}wp-content/uploads/2023/08/temple_demo_img1.jpg`" alt="">
                <h4>廟宇全名1</h4>
                <p>主神 : 媽祖、月下老人</p>
                <p>地址 : 宜蘭縣頭城鎮竹安里頭濱路二段426號鎮竹       
                安里頭濱路二段426號</p>
                <router-link to="/">了解更多></router-link>
            </div>
            <div class="w-full flex flex-col gap-10px block max-lg:px-10px">
                <img class="photo" :src="`${backend}wp-content/uploads/2023/08/temple_demo_img1.jpg`" alt="">
                <h4>廟宇全名1</h4>
                <p>主神 : 媽祖、月下老人</p>
                <p>地址 : 宜蘭縣頭城鎮竹安里頭濱路二段426號鎮竹       
                安里頭濱路二段426號</p>
                <router-link to="/">了解更多></router-link>
            </div>
            <div class="w-full flex flex-col gap-10px block max-lg:px-10px">
                <img class="photo" :src="`${backend}wp-content/uploads/2023/08/temple_demo_img1.jpg`" alt="">
                <h4>廟宇全名1</h4>
                <p>主神 : 媽祖、月下老人</p>
                <p>地址 : 宜蘭縣頭城鎮竹安里頭濱路二段426號鎮竹       
                安里頭濱路二段426號</p>
                <router-link to="/">了解更多></router-link>
            </div>
            <div class="w-full flex flex-col gap-10px block max-lg:px-10px">
                <img class="photo" :src="`${backend}wp-content/uploads/2023/08/temple_demo_img1.jpg`" alt="">
                <h4>廟宇全名1</h4>
                <p>主神 : 媽祖、月下老人</p>
                <p>地址 : 宜蘭縣頭城鎮竹安里頭濱路二段426號鎮竹       
                安里頭濱路二段426號</p>
                <router-link to="/">了解更多></router-link>
            </div>
            <div class="w-full flex flex-col gap-10px block max-lg:px-10px">
                <img class="photo" :src="`${backend}wp-content/uploads/2023/08/temple_demo_img1.jpg`" alt="">
                <h4>廟宇全名1</h4>
                <p>主神 : 媽祖、月下老人</p>
                <p>地址 : 宜蘭縣頭城鎮竹安里頭濱路二段426號鎮竹       
                安里頭濱路二段426號</p>
                <router-link to="/">了解更多></router-link>
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
.photo{
    width: 100%;
}
@media(min-width: 1024px){
    .block{
        width: 380px;
    }
    .photo{
        width: 380px;
        height:213.75px;
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
    font-size: 16px;
    font-weight: 500;
    line-height: 23px;
    letter-spacing: 0em;
    text-align: left;
    max-width: 350px;
}
a{  
    margin-top: -4px;
    color:#CEB96E;
}
</style>