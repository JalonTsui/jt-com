import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import FactoryRoute from "./routes/factoryRoute";
const routes: RouteRecordRaw[] = [
  {
    path: "/",
    name: "layout",
    component: () => import("@/layout/index.vue"),
  },
  ...FactoryRoute,
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});
export default router;
