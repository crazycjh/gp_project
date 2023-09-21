import { createApp } from 'vue'
import { createPinia } from 'pinia';
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
import { createVfm } from 'vue-final-modal'
import router from "./router";
import './style.css'
import App from './App.vue'
import "./style/index.css";
import './assets/main.css';
import 'vue-final-modal/style.css'
const app = createApp(App)
const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)
app.use(pinia)
app.use(createVfm())
app.use(router)
app.mount('#app')
