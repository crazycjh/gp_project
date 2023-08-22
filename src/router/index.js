import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {path: "/", name: "Home", component: () => import("@/views/Home.vue")},
  {path: "/web_build", name: "WebBuild", component: () => import("@/views/auth/WebBuild.vue")}
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router