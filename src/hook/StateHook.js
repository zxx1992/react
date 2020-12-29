import React, { useState, useEffect } from 'react'

import useCount from "./UseHook"

function Example() {
  // const [count, setCount] = useState(0);
  // 通过跳过 Effect 进行性能优化,添加第二个参数，只有在第二个参数发生变化的时候才触发
  // useEffect(() => {
  //   console.log(count, "count")
  //   document.title = `you clicked ${count} time`
  // }, [count])

  const count = useCount();
  console.log(count,"count1111")

  const [str, setStr] = useState("zxx");
  // useEffect :告诉 React 组件需要在渲染后执行某些操作
  useEffect(() => {
    console.log(str, "str")
    document.title = ` from ${str}`
  }, [str])
  return (
    <div>
      <p>{count}</p>
      <p>{str}</p>
      <button onClick={() => setStr(str.toUpperCase())}>
        click me
      </button>
    </div>
  )
}


export default Example
// useState 就是一个 Hook （等下我们会讲到这是什么意思）。
// 通过在函数组件里调用它来给组件添加一些内部 state。
// React 会在重复渲染时保留这个 state。useState 会返回一对值：当前状态和一个让你更新它的函数，你可以在事件处理函数中或其他一些地方调用这个函数