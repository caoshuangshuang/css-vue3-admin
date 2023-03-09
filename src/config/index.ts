/*
 * @Description:
 * @version: 1.0.0
 * @Author: 曹双双
 * @Date: 2022-09-20 16:30:02
 * @LastEditors: 曹双双
 * @LastEditTime: 2023-01-14 11:22:26
 */
export type EnvType = "production" | "development" | "test";
export const APP_NAME = "css-vue3-admin";
const apiEnv: EnvType =
  (import.meta.env?.VITE_APP_ENV as EnvType) || "development";

export const storePrefix = "css";
export const cookiePrefix = "css";
export const cookieDomain = "";

// 接口请求地址
const baseUrlMap = {
  production: "",
  test: "",
  development: "",
};
export const baseURL = baseUrlMap[apiEnv];
