import { RouteRecordRaw } from "vue-router";
const factoryRoute: RouteRecordRaw[] = [
  {
    path: "/test",
    name: "test",
    component: () => import("i@/view/common/test.vue"),
  },
  {
    path: "/test2",
    name: "test2",
    component: () => import("i@/view/common/test2.vue"),
  },
  {
    path: "/test3",
    name: "test3",
    component: () => import("i@/view/common/test3.vue"),
  },
];
export default factoryRoute;
