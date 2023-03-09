<!--
 * @Description: 
 * @version: 1.0.0
 * @Author: 曹双双
 * @Date: 2022-11-25 17:36:03
 * @LastEditors: 曹双双
 * @LastEditTime: 2022-12-09 10:32:48
-->
<template>
  <div class="screen-switch-container">
    <SvgIcon class="icon" :name="isFullScreen ? 'tuichuquanping' : 'quanping'" @click="handleClick" />
  </div>
</template>
<script lang="ts" setup>
import screenfull from 'screenfull'
import { useSettingsStore } from "@/stores/settings"

const layoutStore = useSettingsStore()
const { isFullScreen } = storeToRefs(layoutStore)

const handleClick = () => {
  if (screenfull.isEnabled){
    if(isFullScreen.value) {
      screenfull.exit()
    } else {
      screenfull.request()
    }
    layoutStore.toggleFullScreen()
  }
}
</script>
<style lang="scss" scoped>
.icon {
  width: 20px;
  height: 20px;
}
</style>