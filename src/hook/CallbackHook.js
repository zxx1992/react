import React, { memo, useCallback, useState } from 'react'

// const CallbackHook = memo(() => {
//   const [currentVal, setCurrentVal] = useState("");

//   const memoizedCallback = useCallback(
//     (index) => {
//       // if (currentVal !== index) {
//         console.log(index,"1")
//         setCurrentVal(index)
//       // }
//     },
//     [currentVal],
//   );

//   // const memoizedCallback = (index) => {
//   //   console.log(index,"1")
//   //   setCurrentVal(index)
//   // }
//   return (
//     <div>
//       {currentVal}
//       <button onClick={() => memoizedCallback("")}>change</button>
//     </div>
//   )
// })


// https://zhuanlan.zhihu.com/p/56975681  React.memo 和 React.useCallback 一定记得需要配对使用，缺了一个都可能导致性能不升反“降”，毕竟无意义的浅比较也是要消耗那么一点点点的性能。
// 

// 这里没有使用useCallback, 点击子组件1，子组件2也会重新渲染；相反也是一样的；
// function PageA(props) {
//   console.log(props, "PageA")
//   const { onClick, children } = props;
//   return <div onClick={onClick}>{children}</div>
// }
const PageA = memo((props) => {
  console.log(props, "PageA")
  const { onClick, children } = props;
  return <div onClick={onClick}>{children}</div>
})
// function PageB(props) {
//   console.log(props,"props.name")
//   return <div onClick={props.onClick}>{props.name}</div>
// }
// 使用memo包裹PageB组件
const PageB = memo((props) => {
  console.log(props, "PageB")
  return <div onClick={props.onClick}>{props.name}</div>
})
function CallbackHook() {
  const [a, setA] = useState(0);
  const [b, setB] = useState(0);
  const handleClick1 = useCallback(() => {
      setA(a + 1)
    }, [a])
  const handleClick2 = useCallback(() => {
    setB(b + 1)
  }, [b])

  return (
    <div>
      <PageA onClick={handleClick1}>{a}</PageA>
      <PageB onClick={handleClick2} name={b}></PageB>
    </div>
  )
}

export default CallbackHook;