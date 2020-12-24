// 1 虚拟dom:
// 用js对象，模拟Dom元素和嵌套关系；为了实现页面元素的高效更新

let dom = {
  tabName: "div",
  attr: {
    title: "xx",
    'data-index': 0,
  },
  children: [
    "shuaishuai",//innerhtml
    {
      tabName: "p",
      children: [
        "hhhh"
      ]
    }
  ]
}

// 2 diff 算法（tree diff:新旧两颗dom树，逐层对比的过程, component diff：组件级别的对比, element diff：组件类型相同，进行元素对比)


// 3 特点
// 声明式设计，
// 采用虚拟dom实现dom的渲染，最大限度减少dom操作
// jsx
// 组件化，模块化，代码容易复用
// 单向数据流，没有数据的双向数据绑定


// 4 jsx 优点
// 注意：
// 必须有根节点,
// 普通html元素要小写,如果大写,默认是组件

// jsx 表达式
// {}

