/* eslint-disable */
import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/signin",
      name: "signin",
      component: () => import("../views/SignIn.vue"),
    },
    {
      path: "/staff",
      name: "staff",
      redirect: {name: 'staffdashboard'},
      component: () => import("../views/StaffAccount.vue"),
      children: [
        {
          path: "/staff",
          name: "staffdashboard",
          component: () => import("../components/AppStaffDashboard.vue"),
        },
      ]
    },
  ],
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) return {el: to.hash,  behavior: "smooth"}
    else return { top: 0, behavior: "smooth" }
  }
});

export default router;
