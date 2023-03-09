<!--
 * @Description: 
 * @version: 1.0.0
 * @Author: 曹双双
 * @Date: 2022-09-28 17:24:52
 * @LastEditors: 曹双双
 * @LastEditTime: 2022-10-08 14:25:24
-->
<template>
  <ElSubMenu :index="menu.path" v-if="menu.children" class="sidebar-item">
    <template #title>
      <SvgIcon class="icon" v-if="menu.meta?.icon" :name="menu.meta.icon" />
      <span>{{menu.meta?.title}}</span>
    </template>
    <SidebarItem v-for="route in menu.children" :key="route.path" :menu="route" />
  </ElSubMenu>
  <ElMenuItem v-else :index="menu.path">{{menu.meta?.title}}</ElMenuItem>
</template>
<script lang="ts" setup>
import { ElSubMenu, ElMenuItem } from 'element-plus'
import type { RouteRecordRaw } from 'vue-router'

defineProps<{
  menu: RouteRecordRaw
}>()
</script>
<script lang="ts">
export default {
  name: 'SidebarItem'
}
</script>
<style lang="scss" scoped>
.sidebar-item {
  font-size: 16px;
}

.icon {
  margin-right: 4px;
}
</style>