/*
 * @Author: zhengxiaoxiao
 * @Date: 2020-12-14 15:16:21
 * @Description: 入口文件
 */
// 加载react库
import React from 'react';
import ReactDOM from 'react-dom';
// App组件： 大写字母开头的都是组件
import Home from'./home'

import './css/game.css'
import './css/home.css'


ReactDOM.render(
  <Home />, document.getElementById('root')
);
