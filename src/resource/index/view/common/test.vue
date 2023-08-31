<script setup lang="ts">
import { formatFlatteningRoutes, formatTwoStageRoutes } from "i@/router/index";
const arr = [
  {
    path: "/",
    name: "/",
    component: "test1 component",
    redirect: "/home",
    meta: {
      isKeepAlive: true,
    },
    children: [
      {
        path: "/home",
        name: "home",
        component: "test2 component",
        meta: {
          title: "message.router.home",
          isLink: "",
          isHide: false,
          isKeepAlive: true,
          isAffix: true,
          isIframe: false,
          roles: ["admin", "common"],
          icon: "iconfont icon-shouye",
        },
      },
      {
        path: "/personal",
        name: "personals",
        component: "test3 component",
        meta: {
          title: "个人中心",
          isLink: "",
          isHide: true,
          isKeepAlive: true,
          isAffix: false,
          isIframe: false,
          roles: ["admin"],
          icon: "iconfont icon-diannao",
        },
      },
    ],
  },
  {
    path: "/123",
    name: "/123",
    component: "test3 component",
    redirect: "/home",
    meta: {
      isKeepAlive: true,
    },
    children: [
      {
        path: "/home",
        name: "home",
        component: "test4 component",
        meta: {
          title: "message.router.home",
          isLink: "",
          isHide: false,
          isKeepAlive: true,
          isAffix: true,
          isIframe: false,
          roles: ["admin", "common"],
          icon: "iconfont icon-shouye",
        },
        children: [
          {
            path: "/personal123",
            name: "personals",
            component: "test7 component",
            meta: {
              title: "个人中心",
              isLink: "",
              isHide: true,
              isKeepAlive: true,
              isAffix: false,
              isIframe: false,
              roles: ["admin"],
              icon: "iconfont icon-diannao",
            },
          },
          {
            path: "/personal321",
            name: "personals",
            component: "test8 component",
            meta: {
              title: "个人中心",
              isLink: "",
              isHide: true,
              isKeepAlive: true,
              isAffix: false,
              isIframe: false,
              roles: ["admin"],
              icon: "iconfont icon-diannao",
            },
          },
        ],
      },
      {
        path: "/personal",
        name: "personals",
        component: "test5 component",
        meta: {
          title: "个人中心",
          isLink: "",
          isHide: true,
          isKeepAlive: true,
          isAffix: false,
          isIframe: false,
          roles: ["admin"],
          icon: "iconfont icon-diannao",
        },
      },
    ],
  },
];
const returnArr = formatTwoStageRoutes(formatFlatteningRoutes(arr));
console.log("returnArr===>>>", returnArr);
</script>
<template>
  <div>test</div>
</template>
<style scoped lang="scss"></style>
