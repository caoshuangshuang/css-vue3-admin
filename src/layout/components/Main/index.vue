<!--
 * @Description: 
 * @version: 1.0.0
 * @Author: 曹双双
 * @Date: 2022-09-28 11:37:22
 * @LastEditors: 曹双双
 * @LastEditTime: 2022-12-14 15:11:37
-->
<template>
  <ElMain class="app-main">
    <RouterView></RouterView>
  </ElMain>
</template>

<script lang="ts" setup>
import { ElMain } from 'element-plus'
</script>
<style lang="scss" scoped>
@import '@/styles/var.scss';
.app-main {
  min-height: calc(100vh - var(--custom-header-height) - var(--custom-settings-height) - var(--custom-tags-view-height));
  background: $bg-color;
}
</style>