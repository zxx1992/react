// useRef  缓存值

import React, { useRef, useState } from 'react'

export default function UseRefExample() {
  const [counter, setCounter] = useState(0);
  const prev = useRef(null);
  console.log(prev,"prev")
  return (
    <div>
      <p>{counter}</p>
      <p>{prev.current}</p>
      <button onClick={() => {
        prev.current = counter;
        setCounter(x => x + 1)
      }}>+</button>
      <button onClick={() => {
        prev.current = counter;
        setCounter(x => x - 1)
      }}>-
      </button>
    </div>
  )
}