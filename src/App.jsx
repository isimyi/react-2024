import { Header } from "./components/header/component";
import { Footer } from "./components/footer/component";
import { Restaurants } from "./components/restaurants/component.jsx";
import { createContext, useState } from "react";

export const CurrentUserContext = createContext(null);
export const ThemeContext = createContext(null);

export const App = () => {
  const [theme, setTheme] = useState('light');
  const [currentUser, setCurrentUser] = useState(null);

  return (
    <CurrentUserContext.Provider value={{ currentUser, setCurrentUser }}>
      <ThemeContext.Provider value={{ theme, setTheme }}>
        <div>
          <Header/>

          <main>
            <Restaurants/>
          </main>

          <Footer/>
        </div>
      </ThemeContext.Provider>
    </CurrentUserContext.Provider>
  )
}
