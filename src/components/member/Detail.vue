<template>
    <div class="py-40px md:px-50px">
        <div class="mb-20px">
            <h6 class="mb-10px">姓名<span>*</span></h6>
            <input v-model="name" class="detail_input" type="text" />
        </div>
        <div class="mb-20px">
            <h6 class="mb-10px">聯絡電話<span>*</span></h6>
            <input v-model="phone" class="detail_input" type="text" />
        </div>
        <div class="mb-20px">
            <h6 class="mb-10px">電子郵件<span>*</span></h6>
            <input v-model="email" class="detail_input" type="text" readonly />
        </div>
        <div class="mb-20px flex gap-20px">
            <div class="w-full">
                <h6 class="mb-10px">縣市<span>*</span></h6>
                <div class="relative">
                    <select
                        class="custom_select appearance-none"
                        v-model="selectedCity"
                        @change="updateAreas(selectedCity)"
                    >
                        <option value="">請選擇縣市</option>
                        <option v-for="item in cities" :key="item">
                            {{ item }}
                        </option>
                    </select>
                    <img
                        class="arrow_down"
                        src="../../assets/index/arrow_down.svg"
                        alt=""
                    />
                </div>
            </div>
            <div class="w-full">
                <h6 class="mb-10px">鄉鎮區<span>*</span></h6>
                <div class="relative">
                    <select
                        class="custom_select appearance-none"
                        v-model="selectedArea"
                        @change="updateZipCode(selectedArea)"
                    >
                        <option value="">請選擇鄉鎮</option>
                        <option v-for="area in areas" :key="area">
                            {{ area }}
                        </option>
                    </select>
                    <img
                        class="arrow_down"
                        src="../../assets/index/arrow_down.svg"
                        alt=""
                    />
                </div>
            </div>
        </div>
        <div class="mb-40px flex gap-20px">
            <div class="w-full">
                <h6 class="mb-10px">郵遞區號<span>*</span></h6>
                <input
                    v-model="zipCode"
                    class="detail_input"
                    type="text"
                    readonly
                />
            </div>
            <div class="w-full">
                <h6 class="mb-10px">詳細地址<span>*</span></h6>
                <input v-model="address" class="detail_input" type="text" />
            </div>
        </div>
        <h4 class="title">變更密碼</h4>
        <div class="mb-20px">
            <h6 class="mb-10px">目前的密碼(不需變更請留空)</h6>
            <div class="relative">
                <input
                    v-model="oldPsw"
                    class="detail_input"
                    :type="isPswViewed ? 'text' : 'password'"
                />
                <img
                    v-show="!isPswViewed"
                    class="eye"
                    src="../../assets/modal/eyes_icon_2.svg"
                    alt=""
                    @click="isPswViewed = !isPswViewed"
                />
                <img
                    v-show="isPswViewed"
                    class="eye"
                    src="../../assets/modal/eyes_icon.svg"
                    alt=""
                    @click="isPswViewed = !isPswViewed"
                />
            </div>
        </div>
        <div class="mb-20px">
            <h6 class="mb-10px">新密碼(不需變更請留空)</h6>
            <div class="relative">
                <input
                    v-model="newPsw1"
                    class="detail_input"
                    :type="isPswViewed2 ? 'text' : 'password'"
                />
                <img
                    v-show="!isPswViewed2"
                    class="eye"
                    src="../../assets/modal/eyes_icon_2.svg"
                    alt=""
                    @click="isPswViewed2 = !isPswViewed2"
                />
                <img
                    v-show="isPswViewed2"
                    class="eye"
                    src="../../assets/modal/eyes_icon.svg"
                    alt=""
                    @click="isPswViewed2 = !isPswViewed2"
                />
            </div>
        </div>
        <div class="mb-20px">
            <h6 class="mb-10px">確認新密碼</h6>
            <div class="relative">
                <input
                    v-model="newPsw2"
                    class="detail_input"
                    :type="isPswViewed3 ? 'text' : 'password'"
                />
                <img
                    v-show="!isPswViewed3"
                    class="eye"
                    src="../../assets/modal/eyes_icon_2.svg"
                    alt=""
                    @click="isPswViewed3 = !isPswViewed3"
                />
                <img
                    v-show="isPswViewed3"
                    class="eye"
                    src="../../assets/modal/eyes_icon.svg"
                    alt=""
                    @click="isPswViewed3 = !isPswViewed3"
                />
            </div>
        </div>
        <h4 v-if="errorMessage" class="error">{{ errorMessage }}</h4>
        <button class="submit_btn" @click="updateProfile">送出</button>
    </div>
</template>
<script setup>
//官方套件
import { ref, watch, onMounted } from "vue";
import axios from "axios";
import { useRoute } from "vue-router";
import { useModal } from "vue-final-modal";

//自製組件
import AlertModal from "@/components/modals/AlertModal.vue";
import { cities, areasByCity, zipCodesByArea } from "@/store/city.js";
import { useAuth } from "@/store/auth.js";
const auth = useAuth();

