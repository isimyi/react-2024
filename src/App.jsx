import { Header } from "./components/header/component";
import { Footer } from "./components/footer/component";
import { Restaurants } from "./components/restaurants/component.jsx";

export const App = () => {
  return (
    <div>
      <Header/>
      <main>
        <Restaurants/>
      </main>
      <Footer/>
    </div>
  )
}
