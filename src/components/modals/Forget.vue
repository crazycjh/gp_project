<template>
    <div class="pb-20px">
        <p class="small mb-30px">忘記您的密嗎？請輸入您的使用者名稱或註冊的電子郵件。您將會在電子郵件信箱中收到重設密碼的連結。</p>
        <div class="mb-10px">
            <h5 class="mb-5px sub_title">電子郵件</h5>
            <input class="member_input" type="text" placeholder="請輸入電子郵件">
        </div>
        <button class="reset_btn" @click="resetPassword">重設密碼</button>
    </div>
</template>
<script setup>
const emit = defineEmits(['reset-password']);

const resetPassword = () => {
    emit('reset-password');
}
</script>
<style scoped>
.reset_btn{
    width: 100%;
    height: 40px;
    color:#ffffff;
    background-color: #CEB96E;
    border: none;
    outline: none;
    border-radius: 0;
}
.reset_btn:hover{
    color:#CEB96E;
    background-color: #ffffff;
    border:1px solid #CEB96E;
}
.small{
    font-size: 14px;
}
.sub_title{
    font-size: 16px;
}
.member_input{
  padding: 0 10px;
  height: 30px;
  width: 100%;
  background-color: #EEEEEE;
}
</style>