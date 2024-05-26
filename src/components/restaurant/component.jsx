import { Dish } from '../dish/component.jsx';
import { Review } from "../review/component";

export const Restaurant = ({restaurant}) => {

  return (
    <div>
      <h2>{restaurant.name}</h2>
      <h3>Menu</h3>
      <ul>
        {restaurant.menu.map((dish) => (
          <li>
            <Dish
              dish={dish}
            />
          </li>
        ))}
      </ul>
      <h3>Reviews</h3>
      <ul>
        {restaurant.reviews.map((review) => (
          <li>

            <Review
              review={review}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}
