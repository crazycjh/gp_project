<template>
    <div class="cover py-80px relative">
        <div class="wrapper">
            <div class="top">
                <div class="md:w-40%">
                    <h5 class="mb-10px">點選人數<span class="required">*</span></h5>
                    <div class="relative select_wrapper">
                        <select :disabled="setCount"
                            class="appearance-none bg-transparent border border-transparent text-gray-700 custom_select" v-model="peopleCount" @change="initialCount">
                            <option v-for="number in 20" :key="number">{{ number }}</option>
                        </select>
                        <img class="absolute right-0 top-0 max-md:mr-2 mt-2 mr-4 pointer-events-none"
                            src="../../assets/index/arrow_down.svg" alt="">
                    </div>
                </div>
                <img src="../../assets/products/light/light_list_img.png" alt="">
            </div>
            <div class="body relative" v-for="(item, index) in formItems" :key="index" v-show="index + 1 === activeForm">
                <div class="left" v-show="isPreviosShown" @click="activeForm = activeForm -1">
                    <div class="mb-10px left_icon"></div>
                    <p class="previous">上一位</p>
                </div>
                <div class="right" v-show="isNextShown" @click="activeForm = activeForm +1">
                    <div class="mb-10px right_icon"></div>
                    <p class="next">下一位</p>
                </div>
                <div class="container border">
                    <button class="believers mb-20px">第{{activeForm}}位信眾資料</button>
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
                        <div class="md:w-50%">
                            <h5 class="mb-10px">農曆生日<span class="required">*</span></h5>
                            <div class="relative select_wrapper">
                                <select
                                    class="appearance-none bg-transparent border border-transparent text-gray-700 custom_select" v-model="item.yValue">
                                    <option value=""  disabled>請選擇年份</option>
                                    <option v-for="(year, index) in yearsValue" :key="index" :value="year">{{ year }}{{ years[index] }}</option>
                                </select>
                                <img class="absolute right-0 top-0 max-md:mr-2 mt-2 mr-4 pointer-events-none"
                                    src="../../assets/index/arrow_down.svg" alt="">
                            </div>
                        </div>
                        <div class="flex gap-20px md:w-50%">
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
                        </div>
                    </div>
                    <div class="flex flex-col md:flex-row mb-20px">
                        <button v-show="!item.calendar" class="translate" @click="changeCalendar(true,index)">轉農曆</button>
                        <button v-show="item.calendar" class="translate" @click="changeCalendar(false,index)">轉國曆</button>
                        <p class="hint">請選擇農曆日期，若不曉得農曆日期，請先選擇國曆日期後按下「轉農曆」進行轉換。</p>
                    </div>
                    <div class="mb-20px">
                        <h5 class="mb-10px">出生時辰<span class="required">*</span></h5>
                        <div class="relative select_wrapper">
                            <select  class="appearance-none bg-transparent border border-transparent text-gray-700 custom_select" v-model="item.tValue">
                                <option value="" disabled>吉時</option>
                                <option v-for="(time,index) in ctime" key="ctime" :value="time">{{ time }}{{ wtime[index] }}</option>
                            </select>
                            <img class="absolute right-0 top-0 max-md:mr-2 mt-2 mr-4 pointer-events-none" src="../../assets/index/arrow_down.svg" alt="">
                        </div>
                    </div>
                    <div class="flex gap-20px mb-20px">
                        <div class="w-50%">
                            <h5 class="mb-10px">縣市<span class="required">*</span></h5>
                            <div class="relative select_wrapper">
                                <select
                                    class="appearance-none bg-transparent border border-transparent text-gray-700 custom_select " v-model="item.selectedCity" @change="updateAreas(index)">
                                    <option  value="" disabled>請選擇縣市</option>
                                    <option v-for="item in cities" :key="item">{{ item }}</option>
                                </select>
                                <img class="absolute right-0 top-0 max-md:mr-2 mt-2 mr-4 pointer-events-none"
                                    src="../../assets/index/arrow_down.svg" alt="">
                            </div>
                        </div>
                        <div class="w-50%">
                            <h5 class="mb-10px">鄉鎮區<span class="required">*</span></h5>
                            <div class="relative select_wrapper">
                                <select
                                    class="appearance-none bg-transparent border border-transparent text-gray-700 custom_select" v-model="item.selectedArea">
                                    <option selected value="" disabled>請選擇鄉鎮區</option>
                                    <option v-if="item.areas" v-for="area in item.areas" :key="area">{{ area }}</option>
                                </select>
                                <img class="absolute right-0 top-0 max-md:mr-2 mt-2 mr-4 pointer-events-none"
                                    src="../../assets/index/arrow_down.svg" alt="">
                            </div>
                        </div>
                    </div>
                    <div class="mb-20px">
                        <h5 class="mb-10px">詳細地址<span class="required">*</span></h5>
                        <div class="relative w-full">
                            <input class="body_input" type="text" placeholder="請輸入詳細地址" v-model="item.address">
                        </div>
                    </div>
                    <div class="mb-20px">
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
                    </div>
                    <div class="flex justify-between mb-20px">
                        <div>
                            <button class="cancel_btn" @click="deleteForm(index)">取消</button>
                        </div>
                        <button class="add" @click="addCount ">加一位被祈福者</button>
                    </div>
                </div>
            </div>
            <div class="body">
                <div class="container top_border py-20px">
                    <h5 class="mount mb-20px">共 <span class="count">{{ peopleCount }}</span> 位</h5>
                    <h5 class="mount">總計:</h5>
                    <h5 class="mount mb-10px">NT$1000</h5>
                    <p class="mb-10px">備註:</p>
                    <textarea class="custom_textarea mb-10px"></textarea>
                    <div class="flex mb-10px" >
                        <span class="mr-5px">綠界科技</span><img src="../../assets/products/light/ecpay_icon.png" alt="">
                    </div>
                    <h5>付款方式</h5>
                    <div class="relative w-full mb-10px">
                        <select
                            class="appearance-none bg-transparent border border-transparent text-gray-700 custom_select ">
                            <option selected>請選擇付款方式</option>
                            <option>ATM虛擬帳戶匯款</option>
                            <option>線上刷卡</option>
                            <option>超商代碼繳費</option>
                        </select>
                        <img class="absolute right-0 top-0 max-md:mr-2 mt-2 mr-4 pointer-events-none"
                            src="../../assets/index/arrow_down.svg" alt="">
                    </div>
                    <div class="flex top_border pt-10px">
                        <input class="mr-10px " type="checkbox">
                        <p>我已閱讀並同意網站的<router-link to="/terms" class="term">條款與條件</router-link></p>
                    </div>
                    
                    <div class="container">
                        <button class="visa" @click="checkOrder">確認訂單</button>
                        <p class="mt-20px">您的個人數據將用於處理您的訂單，支持您在整個網站的體驗，以及我們的<span class="term">隱私權政策</span>中描述的其他目的。</p>
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
import { ref, onMounted ,computed,getCurrentInstance} from 'vue';
const instance = getCurrentInstance()

