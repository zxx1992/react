/*
 * @Author: zhengxiaoxiao
 * @Date: 2020-12-14 15:16:21
 * @Description: 入口文件
 */
// 加载react库
import React from 'react';
import ReactDOM from 'react-dom';
// App组件： 大写字母开头的都是组件
// import Home from './home'
// import Clock from './components/Clock.js'
// import Hello from './components/Fuzisun'
// import State from './components/State'
// import Tab from './components/Tab'
// import Parent from './components/Props2'
// import Yeye from './components/Props'
// import XuanHoeme from './components/Xuanran'

// import List from './components/List'
// import List2 from './components/List2'
// import ComTwo from './components/Shengming'
import NameForm from './components/Form'

import './css/game.css'
import './css/home.css'

// let home = <Home></Home>;
// let home = <h1>124<span>456</span></h1>;
let root = document.getElementById('root');
// function run () {
//   let childName="lccandlyy"
//   ReactDOM.render(<Hello name={childName}></Hello>, root);
// }
// run()
// setInterval(run, 1000);

ReactDOM.render(<NameForm></NameForm>, root);