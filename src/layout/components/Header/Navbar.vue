<!--
 * @Description: 
 * @version: 1.0.0
 * @Author: 曹双双
 * @Date: 2022-09-28 15:22:24
 * @LastEditors: 曹双双
 * @LastEditTime: 2022-12-14 15:08:29
-->
<template>
  <nav>
    <ElScrollbar>
      <div class="nav-wrap">
        <div v-for="item in modules" :key="item.value" @click="handleClick(item.value)" class="nav-item"
          :class="activeModule===item.value?'active':''">{{item.name}}</div>
      </div>
    </ElScrollbar>
  </nav>
</template>
<script lang="ts" setup>
import { ElScrollbar } from 'element-plus'
const modules = ref([{
  name: 'auth',
  value: 'auth'
}, {
  name: 'media',
  value: 'media'
}])
const activeModule = ref('auth')

const handleClick = (value:string) => {
  activeModule.value=value
}
</script>
<style lang="scss" scoped>
@import '@/styles/var.scss';

nav {
  width: calc(100% - var(--custom-menu-width-expand));
  overflow: hidden;

  .nav-wrap {
    display: flex;
    align-items: center;
    height: var(--custom-header-height);
    padding: 0 15px;

    .nav-item {
      position: relative;
      padding:0 20px;
      font-size: 16px;
      height: 40px;
      line-height: 40px;
      border-radius: 20px;

      &:hover {
        font-weight: 550;
        cursor: pointer;
      }

      &.active {
        font-weight: 550;
        background: $primary;
        color:#fff;
      }
    }
  }
}
</style>