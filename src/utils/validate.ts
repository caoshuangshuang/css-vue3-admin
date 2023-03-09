/*
 * @Description:
 * @version: 1.0.0
 * @Author: 曹双双
 * @Date: 2022-09-20 15:13:11
 * @LastEditors: 曹双双
 * @LastEditTime: 2022-09-20 16:19:35
 */
const accountReg = /^[a-zA-Z]{5,10}/;
const passwordReg = /^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]{6,10})$/;

const accountRule = [
  { required: true, message: "请输入账号", trigger: "blur" },
  {
    pattern: accountReg,
    message: "账号以字母开头,长度5-10",
    trigger: "blur",
  },
];

const passwordRule = [
  { required: true, message: "请输入密码", trigger: "blur" },
  {
    pattern: passwordReg,
    message: "密码同时包含数字与字母,长度6-10",
    trigger: "blur",
  },
];

export { accountRule, passwordRule };
