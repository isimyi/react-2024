import { Dish } from "../dish/component.jsx";

export const Menu = ({menu}) => {

  return (
    <section>
      <h3>Menu</h3>
      <ul>
        {menu.map((dish) => (
          <li>
            <Dish
              dish={dish}
            />
          </li>
        ))}
      </ul>
    </section>
  );
};
