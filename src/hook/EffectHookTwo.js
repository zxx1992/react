import { useState, useEffect  } from 'react'

// 定义一个定时器
function useInterval(callback, time) {
  useEffect(() => {
    const I = setInterval(callback, time);
    return () => {
      clearInterval(I);
    };
  }, [])
}

export default function ExampleTwo() {
  const [count, setCount] = useState(0);

  useInterval(() => {
    console.log(count,"");
    setCount(count => count +1)
  }, 1000)
  return (
    <div>
      {count}
      <button onClick={() => setCount(count + 1)}>click me</button>
    </div>
  )
}