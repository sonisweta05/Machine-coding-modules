import "./App.css";
import Home from "./Home Page/Home";
import FoodHome from "./food-buddy/Pages/Home";
import FoodAbout from "./food-buddy/Pages/About";
import FoodCart from "./food-buddy/Pages/Cart";
import SideBar from "./SideBar";
import MultiSelect from "./multi-select/MultiSelect";
import Notes from "./notes/Notes";
import Error from "./common/ErrorPage/Error";
import { BrowserRouter as Main, Route, Routes } from "react-router-dom";
import FoodBuddy from "./food-buddy/componentsFood/FoodBuddy";
import FoodSearch from "./food-buddy/Pages/Search";
import RestaurantMenuHeader from "./food-buddy/componentsFood/RestaurantMenuHeader";
import RestaurantMenu from "./food-buddy/componentsFood/RestaurantMenu";

function App() {
  return (
    <>
      <div className="min-h-screen bg-gray-200">
        <Main>
          {/* <SideBar /> */}
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/multi-select" element={<MultiSelect />}></Route>
            <Route path="/notes" element={<Notes />}></Route>
            <Route path="/food" element={<FoodBuddy />}>
              <Route path="home" element={<FoodHome />}></Route>
              <Route path="search" element={<FoodSearch />}></Route>
              <Route path="about" element={<FoodAbout />}></Route>
              <Route path="cart" element={<FoodCart />}></Route>
              <Route path="restaurant-menu/:resId" element={<RestaurantMenu />}></Route>
            </Route>
            <Route path="countryGame">{}</Route>
            <Route path="*" element={<Error />}></Route>
          </Routes>
        </Main>
      </div>
    </>
  );
}

export default App;
