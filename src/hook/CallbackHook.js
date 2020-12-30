import React, { useCallback } from 'react'


function CallbackHook() {
  const memoizedCallback = useCallback(
    () => {
      console.log("wwww")
    },
    [1, 2],
  );
  return (
    <div>callback</div>
  )
}

export default CallbackHook;
