/*
 * @Author: ryuusennka
 * @Date: 2021-03-16 01:29:54
 * @LastEditors: ryuusennka
 * @LastEditTime: 2021-03-16 20:56:18
 * @FilePath: /chatroom/client/src/store/index.js
 * @Description:
 */
import { createStore, combineReducers, applyMiddleware } from 'redux';
import counter from './reducers/counter';
import user from './reducers/user';
import { composeWithDevTools } from 'redux-devtools-extension';
import logger from 'redux-logger';
import thunk from 'redux-thunk';

const rootReducer = combineReducers({
  counter,
  user,
});

let store;

if (process.env.NODE_ENV === 'development') {
  store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(logger, thunk))
  );
} else {
  store = createStore(rootReducer, applyMiddleware(thunk));
}

export default store;
