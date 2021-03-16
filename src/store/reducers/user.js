/*
 * @Author: ryuusennka
 * @Date: 2021-03-16 03:25:12
 * @LastEditors: ryuusennka
 * @LastEditTime: 2021-03-16 05:14:52
 * @FilePath: /chatroom/client/src/store/reducers/user.js
 * @Description:
 */

export default function user(state = {}, action = {}) {
  switch (action.type) {
    case 'SET_NAME':
      state.user = action.user;
      return { ...state };
    default:
      return state;
  }
}
