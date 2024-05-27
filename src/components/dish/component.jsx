export const Dish = ({dish}) => {
  return (
    <div>
      <h4>{dish.name}</h4>
      <div>{dish.price}</div>
      <ul>
        {dish.ingredients.map((ingredient) => (
          <li>{ingredient}</li>
        ))}
      </ul>
    </div>
  );
};
