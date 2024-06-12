import { ButtonComponent } from "../buttonComponent/component.jsx";
import { useContext } from "react";
import { CurrentUserContext, ThemeContext } from "../../App.jsx";

export const Header = () => {
  const { currentUser, setCurrentUser } = useContext(CurrentUserContext);
  const { theme, setTheme } = useContext(ThemeContext);

  const logInButtonText = currentUser !== null ? `Log out | ${currentUser}` : "Log in";

  return (
    <header>
      <h1>Order food</h1>

      <ButtonComponent
        onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
        Switch theme
      </ButtonComponent>

      <ButtonComponent
        onClick={setCurrentUser(currentUser !== null ? null : "Hideo Kojima")}>
        {logInButtonText}
      </ButtonComponent>
    </header>
  )
};
