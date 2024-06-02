import { restaurants } from "../../constants/mock.js";
import { Restaurant } from "../restaurant/component.jsx";

export const Restaurants = () => {
  if (restaurants.length === 0) {
    return (
      <div>Oops, no restaurants available right now</div>
    )
  }

  return (
    <div>
      {restaurants.map((restaurant) => (
        <Restaurant
          restaurant={restaurant}
        />
      ))}
    </div>
  );
};
