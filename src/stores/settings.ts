/*
 * @Description:
 * @version: 1.0.0
 * @Author: 曹双双
 * @Date: 2022-09-19 17:16:49
 * @LastEditors: 曹双双
 * @LastEditTime: 2022-12-09 10:31:40
 */
import { defineStore } from "pinia";

export const useSettingsStore = defineStore("settings", () => {
  const isCollapse = ref(false)
  const isFullScreen = ref(false)

  function toggleCollapseExpand() {
    isCollapse.value=!isCollapse.value;
  }
  function toggleFullScreen() {
    isFullScreen.value = !isFullScreen.value
  }

  return { isCollapse,isFullScreen, toggleCollapseExpand,toggleFullScreen };
});
