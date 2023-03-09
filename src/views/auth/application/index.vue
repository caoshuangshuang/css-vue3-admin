<!--
 * @Description: 
 * @version: 1.0.0
 * @Author: 曹双双
 * @Date: 2022-09-28 14:11:26
 * @LastEditors: 曹双双
 * @LastEditTime: 2023-01-14 10:28:12
-->
<template>
  <BasePage>
    <template #filter>
      <ElForm :model="searchForm" inline>
        <ElFormItem label="应用名称">
          <ElInput v-model="searchForm.applicationName" />
        </ElFormItem>
        <ElFormItem>
          <ElButton type="primary" round>查询</ElButton>
          <ElButton round>重置</ElButton>
          <ElButton type="success" round>添加</ElButton>
        </ElFormItem>
      </ElForm>
    </template>
    <template #table>
      <BaseTable :tableData="tableData" :columns="columns" />
    </template>
    <template #pagination>
      <Pagination v-bind="pagination" @current-change="handleCurrentChange" />
    </template>
  </BasePage>
</template>
<script lang="ts" setup>
import { ElButton, ElForm, ElFormItem, ElInput } from 'element-plus';
import BasePage from '@/components/BasePage/index.vue'
import BaseTable from '@/components/BaseTable/index.vue'
import Pagination from '@/components/Pagination/index.vue'
import useList from '@/common/use/useList'

import { addApplication, editApplication, deleteApplication, queryApplication } from '@/common/api/auth/application'

const searchForm = reactive({
  applicationName: undefined
})

const { tableData,
  pagination,
  handleSearch,
  getList,
  handleReset,
  handleSizeChange,
  handleCurrentChange } = useList({
    searchForm: searchForm,
    getListApi: queryApplication
  })

  onMounted(()=>{
    getList()
  })

const columns = [{ label: '应用名称', prop: 'applicationName' }, { label: '创建时间', prop: 'createTime' }]
</script>
<style lang="scss" scoped>

</style>