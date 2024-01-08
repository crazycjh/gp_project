<template>
    <div class="cover py-80px relative">
        <div class="flex mb-40px">
            <h3 class="breadcrumb active">點燈表單</h3>
            <h3 class="breadcrumb">>結帳資訊</h3>
            <h3 class="breadcrumb">>訂單完成</h3>
        </div>
        <div class="wrapper">
            <div class="top">
                <img class="light_top_left" src="../../assets/products/light/light_text2.svg" alt="">
                <img class="candle" src="../../assets/products/light/light_list_img.png" alt="">
            </div>
            <div class="left" v-show="isPreviosShown" @click="activeForm = activeForm -1">
                <div class="mb-10px left_icon"></div>
                    <p class="previous">上一位</p>
                </div>
            <div class="right" v-show="isNextShown" @click="activeForm = activeForm +1">
                <div class="mb-10px right_icon"></div>
                <p class="next">下一位</p>
            </div>
            <div class="body relative" v-for="(item, index) in formItems" :key="index" v-show="index + 1 === activeForm">
                <div class="container border">
                    <Customer 
                        v-model:name="customerData.name"
                        v-model:phone="customerData.phone"
                        v-model:email="customerData.email"
                        v-model:zipCode="customerData.zipCode"
                        v-model:selectedCity="customerData.selectedCity"
                        v-model:selectedArea="customerData.selectedArea"
                        v-model:address="customerData.address"
                        @set-zipCode="setZipcode"
                        @auto-info="autoInfo"
                    />
                    <div class="mt-10px mb-10px">
                        <h5 class="mb-10px">點選人數<span class="required">*只能初始化選擇一次</span></h5>
                        <div class="relative w-full">
                            <select :disabled="setCount"
                                class="appearance-none bg-transparent border border-transparent text-gray-700 custom_select" v-model="peopleCount" @change="initialCount">
                                <option v-for="number in 20" :key="number">{{ number }}</option>
                            </select>
                            <img class="absolute right-0 top-0 max-md:mr-2 mt-2 mr-4 pointer-events-none"
                                src="../../assets/index/arrow_down.svg" alt="">
                        </div>
                    </div>
                    <button class="believers mb-20px">第{{activeForm}}位信眾資料</button>
                    <div class="flex gap-5px mb-5px">
                        <input v-if="activeForm === 1" @change="firstOneAutoEnter" class="checkbox" type="checkbox" v-model="isAutoInfoChecked">
                        <p>帶入聯絡人資料</p>
                    </div>
                    
                    <div class="flex flex-col md:flex-row gap-20px mb-20px">
                        <div class="md:w-50%">
                            <h5 class="mb-10px">姓名<span class="required">*</span></h5>
                            <div class="relative select_wrapper">
                                <input class="body_input" type="text" placeholder="請輸入姓名" v-model="item.name">
                            </div>
                        </div>
                        <div class="md:w-50%">
                            <h5 class="mb-10px">性別<span class="required">*</span></h5>
                            <div class="relative select_wrapper">
                                <select
                                    class="appearance-none bg-transparent border border-transparent text-gray-700 custom_select " v-model="item.gender">
                                    <option value="" disabled>請選擇</option>
                                    <option>男</option>
                                    <option>女</option>
                                </select>
                                <img class="absolute right-0 top-0 max-md:mr-2 mt-2 mr-4 pointer-events-none"
                                    src="../../assets/index/arrow_down.svg" alt="">
                            </div>
                        </div>
                    </div>
                    <div class="flex flex-col md:flex-row gap-20px mb-10px">
                        <div class="flex flex-col md:flex-row gap-20px md:w-50%">
                            <div class="w-full">
                                <h5 class="mb-10px">農曆生日<span class="required">*</span></h5>
                                <div class="relative small_wrapper">
                                    <select
                                        class="appearance-none bg-transparent border border-transparent text-gray-700 custom_select" v-model="item.yValue">
                                        <option value=""  disabled>請選擇年份</option>
                                        <option v-for="(year, index) in yearsValue" :key="index" :value="year">{{ year }}{{ years[index] }}</option>
                                    </select>
                                    <img class="absolute right-0 top-0 max-md:mr-2 mt-2 mr-4 pointer-events-none"
                                        src="../../assets/index/arrow_down.svg" alt="">
                                </div>
                            </div>
                            <div class="w-full">
                                <h5 class="mb-10px">吉月<span class="required">*</span></h5>
                                <div class="relative small_wrapper">
                                    <select
                                        class="appearance-none bg-transparent border border-transparent text-gray-700 custom_select" v-model="item.mValue">
                                        <option value=""  disabled>吉月</option>
                                        <option v-for="item in months" :key="item">{{ item }}</option>
                                    </select>
                                    <img class="absolute right-0 top-0 max-md:mr-2 mt-2 mr-4 pointer-events-none"
                                        src="../../assets/index/arrow_down.svg" alt="">
                                </div>
                            </div>
                        </div>
                        <div class="flex flex-col md:flex-row gap-20px md:w-50%">
                            <div class="w-full">
                                <h5 class="mb-10px">吉日<span class="required">*</span></h5>
                                <div class="relative small_wrapper">
                                    <select
                                        class="appearance-none bg-transparent border border-transparent text-gray-700 custom_select" v-model="item.dValue">
                                        <option value=""  disabled>吉日</option>
                                        <option v-for="item in days" :key="item"> {{ item }} </option>
                                    </select>
                                    <img class="absolute right-0 top-0 max-md:mr-2 mt-2 mr-4 pointer-events-none"
                                        src="../../assets/index/arrow_down.svg" alt="">
                                </div>
                            </div>
                            <div class="w-full">
                                <h5 class="mb-10px">出生時辰<span class="required">*</span></h5>
                                <div class="relative small_wrapper">
                                    <select  class="appearance-none bg-transparent border border-transparent text-gray-700 custom_select" v-model="item.tValue">
                                        <option value="" disabled>吉時</option>
                                        <option v-for="(time,index) in ctime" key="ctime" :value="time">{{ time }}{{ wtime[index] }}</option>
                                    </select>
                                    <img class="absolute right-0 top-0 max-md:mr-2 mt-2 mr-4 pointer-events-none" src="../../assets/index/arrow_down.svg" alt="">
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="flex flex-col md:flex-row mb-20px">
                        <button v-show="item.calendar === 1" class="translate" @click="changeCalendar(1,index)">轉農曆</button>
                        <button v-show="item.calendar ===2" class="translate" @click="changeCalendar(2,index)">轉國曆</button>
                        <p class="hint">請選擇農曆日期，若不曉得農曆日期，請先選擇國曆日期後按下「轉農曆」進行轉換。</p>
                    </div>
                    <div class="flex flex-col md:flex-row gap-20px mb-20px">
                      
                        <div class="w-full">
                            <h5 class="mb-10px">縣市<span class="required">*</span></h5>
                            <div class="relative">
                                <select
                                    class="appearance-none bg-transparent border border-transparent text-gray-700 custom_select " v-model="item.selectedCity" @change="updateAreas(index)">
                                    <option  value="" disabled>請選擇縣市</option>
                                    
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
                                    class="appearance-none bg-transparent border border-transparent text-gray-700 custom_select" v-model="item.selectedArea" @change="updateZipCode(index)">
                                    
                                    <option selected value="" disabled>請選擇鄉鎮區</option>
                                    <option v-if="item.areas" v-for="area in item.areas" :key="area">{{ area }}</option>
                                </select>
                                <img class="absolute right-0 top-0 max-md:mr-2 mt-2 mr-4 pointer-events-none"
                                    src="../../assets/index/arrow_down.svg" alt="">
                            </div>
                        </div>
                        <div class="w-full">
                            <h5 class="mb-10px">郵遞區號<span class="required">*</span></h5>
                            <div class="w-full">
                                <input class="body_input" type="text" placeholder="自動帶入勿填"  v-model="item.zipCode" readonly>
                            </div>
                        </div>
                    </div>
                    
                    <div class="mb-20px">
                        <h5 class="mb-10px">詳細地址<span class="required">*</span></h5>
                        <div class="relative w-full">
                            <input class="body_input" type="text" placeholder="請輸入詳細地址" v-model="item.address">
                        </div>
                    </div>
                    <!-- 加入其他燈 -->
                    <div class="flex flex-wrap gap-2">
                        <div v-for="product in item.lights" class="flex gap-5px mb-5px">
                        <input class="checkbox" type="checkbox" v-model="product.isChecked">
                        <p>{{ product.name }}</p>
                    </div>
                    </div>
                    
                    <!-- <div class="mb-20px">
                        <h5 class="mb-10px">聯絡電話<span class="required">*</span></h5>
                        <div class="relative w-full">
                            <input class="body_input" type="text" placeholder="請輸入電話號碼" v-model="item.phone">
                        </div>
                    </div>
                    <div class="mb-20px">
                        <h5 class="mb-10px">電子信箱<span class="required">*</span></h5>
                        <div class="relative w-full">
                            <input class="body_input" type="text" placeholder="請輸入電子信箱" v-model="item.email">
                        </div>
                    </div> -->
                    <div class="flex justify-between mb-20px">
                        <div>
                            <button class="cancel_btn" @click="deleteForm(index)">刪除</button>
                        </div>
                        <button class="add" @click="addCount ">加一位被祈福者</button>
                    </div>
                </div>
            </div>
            <div class="body">
                <div class="container top_border py-20px">
                    <h5 class="mount mb-20px">共 <span class="count">{{ peopleCount }}</span> 位</h5>
                    <h5 class="mount">總計:</h5>
                    <h5 class="mount mb-10px">NT${{ total }}</h5>
                    <p class="mb-10px">備註:</p>
                    <textarea v-model="remark" class="custom_textarea mb-10px"></textarea>
                    <div class="flex mb-10px" >
                        <span class="mr-5px">綠界科技</span><img src="../../assets/products/light/ecpay_icon.png" alt="">
                    </div>
                    <h5>付款方式</h5>
                    <div class="relative w-full mb-10px">
                        <select
                            class="appearance-none bg-transparent border border-transparent text-gray-700 custom_select" v-model="payment">
                            <option value="" selected>請選擇付款方式</option>
                            <option value="WebATM">ATM虛擬帳戶匯款</option>
                            <option value="Credit">線上刷卡</option>
                            <option value="CVS">超商代碼繳費</option>
                        </select>
                        <img class="absolute right-0 top-0 max-md:mr-2 mt-2 mr-4 pointer-events-none"
                            src="../../assets/index/arrow_down.svg" alt="">
                    </div>
                    <div class="flex top_border pt-10px">
                        <input v-model="agree" class="mr-10px checkbox" type="checkbox">
                        <p>我已閱讀並同意網站的<router-link to="/terms" class="term">條款與條件</router-link></p>
                    </div>
                    
                    <div class="container">
                        <h4 class="error">{{ errorMessage }}</h4>
                        <button class="visa" @click="checkOrder">確認訂單</button>
                        <p class="mt-20px">您的個人數據將用於處理您的訂單，支持您在整個網站的體驗，以及我們的<router-link to="/privacy" class="term">隱私權政策</router-link>中描述的其他目的。</p>
                    </div>
                </div>
            </div>
            <div class="relative w-full">
                <img  class="bottom_img" src="../../assets/products/light/light_bg_4_3.svg" alt="">
            </div>
            <div class="flex relative w-full pb-80px">
                <div class="bottom_left" v-show="isPreviosShown" @click="activeForm = activeForm-1">
                    <div class="mb-10px left_icon"></div>
                    <p class="previous">上一位</p>
                </div>
                <div class="bottom_right" v-show="isNextShown" @click="activeForm = activeForm+1">
                    <div class="mb-10px right_icon"></div>
                    <p class="next">下一位</p>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
