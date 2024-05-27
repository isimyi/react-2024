import { restaurants } from "../../constants/mock.js";
import { Restaurant } from "../restaurant/component.jsx";

export const Restaurants = () => {

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
