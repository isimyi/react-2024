import { useContext } from "react";
import { ThemeContext } from "../../App.jsx";

export const ButtonComponent = ({ children, onClick, isDisabled }) => {
  const { theme } = useContext(ThemeContext);

  return (
    <button
      disabled={isDisabled}
      onClick={onClick}
      style={theme === "light" ?
        { backgroundColor: "lightskyblue", color: "darkslategrey" } :
        { backgroundColor: "midnightblue", color: "white" }}>
      {children}
    </button>
  )
};