//官方套件
import { ref, onMounted ,computed,getCurrentInstance,watch, nextTick} from 'vue';
const instance = getCurrentInstance()
import { useRoute,useRouter } from 'vue-router';
import axios from "axios";
import { useModal } from 'vue-final-modal'

//其他套件
import lunarFun from 'lunar-fun';
import DetailModal from '@/components/modals/DetailModal.vue'

//自製套件
const backend = import.meta.env.VITE_BACKEND_PATH
import Customer from '@/components/products/Customer.vue'
import {cities,areasByCity,zipCodesByArea} from '@/store/city.js'
import { useAuth } from '@/store/auth.js'
import { useLight } from '@/store/light.js'
const auth = useAuth()
const lightStore = useLight()
const light = ref(lightStore.lightList);

// 清空
lightStore.cleanLightList();
console.log('light');
console.log(light);




//定義資料組
const setCount = ref(false)
const peopleCount = ref(1)
const activeForm = ref(1)
const agree = ref(false)
const payment = ref('')
const remark = ref('')
const isAutoInfoChecked = ref(false);
const totalPrice = ref(0);


//取temple_id, product_id, 價格
const templeID = ref('')
const productList = ref({});
const productsInfo = [];
const productID = ref('')
const price = ref('')
const name = ref('')
const formItems = ref([]);
let test = ''
let test2 = ''
onMounted(() => {
    const route = useRoute();
    productID.value = Number(route.params.productID);
    templeID.value = Number(route.params.templeID)
});
onMounted(async () => {
    try {
        // 取得所有商品ID
        let response = await axios.get(
            `${backend}api/gc/temple/${templeID.value}`
        );
        productList.value = response.data.light;
        // 取得所有商品價格資料
        for(const item of productList.value){
            response = await axios.get(
            `${backend}api/gc/product/${item.id}`
            );
            productsInfo.push(response.data);
            productsInfo.forEach((item) => {
                item.isChecked = false;
            })
            // console.log(productsInfo);
        }
        
        price.value = response.data.price
        name.value = response.data.name
        // test = JSON.parse(JSON.stringify(productsInfo));
        console.log(productsInfo);
        formItems.value = [createFormItem()];
        
    } catch (error) {
        console.error("API 請求失敗:", error);
    } finally {
  }
});

