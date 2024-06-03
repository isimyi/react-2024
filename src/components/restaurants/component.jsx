import { restaurants } from "../../constants/mock.js";
import { Restaurant } from "../restaurant/component.jsx";
import { useState } from "react";

export const Restaurants = () => {
  if (restaurants === null || restaurants.length === 0) {
    return (
      <div>Oops, no restaurants available right now</div>
    )
  }

  const [selectedRestaurant, setSelectedRestaurant] = useState(restaurants[0]);

  const handleRestaurantTabClick = (event) => {
    const restaurantId = event.target?.id;
    const restaurant = restaurants.find((restaurant) => restaurant.id === restaurantId);
    setSelectedRestaurant(restaurant);
  };

  return (
    <div>
      {restaurants.map((restaurant) => (
        <button id={restaurant?.id} onClick={handleRestaurantTabClick}>{restaurant?.name}</button>
      ))}

      {selectedRestaurant && (
        <Restaurant
          restaurant={selectedRestaurant}
        />
      )}
    </div>
  );
};
