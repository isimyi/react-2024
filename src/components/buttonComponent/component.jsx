import { useContext } from "react";
import { ThemeContext } from "../../App.jsx";

export const ButtonComponent = ({ children, onClick, isDisabled }) => {
  const theme = useContext(ThemeContext);

  return (
    <ButtonComponent
      disabled={isDisabled}
      onClick={onClick}
      style={theme === 'dark' ?
        { backgroundColor: "midnightblue", color: "white" } :
        { backgroundColor: "lightskyblue", color: "darkslategrey" }}>
      {children}
    </ButtonComponent>
  )
};
