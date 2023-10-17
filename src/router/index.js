import { createRouter, createWebHistory } from 'vue-router'

import { useAuth } from '@/store/auth.js'
const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import("@/views/Home.vue")
  },
  {
    path: "/latest/:type",
    name: "Latest",
    component: () => import("@/views/latest/Latest.vue")
  },
  {
    path: "/allTemple",
    name: "AllTemple",
    component: () => import("@/views/temple/AllTemple.vue")
  },
  // {
  //   path: "/mainGod",
  //   name: "MainGod",
  //   component: () => import("@/views/mainGod/MainGod.vue")
  // },
  {
    path: "/mainGod",
    name: "MainGodDefault",
    component: () => import("@/views/mainGod/MainGodDefault.vue")
  },
  {
    path: "/service",
    name: "Service",
    component: () => import("@/views/Service.vue")
  },
  {
    path: "/product/:type",
    name: "Product",
    component: () => import("@/views/products/Product.vue")
  },
  {
    path: "/product/culture/:productID",
    name: "Culture",
    component: () => import("@/views/products/Culture.vue")
  },
  {
    path: "/product/light/:productID",
    name: "LightInner",
    component: () => import("@/views/products/Light.vue"),
    meta: { requiresAuth: true }
  },
  {
    path: "/qa",
    name: "QA",
    component: () => import("@/views/QA.vue")
  },
  {
    path: "/about",
    name: "About",
    component: () => import("@/views/About.vue")
  },
  {
    path: "/details",
    name: "Details",
    component: () => import("@/views/Details.vue")
  },
  {
    path: "/process",
    name: "Process",
    component: () => import("@/views/Process.vue")
  },
  {
    path: "/privacy",
    name: "Privacy",
    component: () => import("@/views/Privacy.vue")
  },
  {
    path: "/customerService",
    name: "CustomerService",
    component: () => import("@/views/CustomerService.vue")
  },
  {
    path: "/temple/:templeID",
    name: "Temple",
    component: () => import("@/views/temple/inner.vue")
  },
  {
    path: "/latest/inner/:latestID",
    name: "LastestInner",
    component: () => import("@/views/latest/inner.vue"),
  },
  {
    path: "/search/:content",
    name: "Search",
    component: () => import("@/views/SearchPage.vue")
  },
  {
    path: "/todo",
    name: "Todo",
    component: () => import("@/views/Todo.vue")
  },
  {
    path: "/terms",
    name: "Terms",
    component: () => import("@/views/Terms.vue")
  },
  {
    path: "/thanks/:order_id",
    name: "Thanks",
    component: () => import("@/views/cart/Thanks.vue")
  },
  {
    path: "/member/:memberID",
    name: "Member",
    component: () => import("@/views/member/Index.vue"),
    meta: { requiresAuth: true }
  },
  {
    path: "/resetPassword/:memberID/:expiration_time",
    name: "ResetPassword",
    component: () => import("@/views/member/ResetPassword.vue")
  },
  {
    path: "/cart/:memberID",
    name: "Cart",
    component: () => import("@/views/cart/Inner.vue"),
    meta: { requiresAuth: true }
  },
  {
    path: "/info/:memberID",
    name: "Info",
    component: () => import("@/views/cart/Info.vue"),
    meta: { requiresAuth: true }
  },

]
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

// 添加路由守衛
router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    const auth = useAuth(); 
    const isLoggedIn = auth.isLogin
    if (!isLoggedIn) {
      next('/'); 
    } else {
      next();
    }
  } else {
    next();
  }
});

export default router