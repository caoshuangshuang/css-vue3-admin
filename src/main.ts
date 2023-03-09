/*
 * @Description:
 * @version: 1.0.0
 * @Author: 曹双双
 * @Date: 2022-09-19 17:16:49
 * @LastEditors: 曹双双
 * @LastEditTime: 2022-12-14 14:19:03
 */
import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";

import * as ElementPlusIconVue from "@element-plus/icons-vue";
import SvgIcon from '@/components/SvgIcon/index.vue'

import "@/styles/index.scss";
import '@/styles/svg/symbol.js'

const app = createApp(App);

// 全局注册element-plus icons
for (const [key, component] of Object.entries(ElementPlusIconVue)) {
  app.component(key, component);
}
app.component('SvgIcon', SvgIcon)

app.use(createPinia());
app.use(router);

app.mount("#app");
