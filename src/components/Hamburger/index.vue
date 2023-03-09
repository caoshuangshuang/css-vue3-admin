<!--
 * @Description: 
 * @version: 1.0.0
 * @Author: 曹双双
 * @Date: 2022-11-25 17:36:03
 * @LastEditors: 曹双双
 * @LastEditTime: 2022-12-08 14:30:47
-->
<template>
  <div class="hamburger-container">
    <SvgIcon class="hamburger" :name="isCollapse ? 'shouqi' : 'zhankai'" @click="handleClick" />
  </div>
</template>
<script lang="ts" setup>
import { useSettingsStore } from '@/stores/settings'

const layoutStore = useSettingsStore()
const { isCollapse } = storeToRefs(layoutStore)

const handleClick = () => {
  layoutStore.toggleCollapseExpand()
}

</script>
<style lang="scss" scoped>
.hamburger {
  width: 20px;
  height: 20px;
}
</style>