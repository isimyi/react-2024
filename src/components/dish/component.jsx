import { CounterControl } from "../counterControl/component.jsx";
import { useState } from "react";

export const Dish = ({dish}) => {
  const initialDishCount = 0;

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
        initialValue={0}
      />
    </div>
  );
};
