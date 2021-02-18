import { useState, useEffect } from 'react'

// 定义一个定时器
// function useInterval(callback, time) {
//   useEffect(() => {
//     const I = setInterval(callback, time);
//     return () => {
//       clearInterval(I);
//     };
//   }, [])
// }

export default function ExampleTwo() {
  // const [count, setCount] = useState(0);
  const [params, setParams] = useState({
    rotate: [1,2,3],
    color: "#000000"
  });
  useEffect(() => {
    onChange()
  }, []);
  useEffect(() => {
    console.log(params, "list")
  }, [params]);
  const onChange = () => {
    
    setParams({
      ...params,
      rotate:[9999]
    })
  }
  return (
    <div>
      {/* {count} */}
      {params.color}
      <button onClick={() => onChange()}>click me</button>
    </div>
  )
}