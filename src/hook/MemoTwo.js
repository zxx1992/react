import React, { memo, useCallback } from "react";
// const MemoComponentTwo = memo((props) => {
//   const {isShow2} = props;
//   console.log("2");
//   return (
//     <div style={{display: isShow2 ? "block" : "none"}}>isShow2</div>
//   )
// });

const MemoComponentTwo = useCallback((props) => {
  const {isShow2} = props;
  console.log("2");
  return (
    <div style={{display: isShow2 ? "block" : "none"}}>isShow2</div>
  )
},[]);

export default MemoComponentTwo;