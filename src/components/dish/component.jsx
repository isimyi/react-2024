import { CounterControl } from "../counter-control/component.jsx";
import { useCount } from "../../hooks/use-count.js";

export const Dish = ({dish}) => {
  const initialDishCount = 0;
  const initialDishMinCount = 0;
  const initialDishMaxCount = 5;

  const {increment, decrement, count} = useCount(initialDishCount, initialDishMinCount, initialDishMaxCount);

  return (
    <div>
      <h4>{dish.name}</h4>
      <div>{dish.price}</div>

      {!!dish.ingredients.length && (
        <ul>
          {dish.ingredients.map((ingredient) => (
            <li>{ingredient}</li>
          ))}
        </ul>
      )}

      <CounterControl
        value={count}
        increment={increment}
        decrement={decrement}
      />
    </div>
  );
};