//控制modal
const { open, close } = useModal({
    component: AlertModal,
    attrs: {
        content: "更新會員資料成功",
        onConfirm() {
            close();
        },
    },
});

//取得user_id
const backend = import.meta.env.VITE_BACKEND_PATH;
const route = useRoute();
const user_id = ref("");
const selectedCity = ref("");
const selectedArea = ref("");
const zipCode = ref("");
const phone = ref("");
onMounted(() => {
    user_id.value = route.params.memberID;
    fetchData(user_id.value);
});

const fetchData = async (id) => {
    const params = {
        user_id: id,
    };
    let apiUrl = `${backend}api/gc/profile/data`;

    try {
        const response = await axios.get(apiUrl, {
            params: params,
        });
        if (response.data.success) {
            name.value = response.data.data.name;
            email.value = response.data.data.email;
            address.value = response.data.data.address;
            selectedCity.value = response.data.data.city;
            selectedArea.value = response.data.data.area;
            zipCode.value = response.data.data.zipCode;
            phone.value = response.data.data.phone;
        }
    } catch (error) {
        console.error("API 請求失敗:", error);
    }
};

watch(selectedCity, (newValue) => {
    if (newValue) {
        updateAreas(newValue);
    }
});

//格式驗證
const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
};

const validatePassword = (password) => {
    return password.length >= 8;
};

//送出會員資料
const errorMessage = ref("");
const name = ref("");
const email = ref("");
const oldPsw = ref("");
const newPsw1 = ref("");
const newPsw2 = ref("");
const address = ref("");
const updateProfile = async () => {
    if (name.value === "") {
        errorMessage.value = "請輸入姓名";
        return;
    }
    if (email.value === "") {
        errorMessage.value = "請輸入電子郵件";
        return;
    }
    if (!validateEmail(email.value)) {
        errorMessage.value = "請輸入有效電子郵件";
        return;
    }
    if (selectedCity.value === "") {
        errorMessage.value = "請選擇縣市";
        return;
    }
    if (selectedArea.value === "") {
        errorMessage.value = "請選擇鄉鎮區";
        return;
    }
    if (address.value === "") {
        errorMessage.value = "請輸人詳細地址";
        return;
    }

    const requestData = {
        user_id: user_id.value,
        name: name.value,
        email: email.value,
        city: selectedCity.value,
        area: selectedArea.value,
        address: address.value,
        zipCode: zipCode.value,
        phone: phone.value,
    };

    if (oldPsw.value !== "") {
        if (!validatePassword(oldPsw.value)) {
            errorMessage.value = "請輸入八位數以上舊密碼";
            return;
        } else {
            requestData.oldPsw = oldPsw.value;
        }
    }

    if (newPsw1.value !== "" && newPsw2 !== "") {
        if (
            !validatePassword(newPsw1.value) ||
            !validatePassword(newPsw2.value)
        ) {
            errorMessage.value = "請輸入八位數以上新密碼";
            return;
        } else if (newPsw1.value !== newPsw2.value) {
            errorMessage.value = "兩次輸入的新密碼不同";
            return;
        } else {
            requestData.newPsw = newPsw2.value;
        }
    }

    try {
        const response = await axios.post(
            `${import.meta.env.VITE_BACKEND_PATH}api/gc/profile/update`,
            requestData
        );
        if (response.data.success === false) {
            errorMessage.value = response.data.data;
        } else {
            auth.setMember(requestData);
            open();
        }
    } catch (error) {
        console.error("API 請求失敗:", error);
    }
};

//密碼眼睛開合
const isPswViewed = ref(false);
const isPswViewed2 = ref(false);
const isPswViewed3 = ref(false);

//縣市選擇器
const areas = ref([]);
const updateAreas = (city) => {
    const selectCityAreas = areasByCity.value[city];
    areas.value = selectCityAreas;
};

//郵遞區號選擇器
const updateZipCode = (area) => {
    const code = zipCodesByArea[area];
    zipCode.value = code;
};
</script>
<style scoped>
.error {
    margin-top: 20px;
    color: red;
}
.eye {
    position: absolute;
    right: 7px;
    top: 7px;
    width: 29px;
    height: 16px;
}

.submit_btn {
    margin-bottom: 40px;
    width: 152px;
    height: 43px;
    background-color: #ceb96e;
    color: #ffffff;
    outline: none;
    border-radius: 0;
    border: none;
}
.submit_btn:hover {
    color: #ceb96e;
    background-color: #ffffff;
}
.title {
    margin-bottom: 20px;
    padding-bottom: 7px;
    border-bottom: 1px solid #d9d9d9;
}
.arrow_down {
    position: absolute;
    top: 10px;
    right: 7px;
}
.detail_input {
    padding: 0px 10px;
    width: 100%;
    height: 30px;
    background-color: #ffffff;
    border: 1px solid #d9d9d9;
}
span {
    color: #920000;
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
    border: 1px solid #d9d9d9;
}
</style>
