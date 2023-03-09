/*
 * @Description:
 * @version: 1.0.0
 * @Author: 曹双双
 * @Date: 2022-09-19 17:16:49
 * @LastEditors: 曹双双
 * @LastEditTime: 2023-01-14 11:30:36
 */
import { fileURLToPath, URL } from "node:url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";
import { ElementPlusResolver } from "unplugin-vue-components/resolvers";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    AutoImport({
      imports: ["vue", "vue-router", "pinia"],
      eslintrc: {
        enabled: false,
        filepath: "./.eslintrc-auto-imports.json",
        globalsPropValue: true,
      },
      dts: "src/auto-imports.d.ts",
      resolvers: [ElementPlusResolver()],
    }),
    Components({ resolvers: [ElementPlusResolver()] }),
  ],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  css:{
    preprocessorOptions:{
      scss:{
        additionalData:`@use "@/styles/element-reset.scss" as *;`
      }
    }
  },
  server:{
    port:3001,
    open:false,
    proxy:{
      '/api':{
        target:'http://127.0.0.1:3002',
        changeOrigin:true,
        rewrite:(path) => path.replace(/^\/api/,'')
      }
    }
  }
});
