<!--
 * @Description: 
 * @version: 1.0.0
 * @Author: 曹双双
 * @Date: 2022-09-28 11:57:56
 * @LastEditors: 曹双双
 * @LastEditTime: 2022-12-14 15:07:08
-->
<template>
  <div class="setting-container">
    <Hamburger class="hamburger-container" />
    <Breadcrumb class="breadcrumb-container" />
    <div class="right-operation">
      <ScreenSwitch />
    </div>
  </div>
</template>
<script lang="ts" setup>
import Hamburger from '@/components/Hamburger/index.vue'
import Breadcrumb from '@/components/Breadcrumb/index.vue'
import ScreenSwitch from '@/components/ScreenSwitch/index.vue'

</script>
<style lang="scss" scoped>
.setting-container {
  height: var(--custom-settings-height);
  width: 100%;
  padding: 0 15px;
  box-sizing: border-box;
  box-shadow: 0 1px 4px rgb(0 21 41 / 8%);

  .hamburger-container {
    padding: 0 15px;
    float: left;
    height: 100%;
    line-height: var(--custom-settings-height);
  }

  .breadcrumb-container {
    margin-left: 8px;
    float: left;
    height: 100%;
    line-height: var(--custom-settings-height);
  }

  .right-operation {
    float: right;
    height: 100%;
    line-height: var(--custom-settings-height);
  }
}
</style>