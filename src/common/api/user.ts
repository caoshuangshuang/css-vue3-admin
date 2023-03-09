/*
 * @Description:
 * @version: 1.0.0
 * @Author: 曹双双
 * @Date: 2022-09-21 15:17:35
 * @LastEditors: 曹双双
 * @LastEditTime: 2023-01-13 17:26:38
 */

import fetch from "@/utils/request";

import type { RequestConfigOptions } from "@/utils/request";

export interface loginParams {
  account: string;
  password: string;
}

// 登录
export function userLogin(
  params?: loginParams,
  options = <RequestConfigOptions>{}
): Promise<any> {
  return fetch({
    url: "/api/user/admin/login",
    method: "post",
    data: { ...params },
    options,
  });
}

// 登出
export function userLogout(
  params?: {},
  options = <RequestConfigOptions>{}
): Promise<any> {
  return fetch({
    url: "/api/user/admin/logout",
    data: { ...params },
    options,
  });
}
