/*
 * @Description:
 * @version: 1.0.0
 * @Author: 曹双双
 * @Date: 2022-09-23 17:19:52
 * @LastEditors: 曹双双
 * @LastEditTime: 2022-09-27 16:12:50
 */
import Cookie from "js-cookie";
import { storePrefix, cookiePrefix, cookieDomain } from "@/config/index";

/**
 * @method: setStorage
 * @description: 存储localStorage/sessionStorage
 * @param {string} name 存储的key
 * @param {any} content 存储的内容
 * @param {string} type 本地存储类型，session | local, 默认localStorgae
 */
export const setStorage = (name: string, content: any, type = "local"): any => {
  if (!name) {
    return;
  }
  const data = [undefined].includes(content) ? "" : JSON.stringify(content);
  if (type === "local") {
    window.localStorage.setItem(`${storePrefix}_${name}}`, data);
  } else {
    window.sessionStorage.setItem(`${storePrefix}_${name}`, data);
  }
};

/**
 * @method: getStorage
 * @description: 获取localStorage/sessionStorage
 * @param {string} name 存储的key
 * @param {string} type 本地存储类型，session | local, 默认localStorgae
 */
export const getStorage = (name: string, type = "local"): any => {
  if (!name) {
    return;
  }
  let content = null;
  if (type === "local") {
    content = window.localStorage.getItem(`${storePrefix}_${name}`);
  } else {
    content = window.sessionStorage.getItem(`${storePrefix}_${name}`);
  }
  return content ? JSON.parse(content) : "";
};

/**
 * @method: removeStorage
 * @description: 删除localStorage/sessionStorage
 * @param {string} name 存储的key
 * @param {string} type 本地存储类型，session | local, 默认localStorgae
 */
export const removeStorage = (name: string, type = "") => {
  if (!name) {
    return;
  }
  if (type === "local") {
    window.localStorage.removeItem(`${storePrefix}_${name}`);
  } else {
    window.sessionStorage.removeItem(`${storePrefix}_${name}`);
  }
};

export const cookie = {
  expires: 7,
  path: "/",
  domain: cookieDomain,
  /**
   *
   * @param name 键名
   * @param value 内容
   * @param options cookie配置
   * @param customCookiePrefix 自定义前缀
   */
  set(name: string, value: any, options: any = {}) {
    if (!name) {
      return;
    }
    let val = value;
    if (typeof value === "object") {
      val = JSON.stringify(val);
    }
    val = encodeURIComponent(val);
    return Cookie.set(`${cookiePrefix}_${name}`, val, {
      expires: this.expires,
      path: this.path,
      domain: this.domain,
      ...options,
    });
  },

  /**
   *
   * @param {string} name
   * @param {boolean} toJson 是否需要json转换
   */
  get(name: string, toJson = false): string | object | undefined {
    if (!name) {
      return;
    }
    let value = Cookie.get(`${cookiePrefix}_${name}`);
    if(!value){
      return
    }
    value=decodeURIComponent(value)
    if (toJson) {
      value = JSON.parse(value);
    }
    return value;
  },

  /**
   *
   * @param name 键名
   * @param options 配置
   */
  remove(name: string, options: any = {}) {
    if (!name) {
      return;
    }
    return Cookie.remove(`${cookiePrefix}_${name}`, {
      path: this.path,
      domain: this.domain,
      ...options,
    });
  },
};
