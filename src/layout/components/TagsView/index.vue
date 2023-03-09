<!--
 * @Description: 
 * @version: 1.0.0
 * @Author: 曹双双
 * @Date: 2022-12-08 15:53:37
 * @LastEditors: 曹双双
 * @LastEditTime: 2022-12-14 15:10:02
-->
<template>
  <div ref="tagsViewRef" class="tags-view-container">
    <ElScrollbar>
      <keep-alive>
        <RouterLink v-for="tag in visitedViews" :to="tag.path" class="tags-view-item" active-class="active"
          @contextmenu.prevent.native="openMenu(tag, $event)">
          <span>{{ tag.meta?.title }} </span>
          <SvgIcon class="close-icon" name="close" @click="handleDeleteViews(tag)" />
        </RouterLink>
      </keep-alive>
    </ElScrollbar>
    <ul v-show="isMenuVisible" class="context-menu" :style="{ left: left + 'px', top: top + 'px' }">
      <li @click="refresh">刷新</li>
      <li @click="handleDeleteViews(selectedTag)">关闭</li>
      <li @click="hanleDeleteOthers()">关闭其他</li>
      <li @click="handleDeleteAllViews()">关闭所有</li>
    </ul>
  </div>
</template>
<script lang="ts" setup>
import { ElScrollbar } from 'element-plus';
import { useTagsViewStore } from '@/stores/tagsView'
import { useRoute, useRouter } from 'vue-router';
import type { RouteLocation } from "vue-router";

const router = useRouter()
const route = useRoute()
const tagsViewStore = useTagsViewStore()
const { visitedViews, cachedViews } = storeToRefs(tagsViewStore)
const { addView, delViews, delOtherViews } = tagsViewStore

const tagsViewRef = ref<any>(null)
const isMenuVisible = ref(false)
const selectedTag = ref<RouteLocation | undefined>(undefined)
const left = ref<number>(0)
const top = ref<number>(0)

watchEffect(
  () => {
    addView(route)
  }
)

watch(
  isMenuVisible,
  (value) => {
    if (value) {
      document.body.addEventListener('click', closeMenu)
    } else {
      document.body.removeEventListener('click', closeMenu)
    }
  }
)
// 刷新
const refresh = () => {
  if(selectedTag.value) {
    delViews(selectedTag.value)
    router.replace(selectedTag.value)
  }
}


// 删除其他
const hanleDeleteOthers = () => {
  delOtherViews(selectedTag.value)
}

// 删除全部
const handleDeleteAllViews = () => {
  delViews()
}

// 删除当前
const handleDeleteViews = (delRoute?: RouteLocation) => {
  delViews(delRoute)
  if (delRoute?.path === route.path) {
    toLastView()
  }
}

// 删除当前views时，切换至上一个view
const toLastView = () => {
  const lastView = visitedViews.value.slice(-1)[0]
  if (lastView) {
    router.push(lastView.path)
  } else {
    router.push('/home')
  }
}

// 打开右键菜单，计算菜单位置
const openMenu = (view: RouteLocation, e: any) => {
  const menuMiniWidth = 105
  const offsetLeft = tagsViewRef.value.getBoundingClientRect().left
  const tagsViewWidth = tagsViewRef.value.offsetWidth
  const maxLeft = tagsViewWidth - menuMiniWidth
  const menuleft = e.clientX - offsetLeft + 15
  left.value = menuleft > maxLeft ? maxLeft : menuleft
  top.value = e.clientY - 30
  isMenuVisible.value = true
  selectedTag.value = view
}

// 关闭右键菜单
const closeMenu = () => {
  isMenuVisible.value = false
}
</script>
<style lang="scss" scoped>
@import '@/styles/var.scss';

.tags-view-container {
  height: var(--custom-tags-view-height);
  padding:8px 15px;
  width: 100%;
  background: #fff;
  box-shadow: 0 1px 3px 0 rgb(0 0 0 / 12%), 0 0 3px 0 rgb(0 0 0 / 4%);
  box-sizing: border-box;

  .tags-view-item {
    display: inline-block;
    height: 26px;
    line-height: 26px;
    margin-top: 4px;
    margin-left: 5px;
    padding: 0 15px;
    font-size: 12px;
    color: $font-color;
    text-decoration: none;
    border:1px solid transparent;
    border-radius: 13px;
    cursor: pointer;

    &:hover {
      border: 1px solid #d8dce5;

      .close-icon {
        display: inline-block;
      }
    }

    &.active {
      color: #fff;
      border: $primary;
      background: $primary;

      .close-icon {
        display: inline-block;
      }
    }

    .close-icon {
      display: none;
      margin-left: 5px;
      border-radius: 50%;
      padding: 2px;
      transform: scale(0.8);
      transition: transform 0.3s ease-out;
      vertical-align: text-bottom;

      &:hover {
        background: #b4bccc;
        color:#fff;
        transform: scale(1);
      }
    }
  }

  .context-menu {
    margin: 0;
    background: #fff;
    z-index: 3000;
    position: absolute;
    list-style-type: none;
    padding: 5px 0;
    border-radius: 4px;
    font-size: 12px;
    font-weight: 400;
    color: #333;
    box-shadow: 2px 2px 3px 0 rgba(0, 0, 0, .3);

    li {
      margin: 0;
      padding: 7px 16px;
      cursor: pointer;

      &:hover {
        background: #eee;
      }
    }
  }
}
</style>