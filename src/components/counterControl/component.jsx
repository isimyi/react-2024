import { useCount } from "../../hooks/use-count.js";

export const CounterControl = ({initialValue = 0, minValue = 0, maxValue = 5}) => {
  const {increment, decrement, count} = useCount(initialValue, minValue, maxValue);

  return (
    <div>
      <button disabled={count === minValue} onClick={decrement}>-</button>
      <span>{count}</span>
      <button disabled={count === maxValue} onClick={increment}>+</button>
    </div>
  )
}
