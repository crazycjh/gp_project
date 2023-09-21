<template>
    <div>
        <div class="flex mb-30px">
            <img class="check mr-5px" src="../../assets/modal/check_mark_icon.svg" alt="">
            <p class="msg">lia9021102@gmail.com請到信箱取件重設密碼</p>
        </div>
        <button class="know_btn" @click="redirectLogin">我知道了</button>
    </div>
</template>
<script setup>
const emit = defineEmits(['redirect-login']);

const redirectLogin = () => {
    emit('redirect-login');
}
</script>
<style scoped>
.check {
    width: 18px;
    height: 18px;
}
.msg {
    color: #038800;
}

.know_btn {
    width: 100%;
    height: 40px;
    color: #ffffff;
    background-color: #CEB96E;
    border: none;
    outline: none;
    border-radius: 0;
}

.know_btn:hover {
    color: #CEB96E;
    background-color: #ffffff;
    border: 1px solid #CEB96E;
}
</style>