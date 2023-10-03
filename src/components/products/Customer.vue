<template>
    <div class="border_bottom">
        <button class="customer_btn">聯絡人資料</button>
        <button class="customer_btn member" @click="emit('auto-info')">帶入會員資料</button>
        <div class="flex flex-col md:flex-row gap-20px mb-20px">
            <div class="w-full">
                <h5 class="mb-10px">姓名<span class="required">*</span></h5>
                <div class="relative">
                    <input class="body_input" type="text" placeholder="請輸入姓名"  :value="name"
                    @input="$emit('update:name', $event.target.value)">
                </div>
            </div>
            <div class="w-full">
                <h5 class="mb-10px">聯絡電話<span class="required">*</span></h5>
                <div class="relative">
                    <input class="body_input" type="text" placeholder="請輸入聯絡電話" :value="phone"
                    @input="$emit('update:phone', $event.target.value)">
                </div>
            </div>
        </div>
         <div class="mb-20px">
            <h5 class="mb-10px">電子信箱<span class="required">*</span></h5>
            <div class="relative w-full">
                <input class="body_input" type="text" placeholder="請輸入電子信箱" :value="email"
                @input="$emit('update:email', $event.target.value)">
            </div>
        </div>
        <div class="flex flex-col md:flex-row gap-20px mb-20px">
            <div class="w-full">
                <h5 class="mb-10px">縣市<span class="required">*</span></h5>
                <div class="relative">
                    <select  ref="citySelect"
                        class="appearance-none bg-transparent border border-transparent text-gray-700 custom_select" :value="selectedCity" @change="updateAreas(selectedCity)"
                        @input="$emit('update:selectedCity', $event.target.value)">
                        <option value="" disabled>請選擇縣市</option>
                        <option v-for="item in cities" :key="item">{{ item }}</option>
                    </select>
                    <img class="absolute right-0 top-0 max-md:mr-2 mt-2 mr-4 pointer-events-none"
                        src="../../assets/index/arrow_down.svg" alt="">
                </div>
            </div>
            <div class="w-full">
                <h5 class="mb-10px">鄉鎮區<span class="required">*</span></h5>
                <div class="relative">
                    <select
                        class="appearance-none bg-transparent border border-transparent text-gray-700 custom_select" :value="selectedArea" @change="updateZipCode(selectedArea)"
                        @input="$emit('update:selectedArea', $event.target.value)">
                        <option value="" disabled selected>請選擇鄉鎮區</option>
                        <option v-if="areas" v-for="area in areas" :key="area">{{ area }}</option>
                    </select>
                    <img class="absolute right-0 top-0 max-md:mr-2 mt-2 mr-4 pointer-events-none"
                        src="../../assets/index/arrow_down.svg" alt="">
                </div>
            </div>
            <div class="w-full">
                <h5 class="mb-10px">郵遞區號<span class="required">*</span></h5>
                <div class="w-full">
                    <input class="body_input" type="text" placeholder="自動帶入勿填" :value="zipCode"
                    readonly>
                </div>
            </div>
        </div>
        <div class="mb-20px">
            <h5 class="mb-10px">街道地址<span class="required">*</span></h5>
            <div class="relative w-full">
                <input class="body_input" type="text" placeholder="請輸入街道地址" :value="address"
                @input="$emit('update:address', $event.target.value)">
            </div>
        </div>
    </div>
</template>
<script setup>
//官方套件
import { ref,getCurrentInstance,watch } from 'vue';
const instance = getCurrentInstance()

//自製元件
import {cities,areasByCity,zipCodesByArea} from '@/store/city.js'

//定義資料結構
const props = defineProps({
  name: String,
  phone:String,
  email:String,
  zipCode:String,
  selectedCity:String,
  selectedArea:String,
  address:String
})
const emit = defineEmits(['update:name','update:phone','update:email','update:selectedCity','update:selectedArea','update:address','set-zipCode','auto-info'])


const areas = ref([])

//縣市選擇器
const updateAreas = (city) => {
    const selectCityAreas = areasByCity.value[city];
    areas.value = selectCityAreas;
};

//watch function return 才能成功監聽props內的值
watch(() =>props.selectedCity,(newValue)=>{
    if(newValue){
        updateAreas(newValue)
    }
})

//郵遞區號選擇器
const updateZipCode = (area) => {
    const code = zipCodesByArea[area]
    emit('set-zipCode',code)
} 

</script>
<style scoped>
input,select{
    background-color: #ffffff;
}
.border_bottom{
    border-bottom:1px dashed #AAAAAA;
}
.required {
    margin-left: 5px;
    color: #920000;
}
.body_input {
    padding: 0 10px;
    height: 30px;
    width: 100%;
}
.customer_btn {
    margin-top: 40px;
    margin-bottom: 20px;
    width: 112px;
    height: 43px;
    color: white;
    background-color: #920000;
    border: none;
    outline: none;
    border-radius: 0;
}
.member{
    margin-left: 20px;
    background-color: #CEB96E;
    color:#ffffff;
}
.select_wrapper {
    width: 356px;
}

@media(width <1024px) {
    .select_wrapper {
        width: 100%;
    }

    .small_wrapper {
        width: 100%;
    }

    .wrapper {
        max-width: 640px;
    }
}
.custom_select {
    display: flex;
    width: 100%;
    height: 30px;
    padding: 0px 10px;
    justify-content: space-between;
    align-items: center;
    flex-shrink: 0;
    background: #ffffff;
    color: #333333;
}

</style>