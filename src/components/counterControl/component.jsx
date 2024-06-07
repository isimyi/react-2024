export const CounterControl = ({value = 0, minValue = 0, maxValue = 5, onCountChange}) => {

  return (
    <div>
      <button disabled={value === minValue} onClick={() => onCountChange(value - 1)}>-</button>
      <span>{value}</span>
      <button disabled={value === maxValue} onClick={() => onCountChange(value + 1)}>+</button>
    </div>
  )
}
