<script setup lang="ts">
    const backend = import.meta.env.VITE_BACKEND_PATH
</script>
<template>
    <div class="border-b border-gray-300">
        <div class="mx-auto max-w-1200px">
            <h6 class="py-2">首頁/鎮南宮</h6>
        </div>
    </div>
    <div  class="mx-auto max-w-1200px mt-40px mb-100">
        <div class="flex flex-col lg:flex-row items-center ">
            <div>
                <img  :src="`${backend}wp-content/uploads/2023/08/temple_demo_img1.jpg`" alt="">
            </div>
            <div class="flex flex-col ml-20px">
                <h4 class="title mb-20px">廟宇全名1</h4>
                <div class="flex mb-10px">
                    <img class="icon" :src="`${backend}wp-content/uploads/2023/08/incense_burner_icon.svg`" alt="">
                    <p>主神 : 媽祖、月下老人</p>
                </div>
                <div class="flex mb-10px">
                    <img class="icon" :src="`${backend}wp-content/uploads/2023/08/map_icon.svg`" alt="">
                    <p>地址 : 宜蘭縣頭城鎮竹安里頭濱路二段426號</p>
                </div>
                <div class="flex mb-20px">
                    <img class="icon" :src="`${backend}wp-content/uploads/2023/08/phone_icon.svg`" alt="">
                    <p>主神 : 媽祖、月下老人</p>
                </div>
                <div>
                    <p class="max-w-570px">簡短介紹簡短介紹簡短介紹簡短介紹簡短介紹簡短介紹簡短介紹簡短介紹簡短介紹簡短介紹簡短介紹簡短介紹簡短介紹簡短介紹簡短介紹簡短介紹簡短介紹簡短介紹簡短介紹簡短介紹簡短介紹簡短介紹簡短介紹簡短</p>
                </div>
            </div>
        </div>
        <div class="mt-50px py-1">
            <h4 class="border_title">直播影片</h4>
        </div>
        <div class="custom_border">
            <div class="flex flex-col lg:flex-row py-30">
                <div class="flex flex-col justify-center max-w-570px px-10 mr-20px">
                    <h5 class="inner_title">活動標題活動標題活動標題活動標題活動標題活動標題活動標題</h5>
                    <p>簡短介紹簡短介紹簡短介紹簡短介紹簡短介紹簡短介紹簡短介紹簡短介紹簡短介紹簡短介紹簡短介紹簡短介紹簡短介紹簡短介紹簡短介紹簡短介紹簡短介紹</p>
                </div>
                <div>
                    <img class="w-full" :src="`${backend}wp-content/uploads/2023/08/video_demo2.jpg`" alt="">
                </div>
            </div>
        </div>
        <div class="mt-50px py-1">
            <h4 class="border_title">廟宇服務</h4>
        </div>
        <div class="custom_border py-20 custom_bottom">
            <h6 class="service mb-2 px-10">|點燈|</h6>
            <div class="flex flex-col lg:flex-row justify-between mb-25px px-10">
                <p class="max-w-960px">簡短介紹簡短介紹簡短介紹簡短介紹簡短介紹簡短介紹簡短介紹簡短介紹簡短介紹簡短介紹簡短介紹簡短介紹簡短介紹簡短介短介紹簡短介紹簡短介紹簡短介簡短介紹簡短介紹簡短介紹簡短介紹</p>
                <button class="btn btn6">
                    <a href="#">光明燈詳細介紹</a>
                </button>

            </div>
            <div class="flex flex-wrap gap-10px max-lg:justify-center">
                <div class="flex flex-col">
                    <img class="light" :src="`${backend}wp-content/uploads/2023/08/light_img2.png`" alt="">
                    <h5 class="service_active">安太歲</h5>
                    <span class="service_price">NT.500</span>
                </div>
                <div class="flex flex-col">
                    <img class="light" :src="`${backend}wp-content/uploads/2023/08/light_img2.png`" alt="">
                    <h5>安太歲</h5>
                    <span class="service_price">NT.500</span>
                </div>
                <div class="flex flex-col">
                    <img class="light" :src="`${backend}wp-content/uploads/2023/08/light_img2.png`" alt="">
                    <h5>安太歲</h5>
                    <span class="service_price">NT.500</span>
                </div>
                <div class="flex flex-col">
                    <img class="light" :src="`${backend}wp-content/uploads/2023/08/light_img2.png`" alt="">
                    <h5>安太歲</h5>
                    <span class="service_price">NT.500</span>
                </div>
                <div class="flex flex-col">
                    <img class="light" :src="`${backend}wp-content/uploads/2023/08/light_img2.png`" alt="">
                    <h5>安太歲</h5>
                    <span class="service_price">NT.500</span>
                </div>
                <div class="flex flex-col">
                    <img class="light" :src="`${backend}wp-content/uploads/2023/08/light_img2.png`" alt="">
                    <h5>安太歲</h5>
                    <span class="service_price">NT.500</span>
                </div>
                <div class="flex flex-col">
                    <img class="light" :src="`${backend}wp-content/uploads/2023/08/light_img2.png`" alt="">
                    <h5>安太歲</h5>
                    <span class="service_price">NT.500</span>
                </div>
                <div class="flex flex-col">
                    <img class="light" :src="`${backend}wp-content/uploads/2023/08/light_img2.png`" alt="">
                    <h5>安太歲</h5>
                    <span class="service_price">NT.500</span>
                </div>
            </div>
        </div>
        <div class="py-20">
            <h6 class="service mb-2 px-10">|疏文|</h6>
            <div class="flex flex-col lg:flex-row justify-between mb-25px px-10">
                <p class="max-w-960px">簡短介紹簡短介紹簡短介紹簡短介紹簡短介紹簡短介紹簡短介紹簡短介紹簡短介紹簡短介紹簡短介紹簡短介紹簡短介紹簡短介短介紹簡短介紹簡短介紹簡短介簡短介紹簡短介紹簡短介紹簡短介紹</p>
                <button class="btn btn6">
                    <a href="#">光明燈詳細介紹</a>
                </button>
            </div>
            <div class="flex flex-wrap gap-10px max-lg:justify-center">
                <div class="flex flex-col">
                    <img class="light" :src="`${backend}wp-content/uploads/2023/08/shuwen_img2.png`" alt="">
                    <h5 class="service_active">歷代祖先</h5>
                    <span class="service_price">NT.500</span>
                </div>
                <div class="flex flex-col">
                    <img class="light" :src="`${backend}wp-content/uploads/2023/08/shuwen_img2.png`" alt="">
                    <h5>補財庫</h5>
                    <span class="service_price">NT.500</span>
                </div>
                <div class="flex flex-col">
                    <img class="light" :src="`${backend}wp-content/uploads/2023/08/shuwen_img2.png`" alt="">
                    <h5>個人祖先</h5>
                    <span class="service_price">NT.500</span>
                </div>
                <div class="flex flex-col">
                    <img class="light" :src="`${backend}wp-content/uploads/2023/08/shuwen_img2.png`" alt="">
                    <h5>安太歲</h5>
                    <span class="service_price">NT.500</span>
                </div>
                <div class="flex flex-col">
                    <img class="light" :src="`${backend}wp-content/uploads/2023/08/shuwen_img2.png`" alt="">
                    <h5>安太歲</h5>
                    <span class="service_price">NT.500</span>
                </div>
                <div class="flex flex-col">
                    <img class="light" :src="`${backend}wp-content/uploads/2023/08/shuwen_img2.png`" alt="">
                    <h5>安太歲</h5>
                    <span class="service_price">NT.500</span>
                </div>
                <div class="flex flex-col">
                    <img class="light" :src="`${backend}wp-content/uploads/2023/08/shuwen_img2.png`" alt="">
                    <h5>安太歲</h5>
                    <span class="service_price">NT.500</span>
                </div>
                <div class="flex flex-col">
                    <img class="light" :src="`${backend}wp-content/uploads/2023/08/shuwen_img2.png`" alt="">
                    <h5>安太歲</h5>
                    <span class="service_price">NT.500</span>
                </div>
            </div>
        </div>
    </div>