//其他套件
import lunarFun from 'lunar-fun';

//定義資料組
const setCount = ref(false)
const peopleCount = ref(1)
const activeForm = ref(1)

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
  phone: '',
  email: '',
  calendar: false,
  areas: [],
});

const formItems = ref([createFormItem()]);

const initialCount = () => {
  activeForm.value = 1;
  setCount.value = true;
  const itemsToAdd = peopleCount.value - formItems.value.length;
  for (let i = 0; i < itemsToAdd; i++) {
    formItems.value.push(createFormItem());
  }
};

const addCount = () => {
  peopleCount.value = Number(peopleCount.value)
  peopleCount.value += 1;
  formItems.value.push(createFormItem());
};

const deleteForm = (index) => {
    activeForm.value = 1
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
    if(type){
        formItems.value[index].calendar = true
        const [lunarYear, lunarMonth, lunarDay, run] = lunarFun.gregorianToLunal(formItems.value[index].yValue, formItems.value[index].mValue, formItems.value[index].dValue)
        formItems.value[index].yValue = lunarYear
        formItems.value[index].mValue = run ? '潤' + lunarMonth : lunarMonth;
        formItems.value[index].dValue = lunarDay
    }else{
        formItems.value[index].calendar = false
        const [gYear,gMonth,gDay,run] = lunarFun.lunalToGregorian(formItems.value[index].yValue, formItems.value[index].mValue, formItems.value[index].dValue)
        formItems.value[index].yValue = gYear
        formItems.value[index].mValue = run ? '潤' + gMonth : gMonth;
        formItems.value[index].dValue = gDay
    }
    instance.proxy.$forceUpdate()
}

//查看訂單
const checkOrder = () =>{
}

