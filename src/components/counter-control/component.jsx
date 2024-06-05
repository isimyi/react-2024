export const CounterControl = ({value = 0, minValue = 0, maxValue = 5, onIncrement, onDecrement}) => {

  return (
    <div>
      <button disabled={value === minValue} onClick={onDecrement}>-</button>
      <span>{value}</span>
      <button disabled={value === maxValue} onClick={onIncrement}>+</button>
    </div>
  )
}
