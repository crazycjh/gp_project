//官方套件
import { ref, onMounted  } from 'vue';
import { defineStore } from 'pinia';

export const useAuth = defineStore('auth', () => {
   const jwt = ref('')
   const member = ref({
    user_id: '',
    email: ''
  });
   const setJWT = (newjwt) => {
    jwt.value = newjwt
   }
   const setMember = (user_id,email) =>{
    member.value.user_id = user_id
    member.value.email = email
   }
    return { jwt,member,setJWT,setMember };
});