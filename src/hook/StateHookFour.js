import React, { useState } from "react";
export default function Example4() {
  let show = true;
  const [state1, setstate1] = useState(1);
  const [state2, setstate2] = useState(2);
  const [state3, setstate3] = useState(3);
  return (
    <div>
      <p>{state1}</p>
      <p>{state2}</p>
      <p>{show ? state3 : ""}</p>
    </div>
  )
}