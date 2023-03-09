<!--
 * @Description: 
 * @version: 1.0.0
 * @Author: 曹双双
 * @Date: 2022-09-28 11:57:28
 * @LastEditors: 曹双双
 * @LastEditTime: 2022-12-09 14:02:28
-->
<template>
  <div class="app-aside" :class="isCollapse?'collapse':'expand'">
    <ElMenu class="menu-vertical" :default-active="activeIndex" :router="true" :unique-opened="true"
      :collapse-transition="true" :collapse="isCollapse">
      <SidebarItem v-for="route in menuList" :key="route.path" :menu="route" />
    </ElMenu>
  </div>
</template>
<script lang="ts" setup>
import { ElMenu } from 'element-plus';
import type { RouteRecordRaw } from 'vue-router';
import SidebarItem from './SidebarItem.vue'
import { useSettingsStore } from '@/stores/settings'

const router = useRouter()
const route = useRoute()
const menuList = ref<RouteRecordRaw[]>()
const { isCollapse } = storeToRefs(useSettingsStore())

const activeIndex = computed(()=>{
  return route.path
})
onBeforeMount(() => {
  generateMenu()
})

const generateMenu = () => {
  const routes = router.options.routes
  if (routes && routes.length) {
    menuList.value = routes.filter(item=>item.meta&&item.meta.title)
  }
}
</script>
<style lang="scss" scoped>
@import '@/styles/var.scss';

.app-aside {
  height: 100%;

  .menu-vertical:not(.el-menu--collapse) {
    width: var(--custom-menu-width-expand);
  }


  >.el-menu {
    border: none;
    height: 100%;
  }
}
</style>