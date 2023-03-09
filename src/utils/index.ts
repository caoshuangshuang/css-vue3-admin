/*
 * @Description:
 * @version: 1.0.0
 * @Author: 曹双双
 * @Date: 2023-01-13 16:25:28
 * @LastEditors: 曹双双
 * @LastEditTime: 2023-01-13 17:14:59
 */
const toString = Object.prototype.toString;

export function resetObj(obj: any) {
  for (const [key, value] of Object.entries(obj)) {
    const type = toString.call(value);
    if (type === "[object Boolean]") {
      obj[key] = false;
    } else if (type === "[object Array]") {
      obj[key] = [];
    } else if (type === "[object Object]") {
      obj[key] = {};
    } else {
      obj[key] = undefined;
    }
  }
}
