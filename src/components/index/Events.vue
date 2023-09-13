<script setup >
import { onMounted,ref } from "vue";
import axios from "axios";
import Title from '@/components/widget/Title.vue'
import InnerLinkBtn from "../widget/InnerLinkBtn.vue";
const backend = import.meta.env.VITE_BACKEND_PATH

const posts = ref([]);
onMounted(async () => {
  try {
    const response = await axios.get(
      `${import.meta.env.VITE_BACKEND_PATH}/api/gc/latest/index`
    );
    posts.value = response.data.latest;
  } catch (error) {
    console.error("API 請求失敗:", error);
  }
});
</script>
<template>
   <div class="relative">
      <Title title="最新活動" />
      <div class="flex justify-center flex-wrap gap-5 px-10px mx-auto max-w-1200px">
         <div v-for="item in posts" :key="item.id" class="flex z-10 max-md:w-full max-md:px-10px max-2xl:w-45%">
            <router-link :to="`/latest/inner/${item.id}`">
               <div>
                  <img class="event_img" :src="`${item.image}`">
               </div>
            </router-link>
            <div class="ml-10px flex flex-col justify-center">
               <p class="mb-10px date">{{ item.date }}</p>
               <h6 class="title max-w-xs">{{ item.title }}</h6>
            </div>
         </div>
      </div>
      <div class="flex justify-center py-30px">
         <InnerLinkBtn text="更多活動" link="/latest/all"/>
      </div>
      <img class="tree_left" :src="`${backend}/wp-content/uploads/2023/08/home_bg3.svg`" alt="">
   </div>
</template>
<style scoped>
.event_img{
   object-fit: cover;
}
@media (max-width: 480px) {
   .event_img{
      width: 136px !important;
      height: 136px !important;
   } 
}
.event_img{
   width: 243px;
   height: 136px;
}

.date{
   color: #920000;
   font-family: Noto Serif TC;
   font-size: 16px;
   font-style: normal;
   font-weight: 400;
   line-height: normal;
}
.title{
   letter-spacing: 2.4px;
   color: #000000;
   font-family: Noto Serif TC;
   font-size: 20px;
   font-style: normal;
   font-weight: 400;
   line-height: normal;
}
@media (max-width: 1024px) {
   .tree_left{
      display: none;
   }
   .event_img{
      width: 200px !important;
      height: 110px !important;
   }
}
@media(max-width:1440px){
   .title{
      font-size:16px;
      letter-spacing: 0;
   }
}
.tree_left{
   position: absolute;
   top:30%;
   left:0;
}
</style>