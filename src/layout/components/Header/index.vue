<!--
 * @Description: 
 * @version: 1.0.0
 * @Author: 曹双双
 * @Date: 2022-09-28 11:59:03
 * @LastEditors: 曹双双
 * @LastEditTime: 2022-12-14 14:25:01
-->
<template>
  <div class="app-header">
    <h3>css-vue3-admin</h3>
    <Navbar />
  </div>
</template>
<script lang="ts" setup>
import Navbar from './Navbar.vue'
</script>
<style lang="scss" scoped>
@import '@/styles/var.scss';

.app-header {
  display: flex;
  align-items: center;
  height: var(--custom-header-height);
  width: 100%;
  background: #fff;
  box-shadow: 0 1px 4px 0 rgb(0 21 41 / 12%);

  h3 {
    width: var(--custom-menu-width-expand);
    height: 100%;
    text-align: center;
    font-size: 16px;
    color: #fff;
    font-weight: bolder;
    background: $grape;
    line-height: var(--custom-header-height);
  }
}
</style>