// 爬虫
// import axios from 'axios'

let axios = require('axios');

(async function() {
  // let httpUrl = 'https://c.m.163.com/ug/api/wuhan/app/index/feiyan-data-list?t=';
  let url = 'https://api.bilibili.com/x/v3/fav/resource/list?media_id=1128500875&pn=1&ps=20&keyword=&order=mtime&type=0&tid=0&platform=web&jsonp=jsonp';
  let res = await axios.get(url);
  console.log(res.data,"datas")
})()

// node 运行