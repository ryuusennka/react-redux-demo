/*
 * @Author: ryuusennka
 * @Date: 2021-03-15 14:45:34
 * @LastEditors: ryuusennka
 * @LastEditTime: 2021-03-16 04:38:15
 * @FilePath: /chatroom/client/src/index.js
 * @Description:
 */
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';

import App from './views/App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
