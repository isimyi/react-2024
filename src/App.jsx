import { Header } from "./components/header/component";
import { Footer } from "./components/footer/component";
import { Restaurant } from "./components/restaurant/component.jsx";
import { restaurants } from "./constants/mock.js";

export const App = () => {
  return (
    <div>
      <Header/>
      <div>
        {restaurants.map((restaurant) => (
          <Restaurant
            restaurant={restaurant}
          />
        ))}
      </div>
      <Footer/>
    </div>
  )
}
