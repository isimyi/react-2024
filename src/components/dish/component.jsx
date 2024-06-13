import { CounterControl } from "../counterControl/component.jsx";
import { useContext, useState } from "react";
import { CurrentUserContext } from "../../App.jsx";

export const Dish = ({dish}) => {
  const initialDishCount = 0;
  const [dishCount, setDishCount] = useState(initialDishCount);
  const {currentUser} = useContext(CurrentUserContext);

  const handleDishCountChange = () => {
    setDishCount(dishCount);
  };

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

      {currentUser && (
        <CounterControl
          value={dishCount}
          onCountChange={setDishCount}
        />
      )}
    </div>
  );
};
