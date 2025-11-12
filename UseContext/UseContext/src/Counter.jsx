import React, { useContext } from "react";
import { CounterContext } from "./CounterContext";

function Counter() {
  const { count, increment, decrement } = useContext(CounterContext);

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Counter: {count}</h1>
      <button onClick={increment} style={{ marginRight: "10px" }}>+</button>
      <button onClick={decrement}>-</button>
    </div>
  );
}

export default Counter;
