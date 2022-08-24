import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("../views/HomeView.vue"),
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
        requiresAuth: false,
        title: "Rides",
      },
    },
    {
      path: "/:catchAll(.*)",
      redirect: { path: "/" },
    },
  ],
});
export default router;
