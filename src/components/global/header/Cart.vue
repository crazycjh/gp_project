<template>
    <div class="icon" @click="openCart()"></div>
</template>
<script setup>
//官方套件
import { useModal } from 'vue-final-modal'
import { useAuth } from '@/store/auth.js'

//自製元件
const backend = import.meta.env.VITE_BACKEND_PATH
import LoginModal from '@/components/modals/LoginModal.vue';
import CartModal from '@/components/modals/CartModal.vue'

//登入modal
const auth = useAuth();
const { open, close } = useModal({
  component: LoginModal,
  attrs: {
    onConfirm() {
        close()
    },
  },
})

//購物車modal 第二個modal所以不能用解構來處理
const cart = useModal({
  component: CartModal,
  attrs: {
    onConfirm() {
      cart.close();
    },
  },
});

//打開購物車流程
const openCart = (id) =>{
    if(auth.isLogin){
       cart.open()
    }else{
      open()
    }
}

</script>
<style scoped>
.icon{
    width: 33px;
    height: 32px;
    background-image: url(../../../assets/header/cart_icon.svg);
}
.icon:hover{
    background-image: url(../../../assets/header/cart_icon2.svg);
}
</style>