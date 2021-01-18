import MemoComponentOne from "./Memo";
import MemoComponentTwo from "./MemoTwo";
import React, { useState, memo } from "react";

const ParentCompent = memo(() => {
  const [isShow1, setIsShow1] = useState(false);
  const [isShow2, setIsShow2] = useState(false);
  console.log("parentmemo");
  return (
    <div>
      <MemoComponentOne isShow1={isShow1}></MemoComponentOne>
      <MemoComponentTwo isShow2={isShow2}></MemoComponentTwo>
      <button onClick={() => setIsShow1(!isShow1)}>change1</button>
      <button onClick={() => setIsShow2(!isShow2)}>change2</button>
    </div>
  )
});
export default ParentCompent;