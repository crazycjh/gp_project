<template>
    <TopCover :image="`${backend}wp-content/uploads/2023/09/service_banner.jpg`" title="信眾服務" />
    <Breadcrumb title="首頁/信眾服務" />
    <!-- <div class="tags flex justify-center max-md:px-100px gap-10px my-50px flex-wrap">
        <div class="flex gap-10px max-md:gap-20px max-md:max-w-570px max-w-1200px flex-wrap justify-center">
           <button class="btn active">線上點等</button>
           <button class="btn">法會</button>
           <button class="btn">安太歲</button>
           <button class="btn">疏文</button>
        </div>
    </div> -->
    <div class="max-w-1200px mx-auto">
        <div class="light mt-80px">
            <div class="flex flex-col md:flex-row">
                <div class="light_left w-full md:w-45%  px-10px max-md:mb-40px">
                    <h3 class="service_tag mb-30px">－線上點燈</h3>
                    <div class="flex flex-col gap-30px">
                        <div class="flex">
                            <div class="w-50%">
                                <h4 class="sub_tag">太歲燈</h4>
                                <p>祈求流年平安、諸事順遂</p>
                            </div>
                            <div class="w-50%">
                                <h4 class="sub_tag">平安燈</h4>
                                <p>祈求身體健康、病體健康</p>
                            </div>
                        </div>
                        <div class="flex">
                            <div class="w-50%">
                                <h4 class="sub_tag">光明燈</h4>
                                <p>祈求元辰光彩、平安順遂</p>
                            </div>
                            <div class="w-50%">
                                <h4 class="sub_tag">財神燈</h4>
                                <p>祈求事業營運順利、財運亨通</p>
                            </div>
                        </div>
                        <div class="flex">
                            <div class="w-50%">
                                <h4 class="sub_tag">文昌燈</h4>
                                <p>金祈求榜題名、仕途升遷</p>
                            </div>
                            <div class="w-50%">
                                <h4 class="sub_tag">平安燈</h4>
                                <p>主保鎮宅光明、闔家保康寧</p>
                            </div>
                        </div>
                        <div>
                            <router-link to="/allTemple"><button class="btn">搜廟宇點燈<img src="../assets/service/right_arrow.svg" alt=""></button></router-link>
                        </div>
                    </div>
                </div>
                <div class="light_right :ml-20px w-50% relative z-10 max-md:w-full">
                    <img class="w-full" src="../assets/service/service_img01_2.jpg" alt="">
                </div>
                <img class="tree_right" src="../assets/index/tree_right.svg" alt="">
            </div>
        </div>
    </div>
    <div class="puja max-md:mt-106px mt-80px relative">
        <img class="hidden md:block" src="../assets/service/service_img02_2.jpg" alt="">
        <div class="puja_box  px-20px md:py-40px pt-10px pb-20px">
            <h4 class="mb-20px">－法會</h4>
            <p class="pb-20px">法會又稱為佛事、法事，指的是各種說法或供佛、供僧及布施等活動的集會，其根本精神是「以法相會，如法修行」。包括誦經、念佛、供奉佛像、捐助僧侶、布施財物等。這些活動旨在培養參與者的慈悲、智慧和忍辱，以促進個人的精神成長。</p>
        </div>
    </div>
    <div class="max-w-1200px mx-auto mt-120px relative ">
        <div class="flex flex-col-reverse md:flex-row taisui gap-60px">
            <div class="relatvie z-10">
                <img class="w-full" src="../assets/service/service_img03_2.jpg" alt="">
            </div>
            <div class="flex flex-col justify-center w-full md:w-60% px-10px">
                <h3 class="service_tag max-md:mt-20px mb-20px">－安太歲</h3>
                <p>太歲星君俗稱太歲或歲君，是為掌管人們吉凶禍福的神衹。搭配著十二地支與十二生肖運行，每個流年都有著不同的吉凶運勢，「犯太歲」指的是與太歲一樣的生肖，即冒犯了太歲星，為了避免沖犯到太歲而影響整年運勢，在新春過年盛時，祭拜太歲神以祈福消災，祈求一整年平安順遂。。</p>
            </div>
        </div>
        <img class="tree_left" src="../assets/index/tree_left.svg" alt="">
    </div>
    <div class="flex justify-end md:mt-120px shuwen_wrapper">
        <div class="flex flex-col lg:flex-row shuwen max-w-1550px ">
            <div class="shuwen_left flex flex-col mb-40px px-10px">
                <h3 class="service_tag mb-20px mt-40px ">
                    －疏文
                </h3>
                <p class="mb-20px w-90%">「疏文」，是上呈給神明的正式公文，又被稱為文疏或表文，是一種傳統的溝通方式，用來聯繫人類與神明、陰陽世界之間的聯繫通道。透過疏文，人們可以書之於紙，向神明祈求庇佑、敬天祭祖。</p>
                <h4 class="sub_tag mb-5px">祈福文疏</h4>
                <p class="mb-20px">考試、姻緣、事業、健康、開市、開工、消災、補運 … 等</p>
                <h4 class="sub_tag mb-5px">調解文疏</h4>
                <p class="">人神契約、陰陽調解、請求赦罪… 等</p>
            </div>
            <div class="shuwen_right w-full">
                <img class="w-full" src="../assets/service/service_img04_2.jpg" alt="">
            </div>
        </div>
    </div>
