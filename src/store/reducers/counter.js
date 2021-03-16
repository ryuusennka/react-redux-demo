/*
 * @Author: ryuusennka
 * @Date: 2021-03-16 02:43:19
 * @LastEditors: ryuusennka
 * @LastEditTime: 2021-03-16 15:47:45
 * @FilePath: /chatroom/client/src/store/reducers/counter.js
 * @Description:
 */

// 我自己设定每个reducer里面的state都是对象（也就是 {} 和 [],不能出现 number或者string）
const counter = (state = { count: 0 }, action = {}) => {
  switch (action.type) {
    case `INCREMENT`:
      state.count++;
      return { ...state };
    case `DECREMENT`:
      state.count--;
      return { ...state };
    default:
      return state;
  }
};
export default counter;