const total = computed(()=>{
    
    formItems.value.forEach((item)=>{
        totalPrice.value = totalPrice.value + item.lights.reduce((sum, obj)=> {
            return obj.isChecked ? sum + (+obj.price) : sum;
        }, 0)
    })
    return totalPrice.value;
})

const customerData = ref({
    name:'',
    phone:'',
    email:'',
    zipCode:'',
    selectedCity:'',
    selectedArea:'',
    address:'',
})

//郵遞區號不能由下層組件修改上層的值，改用emit傳到上層再修改
const setZipcode = (code) =>{
    customerData.value.zipCode = code
}

//信眾資料用function寫，避免被汙染
const createFormItem = () => ({
  name: '',
  gender: '',
  yValue: '',
  mValue: '',
  dValue: '',
  tValue: '',
  selectedCity: '',
  selectedArea: '',
  address: '',
  zipCode:'',
//   phone: '',
//   email: '',
  calendar: 1,
  areas: [],
  lights: JSON.parse(JSON.stringify(productsInfo))
});



//初始選人數
const initialCount = () => {
  activeForm.value = 1;
  setCount.value = true;
  const itemsToAdd = peopleCount.value - formItems.value.length;
  for (let i = 0; i < itemsToAdd; i++) {
    formItems.value.push(createFormItem());
  }
};

