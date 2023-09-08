<script setup lang="ts">
import { onMounted, ref, computed } from "vue";
import { useRoute } from 'vue-router';
import axios from "axios";
const backend = import.meta.env.VITE_BACKEND_PATH
import Breadcrumb from '../../components/widget/Breadcrumb.vue';
import TopCover from '../../components/widget/TopCover.vue';
const templeID = ref();
const main_god = ref();
const temple = ref([]);
const light = ref([]);
const shuwen = ref([]);
onMounted(() => {
  const route = useRoute();
  templeID.value = Number(route.params.templeID);
});


onMounted(async () => {
  try {
    const response = await axios.get(
      `${backend}/api/gc/temple/${templeID.value}`
    );
    temple.value = response.data.data;
    console.log(temple.value);
    light.value = response.data.light;
    shuwen.value = response.data.shuwen;
    console.log(shuwen.value);
    main_god.value = temple.value.main_god.split(',').join('、')
    console.log(typeof(temple.value.live_iframe));
  } catch (error) {
    console.error("API 請求失敗:", error);
  }
});
</script>
<template>
    <TopCover v-if="!temple.live_iframe" :image="`${backend}wp-content/uploads/2023/09/shutterstock_606447887.jpg`"/>
    <div  v-if="temple.live_iframe">
        <iframe class="w-full h-300" width="560" height="315" :src="temple.live_iframe" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    </div>
    <Breadcrumb :title="`首頁/${temple.name}`" />
    <div  class="px-10px mx-auto max-w-1200px mt-40px mb-100px">
        <div class="mt-50px py-1">
            <h4 class="border_title">廟宇介紹</h4>
        </div>
        <div class="custom_border">
            <div class="flex flex-col lg:flex-row items-center pt-30px">
                <div class="w-full">
                    <img class="w-full" :src="`${backend}wp-content/uploads/2023/08/temple_demo_img1.jpg`" alt="">
                </div>
                <div class="flex flex-col ml-20px w-full">
                    <h4 class="title mt-20px mb-20px">{{temple.name}}</h4>
                    <div class="flex mb-10px">
                        <img class="icon mr-10px" :src="`${backend}wp-content/uploads/2023/08/incense_burner_icon.svg`" alt="">
                        <p>{{ main_god }}</p>
                    </div>
                    <div class="flex mb-10px">
                        <img class="icon mr-10px" :src="`${backend}wp-content/uploads/2023/08/map_icon.svg`" alt="">
                        <p>{{ temple.address }}</p>
                    </div>
                    <div class="flex mb-20px">
                        <img class="icon mr-10px" :src="`${backend}wp-content/uploads/2023/08/phone_icon.svg`" alt="">
                        <p>{{ temple.phone}}</p>
                    </div>
                <div>
                    <p class="max-w-570px">{{ temple.info }}</p>
                </div>
            </div>
        </div>
            <!-- <div class="flex flex-col lg:flex-row py-30px">
                <div class="flex flex-col justify-center max-w-570px px-10px mr-20px">
                    <h5 class="inner_title">活動標題活動標題活動標題活動標題活動標題活動標題活動標題</h5>
                    <p>簡短介紹簡短介紹簡短介紹簡短介紹簡短介紹簡短介紹簡短介紹簡短介紹簡短介紹簡短介紹簡短介紹簡短介紹簡短介紹簡短介紹簡短介紹簡短介紹簡短介紹</p>
                </div>
                <div>
                    <img class="w-full" :src="`${backend}wp-content/uploads/2023/08/video_demo2.jpg`" alt="">
                </div>
            </div> -->
        </div>
        <div class="mt-50px py-1px">
            <h4 class="border_title">廟宇服務</h4>
        </div>
        <div class="custom_border py-20px custom_bottom">
            <h6 class="service mb-10px px-10px">|點燈|</h6>
            <div class="flex max-md:flex-col flex-row justify-between mb-25px px-10px">
                <p class="md:max-w-960px">{{ temple.light_content }}</p>
                <button class="btn btn6">
                    <a href="#">光明燈詳細介紹</a>
                </button>
            </div>
            <div class="flex flex-wrap gap-10px max-lg:justify-center">
                <div v-for="item in light" :key="item.id" class="flex flex-col lg:w-18% md:w-23% max-md:w-45% " >
                    <img class="light" :src="item.image_url" alt="">
                    <h5 class="service_active">{{item.name}}</h5>
                    <span class="service_price">{{item.price}}</span>
                </div>
            </div>
        </div>
        <div class="py-20px">
            <h6 class="service mb-2 px-10px">|疏文|</h6>
            <div class="flex max-md:flex-col flex-row justify-between mb-25px px-10px">
                <p class="max-w-960px">{{ temple.shuwen_content }}</p>
                <button class="btn btn6">
                    <a href="#">疏文詳細介紹</a>
                </button>
            </div>
            <div class="flex flex-wrap gap-10px max-lg:justify-center">
                <div v-for="item in shuwen" :key="item.id" class="flex flex-col lg:w-18% md:w-23% max-md:w-45%">
                    <img class="light" :src="item.image_url" alt="">
                    <h5 class="service_active">{{item.name}}</h5>
                    <span class="service_price">{{item.price}}</span>
                </div>
            </div>
        </div>
    </div>
</template>
<style scoped>
p,h3,h4,h5,h6{
    color:#000000;
}
.btn6 {
  margin-left: 20px;
  max-height: 50px;
  /* width:200px; */
  position: relative;
  border: none;
  border-bottom: 1px solid #CEB96E;
  color:#CEB96E;
  font-size:16px;
  letter-spacing: 2.4px;
  padding:10px 50px 10px 20px;
  background: #ffffff00;
  border-radius: 0px !important;
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
.btn6 a{
  text-decoration:none;
  color:black;
}
.btn6:hover a{
  color:#CEB96E;
}
.btn6:hover{
    padding:10px 40px 10px 30px;
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
    object-fit: cover;
    margin-bottom: 10px;
    /* width: 191px;
    height: 191px; */
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