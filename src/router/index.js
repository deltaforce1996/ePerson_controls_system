import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    component: () => import("@/layouts/AppDefault.vue"),
    children: [
      {
        path: "/",
        name: "HomePage",
        component: () => import("@/views/HomePage.vue"),
      },
      {
        path: "/StaticPage",
        name: "StaticPage",
        component: () => import("@/views/StaticPage.vue"),
      },
      {
        path: "/UserMgmtPage",
        name: "UserMgmtPage",
        component: () => import("@/views/UserMgmtPage.vue"),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
