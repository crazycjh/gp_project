import { createApp } from 'vue'
import { createPinia } from 'pinia';
import { createVfm } from 'vue-final-modal'
import router from "./router";
import './style.css'
import App from './App.vue'
import "./style/index.css";
import './assets/main.css';
import 'vue-final-modal/style.css'
const app = createApp(App)
app.use(createPinia())
app.use(createVfm())
app.use(router)
app.mount('#app')
