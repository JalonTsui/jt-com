import { RouteRecordRaw } from "vue-router";
const bootstrapRoute: RouteRecordRaw[] = [
  {
    path: "/bootstrap1",
    name: "bootstrap-index",
    component: () => import("i@/view/bootstrap/index.vue"),
  },
];
export default bootstrapRoute;
