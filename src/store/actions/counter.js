/*
 * @Author: ryuusennka
 * @Date: 2021-03-16 04:45:24
 * @LastEditors: ryuusennka
 * @LastEditTime: 2021-03-16 17:48:43
 * @FilePath: /chatroom/client/src/store/actions/counter.js
 * @Description:
 */

export const increment = () => ({
  type: `INCREMENT`,
});
export const decrement = () => ({
  type: `DECREMENT`,
});

export const asyncIncrement = () => {
  return function (dispatch) {
    setTimeout(() => {
      dispatch(increment());
    }, 2e3);
  };
};