//加一位 並最新增加的那頁為active
const addCount = () => {
  peopleCount.value = Number(peopleCount.value)
  peopleCount.value += 1;
  activeForm.value = peopleCount.value
  formItems.value.push(createFormItem());   
};

// 帶入第一位資料
const firstOneAutoEnter = () => {
    if(isAutoInfoChecked.value) {
        formItems.value[0].name = auth.member.name;
        formItems.value[0].selectedCity = auth.member.city
        formItems.value[0].selectedArea = auth.member.area
        formItems.value[0].address = auth.member.address
        formItems.value[0].zipCode = auth.member.zipCode
        updateAreas(0);
        updateZipCode(0);
    }
}


//刪除當前的信眾
const deleteForm = (index) => {
    activeForm.value = index
    peopleCount.value = Number(peopleCount.value)
    peopleCount.value -= 1;
    formItems.value.splice(index,1)
}

//控制上下一步收合
const isPreviosShown = computed(()=>{
    return peopleCount.value > 1 && activeForm.value !== 1
})
const isNextShown = computed(()=>{
    return peopleCount.value > 1 && peopleCount.value - activeForm.value >= 1
})


//國農曆互轉定義資料
const years = ref([]);
const yearsValue = ref([])
const days = ref([])
onMounted(()=>{
    for (let i = 1900; i <= 2023; i++) {
      years.value.push(`(民國:${i - 1911})`);
      yearsValue.value.push(i);
    }
    for(let i = 1; i <= 31; i++){
      days.value.push(i)
    }
})
const months = ref([
    '1','2','3','4','5','6','7','8','9','10','11','12',
    '閏1','閏2','閏3','閏4','閏5','閏6','閏7','閏8','閏9','閏10','閏11','閏12'
])
const ctime = ref([
    '子','丑','寅','卯','辰','巳','午','未','申','酉','戌','亥'
])
const wtime =ref([
    '(23:00-1:00)','(1:00-3:00)','(3:00-5:00)','(5:00-7:00)','(7:00-9:00)','(9:00-11:00)','(11:00-13:00)','(13:00-15:00)',
    '(15:00-17:00)','(17:00-19:00)','(19:00-21:00)','(21:00-23:00)'
])

