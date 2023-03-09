/*
 * @Description:
 * @version: 1.0.0
 * @Author: 曹双双
 * @Date: 2022-09-21 15:17:35
 * @LastEditors: 曹双双
 * @LastEditTime: 2023-01-14 11:30:03
 */
import type { RequestConfigOptions } from "@/utils/request";
import fetch from "@/utils/request";

// 添加应用
export function addApplication(
  params: {
    applicationName: string;
  },
  options = <RequestConfigOptions>{}
): Promise<any> {
  return fetch({
    url: "/api/auth/application/addApplication",
    method: "post",
    data: { ...params },
    options,
  });
}

// 编辑应用
export function editApplication(
  params: {
    applicationId: number;
    applicationName: string;
  },
  options = <RequestConfigOptions>{}
): Promise<any> {
  return fetch({
    url: "/api//auth/application/editApplication",
    data: { ...params },
    options,
  });
}

//删除应用
export function deleteApplication(
  params: {
    applicationId: number;
  },
  options = <RequestConfigOptions>{}
): Promise<any> {
  return fetch({
    url: "/api/auth/application/deleteApplication",
    data: { ...params },
    options,
  });
}

//查询应用
export function queryApplication(
  params: {
    applicationName: string;
    pageSize: number;
    pageNum: number;
  },
  options = <RequestConfigOptions>{}
): Promise<any> {
  return fetch({
    url: "/api/auth/application/queryApplication",
    data: { ...params },
    options,
  });
}
