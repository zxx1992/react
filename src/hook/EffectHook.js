import { useState, useEffect  } from 'react'
import useCount from "./UseHook"

function FrientSratus(props) {
  // useeffect 1
  // const [count, setCount] = useState(0);
  // 通过跳过 Effect 进行性能优化,添加第二个参数，只有在第二个参数发生变化的时候才触发
  // useEffect(() => {
  //   document.title = `you clicked ${count} time`
  // }, [count])

  const count = useCount();
  console.log(count,"count222222")
  // useeffect 2
  const [isOnline, setIsOnline] = useState(null);
  useEffect(() => {
    function handleStatusChange(status) {
      setIsOnline(status.isOnline)
    }

    // 这是 effect 可选的清除机制。每个 effect 都可以返回一个清除函数。如此可以将添加和移除订阅的逻辑放在一起。它们都属于 effect 的一部分
    // ChatAPI.subscribeToFriendStatus(props.friend.id, handleStatusChange);
    handleStatusChange({isOnline: true});
    return function cleanup() {
      // ChatAPI.unsubscribeFromFriendStatus(props.friend.id, handleStatusChange);
    };
  })
  if (isOnline === null) {
    return 'Loading...';
  }
  return isOnline ? 'Online' : 'Offline';
}

export default FrientSratus;



// hook: 使用规则
// 1 只在最顶层使用 Hook
// 不要在循环，条件或嵌套函数中调用 Hook， 确保总是在你的 React 函数的最顶层调用他们。
// 遵守这条规则，你就能确保 Hook 在每一次渲染中都按照同样的顺序被调用。
// 这让 React 能够在多次的 useState 和 useEffect 调用之间保持 hook 状态的正确。