/*
 * @Description:
 * @version: 1.0.0
 * @Author: 曹双双
 * @Date: 2022-09-23 15:31:39
 * @LastEditors: 曹双双
 * @LastEditTime: 2022-09-29 14:33:16
 */
import { defineStore } from "pinia";
import { ref } from "vue";
import { cookie } from "@/utils/store";
import type { IUser } from "@/typings/user";
import { userLogin, userLogout } from "@/common/api/user";
import type { loginParams } from "@/common/api/user";

/**
 * @description 从cookie获取用户信息
 * @returns {User}
 */
const getUserInfo = (): IUser | undefined => {
  const data = cookie.get("userInfo", true);
  if (Object.prototype.toString.call(data) === "[object Object]") {
    return data as IUser;
  }
  return undefined;
};

/**
 * @description 向cookie设置用户信息
 */
const setUserInfo = (data: IUser) => {
  cookie.set("userInfo", data);
};

export const useUserStore = defineStore("user", () => {
  const userInfo = ref<IUser | undefined>(getUserInfo());

  /**
   *
   * @description 登录
   * @returns {prpmise}
   */
  const login = (params: loginParams) => {
    return new Promise((resolve, reject) => {
      userLogin(params)
        .then((res: any) => {
          setUserInfo(res);
          userInfo.value = res;
          resolve(true);
        })
        .catch((error) => {
          reject(error);
        });
    });
  };

  /**
   * @description 登出
   * @returns {promise}
   */
  const logout = () => {
    return new Promise((resolve, reject) => {
      userLogout()
        .then(() => {
          cookie.remove("userInfo");
          userInfo.value = undefined;
          resolve(true);
        })
        .catch((error) => {
          reject(error);
        });
    });
  };

  return {
    userInfo,
    login,
    logout,
  };
});
