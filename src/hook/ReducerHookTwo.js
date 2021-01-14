import React, { useReducer } from 'react'

function reducer(state, action) {
  switch (action) {
    case "add":
      return state + 1;
    case "sub":
      return state - 1;
    default:
      throw "..."
  }
}
export default function CounterTwo() {
  const [counter, dispatch] = useReducer(reducer, 0);
  return (
    <div>
      {counter}
      <button onClick={() => dispatch("add")}>+</button>
      <button onClick={() => dispatch("sub")}>-</button>
    </div>
  )
}