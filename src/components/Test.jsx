import React from "react";
import { useState, useEffect } from "react";

function Test() {
  const [count, setCount] = useState(0);
  const [hola, setHola] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setCount((count) => count + 1);
    }, 1000);
  },[hola]);

  return <h1>I've rendered {count} times!</h1>;
}

export default Test;
