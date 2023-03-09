<!--
 * @Description: 
 * @version: 1.0.0
 * @Author: 曹双双
 * @Date: 2022-11-25 17:50:54
 * @LastEditors: 曹双双
 * @LastEditTime: 2022-12-08 10:47:19
-->
<template>
  <ElBreadcrumb separator="/">
    <TransitionGroup name="breadcrumb">
      <ElBreadcrumbItem v-for="(item,index) in levelList" :key="item.path">
        <span v-if="(item?.redirect==='noRedirect'||index===levelList.length-1)">{{item.meta?.title}}</span>
        <a v-else @click="handleClick(item)">{{item.meta?.title}}</a>
      </ElBreadcrumbItem>
    </TransitionGroup>
  </ElBreadcrumb>
</template>
<script lang="ts" setup>
import { useRoute,useRouter } from 'vue-router';
import type { RouteRecordRaw } from 'vue-router'
import { ElBreadcrumb,ElBreadcrumbItem } from 'element-plus';

const route = useRoute()
const router = useRouter()

const levelList = ref<RouteRecordRaw[]>([])
const HOME = 'Home'

watch(
  ()=>route.fullPath,
  () => {
    getLevelList()
  }
)

const handleClick = (item:RouteRecordRaw) => {
  const { redirect, path} = item
  if(redirect) {
    router.push(redirect as string)
    return
  }
  router.push(path)
}

const getLevelList = () => {
  let matched = route.matched.filter(item=>item.meta&&item.meta.title&& ![HOME].includes(item.name as string))
  const first = matched[0] 
  if(!isHome(first)){
    matched.unshift(router.getRoutes().filter((item)=>item.name===HOME)[0])
  }

  levelList.value = matched.filter(item=>item.meta&&item.meta.title)
}

const isHome = (route:RouteRecordRaw) => {
  const name = route && route.name
  if(!name) {
    return false
  }
  return route.name===HOME
}
getLevelList()
</script>