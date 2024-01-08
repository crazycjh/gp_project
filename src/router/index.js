import { createRouter, createWebHistory } from 'vue-router'
import axios from 'axios'
import { useAuth } from '@/store/auth.js'

const backend = import.meta.env.VITE_BACKEND_PATH

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
    component: () => import("@/views/products/Culture.vue"),
    meta: {
      productData: {

      }
    },
    // async beforeEnter(to, from, next) {
    //   try {
    //     const productID = to.params.productID;
    //     try {
    //       const response = await axios.get(
    //         `${import.meta.env.VITE_BACKEND_PATH}api/gc/culture/${productID}`
    //       );
    //       to.meta.productData.title = response.data.data.title;
    //       to.meta.productData.content = response.data.data.content
    //     } catch (error) {
    //       console.error("API 請求失敗:", error);
    //     } finally {
    //       next();
    //     }
    //   } catch (error) {
    //     console.error("API 請求失敗:", error);
    //     next("/");
    //   }
    // },
  },
  {
    path: "/product/light/:templeID/:productID",
    name: "LightInner",
    component: () => import("@/views/products/Light.vue"),
    meta: { requiresAuth: true }
  },
  {
    path: "/product/todo/:productID",
    name: "TodoInner",
    component: () => import("@/views/products/Todo.vue"),
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
    component: () => import("@/views/temple/Inner.vue")
  },
  {
    path: "/latest/inner/:latestID",
    name: "LastestInner",
    component: () => import("@/views/latest/Inner.vue"),
  },
  {
    path: "/search/:content",
    name: "Search",
    component: () => import("@/views/SearchPage.vue")
  },
  {
    path: "/todo",
    name: "Todo",
    component: () => import("@/views/todo/Todo.vue")
  },
  {
    path: "/todo/:postID",
    name: "TodoInner2",
    component: () => import("@/views/todo/Inner.vue")
  },
  {
    path: "/terms",
    name: "Terms",
    component: () => import("@/views/Terms.vue")
  },
  {
    path: "/thanks/:order_id",
    name: "Thanks",
    component: () => import("@/views/cart/Thanks.vue"),
    meta: { requiresAuth: true }
  },
  {
    path: "/member/:memberID",
    name: "Member",
    component: () => import("@/views/member/Index.vue"),
    meta: { requiresAuth: true }
  },
  // {
  //   path: "/resetPassword/:memberID/:expiration_time",
  //   name: "ResetPassword",
  //   component: () => import("@/views/member/ResetPassword.vue")
  // },
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
  //登入卡控
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

router.beforeEach(async (to, from, next) => {
  if (to.name === 'Culture') {
    const productID = to.params.productID;
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_BACKEND_PATH}api/gc/culture/${productID}`
      );
      to.meta.productData.title = response.data.data.title
      to.meta.productData.content = response.data.data.content
      to.meta.productData.image = response.data.data.image
    } catch (error) {
      console.error("API 請求失敗:", error);
    } finally {
      next();
    }
  }
  next();
});

export default router