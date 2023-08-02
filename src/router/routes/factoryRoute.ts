import { RouteRecordRaw } from "vue-router";
const factoryRoute: RouteRecordRaw[] = [
  {
    path: "/test",
    name: "test",
    component: () => import("@/view/common/test.vue"),
  },
  {
    path: "/test2",
    name: "test2",
    component: () => import("@/view/common/test2.vue"),
  },
];
export default factoryRoute;
