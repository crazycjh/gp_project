<template>
    <div class="py-40px md:px-50px">
        <div class="mb-20px">
            <h6 class="mb-10px">姓名<span>*</span></h6>
            <input v-model="name" class="detail_input" type="text">
        </div>
        <div class="mb-20px">
            <h6 class="mb-10px">電子郵件<span>*</span></h6>
            <input v-model="email" class="detail_input" type="text">
        </div>
        <div class="mb-20px flex gap-20px">
            <div class="w-full">
                <h6 class="mb-10px">縣市<span>*</span></h6>
                <div class="relative">
                    <select class="custom_select appearance-none" v-model="selectedCity" @change="updateAreas">
                        <option value="">請選擇縣市</option>
                        <option v-for="item in cities" :key="item">{{ item }}</option>
                    </select>
                    <img class="arrow_down" src="../../assets/index/arrow_down.svg" alt="">
                </div>
            </div>
            <div class="w-full">
                <h6 class="mb-10px">鄉鎮區<span>*</span></h6>
                <div class="relative">
                    <select class="custom_select appearance-none" v-model="selectedArea">
                        <option value="">請選擇鄉鎮</option>
                        <option v-for="area in areas" :key="area">{{ area }}</option>
                    </select>
                    <img class="arrow_down" src="../../assets/index/arrow_down.svg" alt="">
                </div>
            </div>
        </div>
        <div class="mb-40px">
            <h6 class="mb-10px">詳細地址<span>*</span></h6>
            <input v-model="address" class="detail_input" type="text">
        </div>
        <h4 class="title">變更密碼</h4>
        <div class="mb-20px">
            <h6 class="mb-10px">目前的密碼(不需變更請留空)</h6>
            <div class="relative">
                <input v-model="oldPsw" class="detail_input" :type="isPswViewed ? 'text' : 'password'">
                <img v-show="!isPswViewed" class="eye" src="../../assets/modal/eyes_icon_2.svg" alt=""
                        @click="isPswViewed = !isPswViewed">
                <img v-show="isPswViewed" class="eye" src="../../assets/modal/eyes_icon.svg" alt=""
                    @click="isPswViewed = !isPswViewed">
            </div>
        </div>
        <div class="mb-20px">
            <h6 class="mb-10px">新密碼(不需變更請留空)</h6>
            <div class="relative">
                <input v-model="newPsw1" class="detail_input"  :type="isPswViewed ? 'text' : 'password'">
                <img v-show="!isPswViewed" class="eye" src="../../assets/modal/eyes_icon_2.svg" alt=""
                        @click="isPswViewed = !isPswViewed">
                <img v-show="isPswViewed" class="eye" src="../../assets/modal/eyes_icon.svg" alt=""
                    @click="isPswViewed = !isPswViewed">
            </div>
        </div>
        <div class="mb-20px">
            <h6 class="mb-10px">確認新密碼</h6>
            <div class="relative">
                <input v-model="newPsw2" class="detail_input" :type="isPswViewed ? 'text' : 'password'">
                <img v-show="!isPswViewed" class="eye" src="../../assets/modal/eyes_icon_2.svg" alt=""
                        @click="isPswViewed = !isPswViewed">
                <img v-show="isPswViewed" class="eye" src="../../assets/modal/eyes_icon.svg" alt=""
                    @click="isPswViewed = !isPswViewed">
            </div>
        </div>
        <h4 v-if="errorMessage" class="error">{{ errorMessage }}</h4>
        <button class="submit_btn" @click="updateProfile">送出</button>
    </div>
</template>
<script setup>
//官方套件
import { ref,watch,onMounted } from 'vue';
import axios from "axios";
import { useRoute } from 'vue-router';
import { useModal } from 'vue-final-modal'

//自製組件
import AlertModal from '../modals/AlertModal.vue';

//控制modal
const { open, close } = useModal({
  component: AlertModal,
  attrs: {
    content:'更新會員資料成功',
    onConfirm() {
        close()
    },
  },
})

//取得user_id
const backend = import.meta.env.VITE_BACKEND_PATH
const route = useRoute()
const user_id = ref('')
const selectedCity = ref('');
const selectedArea = ref('');
onMounted(() => {
    user_id.value = route.params.memberID;
    fetchData(user_id.value)
});