</template>
<script setup>
//自製元件
import Breadcrumb from '@/components/widget/Breadcrumb.vue'
import TopCover from '@/components/widget/TopCover.vue'
const backend = import.meta.env.VITE_BACKEND_PATH
</script>
<style scoped>
.btn{
    width: 178px;
    height: 49px;
    display: flex;
    background-color: #CEB96E;
    color:#ffffff;
    border:none;
    border-radius: 0;
    justify-content: center;
    align-items: center;
    font-size: 20px;
}
.btn:hover{
    background-color: #ffffff;
    color:#CEB96E;
    border:1px solid #CEB96E;
}
.btn img{
    margin-left: 5px;
}

@media(width > 1024px){
    .shuwen{
    max-height:400px;
    }
}
.shuwen_right img{
    height: 100%;
    aspect-ratio: 16/9;
    object-fit: cover;
}
.light_left{
    min-width: 360px;
}
.tree_left{
   position: absolute;
   top:30%;
   left:-30%;
}
.tree_right{
    position: absolute;
    top: 49%;
    right: 0;
}
@media(width <1280px){
    .tree_left,.tree_right{
        display: none;
    }
}
.shuwen_wrapper{
    background-color: #F4F1E480;
}
.puja{
    display: flex;
    justify-content: center;
    align-items: center;
}
.puja_box{
    background-color: #920000;
    position: absolute;
    max-width: 1200px;
    height: 215px;
}
.puja_box h4{
    font-family: Noto Serif TC;
    font-size: 28px;
    font-weight: 700;
    line-height: 40px;
    letter-spacing: 0.2em;
    text-align: left;
    color:#FFFFFF;
}
.puja_box p{
    font-family: Noto Serif TC;
    font-size: 16px;
    font-weight: 500;
    line-height: 23px;
    letter-spacing: 0em;
    text-align: left;
    color:#FFFFFF;
}
.puja img{
    width: 100%;
    height: 450px;
    object-fit: cover;
}

.service_tag{
    font-family: Noto Serif TC;
    font-size: 28px;
    font-weight: 700;
    line-height: 40px;
    letter-spacing: 0.2em;
    text-align: left;
    color:#CEB96E;
}
.sub_tag{
    font-family: Noto Serif TC;
    font-size: 20px;
    font-weight: 600;
    line-height: 29px;
    letter-spacing: 0.1em;
    text-align: left;
    color:#543118;
}
/* .btn{
    width:132px;
    height:50px;
    padding: 10px 20px 10px 20px;
    background-color: #EEEEEE;
    color:#777777;
    border:none;
    border-radius: 0;
}
.btn:hover{
    background-color: #CEB96E;
    color:#ffffff;
    border:none;
} */
</style>