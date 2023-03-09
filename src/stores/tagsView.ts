/*
 * @Description:
 * @version: 1.0.0
 * @Author: 曹双双
 * @Date: 2022-12-09 10:33:14
 * @LastEditors: 曹双双
 * @LastEditTime: 2022-12-13 16:59:16
 */
import { defineStore } from "pinia";
import type { RouteLocation } from "vue-router";

export const useTagsViewStore = defineStore("tagsView", () => {
  const visitedViews = ref<RouteLocation[]>([]);
  const cachedViews = ref<RouteLocation[]>([]);
  const visitedViewsPath = ref<string []>([])

  // 添加views，如果有设置缓存则同时添加至cachedViews
  function addView(route: RouteLocation) {
    console.log('add',route)
    if(visitedViewsPath.value.includes(route.path)){
      return
    }
    visitedViews.value.push({...route});
    visitedViewsPath.value.push(route.path)
    if (route.meta?.cached) {
      cachedViews.value.push({...route});
    }
  }

  //删除指定visitedViews
  function delSpecifiedVisitedViews(route: RouteLocation) {
    for (const [i, v] of visitedViews.value.entries()) {
      if (route.path === v.path) {
        visitedViews.value.splice(i, 1);
        let pathIndex = visitedViewsPath.value.findIndex(function(item) {
          return item === route.path
        })
        if(pathIndex>0) {
          visitedViewsPath.value.splice(pathIndex,1)
        }
      }
    }
  }

  //删除指定cachedViews
  function delSpecifiedCachedViews(route: RouteLocation) {
    for (const [i, v] of cachedViews.value.entries()) {
      if (route.path === v.path) {
        cachedViews.value.splice(i, 1);
      }
    }
  }

  //删除views,若无参数，则删除全部
  function delViews(route?: RouteLocation) {
    if (route) {
      delSpecifiedVisitedViews(route);
      if (route.meta?.cached) {
        delSpecifiedCachedViews(route);
      }
    } else {
      visitedViews.value = [];
      cachedViews.value = [];
      visitedViewsPath.value = []
    }
  }

  //删除其他views
  function delOtherViews(route?: RouteLocation) {
    if (!route) {
      return;
    }
    visitedViews.value = [route]
    cachedViews.value = []
    if(route.meta.cached) {
      cachedViews.value = [route]
    }
  }

  return {
    visitedViews,
    cachedViews,
    addView,
    delViews,
    delOtherViews,
  };
});
