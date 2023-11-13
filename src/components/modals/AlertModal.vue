<template>
    <VueFinalModal
        class="flex justify-center items-center"
        content-class="flex flex-col p-4 bg-white dark:bg-black rounded-lg border border-gray-100 dark:border-gray-800 "
    >
        <div class="flex justify-end">
            <img
                class="close"
                src="../../assets/modal/close.png"
                alt=""
                @click="emit('confirm')"
            />
        </div>
        <div class="w-360px px-10px pt-30px">
            <div class="flex mb-30px">
                <img
                    v-if="isAlert"
                    class="check mr-5px"
                    src="../../assets/modal/error_icon.svg"
                    alt=""
                />
                <img
                    v-if="!isAlert"
                    class="check mr-5px"
                    src="../../assets/modal/check_mark_icon.svg"
                    alt=""
                />
                <p :class="{ msg: true, alert: isAlert }">
                    {{ props.content }}
                </p>
            </div>
            <button class="know_btn" @click="emit('confirm')">回頁面</button>
        </div>
    </VueFinalModal>
</template>
<script setup>
//官方套件
import { ref } from "vue";
import { VueFinalModal } from "vue-final-modal";
import axios from "axios";

//自製元件
const props = defineProps({
    content: String,
    isAlert: Boolean,
});
const emit = defineEmits(["confirm"]);
</script>

<style scoped>
.alert {
    color: #920000 !important;
}
.know_btn {
    width: 100%;
    height: 40px;
    color: #ffffff;
    background-color: #ceb96e;
    border: none;
    outline: none;
    border-radius: 0;
}

.know_btn:hover {
    color: #ceb96e;
    background-color: #ffffff;
    border: 1px solid #ceb96e;
}
.msg {
    color: #038800;
}
.check {
    width: 18px;
    height: 18px;
}
</style>
