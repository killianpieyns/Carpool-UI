import { createRouter, createWebHistory } from "vue-router";
import store from "../store";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("../views/HomeView.vue"),
      meta:{
        title: 'Home',
        requiresAuth: true,
      }
    },
    {
      path: "/login",
      name: "login",
      component: () => import("../views/LoginView.vue"),
      meta: {
        requiresAuth: false,
        title: "Login",
      },
    },
    {
      path: "/register",
      name: "register",
      component: () => import("../views/RegisterView.vue"),
      meta: {
        requiresAuth: false,
        title: "Register",
      },
    },
    {
      path: "/rides",
      name: "rides",
      component: () => import("../views/RidesView.vue"),
      meta: {
        requiresAuth: true,
        title: "Rides",
      },
    },
    {
      path: "/:catchAll(.*)",
      redirect: { path: "/" },
    },
  ],
});

router.beforeEach((to, from, next) => 
{
  document.title = to.meta.title;

  if (to.meta.requiresAuth && !store.getters["auth/authenticated"]) {
    next({ 
      path: "/login" ,
      query: { redirect: to.fullPath }
    });
    return;
  }

  next();
});

export default router;
