import { ButtonComponent } from "../buttonComponent/component.jsx";

export const CounterControl = ({value = 0, minValue = 0, maxValue = 5, onCountChange}) => {

  return (
    <div>
      <ButtonComponent
        isDisabled={value === minValue}
        onClick={() => onCountChange(value - 1)}>
        -
      </ButtonComponent>

      <span>{value}</span>

      <ButtonComponent
        isDisabled={value === maxValue}
        onClick={() => onCountChange(value + 1)}>
        +
      </ButtonComponent>
    </div>
  )
}
