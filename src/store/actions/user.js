/*
 * @Author: ryuusennka
 * @Date: 2021-03-16 04:43:58
 * @LastEditors: ryuusennka
 * @LastEditTime: 2021-03-16 05:14:59
 * @FilePath: /chatroom/client/src/store/actions/user.js
 * @Description:
 */

export const setName = user => {
  return { type: 'SET_NAME', user };
};
