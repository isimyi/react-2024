import { restaurants } from "../../constants/mock.js";
import { Restaurant } from "../restaurant/component.jsx";
import { useState } from "react";

export const Restaurants = () => {
  if (restaurants === null || restaurants.length === 0) {
    return (
      <div>Oops, no restaurants available right now</div>
    )
  }

  const [selectedRestaurantIndex, setSelectedRestaurantIndex] = useState(0);
  const selectedRestaurant = restaurants[selectedRestaurantIndex];

  return (
    <div>
      {restaurants.map((restaurant, index) => (
        <button onClick={() => setSelectedRestaurantIndex(index)}>{restaurant?.name}</button>
      ))}

      {selectedRestaurant && (
        <Restaurant
          restaurant={selectedRestaurant}
        />
      )}
    </div>
  );
};