//轉換國農曆操作
const changeCalendar = (type,index) =>{
    if(type === 1){
        formItems.value[index].calendar = 2
        const [lunarYear, lunarMonth, lunarDay, run] = lunarFun.gregorianToLunal(formItems.value[index].yValue, formItems.value[index].mValue, formItems.value[index].dValue)
        formItems.value[index].yValue = lunarYear
        formItems.value[index].mValue = run ? '潤' + lunarMonth : lunarMonth;
        formItems.value[index].dValue = lunarDay
    }else{
        formItems.value[index].calendar = 1
        const [gYear,gMonth,gDay,run] = lunarFun.lunalToGregorian(formItems.value[index].yValue, formItems.value[index].mValue, formItems.value[index].dValue)
        formItems.value[index].yValue = gYear
        formItems.value[index].mValue = run ? '潤' + gMonth : gMonth;
        formItems.value[index].dValue = gDay
    }
    instance.proxy.$forceUpdate()
}

//驗證格式
const errorMessage = ref('');
const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
};

//查看訂單
const checkOrder = () =>{
    for (const key in customerData.value) {
        if (!customerData.value[key]) {
            errorMessage.value = '訂購者資料不完整';
            return; 
        }
    }
    if(!validateEmail(customerData.value.email)){
        errorMessage.value = '訂購者信箱格式不正確'
        return
    }
    for (let i = 0; i < formItems.value.length; i++) {
    const item = formItems.value[i];
        for (const key in item) {
            if (!item[key]) {
                    errorMessage.value = `第 ${i + 1} 位被祈福者資料不完整`;
                    return;
            }
            if(key === 'email' && !validateEmail(item[key])){
                    errorMessage.value = `第 ${i + 1} 位被祈福者信箱格式不正確`;
                    return;
            }
        }
    }
    if(agree.value === false){
        errorMessage.value = '請勾選同意網站的條款與條件'
        return
    }
    
    if(!payment.value){
        errorMessage.value = '請選擇付款方式'
        return
    }
    errorMessage.value = ''
    console.log(name);
    console.log(price);
    console.log(customerData);
    console.log(formItems);
    console.log(remark);
    console.log(payment);
    console.log(peopleCount);
    console.log(productID);
    console.log(total);
    open()
}

