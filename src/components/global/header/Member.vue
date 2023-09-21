<template>
    <div class="icon" @click="showLogin"></div>
</template>
<script setup>
import { useModal } from 'vue-final-modal'
import LoginModal from '../../modals/LoginModal.vue';

const { open, close } = useModal({
  component: LoginModal,
  attrs: {
    onConfirm() {
        close()
    },
  },
})

const showLogin = () =>{
    open()
}

</script>
<style scoped>
.icon{
    width: 33px;
    height: 32px;
    background-image: url(../../../assets/header/user_icon.svg);
}
.icon:hover{
    background-image: url(../../../assets/header/user_icon2.svg);
}
</style>