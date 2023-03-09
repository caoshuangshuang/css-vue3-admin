<!--
 * @Description: 
 * @version: 1.0.0
 * @Author: 曹双双
 * @Date: 2022-09-28 14:11:26
 * @LastEditors: 曹双双
 * @LastEditTime: 2022-12-19 16:38:24
-->
<template>
  <div class="app-container">
    <div class="filter-container">
      <slot name="filter" />
    </div>
    <div class="table-container">
      <slot name="table" />
    </div>
    <div class="pagination-container">
      <slot name="pagination" />
    </div>
  </div>
</template>
<script lang="ts" setup>
</script>
<style lang="scss" scoped>
@import '@/styles/mixin.scss';
.app-container{
  height: 100%;
  border-radius: 8px;
  background: #fff;
}

.filter-container {
  @include p-15();

  .filter-item {
    display: inline-block;
    vertical-align: middle;
    margin-bottom: 10px;
  }
}

.table-container {
  @include p-15();
}

.pagination-container{
  padding-bottom: 10px;
  text-align: right;

  :deep(.el-pagination) {
    justify-content: right;
  }
}
</style>