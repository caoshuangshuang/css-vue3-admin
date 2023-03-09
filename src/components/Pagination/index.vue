<!--
 * @Description: 
 * @version: 1.0.0
 * @Author: 曹双双
 * @Date: 2022-12-16 17:29:26
 * @LastEditors: 曹双双
 * @LastEditTime: 2022-12-19 16:03:27
-->
<template>
  <ElPagination 
    layout="prev, pager, next, total, jumper" 
    v-model:current-page="pagination.pageNum" 
    v-model:page-size="pagination.pageSize" 
    :total="props.total"
    :pager-count="props.pagerCount" >
  </ElPagination>
</template>
<script lang="ts" setup>
import {ElPagination} from 'element-plus'

export interface IProps {
  pageNum:number,
  pageSize:number,
  pagerCount?:number,
  total:number,
}

const props = withDefaults(defineProps<IProps>(), {
  total:0,
  pageNum:1,
  pageSize:10,
  pagerCount:7
})
const pagination = reactive({
  pageNum:props.pageNum,
  pageSize:props.pageSize
})

const emit = defineEmits(['current-change','size-change'])

watch(()=>pagination.pageNum,(newVal) => {
  emit('current-change',newVal)
})

watch(()=>pagination.pageSize, (newVal) => {
  emit('size-change',newVal)
})

</script>