//縣市選擇器
const updateAreas = (index) => {
  const selectedCity = formItems.value[index].selectedCity;
  const selectCityAreas = areasByCity.value[selectedCity];
  formItems.value[index].areas = selectCityAreas;
  instance.proxy.$forceUpdate()
};

const cities = ref([
    "基隆市", "台北市", "新北市", "桃園市", "新竹市", "新竹縣", "苗栗縣",
    "台中市", "彰化縣", "南投縣", "雲林縣", "嘉義市", "嘉義縣", "台南市",
    "高雄市", "屏東縣", "宜蘭縣", "花蓮縣", "台東縣", "澎湖縣", "金門縣",
    "連江縣"
]);
const areasByCity = ref({
    "基隆市": ["中正區", "七堵區", "暖暖區", "仁愛區", "安樂區", "信義區"],
    "台北市": ["中正區", "大同區", "中山區", "松山區", "大安區", "萬華區", "信義區", "士林區", "北投區", "內湖區", "南港區", "文山區"],
    "新北市": ["板橋區", "三重區", "中和區", "永和區", "新莊區", "新店區", "樹林區", "鶯歌區", "三峽區", "淡水區", "汐止區", "瑞芳區", "土城區", "蘆洲區", "五股區", "泰山區", "林口區", "深坑區", "石碇區", "坪林區", "三芝區", "石門區", "八里區", "平溪區", "雙溪區", "貢寮區", "金山區", "萬里區", "烏來區"],
    "桃園市": ["桃園區", "中壢區", "平鎮區", "八德區", "楊梅區", "大溪區", "蘆竹區", "龜山區", "龍潭區", "新屋區", "觀音區", "復興區"],
    "新竹市": ["東區", "北區", "香山區"],
    "新竹縣": ["竹北市", "湖口鄉", "新豐鄉", "新埔鎮", "關西鎮", "芎林鄉", "寶山鄉", "竹東鎮", "五峰鄉", "橫山鄉", "尖石鄉", "北埔鄉", "峨眉鄉"],
    "苗栗縣": ["苗栗市", "頭份市", "竹南鎮", "後龍鎮", "通霄鎮", "苑裡鎮", "卓蘭鎮", "造橋鄉", "西湖鄉", "頭屋鄉", "公館鄉", "銅鑼鄉", "三義鄉", "大湖鄉", "獅潭鄉", "泰安鄉"],
    "台中市": ["中區", "東區", "南區", "西區", "北區", "北屯區", "西屯區", "南屯區", "太平區", "大里區", "霧峰區", "烏日區", "豐原區", "后里區", "石岡區", "東勢區", "和平區", "新社區", "潭子區", "大雅區", "神岡區", "大肚區", "沙鹿區", "龍井區", "梧棲區", "清水區", "大甲區", "外埔區", "大安區"],
    "彰化縣": ["彰化市", "員林市", "和美鎮", "鹿港鎮", "溪湖鎮", "二林鎮", "田中鎮", "北斗鎮", "花壇鄉", "芬園鄉", "大村鄉", "永靖鄉", "伸港鄉", "線西鄉", "福興鄉", "秀水鄉", "埔心鄉", "埔鹽鄉", "大城鄉", "芳苑鄉", "竹塘鄉", "社頭鄉", "二水鄉", "田尾鄉", "埤頭鄉", "溪州鄉"],
    "南投縣": ["南投市", "埔里鎮", "草屯鎮", "竹山鎮", "集集鎮", "名間鄉", "鹿谷鄉", "中寮鄉", "魚池鄉", "國姓鄉", "水里鄉", "信義鄉", "仁愛鄉"],
    "雲林縣": ["斗六市", "斗南鎮", "虎尾鎮", "西螺鎮", "土庫鎮", "北港鎮", "莿桐鄉", "林內鄉", "古坑鄉", "大埤鄉", "崙背鄉", "二崙鄉", "麥寮鄉", "台西鄉", "東勢鄉", "元長鄉", "四湖鄉", "口湖鄉", "水林鄉"],
    "嘉義市": ["東區", "西區"],
    "嘉義縣": ["太保市", "朴子市", "布袋鎮", "大林鎮", "民雄鄉", "溪口鄉", "新港鄉", "六腳鄉", "東石鄉", "義竹鄉", "鹿草鄉", "水上鄉", "中埔鄉", "竹崎鄉", "梅山鄉", "番路鄉", "大埔鄉", "阿里山鄉"],
    "台南市": ["中西區", "東區", "南區", "北區", "安平區", "安南區", "永康區", "歸仁區", "新化區", "左鎮區", "玉井區", "楠西區", "南化區", "仁德區", "關廟區", "龍崎區", "官田區", "麻豆區", "佳里區", "西港區", "七股區", "將軍區", "學甲區", "北門區", "新營區", "後壁區", "白河區", "東山區", "六甲區", "下營區", "柳營區", "鹽水區", "善化區", "大內區", "山上區", "新市區", "安定區"],
    "高雄市": ["楠梓區", "左營區", "鼓山區", "三民區", "鹽埕區", "前金區", "新興區", "苓雅區", "前鎮區", "旗津區", "小港區", "鳳山區", "大寮區", "鳥松區", "林園區", "仁武區", "大樹區", "大社區", "岡山區", "路竹區", "橋頭區", "梓官區", "彌陀區", "永安區", "燕巢區", "田寮區", "阿蓮區", "茄萣區", "湖內區", "旗山區", "美濃區", "內門區", "杉林區", "甲仙區", "六龜區", "茂林區", "桃源區", "那瑪夏區"],
    "屏東縣": ["屏東市", "潮州鎮", "東港鎮", "恆春鎮", "萬丹鄉", "長治鄉", "麟洛鄉", "九如鄉", "里港鄉", "鹽埔鄉", "高樹鄉", "萬巒鄉", "內埔鄉", "竹田鄉", "新埤鄉", "枋寮鄉", "新園鄉", "崁頂鄉", "林邊鄉", "南州鄉", "佳冬鄉", "琉球鄉", "車城鄉", "滿州鄉", "枋山鄉", "霧台鄉", "瑪家鄉", "泰武鄉", "來義鄉", "春日鄉", "獅子鄉", "牡丹鄉", "三地門鄉"],
    "宜蘭縣": ["宜蘭市", "頭城鎮", "礁溪鄉", "壯圍鄉", "員山鄉", "羅東鎮", "三星鄉", "大同鄉", "五結鄉", "冬山鄉", "蘇澳鎮", "南澳鄉", "釣魚台列嶼"],
    "花蓮縣": ["花蓮市", "鳳林鎮", "玉里鎮", "新城鄉", "吉安鄉", "壽豐鄉", "光復鄉", "豐濱鄉", "瑞穗鄉", "富里鄉", "秀林鄉", "卓溪鄉"],
    "台東縣": ["台東市", "成功鎮", "關山鎮", "長濱鄉", "海端鄉", "池上鄉", "東河鄉", "鹿野鄉", "延平鄉", "卑南鄉", "金峰鄉", "大武鄉", "達仁鄉", "綠島鄉", "蘭嶼鄉", "太麻里鄉"],
    "澎湖縣": ["馬公市", "湖西鄉", "白沙鄉", "西嶼鄉", "望安鄉", "七美鄉"],
    "金門縣": ["金沙鎮", "金湖鎮", "金寧鄉", "金城鎮", "烈嶼鄉", "烏坵鄉"],
    "連江縣": ["南竿鄉", "北竿鄉", "莒光鄉", "東引鄉"]
});
</script>
<style scoped>
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
@media(width > 512px){
    .bottom_left,.bottom_right{
        display: none;
    }
}
.bottom_img{
    width: 100%;
    margin-top: -1px;
}
.wrapper {
    max-width: 892px;
}

@media(width < 768px) {
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
    position: absolute;
    top: 35%;
    left: -7%;
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
    position: absolute;
    top: 35%;
    right: -7%;
    display: flex;
    flex-direction: column;
    align-items: center;
}

@media(width <1024px) {
    .left {
        left: -9%;
    }

    .right {
        right: -9%;
    }
}

@media(width< 768px) {
    .left {
        left: -17%;
    }

    .right {
        right: -17%;
    }
}
@media(width < 512px){
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
    margin-top: 20px;
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

@media(width<1024px) {
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
    height: 100%;
    width: 100vw;
    background-image: url('../../assets/products/light/light_list_bg.svg');
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

@media(width < 1024px) {
    .top {
        height: 340px;
    }
}

@media(width < 768px) {
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

@media(width < 1024px) {
    .body {
        padding-left: 60px;
        padding-right: 60px;
    }
}

@media(width < 768px) {
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

@media(width <1024px) {
    .bottom {
        padding-bottom: 90px;
    }
}

@media(width< 768px) {
    .bottom {
        background-repeat: no-repeat;
        background-size: auto;
    }

    .visa {
        margin-top: 10px;
    }
}
</style>