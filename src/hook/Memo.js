

import React, { memo } from "react";
// interface IProps {
//   isShow: Boolean
// }
// const  MemoComponentOne = memo((props) => {
//   console.log("1");
//   const {isShow1} = props;
//   return (
//     <div style={{display: isShow1 ? "block" : "none"}}>isShow1</div>
//   )
// });

const  MemoComponentOne = (props) => {
  console.log("1");
  const {isShow1} = props;
  return (
    <div style={{display: isShow1 ? "block" : "none"}}>isShow1</div>
  )
};

export default MemoComponentOne;