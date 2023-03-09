/*
 * @Description:
 * @version: 1.0.0
 * @Author: 曹双双
 * @Date: 2022-09-19 17:16:49
 * @LastEditors: 曹双双
 * @LastEditTime: 2022-12-13 17:57:28
 */
import { createRouter, createWebHistory } from "vue-router";
import Layout from "@/layout/index.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/login",
      name: "Login",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("@/views/login/index.vue"),
    },
    {
      path: "/",
      redirect: "/home",
      component:Layout,
      children:[
        {
          path: "/home",
          name: "Home",
          meta: {
            title: "首页",
          },
          component: () => import("@/views/home/index.vue"),
        },
      ]
    },
    {
      path: "/auth",
      name: "Auth",
      component: Layout,
      redirect:'/auth/user',
      meta: {
        title: "权限管理",
        icon: "Customermanagement",
      },
      children: [
        {
          path: "/auth/application",
          name: "Application",
          meta: {
            title: "应用管理",
            icon: "",
          },
          component: () => import("@/views/auth/application/index.vue"),
        },
        {
          path: "/auth/menu",
          name: "Menu",
          meta: {
            title: "菜单管理",
            icon: "",
          },
          component: () => import("@/views/auth/menu/index.vue"),
        },
        {
          path: "/auth/operaion",
          name: "Operation",
          meta: {
            title: "操作管理",
            icon: "",
          },
          component: () => import("@/views/auth/operation/index.vue"),
        },
        {
          path: "/auth/role",
          name: "Role",
          meta: {
            title: "角色管理",
            icon: "",
          },
          component: () => import("@/views/auth/role/index.vue"),
        },
        {
          path: "/auth/user",
          name: "User",
          meta: {
            title: "用户管理",
            icon: "",
          },
          component: () => import("@/views/auth/user/index.vue"),
        }
      ],
    },
    {
      path: "/media",
      name: "Media",
      component: Layout,
      meta: {
        title: "媒体管理",
        icon: "video",
      },
      children: [
        {
          path: "/media/video",
          name: "Video",
          meta: {
            title: "视频管理",
            icon: "",
          },
          component: () => import("@/views/media/video/index.vue"),
        },
        {
          path: "/media/audio",
          name: "Audio",
          meta: {
            title: "音频管理",
            icon: "",
          },
          component: () => import("@/views/media/audio/index.vue"),
        },
        {
          path: "/media/picture",
          name: "Picture",
          meta: {
            // title:'图片管理',
            icon: "",
          },
          component: () => import("@/views/media/picture/index.vue"),
        },
      ],
    },
    // {
    //   path:'/visualization',
    //   name:'Visualization',
    //   component:Layout,
    //   meta:{
    //     title:'可视化',
    //     icon:'tradingdata',
    //   },
    //   component:() => import('@/views/visualization/index.vue')
    // },
    // {
    //   path:'/map',
    //   name:'Map',
    //   component:Layout,
    //   meta:{
    //     title:'地图',
    //     icon:'Exportservices',
    //   },
    //   component:() => import('@/views/map/index.vue')
    // }
  ],
});

export default router;
