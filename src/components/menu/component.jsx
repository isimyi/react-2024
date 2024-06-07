import { Dish } from "../dish/component.jsx";

export const Menu = ({menu}) => {

  return (
    <section>
      <h3>Menu</h3>

      {menu?.length === 0 ? (
        <div>Menu is empty</div>
      ) : (
        <ul>
          {menu.map((dish) => (
            <li>
              <Dish
                dish={dish}
              />
            </li>
          ))}
        </ul>
      )}
    </section>
  );
};
