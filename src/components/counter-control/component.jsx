import { useCount } from "../../hooks/use-count.js";

export const CounterControl = ({value = 0, minValue = 0, maxValue = 5, increment, decrement}) => {

  return (
    <div>
      <button disabled={value === minValue} onClick={decrement}>-</button>
      <span>{value}</span>
      <button disabled={value === maxValue} onClick={increment}>+</button>
    </div>
  )
}
