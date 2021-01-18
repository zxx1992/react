import { useState, useEffect } from "react";

function StateHookThree() {
  const [count, setCount] = useState(0);
  const [count1, setCount1] = useState(0);

  

  useEffect(() => {
    console.log("effect")
  }, [count, count1])

  console.log("render")

  return <div>
    <p>{count}</p>
    <p>{count1}</p>
    <button onClick={() => {
      setCount(x => x + 1)
      setCount1(x => x + 1)
    }}>setCount</button>
  </div>
}

export default StateHookThree;