</template>
<style scoped>
.btn6 {
  position: relative;
  border: none;
  border-bottom: 1px solid #CEB96E;
  color:#CEB96E;
  font-size:16px;
  letter-spacing: 2.4px;
  padding:10px 50px 10px 20px;
  background: #ffffff00;
  
}
.btn6::before {
	content: "";
	display: block;
	width: 30px;
	height: 1px;
	background: #CEB96E;
	rotate: 40deg;
	position: absolute;
	right: -3px;
	bottom: 9px;
}

.btn6:hover {
  padding:10px 50px 10px 30px;
}

a{
  text-decoration:none;
  color:black;

}
.custom_bottom{
    border-bottom: 1px solid #EEEEEE;
}
.service_active{
    color:#CEB96E;
}
.service_price{
    color:#920000;
}
.light{
    margin-bottom: 10px;
    width: 191px;
    height: 191px;
}
.service{
    font-family: Noto Serif TC;
    font-size: 20px;
    font-weight: 700;
    line-height: 29px;
    letter-spacing: 0.1em;
    text-align: left;
    color:#920000;
}
.custom_border{
    border-top:1px solid #CEB96E;
}
.inner_title{
    font-family: Noto Serif TC;
    font-size: 28px;
    font-weight: 700;
    line-height: 40px;
    letter-spacing: 0.1em;
    text-align: left;
    color:#333333;
    margin-bottom: 16px;
}
.border_title{
    font-family: Noto Serif TC;
    font-size: 24px;
    font-weight: 700;
    line-height: 34px;
    letter-spacing: 0.1em;
    text-align: left;
    color:#333333;
}
.icon{
    width: 20px;
    height: 20px;
}
.title{
    font-family: Noto Serif TC;
    font-size: 36px;
    font-weight: 700;
    line-height: 52px;
    letter-spacing: 0.2em;
    text-align: left;
    color:#543118;
}
@media(min-width:1024px){
    .temple1{
        width: 600px;
        height: 337px;
    }
}
.temple1{   
    width: 410px;
    height: 230px;
}
</style>