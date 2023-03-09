<!--
 * @Description: 
 * @version: 1.0.0
 * @Author: 曹双双
 * @Date: 2022-09-29 11:18:29
 * @LastEditors: 曹双双
 * @LastEditTime: 2022-09-30 11:47:04
-->
<template>
  <svg class="icon" aria-hidden="true">
    <use :xlink:href="symbolId" :fill="color"></use>
  </svg>
</template>
<script lang="ts" setup>
const props = withDefaults(defineProps<{
  prefix?: string
  name: string
  color?: string
}>(), {
  prefix: 'icon',
  name: '',
  color: ''
})

const { prefix, name, color } = toRefs(props)

const symbolId = computed(() => {
  return `#${prefix.value}-${name.value}`
})
</script>
<style type="text/css" scoped>
.icon {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
</style>