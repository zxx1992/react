// 提取自定义 Hook
// 自定义 Hook 是一个函数，其名称以 “use” 开头，函数内部可以调用其他的 Hook
// 当我们想在两个函数之间共享逻辑时，我们会把它提取到第三个函数中

import { useEffect, useState } from "react";


function useCount() {
  const [count, setCount] = useState(120);
  useEffect(() => {
    function handleCount() {
      setCount(count)
    }
    handleCount()
  })

  return count;
}

export default useCount;