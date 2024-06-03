import { useState } from "react";

export const CounterControl = () => {
  const [count, setCount] = useState(0);

  const decreaseCount = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  }

  const increaseCount = () => {
    if (count < 5) {
      setCount(count + 1);
    }
  }

  return (
    <div>
      <button onClick={decreaseCount}>-</button>
      <span>{count}</span>
      <button onClick={increaseCount}>+</button>
    </div>
  )
}
