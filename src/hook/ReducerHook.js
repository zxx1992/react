import React, { useReducer } from 'react'
// useState 的替代方案。它接收一个形如 (state, action) => newState 的 reducer，并返回当前的 state 以及与其配套的 dispatch 方法
// 在某些场景下，useReducer 会比 useState 更适用，例如 state 逻辑较复杂且包含多个子值，或者下一个 state 依赖于之前的 state 等。
// 并且，使用 useReducer 还能给那些会触发深更新的组件做性能优化，因为你可以向子组件传递 dispatch 而不是回调函数

const initialCount = 1;

// 重置
function init(initialCount) {
  return { count: initialCount };
}

// 方法函数
function reducer(stateNew, action) {
  switch (action.type) {
    case '1':
      return { count: stateNew.count - 1 };
    case '2':
      return { count: stateNew.count + 1 };
    case '3':
      return init(action.reset);
    default:
      throw new Error();
  }
}

// useReducer
function Counter( {initialCount}) {
  const [state, dispatch] = useReducer(reducer, initialCount, init);
  console.log(state, "state")
  return (
    <div>
      count: {state.count}
      <button onClick={() => dispatch({ type: '3', reset: initialCount })}>reset</button>
      <button onClick={() => dispatch({ type: '1' })}>-</button>
      <button onClick={() => dispatch({ type: '2' })}>+</button>
    </div>
  )
}


export default Counter