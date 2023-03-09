<!--
 * @Description: 
 * @version: 1.0.0
 * @Author: 曹双双
 * @Date: 2022-09-28 09:21:09
 * @LastEditors: 曹双双
 * @LastEditTime: 2022-12-13 16:06:49
-->
<template>
  <ElContainer class="layout" direction="vertical">
    <AppHeader />
    <div class="main-container">
      <AppSidebar />
      <div class="ctn-container">
        <AppSettings />
        <AppTagsView />
        <AppMain />
      </div>
    </div>
  </ElContainer>
</template>
<script lang="ts" setup>
import { ElContainer } from 'element-plus'
import { AppHeader, AppSidebar, AppSettings, AppMain, AppTagsView } from './components/index'
</script>
<style lang="scss" scoped>
@import '@/styles/var.scss';

.layout {
  .main-container {
    display: flex;
    height: calc(100vh - var(--custom-header-height));
    width: 100%;

    .ctn-container{
      flex:1;
      position:relative
    }
  }
}
</style>