//縣市選擇器
const updateAreas = (index) => {
  const selectedCity = formItems.value[index].selectedCity;
  const selectCityAreas = areasByCity.value[selectedCity];
  formItems.value[index].areas = selectCityAreas;
  instance.proxy.$forceUpdate()
};

//郵遞區號選擇器
const updateZipCode = (index) => {
    const zipCode = zipCodesByArea[formItems.value[index].selectedArea]
    formItems.value[index].zipCode = zipCode
    instance.proxy.$forceUpdate()
} 



//控制modal
const { open, close } = useModal({
  component: DetailModal,
  attrs: {
    productName:name,
    productPrice:price,
    customer:customerData,
    prayer:formItems,
    remark:remark,
    payment:payment,
    count:peopleCount,
    productID:productID,
    total:total,
    onConfirm() {
        close()
    },
  },
})

//帶入會員資料
const autoInfo = () =>{
    customerData.value.name = auth.member.name
    customerData.value.email = auth.member.email
    customerData.value.selectedCity = auth.member.city
    customerData.value.selectedArea = auth.member.area
    customerData.value.zipCode = auth.member.zipCode
    customerData.value.address = auth.member.address
    customerData.value.phone = auth.member.phone
}


// watch(customerData.value.selectedCity,(newValue)=>{
//     if(newValue){
//         console.log(123);
//     }
// })


</script>
<style scoped>

.checkbox{
    background-color: #ffffff;
}
.breadcrumb{
    font-family: Noto Serif TC;
    font-size: 24px;
    font-weight: 400;
    line-height: 34px;
    letter-spacing: 0.1em;
    text-align: left;
    color:#888888;
}
.breadcrumb.active{
    color:#000000;
}

.error{
    color:red;
    /*margin-bottom: -20px;*/
    margin-top: 10px;
}
.light_top_left{
    width: 298px;
    height: 75px;
}
@media(max-width:768px){
    .light_top_left{
        display: none;
    }
    .candle{
        width: 70px;
    }
    .top{
        padding-bottom: 0;
    }
    .error{
        margin-bottom: 0px;
    }
}
.bottom_left,.bottom_right{
    padding-top: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
}
.bottom_left{
    position: absolute;
    left:0px;
}
.bottom_right{
    position: absolute;
    right:0px;
}
@media(min-width: 512px){
    .bottom_left,.bottom_right{
        display: none;
    }
}
.bottom_img{
    width: 100%;
    margin-top: -1px;
}
.wrapper {
    position:relative;
    max-width: 892px;
}

@media(max-width: 768px) {
    .wrapper {
        width: 330px;
    }
}

.left_icon {
    width: 50px;
    height: 50px;
    background-image: url('../../assets/products/light/light_list_arrow_left.svg');
}

.left_icon:hover {
    background-image: url('../../assets/products/light/light_list_arrow_left_hover.svg');
}

.right_icon {
    width: 50px;
    height: 50px;
    background-image: url('../../assets/products/light/light_list_arrow_right.svg');
}

.right_icon:hover {
    background-image: url('../../assets/products/light/light_list_arrow_right_hover.svg');
}

input {
    background-color: #ffffff;
}