const fetchData = async (id) => {
  const params = {
       user_id:id
  };
  let apiUrl = `${backend}api/gc/profile/data`;
  
  try {
    const response = await axios.get(apiUrl,{
       params:params,
    });
    if(response.data.success){
        name.value = response.data.data.name
        email.value = response.data.data.email
        address.value = response.data.data.address
        selectedCity.value = response.data.data.city
        selectedArea.value = response.data.data.area
        
    }
  } catch (error) {
    console.error("API 請求失敗:", error);
  }
};

//格式驗證
const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
};

const validatePassword = (password) => {
    return password.length >= 8;
};

//送出會員資料
const errorMessage= ref('')
const name = ref('')
const email = ref('');
const oldPsw = ref('');
const newPsw1 = ref('')
const newPsw2 = ref('')
const address = ref('')
const updateProfile = async () => {
    if(name.value === ''){
        errorMessage.value = '請輸入姓名';
        return;
    }
    if(email.value ===''){
        errorMessage.value = '請輸入電子郵件'
        return;
    }
    if (!validateEmail(email.value)) {
        errorMessage.value = '請輸入有效電子郵件';
        return;
    }
    if(selectedCity.value === ''){
        errorMessage.value = '請選擇縣市'
        return;
    }
    if(selectedArea.value === ''){
        errorMessage.value = '請選擇鄉鎮區'
        return;
    }
    if(address.value === ''){
        errorMessage.value = '請輸人詳細地址'
        return;
    }

    const requestData = {
        user_id:user_id.value,
        name:name.value,
        email: email.value,
        city:selectedCity.value,
        area:selectedArea.value,
        address:address.value
    };

    if(oldPsw.value !== ''){
        if(!validatePassword(oldPsw.value)){
            errorMessage.value = '請輸入八位數以上舊密碼'
            return;
        }else{
            requestData.oldPsw = oldPsw.value
        }
    }

    if(newPsw1.value !== '' && newPsw2 !== ''){
        if(!validatePassword(newPsw1.value) || !validatePassword(newPsw2.value)){
            errorMessage.value = '請輸入八位數以上新密碼'
            return
        }else if(newPsw1.value !== newPsw2.value){
            errorMessage.value = '兩次輸入的新密碼不同'
            return
        }else{
            requestData.newPsw = newPsw2.value
        }
    }
   
    try {
        const response = await axios.post(
            `${import.meta.env.VITE_BACKEND_PATH}/api/gc/profile/update`,
            requestData
        );
        if(response.data.success === false){
            errorMessage.value = response.data.data

        }else{
            open()  
        }
    } catch (error) {
        console.error("API 请求失败:", error);
    }
}

//密碼眼睛開合
const isPswViewed = ref(false)

//顯示選擇器

const areas = ref([]);
const updateAreas = () => {
//   selectedArea.value = ''; 
  const selectedCityAreas = areasByCity.value[selectedCity.value];
  areas.value = selectedCityAreas || [];
};

watch(selectedCity, updateAreas);
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
.error{
    margin-top: 20px;
    color:red;
}
.eye {
    position: absolute;
    right: 7px;
    top: 7px;
    width: 29px;
    height: 16px;
}

.submit_btn{
    margin-bottom: 40px;
    width: 152px;
    height: 43px;
    background-color: #CEB96E;
    color:#ffffff;
    outline: none;
    border-radius: 0;
    border: none;
}
.submit_btn:hover{
    color:#CEB96E;
    background-color: #ffffff;
}
.title{
    margin-bottom: 20px;
    padding-bottom: 7px;
    border-bottom: 1px solid #D9D9D9;
}
.arrow_down{
    position: absolute;
    top:10px;
    right:7px
}
.detail_input{
    padding: 0px 10px;
    width: 100%;
    height: 30px;
    background-color: #ffffff;
    border:1px solid #D9D9D9;
}
span{
    color:#920000;
}
.custom_select {
    display: flex;
    width: 100%;
    height: 30px;
    padding: 0px 10px;
    justify-content: space-between;
    align-items: center;
    flex-shrink: 0;
    background-color: #ffffff;
    border:1px solid #D9D9D9;
}
</style>