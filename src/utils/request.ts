/*
 * @Description:
 * @version: 1.0.0
 * @Author: 曹双双
 * @Date: 2022-09-20 16:59:27
 * @LastEditors: 曹双双
 * @LastEditTime: 2022-09-27 16:40:40
 */
import axios from "axios";
import type { AxiosRequestConfig, AxiosResponse } from "axios";
import { baseURL } from "@/config";
import { ElMessage } from "element-plus";
import { reject } from "lodash";

export interface RequestConfigOptions {
  showSucMsg?: boolean; //是否提示请求成功，默认不显示
  sucMsg?: string; //请求成功提示文字，默认显示返回的message
  hideErrMsg?: boolean; //是否隐藏请求失败提示，默认不隐藏
  errMsg?: string; //请求失败提示文字，默认显示返回的message
}

interface RequestConfig extends AxiosRequestConfig {
  options?: RequestConfigOptions;
}

const service = axios.create({
  baseURL,
  timeout: 10000,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json;charset=utf-8",
  },
});

// 请求拦截
service.interceptors.request.use(
  (config: RequestConfig) => {
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// 响应拦截
service.interceptors.response.use(
  (response: AxiosResponse) => {
    const { config, data } = response;
    const { options } = config as RequestConfig;

    switch (data.code) {
      case 1:
        if (options?.showSucMsg) {
          const sucMsg = options.sucMsg || data.message;
          ElMessage.success(sucMsg);
        }
        data.success = true
        return data;
      default:
        if (!options?.hideErrMsg) {
          const errMsg = options?.errMsg || data.message;
          ElMessage.error(errMsg);
        }
        data.success = false
        return data
    }
  },
  (error) => {
    switch (error.response.status) {
      case 404:
        break;
      default:
        ElMessage.error(error);
        break;
    }
  }
);

/**
 * @method fetch 封装的请求体
 * @param {Object} config axios的配置
 */

const fetch = (config: RequestConfig) => {
  return new Promise((resolve, reject) => {
    service(config)
      .then((res: any) => {
        if(res.success) {
          resolve(res)
        } else {
          reject(res)
        }
      })
      .catch((error) => {
        console.log('error',error)
      });
  });
};

export default fetch;