.left {
    width: 50px;
    position: fixed;
    top: 52%;
    left: 15%;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.previous,
.next {
    width: 22px;
    height: 69px;
}

.right {
    width: 50px;
    position: fixed;
    top: 52%;
    right: 15%;
    display: flex;
    flex-direction: column;
    align-items: center;
}
@media(max-width:1400px) {
    .left {
        left: 2%;
    }

    .right {
        right: 2%;
    }
}
@media(max-width: 512px){
    .left,.right{
        display:none;
    }
}

.term {
    color: #920000;
}

.custom_textarea {
    background-color: #ffffff;
    width: 100%;
    height: 174px;
}

.count {
    color: #920000;
}

.mount {
    font-size: 20px;
}

.top_border {
    border-top: 1px dashed #AAAAAA;
}

.add {
    border: none;
    border-radius: 0;
    outline: none;
    border-bottom: 1px solid #CEB96E;
}

.add:hover {
    color: #CEB96E;
}

.save_btn {
    margin-right: 10px;
    width: 63px;
    height: 33px;
    border: none;
    border-radius: 0;
    outline: none;
    background-color: #CEB96E;
    color: #ffffff;
}

.save_btn:hover {
    border: #CEB96E 1px solid;
    background-color: #ffffff;
    color: #CEB96E;
}

.cancel_btn {
    width: 63px;
    height: 33px;
    border: none;
    border-radius: 0;
    outline: none;
    background-color: #9B9B9B;
    color: #ffffff;
}

.cancel_btn:hover {
    background-color: #333333;
}

.translate {
    border-bottom: 1px solid #CEB96E;
    outline: none;
    border-radius: 0;
    margin-right: 6px;
    width:50px;
    min-width: 50px;
}

.hint {
    color: #777777;
}

.body_input {
    padding: 0 10px;
    height: 30px;
    width: 100%;
}

.believers {
    margin-top: 20px;
    width: 148px;
    height: 43px;
    border: none;
    outline: none;
    border-radius: 0;
    color: #ffffff;
    background-color: #CEB96E;
}

.visa {
    /* margin-top: 20px; */
    width: 114px;
    height: 43px;
    border: none;
    outline: none;
    border-radius: 0;
    color: #ffffff;
    background-color: #CEB96E;
}

.required {
    margin-left: 5px;
    color: #920000;
}

.small_wrapper {
    width: 167px;
}

.select_wrapper {
    width: 356px;
}

@media(max-width:1024px) {
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

.cover {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100vw;
    background-attachment: fixed;
    /*
    background-image: url('../../assets/products/light/light_list_bg.svg');
    */
    background-image: url('../../assets/products/light/light_list_bg3.svg');
    /* background-repeat: no-repeat;  */
    background-size: cover;
}

.top {
    margin-bottom: -1px;
    justify-content: space-around;
    padding-bottom: 18px;
    display: flex;
    align-items: flex-end;
    width: 100%;
    height: 474px;
    background-image: url('../../assets/products/light/light_bg_2.svg');
    border-bottom: 1px;
    background-repeat: no-repeat;
}

@media(max-width: 1024px) {
    .top {
        height: 340px;
    }
}

@media(max-width: 768px) {
    .top {
        height: 176px;
        padding-left: 30px;
        padding-right: 30px;
    }
}

.body {
    padding-left: 80px;
    padding-right: 80px;
    width: 100%;
    height: auto;
    background-image: url('../../assets/products/light/light_bg_3.svg');
    background-size: auto;
}

@media(max-width: 1024px) {
    .body {
        padding-left: 60px;
        padding-right: 60px;
    }
}

@media(max-width: 768px) {
    .body {
        padding-left: 25px;
        padding-right: 25px;
    }
}

.body .container.border {
    border-top: 1px dashed #AAAAAA;
}

.bottom {
    width: 100%;
    background-image: url('../../assets/products/light/light_bg_4_2.svg');
    background-size: cover;
}

@media(max-width:1024px) {
    .bottom {
        padding-bottom: 90px;
    }
}

@media(max-width: 768px) {
    .bottom {
        background-repeat: no-repeat;
        background-size: auto;
    }

    .visa {
        margin-top: 10px;
    }
}
</style>